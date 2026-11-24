import sky from '@/assets/wedding/hero_bg.jpg.asset.json';
import palace from '@/assets/wedding/royal_palace_fort_illustration_transparent.png.asset.json';
import lantern from '@/assets/wedding/lantern-transparent.png.asset.json';
import mahavir from '@/assets/wedding/30128-9-mahavir-transparent.png.asset.json';
import ivory from '@/assets/wedding/carpet_1.jpg.asset.json';
import rose from '@/assets/wedding/carpet_2.jpg.asset.json';
import gold from '@/assets/wedding/carpet_3.jpg.asset.json';
import eventFrame from '@/assets/wedding/event_frame.jpg.asset.json';
import jharoka from '@/assets/wedding/jharoka.png.asset.json';
import fort from '@/assets/wedding/footer_fort.jpg.asset.json';
import footerFort from '@/assets/wedding/footer_fort.png.asset.json';
import card1 from '@/assets/wedding/event_card_1.jpg.asset.json';
import card2 from '@/assets/wedding/event_card_2.jpg.asset.json';
import music from '@/assets/wedding/aaj_sajeya.mp3.asset.json';
import carpet4 from '@/assets/wedding/carpet_4.jpg.asset.json';
import carpet5 from '@/assets/wedding/carpet_5.jpg.asset.json';
import footerSky from '@/assets/wedding/footer_sky.jpg.asset.json';

// Only original supplied artwork. Add missing photograph, medallion and music URLs here.
export const assets = {
  heroSky: sky.url, heroPalace: palace.url, lantern: lantern.url,
  mahavir: mahavir.url, ganesha: mahavir.url, blessingsBg: ivory.url,
  ivory: ivory.url, carpet4: carpet4.url, carpet5: carpet5.url, rose: rose.url, gold: gold.url,
  eventsTexture: gold.url, eventFrame: eventFrame.url, eventCardDay1: card1.url, eventCardDay2: card2.url, jharoka: jharoka.url,
  coupleTexture: rose.url, coupleFrame: '', couplePhoto: '',
  footerFort: footerFort.url, footerSky: footerSky.url, countdownBg: fort.url,
  medallion: '', music: music.url, gallery: [] as string[],
  flowerCluster: '', mapRing: '', thingsIcons: {} as Record<string,string>,
  events: {} as Record<string,string>,
};
