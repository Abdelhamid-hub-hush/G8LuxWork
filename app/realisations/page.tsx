import Link from "next/link";
import { projects } from "@/lib/projects";
import WatermarkedImage from "@/components/WatermarkedImage";

export default function RealisationsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Nos Réalisations</h1>
      <p className="mt-2 text-white/70">
        Des projets réalisés avec précision et exigence.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/realisations/${project.slug}`}
            className="group rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition"
          >
            <div className="relative aspect-[16/10]">
              <WatermarkedImage
                src={project.cover}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">
              <div className="text-sm text-gold">{project.category}</div>
              <h2 className="mt-2 text-xl font-semibold">
                {project.title}
              </h2>
              <p className="mt-2 text-white/60 text-sm">
                {project.location}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}