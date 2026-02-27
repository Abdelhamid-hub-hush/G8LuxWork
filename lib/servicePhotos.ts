import type { PhotoItem } from "@/components/Lightbox";

/**
 * ✅ Photos par service (catalogue)
 * - حطي الصور ديالك ف: public/services/
 * - وخلي الأسماء بلا spaces (بحال: climatisation_01.jpeg)
 * - من بعد زيديهم هنا حسب slug ديال service
 */
export const servicePhotos: Record<string, PhotoItem[]> = {
  // ✅ Caméras / Réseaux
  "cameras-reseaux": [
    { src: "/services/camera_01.jpeg", alt: "Caméra 1" },
    { src: "/services/camera_02.jpeg", alt: "Caméra 2" },
    { src: "/services/camera_03.jpeg", alt: "Caméra 3" },
    { src: "/services/camera_04.jpeg", alt: "Caméra 4" },
  ],
  //tajriba ziyada 
   "l7oop": [
    { src: "/services/test1.png", alt: "hanta ra kaytzado" },
   
  ],
  //tajriba ziyada 
   "wakhdam": [
    { src: "/services/1.png", alt: "hanti a kaoutar  ra kaytzado" },
   
  ],

  // ✅ Climatisation (photos موجودين دابا ف public/services/)
  climatisation: [
    { src: "/services/climatisation_01.jpeg", alt: "Climatisation" },
    { src: "/services/climatisation_02.jpeg", alt: "Climatisation" },
    { src: "/services/climatisation_03.jpeg", alt: "Climatisation" },
    { src: "/services/climatisation_04.jpeg", alt: "Climatisation" },
    { src: "/services/climatisation_05.jpeg", alt: "Climatisation" },
    { src: "/services/climatisation_06.jpeg", alt: "Climatisation" },
    { src: "/services/climatisation_07.jpeg", alt: "Climatisation" },
    { src: "/services/climatisation_08.jpeg", alt: "Climatisation" },
    { src: "/services/climatisation_09.jpeg", alt: "Climatisation" },
    { src: "/services/climatisation_10.jpeg", alt: "Climatisation" },
    { src: "/services/climatisation_11.jpeg", alt: "Climatisation" },
    { src: "/services/climatisation_12.jpeg", alt: "Climatisation" },
    { src: "/services/climatisation_13.jpeg", alt: "Climatisation" },
    { src: "/services/climatisation_14.jpeg", alt: "Climatisation" },
  ],

  // ✅ Plâtrerie & Placo (Gabss) — photos موجودين دابا ف public/services/
  "platrerie-placo": [
    { src: "/services/platrerie_01.jpeg", alt: "Plâtrerie / Placo" },
    { src: "/services/platrerie_02.jpeg", alt: "Plâtrerie / Placo" },
    { src: "/services/platrerie_03.jpeg", alt: "Plâtrerie / Placo" },
    { src: "/services/platrerie_04.jpeg", alt: "Plâtrerie / Placo" },
    { src: "/services/platrerie_05.jpeg", alt: "Plâtrerie / Placo" },
    { src: "/services/platrerie_06.jpeg", alt: "Plâtrerie / Placo" },
    { src: "/services/platrerie_07.jpeg", alt: "Plâtrerie / Placo" },
    { src: "/services/platrerie_08.jpeg", alt: "Plâtrerie / Placo" },
    { src: "/services/platrerie_09.jpeg", alt: "Plâtrerie / Placo" },
    { src: "/services/platrerie_10.jpeg", alt: "Plâtrerie / Placo" },
    { src: "/services/platrerie_11.jpeg", alt: "Plâtrerie / Placo" },
    { src: "/services/platrerie_12.jpeg", alt: "Plâtrerie / Placo" },
    { src: "/services/platrerie_13.jpeg", alt: "Plâtrerie / Placo" },
    { src: "/services/platrerie_14.jpeg", alt: "Plâtrerie / Placo" },
  ],

  // ✅ Rénovation générale — (finition) photos موجودين دابا ف public/services/
  "renovation-generale": [
    { src: "/services/renovation_finition_01.jpeg", alt: "Finition — rénovation" },
    { src: "/services/renovation_finition_02.jpeg", alt: "Finition — rénovation" },
    { src: "/services/renovation_finition_03.jpeg", alt: "Finition — rénovation" },
    { src: "/services/renovation_finition_04.jpeg", alt: "Finition — rénovation" },
    { src: "/services/renovation_finition_05.jpeg", alt: "Finition — rénovation" },
    { src: "/services/renovation_finition_06.jpeg", alt: "Finition — rénovation" },
    { src: "/services/renovation_finition_07.jpeg", alt: "Finition — rénovation" },
    { src: "/services/renovation_finition_08.jpeg", alt: "Finition — rénovation" },
    { src: "/services/renovation_finition_09.jpeg", alt: "Finition — rénovation" },
    { src: "/services/renovation_finition_10.jpeg", alt: "Finition — rénovation" },
    { src: "/services/renovation_finition_11.jpeg", alt: "Finition — rénovation" },
  ],

  // --------------------------------------------
  // 📝 SERVICES Bاقي ماحطيناش ليهم صور
  // ملي تكون جاهزة: حطيهم ف public/services/ وزيديهم هنا
  // --------------------------------------------

  electricite: [
    // مثال:
    // { src: "/services/electricite_01.jpeg", alt: "Électricité" },
    // { src: "/services/electricite_02.jpeg", alt: "Électricité" },
  ],

  plomberie: [
    // { src: "/services/plomberie_01.jpeg", alt: "Plomberie" },
  ],

  "faux-plafonds-drywall": [
    // { src: "/services/plafonds_01.jpeg", alt: "Faux plafond" },
  ],

  "aluminium-verre": [
    // { src: "/services/verre_01.jpeg", alt: "Verre trempé" },
  ],

  "peinture-finitions": [
    // { src: "/services/peinture_01.jpeg", alt: "Peinture" },
  ],
};
