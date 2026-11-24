import { assets } from '@/content/assets';
import { wedding } from '@/content/wedding';
import { Reveal } from './Reveal';
export function Blessings(){return <section className="sacred-section textured-section">
 <img src={assets.ivory} alt="" className="section-texture" />
 <Reveal><img src={assets.mahavir} alt="Lord Mahavir" className="mahavir-art" /></Reveal>
 <Reveal><div lang="hi" className="sacred-verse">{wedding.sacredLines.map(l=><p key={l}>{l}</p>)}</div></Reveal>
 </section>;}
