import { useEffect, useState } from "react";
import { wedding } from "@/content/wedding";
import { assets } from "@/content/assets";
import { AssetImage } from "./AssetImage";
import { Reveal } from "./Reveal";
import { timeLeft } from "@/lib/countdown";

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => { setNow(Date.now()); const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  const t = now === null ? null : timeLeft(wedding.weddingDate, now);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <section className="relative overflow-hidden bg-night px-8 py-28 text-center text-cream">
      <AssetImage src={assets.countdownBg} alt="" label="" className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="relative">
        <Reveal><h2 className="font-cormorant-upright text-4xl italic">The countdown begins</h2></Reveal>
        <Reveal delay={0.15}>
          <div className="mt-8 flex justify-center gap-4 font-aboreto">
            {(["days", "hours", "minutes", "seconds"] as const).map((k, i) => (
              <div key={k} className="flex items-start gap-4">
                <div><div className="text-4xl tabular-nums">{t ? pad(t[k]) : "00"}</div><div className="mt-1 text-[10px] tracking-[0.2em]">{k.toUpperCase()}</div></div>
                {i < 3 && <span className="text-3xl">:</span>}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.3}><p className="mx-auto mt-10 max-w-sm font-cormorant text-lg">{wedding.closingNote}</p></Reveal>
      </div>
    </section>
  );
}
