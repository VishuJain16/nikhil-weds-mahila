import { motion, useReducedMotion } from 'framer-motion';
import { wedding, type WeddingEvent } from '@/content/wedding';
import { assets } from '@/content/assets';
import { Reveal, ease } from './Reveal';
function EventCard({e}:{e:WeddingEvent}){
 const reduced=useReducedMotion();
 const weekday=e.date.split(',')[0]!.toUpperCase();
 return <motion.article className="event-panel" initial={{opacity:0,y:reduced?0:45}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{duration:1,ease}} aria-label={e.name}>
  <img src={e.day==='10'?assets.eventCardDay1:assets.eventCardDay2} alt="" className="event-panel-bg" />
  <div className="event-panel-copy">
   <h3 className="event-name" style={{whiteSpace:'pre-line'}}>{('displayName' in e&&e.displayName)||e.name}</h3>
   <div className="event-dateline"><span className="dm">DECEMBER</span><span className="em" style={{gridColumn:1}}>{weekday}</span><span className="dd">{e.day}</span><span className="em" style={{gridColumn:3}}>2026</span></div>
   <p className="event-time">{e.time}</p>
   {e.venue&&<><p className="event-at">at</p><p className="event-venue" style={{whiteSpace:'pre-line'}}>{e.venue}</p></>}
  </div>
 </motion.article>;
}
function DaySection({day,heading,bg}:{day:string;heading:string;bg:string}){return <section className="events-section textured-section" style={{backgroundImage:`url("${bg}")`}} id={`celebrations-${day}`}><Reveal><p className="eyebrow">WEDDING CELEBRATIONS</p><h2 className="section-heading">{heading}</h2></Reveal><div className="event-list">{wedding.events.filter(e=>e.day===day).map(e=><EventCard key={e.id} e={e}/>)}</div></section>;}
export function Events(){return <><DaySection day="10" heading="Thursday, 10 December" bg={assets.carpet5}/><DaySection day="11" heading="Friday, 11 December" bg={assets.carpet4}/></>;}
