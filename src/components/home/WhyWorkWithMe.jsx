import { motion } from "framer-motion";
import {
    BrainCircuit,
    BriefcaseBusiness,
    Globe,
    HeartPulse,
    PackageSearch,
    ShieldCheck,
} from "lucide-react";

const reasons = [
    {
        icon: HeartPulse,
        title: "Healthcare Industry Expertise",
        description:
            "As a Medical Laboratory Scientist and healthcare entrepreneur, I understand healthcare systems, medical businesses, laboratories, institutions, and healthcare operations.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Business & Regulatory Experience",
        description:
            "Extensive experience supporting startups, companies, societies, institutions, AGPO processes, compliance requirements, and operational structures.",
    },
    {
        icon: PackageSearch,
        title: "Procurement & Sourcing Knowledge",
        description:
            "Hands-on experience sourcing medical equipment, evaluating suppliers, reviewing specifications, supporting RFQs, and facilitating procurement processes.",
    },
    {
        icon: Globe,
        title: "Digital Platforms & Technology",
        description:
            "From business websites to healthcare platforms and marketplaces, I build practical digital solutions that support growth and efficiency.",
    },
    {
        icon: BrainCircuit,
        title: "AI & Productivity Transformation",
        description:
            "Helping individuals and organizations leverage AI for content creation, documentation, operations, training, research, and productivity.",
    },
    {
        icon: ShieldCheck,
        title: "Execution-Oriented Approach",
        description:
            "Beyond strategy, I help implement solutions, coordinate stakeholders, build systems, and move projects from idea to reality.",
    },
];

const WhyWorkWithMe = () => {
    return (
        <section className="bg-slate-950 py-6 md:py-12 text-white">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="max-w-3xl">
                    <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-black uppercase tracking-[0.25em] text-teal-300 backdrop-blur">
                        Why Organizations Choose Kennedy Maurice
                    </span>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                        Practical expertise across healthcare, business and technology.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        Most professionals specialize in one area. My work combines healthcare
                        knowledge, business development, digital systems, procurement support,
                        compliance experience, and AI adoption to help organizations grow with
                        confidence.
                    </p>
                </div>

                <div className="mt-6 md:mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;

                        return (
                            <motion.div
                                key={reason.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-white/[0.06]"
                            >
                                <div className="absolute right-6 top-4 text-6xl font-black text-white/[0.04]">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div className="relative flex items-center gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-300 transition group-hover:bg-teal-500 group-hover:text-white">
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <h3 className="text-lg font-black leading-tight text-white">
                                        {reason.title}
                                    </h3>
                                </div>

                                <div className="mt-6 h-px w-full bg-gradient-to-r from-teal-400/30 via-white/10 to-transparent" />

                                <p className="mt-6 leading-8 text-slate-300">
                                    {reason.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-6 md:mt-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-10">
                    <div className="grid gap-8 md:grid-cols-4">
                        <div>
                            <p className="text-5xl font-black text-teal-300">8+</p>
                            <p className="mt-3 text-sm font-medium uppercase tracking-wider text-slate-400">
                                Years Experience
                            </p>
                        </div>

                        <div>
                            <p className="text-5xl font-black text-teal-300">4</p>
                            <p className="mt-3 text-sm font-medium uppercase tracking-wider text-slate-400">
                                Executive Roles
                            </p>
                        </div>

                        <div>
                            <p className="text-5xl font-black text-teal-300">7+</p>
                            <p className="mt-3 text-sm font-medium uppercase tracking-wider text-slate-400">
                                Service Disciplines
                            </p>
                        </div>

                        <div>
                            <p className="text-5xl font-black text-teal-300">100%</p>
                            <p className="mt-3 text-sm font-medium uppercase tracking-wider text-slate-400">
                                Execution Focused
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyWorkWithMe;
