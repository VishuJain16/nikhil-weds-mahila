import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { assets } from "@/content/assets";
import { AssetImage } from "./AssetImage";

export function Gallery() {
  const imgs = assets.gallery;
  const [open, setOpen] = useState<number | null>(null);
  const loop = [...imgs, ...imgs];
  if (imgs.length === 0) return null;
  return (
    <section className="relative overflow-hidden bg-lavender pb-20">
      <motion.ul className="flex w-max gap-4" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
        {loop.map((src, i) => (
          <li key={i} className="w-48 shrink-0">
            <button onClick={() => setOpen(i % imgs.length)} className="block w-full" aria-label={`Open photo ${(i % imgs.length) + 1}`}>
              <AssetImage src={src} alt={`Gallery photo ${(i % imgs.length) + 1}`} label={`Photo ${(i % imgs.length) + 1}`} className="aspect-[4/5] w-full rounded-t-full object-cover" />
            </button>
          </li>
        ))}
      </motion.ul>
      <AnimatePresence>
        {open !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-center bg-night/90 p-6" onClick={() => setOpen(null)}>
            <motion.div key={open} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-md" onClick={(e) => e.stopPropagation()}>
              <AssetImage src={imgs[open] ?? ""} alt={`Gallery photo ${open + 1}`} className="max-h-[75svh] w-full object-contain" />
              <div className="mt-4 flex justify-between font-aboreto text-cream">
                <button onClick={() => setOpen((open - 1 + imgs.length) % imgs.length)}>‹ PREV</button>
                <button onClick={() => setOpen(null)}>CLOSE</button>
                <button onClick={() => setOpen((open + 1) % imgs.length)}>NEXT ›</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
