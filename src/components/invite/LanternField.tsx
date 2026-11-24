import { motion, useReducedMotion, useTransform, type MotionValue } from 'framer-motion';
import { assets } from '@/content/assets';
import { ease } from './Reveal';

const lanterns = [
  { left: 5, top: 11, size: 72, depth: 'far' },
  { left: 42, top: 3, size: 42, depth: 'far' },
  { left: 77, top: 6, size: 96, depth: 'mid' },
  { left: 23, top: 23, size: 44, depth: 'far' },
  { left: 86, top: 31, size: 62, depth: 'far' },
  { left: 3, top: 42, size: 102, depth: 'mid' },
  { left: 70, top: 51, size: 54, depth: 'far' },
  { left: 29, top: 62, size: 75, depth: 'mid' },
  { left: 81, top: 70, size: 84, depth: 'mid' },
  { left: 12, top: 77, size: 66, depth: 'far' },
  { left: 51, top: 84, size: 48, depth: 'far' },
  { left: 59, top: 15, size: 33, depth: 'far' },
  { left: -7, top: 17, size: 132, depth: 'near' },
  { left: 86, top: 45, size: 128, depth: 'near' },
  { left: -5, top: 71, size: 116, depth: 'near' },
  { left: 68, top: 87, size: 104, depth: 'near' },
] as const;

function Lantern({ item, index, progress, enterOnView }: {
  item: (typeof lanterns)[number]; index: number; progress: MotionValue<number>; enterOnView: boolean;
}) {
  const reduced = useReducedMotion();
  const distance = item.depth === 'near' ? -510 : item.depth === 'mid' ? -340 : -200;
  const y = useTransform(progress, [0, 1], [0, distance]);
  const entrance = { y: 0, opacity: 1 };
  return <motion.div className={`scene-lantern lantern-${item.depth}`} style={{ left: `${item.left}%`, top: `${item.top}%`, width: item.size, y: reduced ? 0 : y }}>
    <motion.div initial={{ y: reduced ? 0 : 150 + index * 10, opacity: reduced ? 1 : 0 }}
      {...(enterOnView ? { whileInView: entrance, viewport: { once: true, amount: 0 } } : { animate: entrance })}
      transition={{ duration: reduced ? 0 : 2.4, delay: reduced ? 0 : index * .055, ease }}>
      <motion.img src={assets.lantern} alt="" draggable={false} className="lantern-art"
        animate={reduced ? {} : { y: [0, -14, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 7 + index % 5, repeat: Infinity, ease: 'easeInOut', delay: 2.8 }} />
    </motion.div>
  </motion.div>;
}

export function LanternField({ progress, foreground = false, enterOnView = false }: {
  progress: MotionValue<number>; foreground?: boolean; enterOnView?: boolean;
}) {
  return <div className={`lantern-field ${foreground ? 'lantern-foreground' : 'lantern-background'}`} aria-hidden="true">
    {lanterns.map((item, index) => (item.depth === 'near') === foreground
      ? <Lantern key={index} item={item} index={index} progress={progress} enterOnView={enterOnView} /> : null)}
  </div>;
}