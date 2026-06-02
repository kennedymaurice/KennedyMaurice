import SEO from "../components/seo/SEO";
import CTA from "../components/home/CTA";
import {
    ArrowRight,
    BrainCircuit,
    BriefcaseBusiness,
    Code2,
    GraduationCap,
    HeartPulse,
    PackageSearch,
    Sparkles,
} from "lucide-react";

const milestones = [
    {
        year: "2018",
        title: "Medical Laboratory Science Foundation",
        description:
            "Graduated with a Bachelor of Science in Medical Laboratory Science from the Technical University of Kenya.",
    },
    {
        year: "Healthcare",
        title: "Healthcare Business & Operations",
        description:
            "Built practical experience across medical equipment, laboratory systems, procurement, healthcare operations and institutional support.",
    },
    {
        year: "Entrepreneurship",
        title: "Healthcare-Focused Ventures",
        description:
            "Founded and supported ventures including Kencare Medical Systems Limited and DigimedExpo.",
    },
    {
        year: "Technology",
        title: "Digital Platforms & Websites",
        description:
            "Developed websites, platforms and digital systems for healthcare businesses, institutions and professionals.",
    },
    {
        year: "Now",
        title: "Integrated Consulting & Execution",
        description:
            "Helping organizations establish, digitize, comply, procure, market and grow through practical advisory and implementation support.",
    },
];

const strengths = [
    {
        icon: HeartPulse,
        title: "Healthcare Understanding",
        text: "Clinical, business, operational and institutional insight grounded in real healthcare experience.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Business Execution",
        text: "Support from registration and compliance to operations, positioning, systems and growth.",
    },
    {
        icon: PackageSearch,
        title: "Procurement & Market Access",
        text: "Medical equipment sourcing, RFQ support, supplier engagement and procurement planning.",
    },
    {
        icon: Code2,
        title: "Digital Systems",
        text: "Websites, platforms and business systems built with modern web technologies.",
    },
    {
        icon: BrainCircuit,
        title: "AI Productivity",
        text: "Helping professionals and teams use AI for content, documentation, research and workflows.",
    },
    {
        icon: GraduationCap,
        title: "Institutional Support",
        text: "Support for training institutions in documentation, systems, compliance and development.",
    },
];

const About = () => {
    return (
        <>
            <SEO
                title="About"
                description="Learn about Kennedy Maurice, a healthcare business consultant, MERN Stack developer, medical equipment sourcing advisor, AI trainer and institutional development specialist."
                path="/about"
            />

            <section className="relative overflow-hidden bg-slate-950 pt-32 pb-20 text-white md:pt-40 md:pb-28">
                <div className="absolute left-0 top-0 h-[32rem] w-[32rem] rounded-full bg-teal-500/20 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-yellow-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-teal-300 backdrop-blur">
                                <Sparkles className="h-4 w-4" />
                                About Kennedy Maurice
                            </div>

                            <h1 className="mt-5 text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                                I build at the intersection of healthcare, business and technology.
                            </h1>

                            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
                                I help healthcare businesses, institutions, professionals and
                                entrepreneurs turn ideas into structured, compliant, visible and
                                digitally enabled organizations.
                            </p>

                            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
                                My background in Medical Laboratory Science gives me a strong
                                understanding of healthcare systems, while my experience in
                                entrepreneurship, web development and operations allows me to turn
                                ideas into practical, working solutions.
                            </p>

                            <div className="mt-10 grid gap-4 sm:grid-cols-3">
                                {["Healthcare", "Business", "Technology"].map((item) => (
                                    <div
                                        key={item}
                                        className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur"
                                    >
                                        <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-300">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-teal-400/30 via-white/5 to-yellow-400/20 blur-2xl" />

                            <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
                                <img
                                    src="/ken.webp"
                                    alt="Kennedy Maurice"
                                    className="h-[520px] w-full rounded-[1.5rem] object-cover"
                                />

                                <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/10 bg-slate-950/80 p-6 backdrop-blur">
                                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">
                                        Consultant & Builder
                                    </p>
                                    <p className="mt-2 text-lg font-black">
                                        Healthcare Business • Digital Systems • Institutional
                                        Support
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-20 md:py-28">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                        <div className="lg:sticky lg:top-28">
                            <span className="text-sm font-black uppercase tracking-[0.25em] text-teal-700">
                                My Story
                            </span>

                            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                                Built through healthcare training, entrepreneurship and execution.
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                My work is shaped by practical experience — not theory alone. I
                                combine professional healthcare knowledge with business development,
                                procurement, institutional support, software development and AI
                                productivity.
                            </p>
                        </div>

                        <div className="relative space-y-5">
                            {milestones.map((item, index) => (
                                <div
                                    key={`${item.year}-${item.title}`}
                                    className="group relative overflow-hidden rounded-[1.7rem] border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/70"
                                >
                                    <div className="absolute -right-6 -top-8 text-8xl font-black text-slate-100 transition group-hover:text-teal-50">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <p className="relative text-sm font-black uppercase tracking-[0.2em] text-teal-700">
                                        {item.year}
                                    </p>

                                    <h3 className="relative mt-3 text-2xl font-black text-slate-950">
                                        {item.title}
                                    </h3>

                                    <p className="relative mt-3 leading-8 text-slate-600">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28">
                <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-teal-100 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-slate-200 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="text-sm font-black uppercase tracking-[0.25em] text-teal-700">
                            What Makes Me Different
                        </span>

                        <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                            Strategy backed by hands-on execution.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            I do not only advise. I help structure, document, digitize, source,
                            train, build and implement.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {strengths.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="group rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-2xl hover:shadow-slate-200/70"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-teal-300 transition group-hover:bg-teal-700 group-hover:text-white">
                                        <Icon className="h-7 w-7" />
                                    </div>

                                    <h3 className="mt-7 text-xl font-black text-slate-950">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 leading-8 text-slate-600">{item.text}</p>

                                    <div className="mt-6 flex items-center gap-2 text-sm font-black text-teal-700 opacity-0 transition group-hover:opacity-100">
                                        Learn more
                                        <ArrowRight className="h-4 w-4" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-slate-950 py-20 text-white md:py-28">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur md:grid-cols-[1fr_0.8fr] md:p-12">
                        <div>
                            <span className="text-sm font-black uppercase tracking-[0.25em] text-teal-300">
                                My Positioning
                            </span>

                            <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
                                I help serious ideas become structured, credible and executable.
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-300">
                                Whether it is a healthcare facility, training institution, medical
                                equipment business, digital platform or professional brand, my focus
                                is clarity, structure and implementation.
                            </p>
                        </div>

                        <div className="grid gap-4">
                            {[
                                "Healthcare business setup",
                                "Medical equipment planning",
                                "Institutional development",
                                "Website and platform development",
                                "AI productivity training",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4 text-sm font-bold text-slate-200"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
};

export default About;
