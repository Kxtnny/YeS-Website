export interface NavigationSubItem {
  title: string;
  href: string;
}

export interface NavigationItem {
  title: string;
  href?: string;
  description?: string;
  items?: NavigationSubItem[];
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    title: "Events",
    href: "/events",
    description: "",
  },
  {
    title: "Community",
    description:
      "Meet the people building Singapore's next generation of ventures.",
    items: [
      { title: "Founders", href: "/founders" },
      { title: "Projects", href: "/projects" },
    ],
  },
  {
    title: "Programs",
    description: "Structured support to help you go from idea to launch.",
    items: [{ title: "Incubator", href: "/programs/incubator" }],
  },
];
