export interface Partner {
  id: string;
  name: string;
  image: string;
  /** Optional scale boost when the SVG has extra viewBox padding. */
  scale?: number;
}

export const PARTNERS: Partner[] = [
  {
    id: "leave-a-nest",
    name: "Leave a Nest",
    image: "/images/partners/leave-a-nest.svg",
  },
  {
    id: "moringa-ventures",
    name: "Moringa Ventures",
    image: "/images/partners/moringa-ventures.svg",
  },
  {
    id: "notion",
    name: "Notion",
    image: "/images/partners/notion.svg",
  },
  {
    id: "ntupreneur",
    name: "NTUpreneur",
    image: "/images/partners/ntupreneur.svg",
    scale: 1.45,
  },
  {
    id: "pmi-singapore",
    name: "PMI Singapore",
    image: "/images/partners/pmi-singapore.svg",
  },
  {
    id: "smu-iie",
    name: "SMU IIE",
    image: "/images/partners/smu-iie.svg",
    scale: 1.45,
  },
  {
    id: "tembusu-partners",
    name: "Tembusu Partners",
    image: "/images/partners/tembusu-partners.svg",
    scale: 1.45,
  },
];
