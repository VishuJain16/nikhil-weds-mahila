import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { assets } from '@/content/assets';
import { Button } from '@/components/ui/button';
// Tries to autoplay on load; browsers that block sound start it on the guest's first scroll/tap.
export function MusicToggle(){
 const ref=useRef<HTMLAudioElement>(null);const [playing,setPlaying]=useState(false);const userPaused=useRef(false);
 useEffect(()=>{
  const audio=ref.current;if(!audio)return;
  const events=['pointerdown','touchstart','keydown','scroll','wheel'] as const;
  const cleanup=()=>events.forEach(e=>window.removeEventListener(e,start));
  const start=()=>{if(userPaused.current)return cleanup();audio.play().then(()=>{setPlaying(true);cleanup();}).catch(()=>{});};
  events.forEach(e=>window.addEventListener(e,start,{passive:true}));
  start();
  return cleanup;
 },[]);
 const toggle=async()=>{const audio=ref.current;if(!audio)return;if(playing){userPaused.current=true;audio.pause();setPlaying(false);}else{userPaused.current=false;try{await audio.play();setPlaying(true);}catch{setPlaying(false);}}};
 if(!assets.music)return null;
 return <><audio src={assets.music} ref={ref} loop autoPlay preload="auto"/><Button onClick={toggle} size="icon" className="music-control" aria-label={playing?'Pause music':'Play music'} title={playing?'Pause music':'Play music'}>{playing?<Volume2/>:<VolumeX/>}</Button></>;
}
