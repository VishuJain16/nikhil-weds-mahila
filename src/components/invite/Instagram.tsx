import { wedding } from "@/content/wedding";
import { Reveal } from "./Reveal";

export function Instagram() {
  return (
    <section className="bg-olive-cream px-8 pb-24 text-center text-olive-ink">
      <a href={wedding.instagramUrl} target="_blank" rel="noreferrer" className="inline-block">
        <Reveal><p className="font-cormorant-upright text-3xl italic">Follow</p></Reveal>
        <Reveal delay={0.1}><h2 className="font-aboreto text-5xl tracking-[0.1em]">THE ACTION</h2></Reveal>
        <Reveal delay={0.2}><p className="mt-2 font-cormorant italic underline underline-offset-4">Click to open our Instagram page</p></Reveal>
      </a>
    </section>
  );
}
