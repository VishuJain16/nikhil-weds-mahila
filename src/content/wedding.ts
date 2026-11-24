const firstVenue = 'Jain Dharamshala, Farrukhnagar';
const firstMap = 'https://www.google.com/maps/search/?api=1&query=Jain+Dharamshala+Farrukhnagar';
export const wedding = {
  groom: 'Nikhil', bride: 'Mahima',
  invocation: '॥ श्री महावीराय जिनेन्द्राय नमः ॥',
  sacredLines: ['।।मंगलं भगवान वीरो, मंगलं गौतमो गणि।।', '।।मंगलं कुन्दकुन्दाद्यो, जैन धर्मोऽस्तु मंगलम्॥'],
  blessingsIntro: 'With the blessings of our families',
  grandparents: 'Late Smt. Shakuntala Devi & Late Shri Paras Dass Jain',
  hosts: 'Smt. Kavita Jain', hostSpouse: '(W/o Late Sh. Naveen Jain)',
  invitationLine: 'cordially requests the pleasure of your gracious presence and blessings on the auspicious occasion of the wedding celebrations of her beloved son',
  brideParentsLabel: 'Daughter of', brideParents: 'Smt. Mamta Devi & Shri Nand Kishor Ji',
  residence: 'Resident of Bhogal, Delhi.',
  weddingDate: '2026-12-11T17:00:00+05:30',
  events: [
    { id: 'sangeet', name: 'Chak & Ladies Sangeet', hindi: 'चाक एवं महिला संगीत', day: '10', month: 'दिसंबर', date: 'Thursday, 10 December 2026', venue: firstVenue, time: '3:00 PM', mapUrl: firstMap },
    { id: 'dinner', name: 'Dinner', hindi: 'प्रीतिभोज', day: '10', month: 'दिसंबर', date: 'Thursday, 10 December 2026', venue: firstVenue, time: '5:00 PM', mapUrl: firstMap },
    { id: 'bhat', name: 'Bhat', hindi: 'भात', day: '11', month: 'दिसंबर', date: 'Friday, 11 December 2026', venue: 'Greenland 24 – Kanak Hall\nMathura Road, Softa,\nFaridabad (Hr.) – 121004', time: '9:00 AM', mapUrl: '' },
    { id: 'ghurchari', name: 'Ghurchari', hindi: 'घुड़चढ़ी', day: '11', month: 'दिसंबर', date: 'Friday, 11 December 2026', venue: 'Greenland 24 – Kanak Hall\nMathura Road, Softa,\nFaridabad (Hr.) – 121004', time: '3:00 PM', mapUrl: '' },
    { id: 'barat', name: 'Departure of Barat', displayName: 'Departure\nof Barat', hindi: 'बारात प्रस्थान', day: '11', month: 'दिसंबर', date: 'Friday, 11 December 2026', venue: 'Greenland 24 – Kanak Hall\nMathura Road, Softa,\nFaridabad (Hr.) – 121004', time: '5:00 PM', mapUrl: '' },
  ],
  venue: { name: 'Greenland 24 – Kanak Hall', address: 'Mathura Road, Softa, Faridabad,', locality: 'Haryana – 121004', query: 'Greenland 24 Kanak Hall Mathura Road Softa Faridabad Haryana 121004', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Greenland+24+Kanak+Hall+Mathura+Road+Softa+Faridabad+Haryana+121004' },
  coupleMessage: 'A beautiful new beginning, surrounded by the love and blessings of our families.',
  contacts: [
    { name: 'Mr. Manoj Jain', phone: '9812511012' },
    { name: 'Mr. Manish Jain', phone: '9811562270' },
    { name: 'Chirag Jain', phone: '9416040621' },
    { name: 'Akash Jain', phone: '7082513948' },
    { name: 'Piyush Jain', phone: '8398083343' },
    { name: 'Mukul Jain', phone: '9991913266' },
    { name: 'Abhishek Jain', phone: '8287504642' },
    { name: 'Advik Jain', phone: '' },
  ],
  specialInvitations: ['Mrs. Saroj Bala & Mr. Rakesh Jain', 'Mrs. Babita & Mr. Vijay Jain', 'Mrs. Shikha & Mr. Sanjay Garg', 'Mrs. Jyoti & Mr. Kapil Jain', 'Aayushi, Mehak & Akshita'],
  rsvp: { whatsappNumber: '919812511012', message: 'Namaste! I would like to RSVP for Nikhil & Mahima’s wedding ceremony on 11 December 2026.' },
  closingNote: 'We look forward to celebrating these special moments with you!',
  closingInvocation: 'श्री शीतलनाथाय जिनेंद्राय नमः',
  thingsToKnowIntro: '', thingsToKnow: [] as {id:string;title:string;text:string}[], instagramUrl: '',
};
export type WeddingEvent = (typeof wedding.events)[number];
