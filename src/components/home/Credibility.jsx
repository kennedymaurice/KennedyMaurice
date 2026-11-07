import {
    BriefcaseBusiness,
    Building2,
    Code2,
    ExternalLink,
    GraduationCap,
    HeartPulse,
    Sparkles,
    Stethoscope,
} from "lucide-react";

const credentials = [
    {
        icon: Building2,
        title: "Founder & CEO",
        detail: "Kencare Medical Systems Limited",
        url: "https://www.kencare.co.ke",
    },
    {
        icon: Building2,
        title: "Founder & CEO",
        detail: "DigimedExpo Global Marketplace",
        url: "https://www.digimedexpo.com",
    },
    {
        icon: GraduationCap,
        title: "Principal",
        detail: "Nairobi Institute of Medical & Emergency Training",
        url: "https://www.nimet.ac.ke",
    },
    {
        icon: HeartPulse,
        title: "Chief Operations Officer",
        detail: "Quick Safe Ambulance Services Limited",
        url: "https://www.quicksafe.co.ke",
    },
    {
        icon: Stethoscope,
        title: "Medical Laboratory Scientist",
        detail: "Bachelor of Science in Medical Laboratory Science",
    },
    {
        icon: Code2,
        title: "Full Stack Developer",
        detail: "MERN Stack, React, Node.js, WordPress & CMS Platforms",
    },
    {
        icon: Sparkles,
        title: "AI Productivity Trainer",
        detail: "AI Adoption, Content Creation, Automation & Workflows",
    },
    {
        icon: BriefcaseBusiness,
        title: "Business Consultant",
        detail: "Healthcare, Procurement, Compliance & Digital Transformation",
    },
];

const Credibility = () => {
    return (
        <section className="bg-white py-6 md:py-12">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="max-w-3xl">
                    <span className="inline-flex rounded-full border border-[#ff7d09]/30 bg-[#ff7d09]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#ff7d09]">
                        Credibility & Experience
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                        A rare combination of healthcare insight, business leadership and technology
                        execution.
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600">
                        My work cuts across healthcare entrepreneurship, medical equipment,
                        institutional leadership, digital systems, AI adoption, compliance support
                        and market access.
                    </p>
                </div>

                <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2 xl:grid-cols-4">
                    {credentials.map((item) => {
                        const Icon = item.icon;

                        const cardContent = (
                            <>
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ff7d09]/10 text-[#ff7d09] transition-all duration-300 group-hover:bg-[#ff7d09] group-hover:text-white">
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <h3 className="text-base font-bold leading-tight text-slate-950">
                                        {item.title}
                                    </h3>

                                    {item.url && (
                                        <ExternalLink className="ml-auto h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:text-[#ff7d09]" />
                                    )}
                                </div>

                                <div className="mt-5 border-l-2 border-[#ff7d09]/20 pl-4 transition-colors duration-300 group-hover:border-[#ff7d09]">
                                    <p
                                        className={`text-sm leading-7 ${
                                            item.url
                                                ? "font-semibold text-slate-700 transition-colors group-hover:text-[#ff7d09]"
                                                : "text-slate-600"
                                        }`}
                                    >
                                        {item.detail}
                                    </p>
                                </div>
                            </>
                        );

                        const cardClasses = `
                            group rounded-[2rem] border border-slate-200 bg-white p-6
                            shadow-sm transition-all duration-300
                            hover:-translate-y-1 hover:border-[#ff7d09]/40 hover:shadow-xl
                            ${
                                item.url
                                    ? "cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ff7d09]/40 focus:ring-offset-2"
                                    : ""
                            }
                        `;

                        return item.url ? (
                            <a
                                key={`${item.title}-${item.detail}`}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit ${item.detail}`}
                                className={cardClasses}
                            >
                                {cardContent}
                            </a>
                        ) : (
                            <div key={`${item.title}-${item.detail}`} className={cardClasses}>
                                {cardContent}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Credibility;
