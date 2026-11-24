import { describe, expect, it } from 'vitest';
import { wedding } from './wedding';
import { assets } from './assets';
describe('Wedding programme',()=>{
 it('uses the requested December celebration dates',()=>{expect(wedding.events.map(e=>e.date)).toEqual(['Thursday, 10 December 2026','Thursday, 10 December 2026','Friday, 11 December 2026','Friday, 11 December 2026','Friday, 11 December 2026']);});
 it('preserves all five event times',()=>{expect(wedding.events.map(e=>[e.name,e.time])).toEqual([['Chak & Ladies Sangeet','3:00 PM'],['Dinner','5:00 PM'],['Bhat','9:00 AM'],['Ghurchari','3:00 PM'],['Departure of Barat','5:00 PM']]);});
 it('has no Mehndi occasion',()=>{expect(wedding.events.some(e=>/mehndi|mehendi/i.test(e.name))).toBe(false);});
 it('keeps first-day events at Jain Dharamshala',()=>{expect(wedding.events.filter(e=>e.day==='10').map(e=>e.venue)).toEqual(['Jain Dharamshala, Farrukhnagar','Jain Dharamshala, Farrukhnagar']);});
 it('lists the two new RSVP contacts first',()=>{expect(wedding.contacts.slice(0,2).map(c=>[c.name,c.phone])).toEqual([['Mr. Manoj Jain','9812511012'],['Mr. Manish Jain','9811562270']]);expect(wedding.contacts).toHaveLength(8);});
 it('directions target the provided wedding venue',()=>{expect(new URL(wedding.venue.mapUrl).searchParams.get('query')).toBe('Greenland 24 Kanak Hall Mathura Road Softa Faridabad Haryana 121004');});
 it('uses the supplied Aaj Sajeya track',()=>{expect(assets.music).toContain('aaj_sajeya.mp3');});
});
