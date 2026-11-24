import { assets } from '@/content/assets';
import { wedding } from '@/content/wedding';
import { Reveal } from './Reveal';
export function Couple(){return <section className="couple-section textured-section"><img src={assets.rose} alt="" className="section-texture"/><Reveal><p className="eyebrow">MEET THE COUPLE</p><h2 className="section-heading">Nikhil <i>&amp;</i> Mahima</h2></Reveal>{assets.couplePhoto&&<Reveal><img src={assets.couplePhoto} alt="Nikhil and Mahima" className="couple-photo"/></Reveal>}<Reveal><p className="couple-message">{wedding.coupleMessage}</p></Reveal><Reveal><img src={assets.jharoka} alt="Traditional red sandstone jharoka" className="jharoka-art"/></Reveal></section>;}
