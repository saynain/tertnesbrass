export interface ConcertProgram {
  type: 'band' | 'piece';
  title: string;
  composer?: string;
  arranger?: string;
}

export interface Concert {
  id: string;
  emoji: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  image?: {
    src: string;
    srcSet: string;
    alt: string;
  };
  description?: string;
  program?: ConcertProgram[];
  ticketPrice?: string;
  childrenFree?: boolean;
  facebookEventUrl?: string;
  status: 'confirmed' | 'tba';
}

export const concerts: Concert[] = [
  {
    id: 'for-nm-2026',
    emoji: '🎵',
    title: 'Før-NM Konsert',
    date: '1. februar 2026',
    time: '18:00',
    venue: 'Åsatun Lagshuset',
    address: 'Forvasshaugen 6, 5132 Nyborg',
    image: {
      src: '/images/program/for-nm-380.jpg',
      srcSet: '/images/program/for-nm-760.jpg 2x',
      alt: 'Før-NM konsert på Åsatun Lagshuset - Tertnes Brass',
    },
    description: 'Tertnes Brass inviterer til før-NM konsert sammen med Fjell Brass og Rong Brass. Vi fremfører vårt konkurranseprogram før den nasjonale konkurransen.',
    program: [
      { type: 'band', title: 'Fjell Brass', composer: 'dirigent Ben Hirons' },
      { type: 'piece', title: 'The Mermaid of Zennor', composer: 'Philip Harper' },
      { type: 'band', title: 'Tertnes Brass', composer: 'dirigent Paul Holland' },
      { type: 'piece', title: 'Concerto No. 1 (Pliktnummer)', composer: 'Derek Bourgeois' },
      { type: 'band', title: 'Rong Brass', composer: 'dirigent Ian Porthouse' },
      { type: 'piece', title: 'Afterlife', composer: 'Stijn Aertgeerts' },
      { type: 'band', title: 'Tertnes Brass', composer: 'dirigent Paul Holland' },
      { type: 'piece', title: "Harrison's Dream (Selvvalgt)", composer: 'Peter Graham' },
    ],
    ticketPrice: '150 kr',
    childrenFree: true,
    facebookEventUrl: 'https://www.facebook.com/events/4648029842094202/',
    status: 'confirmed',
  },
  {
    id: 'tba-spring',
    emoji: '❓',
    title: 'Annonseres senere',
    date: 'Vår 2026',
    time: 'TBA',
    venue: 'Sted kommer snart',
    address: 'Bergen',
    status: 'tba',
  },
  {
    id: 'tba-summer',
    emoji: '❓',
    title: 'Annonseres senere',
    date: 'Sommer 2026',
    time: 'TBA',
    venue: 'Sted kommer snart',
    address: 'Bergen',
    status: 'tba',
  },
];
