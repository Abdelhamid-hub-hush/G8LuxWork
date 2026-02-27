export type Category =
  | "Plafonds"
  | "Rénovation"
  | "Électricité"
  | "Plomberie"
  | "Climatisation"
  | "Plâtrerie/Placo"
  | "Aluminium/Verre"
  | "Peinture"
  | "Caméras";

export type GalleryItem = {
  src: string; // مثال: "/realisations/plafond-01.jpg"
  alt: string;
  category: Category;
};

/**
 * ✅ Réalisations (Galerie)
 * 1) حطي صور المشاريع ديالك هنا: public/realisations/
 * 2) من بعد زيديهم فهاد اللائحة (src) بنفس الاسم اللي ف public
 *
 * مثال:
 *  public/realisations/projet-01.jpeg  =>  src: "/realisations/projet-01.jpeg"
 */
export const gallery: GalleryItem[] = [
  // 📝 بدلي هاد الصور بالصور ديالك:
  { src: "/realisations/page_acceuil.jpeg", alt: "Projet — rénovation", category: "Rénovation" },

  // مثال باش تزيدي بزاف:
  // { src: "/realisations/projet-02.jpeg", alt: "Faux plafond lumineux", category: "Plafonds" },
  // { src: "/realisations/projet-03.jpeg", alt: "Climatisation — installation", category: "Climatisation" },
  // { src: "/realisations/projet-04.jpeg", alt: "Plâtrerie & Placo", category: "Plâtrerie/Placo" },
];
