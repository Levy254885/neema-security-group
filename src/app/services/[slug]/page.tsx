import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetailClient from "./ServiceDetailClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | Neema Security Group`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        <ServiceDetailClient service={service} otherServices={otherServices} />
      </main>
      <Footer />
    </>
  );
}
