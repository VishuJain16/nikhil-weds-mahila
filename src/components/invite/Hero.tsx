import { motion, useScroll, useTransform, useReducedMotion, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { wedding } from '@/content/wedding';
import { assets } from '@/content/assets';
import { ease } from './Reveal';
import { LanternField } from './LanternField';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const progress = useSpring(scrollYProgress, { stiffness: 95, damping: 28, restDelta: .001 });
  const skyY = useTransform(progress, [0, 1], ['0%', '15%']);
  const palaceY = useTransform(progress, [0, 1], [0, -85]);
  const textY = useTransform(progress, [0, 1], [0, 200]);
  const palaceScale = useTransform(progress, [0, 1], [1, 1.1]);
  return <section ref={ref} className="wedding-hero layered-scene">
    <motion.img src={assets.heroSky} alt="Painted sunset sky" className="hero-sky" style={{ y: reduced ? 0 : skyY }} />
    <LanternField progress={progress} />
    <motion.div className="hero-copy" style={{ y: reduced ? 0 : textY }}>
      <motion.div initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, ease, delay: .25 }}>
        <p className="hero-invocation" lang="hi">{wedding.invocation}</p>
        <p className="eyebrow">SAVE THE DATE</p>
        <h1><span>{wedding.groom.toUpperCase()}</span><span className="hero-amp">&amp;</span><span>{wedding.bride.toUpperCase()}</span></h1>
        <p className="hero-date">11 DECEMBER 2026</p><p className="hero-caption">Wedding Ceremony</p>
      </motion.div>
    </motion.div>
    <motion.div className="hero-palace-layer" style={{ y: reduced ? 0 : palaceY, scale: reduced ? 1 : palaceScale }}>
      <motion.img src={assets.heroPalace} alt="Ornate golden royal palace" className="hero-palace"
        initial={{ y: reduced ? 0 : '85%' }} animate={{ y: 0 }} transition={{ duration: reduced ? 0 : 2.6, ease, delay: .1 }} />
    </motion.div>
    <LanternField progress={progress} foreground />
  </section>;
}
