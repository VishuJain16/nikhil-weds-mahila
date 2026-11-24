import { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Navigation, MapPin } from 'lucide-react';
import { wedding } from '@/content/wedding';
import { assets } from '@/content/assets';
import { Button } from '@/components/ui/button';
import { Reveal } from './Reveal';
export function Venue(){
 const [embed,setEmbed]=useState('');
 useEffect(()=>{
  const key=import.meta.env['VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY'];
  // Avoid Maps-dependent requests inside the agent sandbox.
  if(key && window.location.hostname!=='localhost') setEmbed(`https://www.google.com/maps/embed/v1/place?key=${key}&q=${encodeURIComponent(wedding.venue.query)}`);
 },[]);
 return <section className="venue-section textured-section" id="venue"><img src={assets.gold} alt="" className="section-texture"/><Reveal><p className="eyebrow">THE WEDDING VENUE</p><h2 className="section-heading">Celebrate<br/>with us</h2><h3 className="venue-name">{wedding.venue.name}</h3><p className="venue-address">{wedding.venue.address}<br/>{wedding.venue.locality}</p></Reveal><Reveal><div className="venue-map">{embed?<iframe src={embed} title="Google Maps — Greenland 24 Kanak Hall" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"/>:<a href={wedding.venue.mapUrl} target="_blank" rel="noreferrer" className="map-fallback"><MapPin/><span>{wedding.venue.name}</span><span>{wedding.venue.locality}</span></a>}</div></Reveal><Reveal><div className="venue-actions"><div className="venue-qr"><QRCodeSVG value={wedding.venue.mapUrl} size={92} marginSize={2}/><p className="eyebrow">SCAN FOR LOCATION</p></div><Button asChild variant="outline" className="wedding-button"><a href={wedding.venue.mapUrl} target="_blank" rel="noreferrer"><Navigation/>GET DIRECTIONS</a></Button></div></Reveal></section>;
}
