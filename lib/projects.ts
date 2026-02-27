// lib/projects.ts

export type Project = {
  slug: string;
  title: string;
  category: string;
  location?: string;
  description: string;
  cover: string;
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "villa-rabat-2024",
    title: "Rénovation Villa Moderne",
    category: "Rénovation",
    location: "Rabat",
    description:
      "Rénovation complète avec faux plafond, électricité et peinture premium.",
    cover: "/realisations/villa1/cover.jpg",
    images: [
      "/realisations/villa1/1.jpg",
      "/realisations/villa1/2.jpg",
      "/realisations/villa1/3.jpg",
    ],
  },
];