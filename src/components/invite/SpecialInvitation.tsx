import { wedding } from '@/content/wedding';
import { assets } from '@/content/assets';
import { Reveal } from './Reveal';
export function SpecialInvitation(){return <section className="special-section textured-section"><img src={assets.gold} alt="" className="section-texture"/><Reveal><p className="eyebrow">WITH HEARTFELT LOVE</p><h2 className="section-heading">Special<br/>invitation from</h2></Reveal>{wedding.specialInvitations.map((name,i)=><Reveal key={name} delay={i*.04}><p className="special-name">{name}</p></Reveal>)}</section>;}
