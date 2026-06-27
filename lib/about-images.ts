export interface AboutCommunityImage {
  id: string;
  src: string;
  alt: string;
}

export const ABOUT_COMMUNITY_IMAGES: AboutCommunityImage[] = [
  {
    id: "collaborators",
    src: "/images/about/collaborators.jpg",
    alt: "Young founders collaborating around a laptop in a bright workspace",
  },
  {
    id: "workshop",
    src: "/images/about/workshop.jpg",
    alt: "Community members sharing ideas during a startup workshop",
  },
  {
    id: "brainstorm",
    src: "/images/about/brainstorm.jpg",
    alt: "Entrepreneurs brainstorming together in a modern meeting space",
  },
  {
    id: "building",
    src: "/images/about/building.jpg",
    alt: "Ambitious builders working as a team to launch a new venture",
  },
];
