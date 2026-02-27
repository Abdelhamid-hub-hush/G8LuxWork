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
///// wast had classe ndiro les projets as object
  {
    slug: "appartement-casablanca-2025", // خاصو يكون unique
    title: "Aménagement Appartement",
    category: "Aménagement",
    location: "Casablanca",
    description:
      "Aménagement intérieur moderne avec éclairage LED et faux plafond design.",
    cover: "/realisations/appartement1/cover.jpg",
    images: [
      "/realisations/appartement1/1.jpg",
      "/realisations/appartement1/2.jpg",
      "/realisations/appartement1/3.jpg",
    ],
  },
];