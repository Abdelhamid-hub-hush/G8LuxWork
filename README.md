# G8LuxWork — Site vitrine (Next.js + Tailwind)

## Windows — Lancer le projet
1) Installe Node.js (LTS): https://nodejs.org/
2) Dézippe ce projet
3) Ouvre le dossier dans VS Code
4) Ouvre un terminal dans le dossier puis:

```bash
npm install
npm run dev
```

Ouvre: http://localhost:3000

## Ajouter les photos
- Mets tes images dans: `public/realisations/`
- Puis remplace les `src` dans `lib/gallery.ts`
  Exemple: `/realisations/plafond-01.jpg`


✅ Fix included: tsconfig baseUrl set for @/* imports.


## Photos (important)

### Photos des services (catalogue)
- Mets les photos dans `public/services/`
- La configuration est dans `lib/servicePhotos.ts`
- Ajoute tes photos (en suivant les slugs de `lib/content.ts`)
- Les photos s’ouvrent en **catalogue** (click → lightbox) sur la page `En savoir plus`.

### Réalisations (galerie)
- Mets les photos dans `public/realisations/`
- Remplace la liste dans `lib/gallery.ts`
- La page `/realisations` propose aussi un **catalogue** (click → lightbox).
