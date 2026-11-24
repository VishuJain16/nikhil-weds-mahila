import { wedding } from '@/content/wedding';
import { assets } from '@/content/assets';
import { Reveal } from './Reveal';
export function Invitation(){return <section className="formal-invitation textured-section">
 <img src={assets.ivory} alt="" className="section-texture" />
 <Reveal><p className="eyebrow">WITH LOVE & BLESSINGS</p><h2 className="section-heading">Wedding<br/>Invitation</h2></Reveal>
 <Reveal><p className="host-name">{wedding.hosts}</p><p className="small-copy">{wedding.hostSpouse}</p><p className="invitation-copy">{wedding.invitationLine}</p></Reveal>
 <Reveal><p className="invited-name">{wedding.groom.toUpperCase()}</p><p className="parent-copy">(Grandson of {wedding.grandparents})</p><p className="with-label">WITH</p><p className="invited-name">{wedding.bride.toUpperCase()}</p><p className="parent-copy">(Daughter of {wedding.brideParents})</p><p className="small-copy residence">{wedding.residence}</p></Reveal>
 <Reveal><p className="programme-note">As per the enclosed programme.</p></Reveal>
 </section>;}
