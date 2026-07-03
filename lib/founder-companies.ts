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
  {
    id: "thesa",
    name: "Thesa",
    tagline: "Redefining the way IHLs interact with students",
    description:
      "Digital classrooms allow professors to give feedback faster, helping students learn and professors to save time.",
    bannerImage: "/images/founders/banners/thesa.png",
    website: "https://www.thesa.education/",
    team: [
      {
        id: "palaash-jadav",
        name: "Palaash Jadav",
        image: "/images/founders/palaash-jadav.png",
      },
    ],
  },
  {
    id: "jm-atelier",
    name: "JM Atelier",
    tagline: "Helping you start your own business",
    description:
      "We provide the corporate strategy to help you scale your vision.",
    website: "https://www.jmatelier.co/",
    team: [
      {
        id: "ho-jun-xi",
        name: "Ho Jun Xi",
        image: "/images/founders/ho-jun-xi.png",
      },
      {
        id: "yue-min",
        name: "Yue Min",
        image: "/images/founders/yue-min.png",
      },
    ],
  },
  {
    id: "valsea",
    name: "VALSEA",
    tagline: "Global speech engines aren't built for asian accents.",
    description:
      "Global speech engines aren't built to recognise mixed language sentences like singlish, chinglish and code-switching. We're here to change that.",
    bannerImage: "/images/founders/banners/valsea.png",
    website: "https://valsea.ai/",
    team: [
      {
        id: "valencia-queck",
        name: "Valencia Queck",
        image: "/images/founders/valencia-queck.png",
        linkedin: "https://www.linkedin.com/in/valencia-queck/",
      },
    ],
  },
];
