export interface FounderTeamMember {
  id: string;
  name: string;
  role?: string;
  image: string;
  bio?: string;
  linkedin?: string;
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
        linkedin: "https://www.linkedin.com/in/benedict-tan-265403215/",
      },
      {
        id: "asish-moturu",
        name: "Asish Moturu",
        image: "/images/founders/asish-moturu.png",
        bio: "hey, we're building something cool at opgenic.com",
        linkedin: "https://www.linkedin.com/in/asish-moturu/",
      },
      {
        id: "cheryl-wong",
        name: "Cheryl Wong",
        image: "/images/founders/cheryl-wong.png",
        bio: "hey, we're building something cool at opgenic.com",
        linkedin: "https://www.linkedin.com/in/cheryl-wong-872a69332/",
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
        linkedin: "https://www.linkedin.com/in/haotiantang-lawrence/",
      },
      {
        id: "adrin-manohar",
        name: "Adrin Manohar",
        image: "/images/founders/adrin-manohar.png",
        linkedin: "https://www.linkedin.com/in/adrinmanohar/",
      },
      {
        id: "samarth-bhatia",
        name: "Samarth Bhatia",
        image: "/images/founders/samarth-bhatia.png",
        linkedin: "https://www.linkedin.com/in/samarth-bhatia-03-/",
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
        linkedin: "https://www.linkedin.com/in/palaash-jadav/",
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
        linkedin: "https://www.linkedin.com/in/ho-jun-xi/",
      },
      {
        id: "yue-min",
        name: "Yue Min",
        image: "/images/founders/yue-min.png",
        linkedin: "https://www.linkedin.com/in/lim-yue-min/",
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
  {
    id: "roadaids",
    name: "Roadaids",
    tagline: "Just had an accident?",
    description:
      "We help drivers decide what to do after a car accident: review private settlement demands, check repair quotes, and organise claim evidence before responding.",
    website: "https://www.roadaids.com/",
    team: [
      {
        id: "jex-lin",
        name: "Jex Lin",
        image: "/images/founders/jex-lin.png",
        linkedin: "https://www.linkedin.com/in/jex-lin/",
      },
    ],
  },
  {
    id: "remester",
    name: "Remester",
    tagline: "Finding the best university for you",
    description:
      "We empower students with quantitative intelligence to choose their university with confidence and clarity.",
    bannerImage: "/images/founders/banners/remester.png",
    website: "https://remester.com/",
    team: [
      {
        id: "rian-mathew-george",
        name: "Rian Mathew George",
        image: "/images/founders/rian-mathew-george.png",
        linkedin: "https://www.linkedin.com/in/rian-mathew-george/",
      },
    ],
  },
  {
    id: "carboncredible",
    name: "CarbonCredible",
    tagline: "Making carbon projects trustworthy",
    description:
      "AI-powered feasibility analysis for carbon projects using local knowledge and satellite data.",
    bannerImage: "/images/founders/banners/carboncredible.png",
    website: "https://v0-carbon-credible-design.vercel.app/",
    team: [
      {
        id: "anirudh-mannattil",
        name: "Anirudh Mannattil",
        image: "/images/founders/anirudh-mannattil.png",
        linkedin: "https://www.linkedin.com/in/anirudh-mannattil/",
      },
      {
        id: "aashka-shah",
        name: "Aashka Shah",
        image: "/images/founders/aashka-shah.png",
        linkedin: "https://www.linkedin.com/in/aashka-shah-702b42344/",
      },
      {
        id: "aurelia-e",
        name: "Aurelia E.",
        image: "/images/founders/aurelia-e.png",
        linkedin: "https://www.linkedin.com/in/aurelia-emily/",
      },
      {
        id: "madhulika-p",
        name: "Madhulika P",
        image: "/images/founders/madhulika-p.png",
        linkedin: "https://www.linkedin.com/in/madhulikapalanivelu/",
      },
    ],
  },
  {
    id: "gwenth",
    name: "Gwenth",
    tagline: "Gwenth automates your GTM and sales",
    description:
      "Gwenth finds high-intent buyers 24/7, automates personalized connection on channels like LinkedIn, email, and WhatsApp, and helps you manage client relationships from first signal to post-sales.",
    bannerImage: "/images/founders/banners/gwenth.png",
    website: "https://www.gwenth.com/",
    team: [
      {
        id: "jacye-lye-jia-jun",
        name: "Jacye Lye Jia Jun",
        image: "/images/founders/jacye-lye-jia-jun.png",
        linkedin: "https://www.linkedin.com/in/lyejiajun/",
      },
    ],
  },
];
