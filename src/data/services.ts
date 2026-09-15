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
      "Trained officers on site for commercial, residential and institutional properties.",
    longDescription:
      "We place disciplined officers at your site. They keep a visible presence, control who comes in, watch the grounds and handle incidents when they arise. Every officer is chosen for reliability and the ability to represent Neema well.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1600&auto=format&fit=crop",
    features: [
      "Visible presence on site",
      "Access and visitor control",
      "Regular patrols",
      "Incident reporting",
      "Proper shift handovers",
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
    description: "Security for offices, businesses and corporate facilities.",
    longDescription:
      "Offices need protection that does not get in the way of work. We provide security that keeps people and assets safe while maintaining a professional environment for staff and visitors.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    features: [
      "Lobby and reception coverage",
      "Access control",
      "Internal patrols",
      "After hours security",
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
    description: "Protection for homes, estates and residential communities.",
    longDescription:
      "Home security needs both skill and discretion. Our officers protect residents and property while remaining respectful and low profile within the community.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    features: [
      "Gate and perimeter control",
      "Patrol of common areas",
      "Visitor checks",
      "Ready emergency response",
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
    description: "Professional coverage for events and gatherings.",
    longDescription:
      "Events need careful planning and calm execution. We provide teams for access control, crowd management and site security so organisers can focus on the event itself.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop",
    features: [
      "Access and ticket control",
      "Crowd management",
      "VIP coverage",
      "Entry screening",
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
    description: "Controlled entry for properties and facilities.",
    longDescription:
      "Good access control starts at the gate. We use trained personnel and clear procedures so you know who enters, when they enter, and under what conditions.",
    image:
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1600&auto=format&fit=crop",
    features: [
      "Visitor registration",
      "Badge and pass systems",
      "Vehicle control",
      "Contractor management",
      "Clear records and reporting",
    ],
    idealFor: [
      "Office complexes",
      "Warehouses",
      "Restricted facilities",
      "Mixed use developments",
    ],
  },
  {
    slug: "security-consulting",
    number: "06",
    title: "Security Consulting",
    shortTitle: "Security Consulting",
    description: "Practical security planning based on your real risks.",
    longDescription:
      "Solid security begins with understanding the site. We help clients identify risks, design workable plans and put measures in place that fit their operations and budget.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
    features: [
      "Site risk assessment",
      "Security plan design",
      "Procedure development",
      "Training guidance",
      "Ongoing review",
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
