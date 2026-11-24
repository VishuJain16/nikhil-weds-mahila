import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { assets } from "@/content/assets";
import { AssetImage } from "./AssetImage";

/** Signature transition (replaces the City car): the Mountain medallion glides across as you scroll,
 *  turning slowly with the scroll. */
export function MedallionTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.4 });
  const x = useTransform(p, [0, 1], ["-75vw", "75vw"]);
  const rotate = useTransform(p, [0, 1], [-120, 120]);
  const scale = useTransform(p, [0, 0.5, 1], [0.85, 1, 0.85]);
  return (
    <div ref={ref} className="relative h-[70svh] overflow-hidden bg-gradient-to-b from-teal to-lavender" aria-hidden>
      <motion.div style={{ x, scale }} className="absolute left-1/2 top-1/2 -ml-[130px] -mt-[130px] h-[260px] w-[260px]">
        <motion.div style={{ rotate }} className="absolute inset-0">
          <AssetImage src={assets.medallion} alt="Ornamental medallion" label="Mountain medallion" className="h-full w-full rounded-full object-contain" />
        </motion.div>
      </motion.div>
    </div>
  );
}
