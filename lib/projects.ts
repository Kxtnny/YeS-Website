export interface Project {
  id: string;
  name: string;
  url: string;
  image: string;
  description: string;
}

export const PROJECTS: Project[] = [
  {
    id: "swaphub",
    name: "SwapHub",
    url: "https://swaphub.ntuscds.com/",
    image: "/images/projects/swaphub.png",
    description:
      "A platform that helps NTU students find someone to swap their course indexes with automatically, instead of manually sifting through flooded Telegram channels.",
  },
  {
    id: "fntu",
    name: "FNTU",
    url: "https://fntu.benapps.dev/",
    image: "/images/projects/fntu.png",
    description:
      "An open source data platform that distills NTU campus data—courses, schedules, locations, and more—so that builders can build their own projects with it easily.",
  },
  {
    id: "milo-for-ntu",
    name: "Milo for NTU",
    url: "https://milo.opgenic.com/",
    image: "/images/projects/milo-for-ntu.png",
    description:
      "A platform that helps NTU students discover and connect with research opportunities across campus.",
  },
  {
    id: "fstars",
    name: "FStars",
    url: "https://fstars.benapps.dev/",
    image: "/images/projects/fstars.png",
    description:
      "A timetable generator for NTU students to plan their schedule efficiently.",
  },
  {
    id: "fgoptimiser",
    name: "FGOptimiser",
    url: "https://fgoptimiser.com/",
    image: "/images/projects/fgoptimiser.png",
    description:
      "A free tool for NTU students to optimise their CGPA using the Flexible Grading Option (FGO).",
  },
];
