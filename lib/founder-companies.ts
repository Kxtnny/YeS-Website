export interface FounderTeamMember {
  id: string;
  name: string;
  role?: string;
  image: string;
  bio?: string;
  linkedin?: string;
  instagram?: string;
}

export interface FounderCompany {
  id: string;
  name: string;
  tagline: string;
  description: string;
  bannerImage?: string;
  website?: string;
  team: FounderTeamMember[];
}

export const FOUNDER_COMPANIES: FounderCompany[] = [
  {
    id: "opgenic",
    name: "opgenic",
    tagline: "Meaningful software solutions",
    description:
      "Building meaningful software solutions centered around creating opportunities for others.",
    website: "https://milo.opgenic.com/",
    team: [
      {
        id: "benedict-tan",
        name: "Benedict Tan",
        image: "/images/founders/benedict-tan.png",
        bio: "hey, we're building something cool at opgenic.com",
      },
      {
        id: "asish-moturu",
        name: "Asish Moturu",
        image: "/images/founders/asish-moturu.png",
        bio: "hey, we're building something cool at opgenic.com",
      },
      {
        id: "cheryl-wong",
        name: "Cheryl Wong",
        image: "/images/founders/cheryl-wong.png",
        bio: "hey, we're building something cool at opgenic.com",
      },
    ],
  },
  {
    id: "money-pasar",
    name: "Money Pasar",
    tagline: "Borderless finance infrastructure for SMEs.",
    description: "A better way to move money across borders.",
    website: "https://moneypasar.com/",
    team: [
      {
        id: "haotian-lawrence-tang",
        name: "Haotian (Lawrence) Tang",
        image: "/images/founders/haotian-lawrence-tang.png",
      },
      {
        id: "adrin-manohar",
        name: "Adrin Manohar",
        image: "/images/founders/adrin-manohar.png",
      },
      {
        id: "samarth-bhatia",
        name: "Samarth Bhatia",
        image: "/images/founders/samarth-bhatia.png",
      },
    ],
  },
];
