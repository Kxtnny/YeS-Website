export interface IncubatorOrganiser {
  id: string;
  name: string;
  title: string;
  image?: string;
  linkedin?: string;
}

export interface IncubatorOrganiserGroup {
  id: string;
  title: string;
  organisers: IncubatorOrganiser[];
}

export interface IncubatorPartner {
  id: string;
  name: string;
  description: string;
  logo?: string;
  website?: string;
}

export interface IncubatorTimelineItem {
  id: string;
  title: string;
  description: string;
}

export const INCUBATOR_ORGANISER_GROUPS: IncubatorOrganiserGroup[] = [
  {
    id: "leadership",
    title: "Programme Leadership",
    organisers: [
      {
        id: "shrujan-beesetty",
        name: "Shrujan Beesetty",
        title: "Programme Lead",
        image: "/images/organisers/shrujan-beesetty.jpg",
        linkedin: "https://www.linkedin.com/in/shrujan-beesetty/",
      },
      {
        id: "asish-moturu",
        name: "Asish Moturu",
        title: "Community Lead",
        image: "/images/organisers/asish-moturu.jpg",
        linkedin: "https://www.linkedin.com/in/asish-moturu/",
      },
    ],
  },
  {
    id: "mentors",
    title: "Mentors",
    organisers: [
      {
        id: "scott-cheng",
        name: "Scott Cheng",
        title: "Product Design Mentor",
        image: "/images/organisers/scott-cheng.jpg",
        linkedin: "https://www.linkedin.com/in/scottcjx/",
      },
      {
        id: "benedict-tan",
        name: "Benedict Tan",
        title: "Technical Mentor",
        image: "/images/organisers/benedict-tan.jpg",
        linkedin: "https://www.linkedin.com/in/benedict-tan-265403215/",
      },
      {
        id: "yue-hang",
        name: "Yue Hang",
        title: "Go To Market Mentor",
        image: "/images/organisers/yue-hang.jpg",
        linkedin: "https://www.linkedin.com/in/leeyuehang/",
      },
      {
        id: "lye-jia-jun",
        name: "Lye Jia Jun",
        title: "B2B Strategy Mentor",
        image: "/images/organisers/lye-jia-jun.jpg",
        linkedin: "https://www.linkedin.com/in/lyejiajun/",
      },
      {
        id: "sanjeyan-chryshanthan",
        name: "Sanjeyan Chryshanthan",
        title: "Business Strategy Mentor",
        image: "/images/organisers/sanjeyan-chryshanthan.jpg",
        linkedin: "https://www.linkedin.com/in/sanjey99/",
      },
    ],
  },
  {
    id: "operations",
    title: "Operations & Community",
    organisers: [
      {
        id: "jun-xi",
        name: "Jun Xi",
        title: "Market Research Analyst",
        image: "/images/organisers/jun-xi.jpg",
        linkedin: "https://www.linkedin.com/in/ho-jun-xi/",
      },
      {
        id: "adithya-ganesh-rao",
        name: "Adithya Ganesh Rao",
        title: "Venture Analyst",
        image: "/images/organisers/adithya-ganesh-rao.jpg",
        linkedin: "https://www.linkedin.com/in/adithya-ganesh-rao/",
      },
      {
        id: "palaash-jadav",
        name: "Palaash Jadav",
        title: "Partnerships Manager",
        image: "/images/organisers/palaash-jadav.jpg",
        linkedin: "https://www.linkedin.com/in/palaash-jadav/",
      },
      {
        id: "mabel-tan",
        name: "Mabel Tan",
        title: "Community Manager",
        image: "/images/organisers/mabel-tan.jpg",
        linkedin: "https://www.linkedin.com/in/mabeltjw/",
      },
      {
        id: "kait-lyn-cheng",
        name: "Kait-lyn Cheng",
        title: "Community Manager",
        image: "/images/organisers/kait-lyn-cheng.jpg",
        linkedin: "https://www.linkedin.com/in/kait-lyn-cheng/",
      },
    ],
  },
];

/** Flat list for any consumers that need all organisers. */
export const INCUBATOR_ORGANISERS: IncubatorOrganiser[] =
  INCUBATOR_ORGANISER_GROUPS.flatMap((group) => group.organisers);

export const INCUBATOR_PARTNERS: IncubatorPartner[] = [
  {
    id: "blop",
    name: "Blop",
    description: "The QA peer for teams that ship with coding agents.",
    logo: "/images/partners/blop.png",
    website: "https://blopai.com/",
  },
  {
    id: "produck",
    name: "Produck",
    description: "Self-improving software powered by user intelligence.",
    logo: "/images/partners/produck.png",
    website: "https://tryproduck.com/",
  },
  {
    id: "gwenth",
    name: "Gwenth",
    description:
      "AI-guided revenue enablement for founders and lean B2B software teams.",
    logo: "/images/partners/gwenth.png",
    website: "https://www.gwenth.com/",
  },
];

export const INCUBATOR_TIMELINE: IncubatorTimelineItem[] = [
  {
    id: "problem-space",
    title: "Problem Space Validation",
    description: "Identify a meaningful problem worth solving.",
  },
  {
    id: "customer-validation",
    title: "Customer Validation",
    description: "Interview users and validate assumptions.",
  },
  {
    id: "market-analysis",
    title: "Market Analysis",
    description:
      "Understand competitors, positioning, and market opportunities.",
  },
  {
    id: "product-design",
    title: "Product Design",
    description: "Define your MVP and iterate based on feedback.",
  },
  {
    id: "gtm",
    title: "Go-to-Market Strategy",
    description: "Develop pricing, distribution, and acquisition plans.",
  },
  {
    id: "growth-virality",
    title: "Growth & Virality",
    description:
      "Build sustainable channels for user acquisition and retention.",
  },
  {
    id: "launch",
    title: "Launch",
    description:
      "Ship your product, acquire your first users, and prepare for long-term growth.",
  },
];
