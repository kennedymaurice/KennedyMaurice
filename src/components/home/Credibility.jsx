import {
    BriefcaseBusiness,
    Building2,
    Code2,
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
    },
    {
        icon: Building2,
        title: "Founder & CEO",
        detail: "DigimedExpo Global Marketplace",
    },
    {
        icon: GraduationCap,
        title: "Principal",
        detail: "Nairobi Institute of Medical & Emergency Training",
    },
    {
        icon: HeartPulse,
        title: "Chief Operations Officer",
        detail: "Quick Safe Ambulance Services Limited",
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
        <section className="bg-white py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="max-w-3xl">
                    <span className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-teal-700">
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

                <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {credentials.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={`${item.title}-${item.detail}`}
                                className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white">
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <h3 className="text-base font-bold leading-tight text-slate-950">
                                        {item.title}
                                    </h3>
                                </div>

                                <div className="mt-5 border-l-2 border-teal-100 pl-4">
                                    <p className="text-sm leading-7 text-slate-600">
                                        {item.detail}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Credibility;
