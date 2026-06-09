export interface Partner {
  id: string;
  name: string;
  image?: string;
}

export const PARTNERS: Partner[] = [
  { id: "ntu-es", name: "NTU ES", image: "/partners/ntu-es.png" },
  { id: "growth-lab", name: "Growth Lab", image: "/partners/growth-lab.png" },
  { id: "smu-ss", name: "SMU SS", image: "/partners/smu-ss.png" },
  { id: "nus-es", name: "NUS ES", image: "/partners/nus-es.png" },
  { id: "lythe", name: "Lythe", image: "/partners/lythe.png" },
  { id: "the-collective", name: "The Collective", image: "/partners/the-collective.png" },
];
