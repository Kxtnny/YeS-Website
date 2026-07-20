export interface IncubatorOrganiser {
  id: string;
  name: string;
  title: string;
  image?: string;
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

export const INCUBATOR_ORGANISERS: IncubatorOrganiser[] = [
  { id: "org-1", name: "Organiser Name", title: "Program Lead" },
  { id: "org-2", name: "Organiser Name", title: "Curriculum Lead" },
  { id: "org-3", name: "Organiser Name", title: "Mentorship Lead" },
  { id: "org-4", name: "Organiser Name", title: "Partnerships Lead" },
  { id: "org-5", name: "Organiser Name", title: "Community Lead" },
  { id: "org-6", name: "Organiser Name", title: "Operations Lead" },
  { id: "org-7", name: "Organiser Name", title: "Growth Lead" },
  { id: "org-8", name: "Organiser Name", title: "Design Mentor" },
  { id: "org-9", name: "Organiser Name", title: "Product Mentor" },
  { id: "org-10", name: "Organiser Name", title: "Engineering Mentor" },
  { id: "org-11", name: "Organiser Name", title: "GTM Mentor" },
  { id: "org-12", name: "Organiser Name", title: "Fundraising Mentor" },
];

export const INCUBATOR_PARTNERS: IncubatorPartner[] = [
  {
    id: "partner-1",
    name: "Partner Name",
    description: "Software, tools, or assistance for founders in the program.",
  },
  {
    id: "partner-2",
    name: "Partner Name",
    description: "Software, tools, or assistance for founders in the program.",
  },
  {
    id: "partner-3",
    name: "Partner Name",
    description: "Software, tools, or assistance for founders in the program.",
  },
  {
    id: "partner-4",
    name: "Partner Name",
    description: "Software, tools, or assistance for founders in the program.",
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
