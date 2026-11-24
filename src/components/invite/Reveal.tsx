import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
export const ease = [0.22, 1, 0.36, 1] as const;
export function Reveal({ delay=0,y=30,...p }:HTMLMotionProps<'div'>&{delay?:number;y?:number}){const reduced=useReducedMotion();return <motion.div initial={{opacity:reduced?1:0,y:reduced?0:y}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:1,ease,delay:reduced?0:delay}} {...p}/>;}
