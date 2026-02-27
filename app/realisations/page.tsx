import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import ProjectsGallery from "@/components/ProjectsGallery";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const images = Array.isArray(project.images)
    ? project.images.map((src) => ({
        src,
        alt: project.title,
        caption: project.category,
      }))
    : [];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">{project.title}</h1>

      <p className="mt-2 text-gold">
        {project.category}
        {project.location ? ` — ${project.location}` : ""}
      </p>

      {project.description ? (
        <p className="mt-4 max-w-3xl text-white/70">{project.description}</p>
      ) : null}

      <div className="mt-10">
        {images.length ? (
          <ProjectsGallery images={images} backText="Retour" />
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-white/70">
            Aucune photo pour ce projet.
          </div>
        )}
      </div>
    </section>
  );
}