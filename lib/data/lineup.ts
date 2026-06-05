export interface LineupMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bgText: string;
  link: string;
  imageTransform?: {
    x: number;
    y: number;
    scale: number;
  };
}

export const LINEUP_MEMBERS: LineupMember[] = [
  {
    id: 1,
    name: 'Anurag Sharma',
    role: 'President',
    image: 'https://res.cloudinary.com/dq1fhihvx/image/upload/v1780598014/Remove_background_project_-_June_05_2026_at_00.02.11_bkobue.png',
    bgText: 'LEAD',
    link: '#',
    imageTransform: { x: 0, y: 35, scale: 4 },
  },
  {
    id: 2,
    name: 'Aditya Raj',
    role: 'Web Lead',
    image: 'https://res.cloudinary.com/dq1fhihvx/image/upload/v1773333555/aaaaaaaaaaaameeeeeeeee_kpxcew.png',
    bgText: 'BUILD',
    link: '#',
    imageTransform: { x: 0, y: 35, scale: 2.0 },
  },
  {
    id: 3,
    name: 'Nikhil Kumar',
    role: 'CP Lead',
    image: 'https://res.cloudinary.com/dq1fhihvx/image/upload/v1780598014/Remove_background_project_-_June_05_2026_at_00.02.11_bkobue.png',
    bgText: 'CODE',
    link: '#',
    imageTransform: { x: 0, y: 0, scale: 1.0 },
  },
  {
    id: 4,
    name: 'Sneha Kumari',
    role: 'Dev Lead',
    image: 'https://res.cloudinary.com/dq1fhihvx/image/upload/v1780598014/Remove_background_project_-_June_05_2026_at_00.02.11_bkobue.png',
    bgText: 'HACK',
    link: '#',
    imageTransform: { x: 0, y: 0, scale: 1.0 },
  },
  {
    id: 5,
    name: 'Rohan Verma',
    role: 'Design Lead',
    image: 'https://res.cloudinary.com/dq1fhihvx/image/upload/v1780598014/Remove_background_project_-_June_05_2026_at_00.02.11_bkobue.png',
    bgText: 'SHIP',
    link: '#',
    imageTransform: { x: 0, y: 0, scale: 1.0 },
  },
  {
    id: 6,
    name: 'Devansh Singh',
    role: 'AI/ML Lead',
    image: 'https://res.cloudinary.com/dq1fhihvx/image/upload/v1780598014/Remove_background_project_-_June_05_2026_at_00.02.11_bkobue.png',
    bgText: 'ZONE',
    link: '#',
    imageTransform: { x: 5, y: 0, scale: 1.0 },
  },
  {
    id: 7,
    name: 'Kritika Sharma',
    role: 'App Lead',
    image: 'https://res.cloudinary.com/dq1fhihvx/image/upload/v1780598014/Remove_background_project_-_June_05_2026_at_00.02.11_bkobue.png',
    bgText: 'CORE',
    link: '#',
    imageTransform: { x: 0, y: 0, scale: 1.0 },
  },
  {
    id: 8,
    name: 'Aarav Mehta',
    role: 'PR Lead',
    image: 'https://res.cloudinary.com/dq1fhihvx/image/upload/v1780598014/Remove_background_project_-_June_05_2026_at_00.02.11_bkobue.png',
    bgText: 'TEAM',
    link: '#',
    imageTransform: { x: 0, y: 0, scale: 1.0 },
  },
];
