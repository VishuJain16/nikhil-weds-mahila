import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { wedding } from '@/content/wedding';
import { assets } from '@/content/assets';
import { Reveal, ease } from './Reveal';
import { LanternField } from './LanternField';

export function FamilyFooter() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const progress = useSpring(scrollYProgress, { stiffness: 95, damping: 28, restDelta: .001 });
  const skyY = useTransform(progress, [0, 1], [-65, 0]);
  const textY = useTransform(progress, [0, .4, 1], [-40, 0, 120]);
  const fortY = useTransform(progress, [0, 1], [80, -45]);
  return <footer ref={ref} className="family-footer layered-scene">
    <motion.img src={assets.footerSky} alt="Star-filled night sky" className="footer-sky" style={{ y: reduced ? 0 : skyY }} />
    <LanternField progress={progress} enterOnView />
    <motion.div className="footer-copy" style={{ y: reduced ? 0 : textY }}>
      <Reveal><p className="eyebrow">BEST COMPLIMENTS FROM</p><h2 className="section-heading">All Jain Family<br/>&amp; Friends</h2><p className="closing-note">{wedding.closingNote}</p><p lang="hi" className="closing-invocation">🙏 {wedding.closingInvocation} 🙏</p></Reveal>
    </motion.div>
    <motion.div className="footer-fort-layer" style={{ y: reduced ? 0 : fortY }}>
      <motion.img src={assets.footerFort} alt="Palace courtyard and sandstone fort" className="footer-art"
        initial={{ y: reduced ? 0 : '25%' }} whileInView={{ y: 0 }} viewport={{ once: true, amount: .1 }} transition={{ duration: reduced ? 0 : 2.3, ease }} />
    </motion.div>
    <LanternField progress={progress} foreground enterOnView />
  </footer>;
}
