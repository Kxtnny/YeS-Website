export interface PastEvent {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
  location?: string;
  highlight?: string;
}

export const PAST_EVENTS: PastEvent[] = [
  {
    id: "entrepreneurs-connect",
    title: "Entrepreneurs Connect",
    date: "August 2023",
    image: "/images/events/entrepreneurs-connect.jpg",
    description:
      "It's challenging to find serious co-founders and collaborators. We hosted a speed-dating style event to help founders find their tribe.",
    location: "Singapore",
    highlight: "80+ founders matched",
  },
  {
    id: "high-performance-teams",
    title: "Building High Performance Teams",
    date: "November 2023",
    image: "/images/events/high-performance-teams.jpg",
    description:
      "Running a startup is tough, but having the right team can make all the difference, so we hosted a workshop on how to build and lead high performance teams.",
    location: "Singapore",
    highlight: "Founder-led workshop",
  },
  {
    id: "monetizing-research",
    title: "Monetizing Research",
    date: "March 2024",
    image: "/images/events/monetizing-research.jpg",
    description:
      "We rarely see research breakthroughs make it out into the real world. We brought together researchers and VC firms to discuss how to change that.",
    location: "Singapore",
    highlight: "Researchers × investors",
  },
  {
    id: "singapore-stupid-hackathon",
    title: "Singapore Stupid Hackathon",
    date: "June 2024",
    image: "/images/events/singapore-stupid-hackathon.jpg",
    description:
      "We challenged 80+ builders to step out of their comfort zone and build something ridiculous in 8 hours.",
    location: "Singapore",
    highlight: "80+ builders",
  },
];

export const ADDITIONAL_PAST_EVENTS: PastEvent[] = [
  {
    id: "founders-game-night",
    title: "Founder's Game Night",
    date: "",
    image: "/images/events/founders-game-night.jpg",
    description: "We hosted a fun game night for founders to unwind and connect with each other.",
  },
  {
    id: "our-first-mixer",
    title: "Our First Mixer",
    date: "",
    image: "/images/events/first-mixer.jpg",
    description: "We hosted our first community mixer to bring together founders and builders from NTU & NUS.",
  },
  {
    id: "agentcon-ntu",
    title: "AgentCon@NTU",
    date: "",
    image: "/images/events/agentcon-ntu.jpg",
    description: "We brought together 300+ students across Singapore to learn about the future of AI and challenged them to build their own AI agents.",
  },
  {
    id: "founders-pitch-night",
    title: "Founder's Pitch Night",
    date: "",
    image: "/images/events/founders-pitch-night.jpg",
    description: "We brought together 150+ builders to observe as 10 founders pitch their ideas to venture capitalists and receive live feedback.",
  },
];
