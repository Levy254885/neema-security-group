export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  idealFor: string[];
};

export const services: Service[] = [
  {
    slug: "manned-guarding",
    number: "01",
    title: "Manned Guarding",
    shortTitle: "Manned Guarding",
    description:
      "Professional security personnel for commercial, residential and institutional environments.",
    longDescription:
      "Our manned guarding service places trained, disciplined officers at your site. They provide a visible deterrent, control access, monitor activity and respond professionally to incidents. Every officer is selected for presence, reliability and the ability to represent Neema to a high standard.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1600&auto=format&fit=crop",
    features: [
      "Visible professional presence",
      "Access control and visitor management",
      "Patrol and observation routines",
      "Incident reporting and escalation",
      "Shift handover discipline",
    ],
    idealFor: [
      "Commercial buildings",
      "Residential estates",
      "Institutions",
      "Industrial sites",
    ],
  },
  {
    slug: "corporate-security",
    number: "02",
    title: "Corporate Security",
    shortTitle: "Corporate Security",
    description:
      "Security solutions designed for offices, businesses and corporate facilities.",
    longDescription:
      "Corporate environments require discreet yet effective protection. We design and deliver security that supports your operations, protects people and assets, and maintains a professional atmosphere for clients and staff.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    features: [
      "Reception and lobby presence",
      "Access and visitor control",
      "Internal patrols",
      "After-hours security",
      "Coordination with management",
    ],
    idealFor: [
      "Office buildings",
      "Business parks",
      "Headquarters",
      "Shared workspaces",
    ],
  },
  {
    slug: "residential-security",
    number: "03",
    title: "Residential Security",
    shortTitle: "Residential Security",
    description:
      "Protection solutions for homes, estates and residential communities.",
    longDescription:
      "Residential security demands both professionalism and discretion. Our officers protect residents and property while maintaining a respectful, low-profile presence that fits the character of the community.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    features: [
      "Gate and perimeter control",
      "Patrol of common areas",
      "Visitor verification",
      "Emergency response readiness",
      "Resident liaison",
    ],
    idealFor: [
      "Gated communities",
      "Private estates",
      "Apartment complexes",
      "Townhouse developments",
    ],
  },
  {
    slug: "event-security",
    number: "04",
    title: "Event Security",
    shortTitle: "Event Security",
    description:
      "Controlled, professional security coverage for events and gatherings.",
    longDescription:
      "Events require careful planning and calm execution. We provide trained teams for access control, crowd management, VIP protection and overall site security so organisers can focus on the experience.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop",
    features: [
      "Access and ticket control",
      "Crowd management",
      "VIP and stage security",
      "Entry search and screening",
      "Coordination with organisers",
    ],
    idealFor: [
      "Corporate functions",
      "Conferences",
      "Private celebrations",
      "Public events",
    ],
  },
  {
    slug: "access-control",
    number: "05",
    title: "Access Control",
    shortTitle: "Access Control",
    description:
      "Structured monitoring and controlled access for properties and facilities.",
    longDescription:
      "Effective access control reduces risk at the point of entry. We combine trained personnel with clear procedures to manage who enters, when, and under what conditions — creating accountability and a strong first line of protection.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1600&auto=format&fit=crop",
    features: [
      "Visitor registration",
      "Badge and pass systems",
      "Vehicle control",
      "Delivery and contractor management",
      "Audit trails and reporting",
    ],
    idealFor: [
      "Office complexes",
      "Warehouses",
      "Restricted facilities",
      "Mixed-use developments",
    ],
  },
  {
    slug: "security-consulting",
    number: "06",
    title: "Security Consulting",
    shortTitle: "Security Consulting",
    description:
      "Risk-aware security planning tailored to individual client requirements.",
    longDescription:
      "Good security starts with understanding the environment. Our consulting service helps clients identify risks, design practical protection plans and implement measures that fit their operations and budget.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
    features: [
      "Site risk assessment",
      "Security plan design",
      "Procedure development",
      "Training recommendations",
      "Ongoing review support",
    ],
    idealFor: [
      "New developments",
      "Growing businesses",
      "Property managers",
      "Institutions reviewing security",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
