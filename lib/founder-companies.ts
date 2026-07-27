export interface FounderTeamMember {
  id: string;
  name: string;
  role?: string;
  image?: string;
  bio?: string;
  linkedin?: string;
  instagram?: string;
  /** When true, member is kept in data but not shown in the UI */
  hidden?: boolean;
}

export interface FounderCompany {
  id: string;
  name: string;
  tagline: string;
  description?: string;
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
    bannerImage: "/images/founders/banners/money-pasar.png",
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
    tagline: "Bespoke corporate services for founders & SMEs.",
    description:
      "Incorporation, corp-sec, accounting and tax — handled properly, end-to-end, so you can focus on building.",
    bannerImage: "/images/founders/banners/jm-atelier.jpg",
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
        hidden: true,
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
    website: "https://carbon-credible.vercel.app/",
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
  {
    id: "waste-fellows",
    name: "Waste Fellows",
    tagline: "Where no waste goes to waste.",
    description: "We help F&B businesses convert food waste into fertilizer.",
    bannerImage: "/images/founders/banners/waste-fellows.png",
    website: "https://www.linkedin.com/company/waste-fellows-sg/",
    team: [
      {
        id: "santusht-narula",
        name: "Santusht Narula",
        image: "/images/founders/santusht-narula.png",
        linkedin: "https://www.linkedin.com/in/santushtnarula/",
      },
      {
        id: "rao-aryan-niranjan",
        name: "Rao Aryan Niranjan",
        image: "/images/founders/rao-aryan-niranjan.png",
        linkedin: "https://www.linkedin.com/in/rao-aryan-niranjan-322b95280/",
      },
      {
        id: "adharsh-srinivasan",
        name: "Adharsh Srinivasan",
        image: "/images/founders/adharsh-srinivasan.png",
        linkedin: "https://www.linkedin.com/in/adharsh-srinivasan-2aa28a211/",
      },
    ],
  },
  {
    id: "forge",
    name: "Forge",
    tagline: "The Best SHL and Aon Cognitive Assessment Practice Platform",
    description:
      "Building accessible SHL and Aon assessment practice tools that help students prepare confidently and get their dream interviews.",
    bannerImage: "/images/founders/banners/forge.png",
    website: "https://www.forgeprep.io/",
    team: [
      {
        id: "pratham-ranjan",
        name: "Pratham Ranjan",
        image: "/images/founders/pratham-ranjan.png",
        linkedin: "https://www.linkedin.com/in/pratham-ranjan27/",
      },
      {
        id: "aditya-anand-pramod",
        name: "Aditya Anand Pramod",
        image: "/images/founders/aditya-anand-pramod.png",
        linkedin: "https://www.linkedin.com/in/aditya-anand-pramod/",
      },
      {
        id: "amitbikram-jain",
        name: "Amitbikram Jain",
        image: "/images/founders/amitbikram-jain.png",
        linkedin: "https://www.linkedin.com/in/amitbikram-jain/",
      },
      {
        id: "alok-vernekar",
        name: "Alok Vernekar",
        image: "/images/founders/alok-vernekar.png",
        linkedin: "https://www.linkedin.com/in/alokvernekar/",
      },
    ],
  },
  {
    id: "examon-ai",
    name: "Examon AI",
    tagline: "The fastest path to acing your exams",
    description:
      "We're building the world's largest IB question bank, so we can find every gap in your learning and fix it with the exact question you need.",
    bannerImage: "/images/founders/banners/examon-ai.png",
    website: "https://www.examon.ai/",
    team: [
      {
        id: "antoine-lee",
        name: "Antoine Lee",
        image: "/images/founders/antoine-lee.png",
        linkedin: "https://www.linkedin.com/in/antoinekllee/",
        instagram: "https://www.instagram.com/aantoinelee/",
      },
      {
        id: "alexandre-lee",
        name: "Alexandre Lee",
        image: "/images/founders/alexandre-lee.png",
        linkedin: "https://www.linkedin.com/in/alexandre-lee-a91210231/",
        instagram: "https://www.instagram.com/aalexandre.lee/",
      },
    ],
  },
  {
    id: "siftplace",
    name: "SiftPlace",
    tagline: "Act Fast, Think Fast, Book Fast.",
    description: "A fast, reliable way to find housing abroad.",
    bannerImage: "/images/founders/banners/siftplace.png",
    website: "https://sift-place.vercel.app/",
    team: [
      {
        id: "dayang-shen",
        name: "Dayang Shen",
        image: "/images/founders/dayang-shen.png",
        linkedin: "https://www.linkedin.com/in/dayangshen75/",
      },
      {
        id: "loo-le-l",
        name: "Loo Le L.",
        linkedin: "https://www.linkedin.com/in/leelooile/",
      },
    ],
  },
  {
    id: "s-up",
    name: "s'up",
    tagline: "The AI Coach to build better spine habits",
    bannerImage: "/images/founders/banners/s-up.png",
    website: "https://www.s-up.app/",
    team: [
      {
        id: "leipakshi-gupta",
        name: "Leipakshi Gupta",
        image: "/images/founders/leipakshi-gupta.png",
        linkedin: "https://www.linkedin.com/in/leipakshi-gupta/",
      },
    ],
  },
  {
    id: "caru",
    name: "Caru",
    tagline: "Distance doesn't have to mean doubt",
    description:
      "Caru automates daily check-in calls and gives your whole family one shared, real-time view of your parent's wellbeing. Open the app anytime, on your own schedule, instead of piecing it together from scattered calls.",
    bannerImage: "/images/founders/banners/caru.jpg",
    team: [
      {
        id: "avyukta-chekuri",
        name: "Avyukta Chekuri",
        image: "/images/founders/avyukta-chekuri.jpg",
        linkedin: "https://www.linkedin.com/in/avyukta-chekuri-42747821b/",
      },
    ],
  },
];
