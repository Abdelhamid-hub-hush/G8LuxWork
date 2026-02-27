import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import ProjectsGallery from "@/components/ProjectsGallery";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  const images = project.images.map((src) => ({
    src,
    alt: project.title,
    caption: project.category,
  }));

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">{project.title}</h1>

      <p className="mt-2 text-gold">
        {project.category}
        {project.location ? ` — ${project.location}` : ""}
      </p>

      <p className="mt-4 max-w-3xl text-white/70">{project.description}</p>

      <div className="mt-10">
        <ProjectsGallery images={images} backText="Retour" />
      </div>
    </section>
  );
}