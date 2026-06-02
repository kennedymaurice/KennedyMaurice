import {
    Activity,
    Building2,
    Code2,
    FileCheck2,
    GraduationCap,
    Megaphone,
    PackageSearch,
} from "lucide-react";

export const services = [
    {
        title: "Healthcare Business Consultancy",
        slug: "healthcare-business-consultancy",
        icon: Activity,
        description:
            "Practical consulting for healthcare startups, medical businesses, facilities, laboratories, and service providers.",
        items: [
            "Healthcare startup advisory",
            "Health facility setup guidance",
            "Medical business operations support",
            "Laboratory business consultancy",
            "Healthcare documentation and systems",
        ],
    },
    {
        title: "Medical Equipment Sourcing & Import Facilitation",
        slug: "medical-equipment-sourcing",
        icon: PackageSearch,
        description:
            "Support with sourcing, comparing, and coordinating procurement of medical, laboratory, institutional, and other equipment.",
        items: [
            "Medical equipment sourcing",
            "Laboratory equipment sourcing",
            "Supplier identification",
            "RFQ and quotation support",
            "Import coordination support",
        ],
    },
    {
        title: "Business Registration & Compliance",
        slug: "business-registration-compliance",
        icon: FileCheck2,
        description:
            "Assistance with business setup, statutory registrations, and compliance documentation for entrepreneurs and organizations.",
        items: [
            "Business name registration",
            "Company registration",
            "Partnership registration",
            "CBO and society registration",
            "KRA and AGPO support",
        ],
    },
    {
        title: "Institutional & TVET Support",
        slug: "institutional-tvet-support",
        icon: GraduationCap,
        description:
            "Support for training institutions, healthcare colleges, documentation, and regulatory processes.",
        items: [
            "TVET MIS process support",
            "Institutional documentation",
            "Policy and contract drafting",
            "Quality assurance support",
            "Course and program structuring",
        ],
    },
    {
        title: "Web Development & Digital Systems",
        slug: "web-development-digital-systems",
        icon: Code2,
        description:
            "Development of professional websites, platforms, dashboards, and digital systems using modern technologies.",
        items: [
            "React and MERN stack development",
            "Business websites",
            "Institutional websites",
            "Marketplace platforms",
            "WordPress and CMS solutions",
        ],
    },
    {
        title: "AI Training & Digital Productivity",
        slug: "ai-training-digital-productivity",
        icon: Building2,
        description:
            "Training individuals and teams on how to use AI to improve productivity, content creation, documentation, and operations.",
        items: [
            "AI literacy training",
            "Prompting for business users",
            "AI-assisted content creation",
            "AI video and image generation",
            "AI for admin and productivity workflows",
        ],
    },
];
