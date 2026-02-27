import { notFound } from "next/navigation";
import { services } from "@/lib/content";
import { servicePhotos } from "@/lib/servicePhotos";
import ServiceDetailClient from "./ServiceDetailClient";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  const photos = servicePhotos[slug] ?? [];

  return <ServiceDetailClient service={service} photos={photos} />;
}