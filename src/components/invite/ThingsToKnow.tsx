import { motion } from "framer-motion";
import { wedding } from "@/content/wedding";
import { assets } from "@/content/assets";
import { AssetImage } from "./AssetImage";
import { Reveal, ease } from "./Reveal";

export function ThingsToKnow() {
  return (
    <section className="bg-olive-cream px-6 py-24 text-center text-olive-ink">
      <Reveal><h2 className="font-aboreto text-4xl tracking-[0.08em]">THINGS TO KNOW</h2></Reveal>
      <Reveal delay={0.1}><p className="mx-auto mt-5 max-w-md font-yaldevi text-[15px] leading-relaxed">{wedding.thingsToKnowIntro}</p></Reveal>
      <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
        {wedding.thingsToKnow.map((t, i) => (
          <motion.div key={t.id} initial={{ opacity: 0, y: 50, rotateX: 25 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ amount: 0.4 }} transition={{ duration: 1, ease, delay: (i % 2) * 0.12 }}
            className="rounded-t-[140px] rounded-b-2xl border border-olive-ink/30 bg-olive-card px-6 pt-8 pb-8">
            <AssetImage src={assets.thingsIcons[t.id] ?? ""} alt={`${t.title} illustration`} label={`${t.title} icon`} className="mx-auto h-24 w-24 object-contain" />
            <h3 className="mt-4 font-aboreto text-2xl tracking-[0.1em]">{t.title.toUpperCase()}</h3>
            <p className="mt-2 font-yaldevi text-sm leading-relaxed">{t.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
