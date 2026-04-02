export type Event = {
  image: string | null;
  title: string;
  description: string;
  link: string | null;
  date: string;
  location: string;
  tag: "upcoming" | "completed";
};

// Helper function to determine event status for future use
export function getEventTag(dateString: string): "upcoming" | "completed" {
  const eventDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return eventDate >= today ? "upcoming" : "completed";
}

// Helper function to parse date for sorting
export function parseDate(dateString: string): Date {
  return new Date(dateString);
}

export const EVENTS: Event[] = [
  {
    image: "/events/founder-centric-mixer.jpg",
    title: "First Founder-Centric Mixer",
    description:
      "Do you have a great idea, but somehow still feel stuck? At YeS that's exactly who these mixers are built for: young entrepreneurs across Singapore who are still pre-funding, pre-fame, but serious about their idea. YeS co-hosted this founder-only room (with our invite only community: The Collective) where founders could swap ideas, share struggles, and build connections with other ambitious people.",
    link: "https://www.linkedin.com/posts/shrujan-beesetty_do-you-have-a-great-idea-but-somehow-still-ugcPost-7405232419722870785-rmjL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFUoomsBTNPyF7QOnjE-wjvRk1eQrzC8gus",
    date: "8 Jan 2026",
    location: "Open Sourced Cafe, Singapore",
    tag: "completed",
  },
  {
    image: "/events/student-founder-pitch-night.jpg",
    title: "Student Founder Pitch Night",
    description:
      "An evening showcasing student-led and youth-led startups building in Singapore. ​Join us at BLOCK71 for a fast-paced pitch night featuring live startup pitches, candid feedback from experienced founders and investors, and relaxed networking with fellow builders.",
    link: "https://luma.com/6kh14jwj",
    date: "16 Jan 2026",
    location: "BLOCK71, Singapore",
    tag: "completed",
  },
  {
    image: "/events/youth-builder-mixer.jpg",
    title: "Youth Builder Mixer",
    description:
      "Youth Builders Mixer is an invite-only dinner for youth founders, builders, and early-stage entrepreneurs to slow down, meet each other, and have real conversations.​This isn't a networking event. It's a shared table for people building things, from student-led startups and creators to early founders across Singapore's youth ecosystem. No pitches, no panels, just good food, board games, and honest conversations with people who are actually shipping.",
    link: "https://luma.com/5wg9q462",
    date: "8 Feb 2026",
    location: "Monk's Brew Club, Singapore",
    tag: "completed",
  },
  {
    image: "/events/entrepreneurs-connect.jpg",
    title: "Entrepreners Connect",
    description:
      "Are you a NTU student or alumnus interested in Entrepreneurship? Maybe you've got a couple of ideas you've been thinking about. ​Maybe you've already built a product but aren't sure how to move it forward. ​You're not alone. ​We're hosting this session so you can: ​Meet other builders and founders who are at a similar stage, ​Share what you're working on (or hoping to start), ​Find potential collaborators and co-founders, ​Have real conversations with other ambitious students in your university. ​We hope to see you there.",
    link: "https://luma.com/8rqm5tue",
    date: "26 March 2026",
    location: "NTU Innovation Port at Wee Cho Yaw Plaza",
    tag: "completed",
  },
  {
    image: "/events/creating-effective-teams.jpg",
    title: "Creating Effective Teams",
    description:
      "​Are you working on a project, startup, or student team and want to get more done without burning out? ​Join us for an evening on how to use project management to build small, high‑impact teams.",
    link: "https://luma.com/et8qvin9",
    date: "30 March 2026",
    location: "NTU Innovation Port at Wee Cho Yaw Plaza",
    tag: "completed",
  },
  {
    image: "/events/agentcon-ntu.jpg",
    title: "AgentCon @ NTU｜OpenClaw OPC Connect",
    description:
      "A hands-on AI × Web3 event focused on building on-chain agents. Whether you're just getting started or already building, this is a space to explore, experiment, and connect. What you can do: Learn from talks on AI agents, OpenClaw, and real-world use cases, Build on-site with support from Tencent Cloud engineers, Share your ideas, demos, or interesting agent use cases.",
    link: "https://luma.com/c9t9lx6f",
    date: "31 March 2026",
    location: "NTU Wee Cho Yaw Plaza South Academic Building, ​Level 3, ABS-03-018",
    tag: "completed",
  },
  {
    image: "/events/creating-effective-teams.jpg",
    title: "Monetizing Research: From Lab to Market",
    description:
      "Are you working on a FYP, URECA project, or research idea and wondering if it could become a real product or startup? ​Join us for a sharing session on how researchers and deep‑tech founders turn their work into viable businesses.",
    link: "https://luma.com/bck4uh17",
    date: "7 April 2026",
    location: "NTU Innovation Port at Wee Cho Yaw Plaza",
    tag: "upcoming",
  },
  {
   image: "/events/straight-up.jpg",
   title: "strAIght up! Hackathon 2026",
   description:
   "​1 week. From idea to demo. Build with AI. ​strAIght up! Hackathon is a hybrid AI hackathon bringing together young builders aged 15 to 25 to explore, experiment, and ship real products using AI. ​Participants form teams of 2 to 4 and build usable projects from scratch over a week supported by an initiation day on 18th April at LorongAI with workshops, mentors and industry partners. Teams then work on their projects remotely until 25th April, where the judging will be held at LorongAI. ​Teams will be guided by prize categories that will be revealed on 18th April, in person!",
   link: "https://luma.com/6cs42n17",
   date: "18 April 2026",
   location: "LorongAI @ One-North, Singapore",
   tag: "upcoming",
  }
];
