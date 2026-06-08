import SEO from "../components/seo/SEO";
import CTA from "../components/home/CTA";
import { projects } from "../data/projects";
import { ExternalLink } from "lucide-react";
import { FaArrowRight, FaExternalLinkAlt, FaLayerGroup } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

const Portfolio = () => {
    return (
        <>
            <SEO
                title="Portfolio"
                description="Explore projects by Kennedy Maurice, including DigimedExpo, Kencare Medical Systems Limited, NIMET, Biospan Medical Solutions Limited and other healthcare and digital projects."
                path="/portfolio"
            />

            <section className="relative overflow-hidden bg-slate-950 pt-32 pt-28 pb-6 text-white md:pt-30 md:pb-12">
                <div className="absolute left-0 top-0 h-[32rem] w-[32rem] rounded-full bg-teal-500/20 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-yellow-400/10 blur-3xl" />

                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-teal-300 backdrop-blur">
                            Portfolio
                        </div>

                        <h1 className="mt-5 text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                            Projects, platforms and organizations I have helped build.
                        </h1>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            My work spans healthcare marketplaces, medical equipment businesses,
                            healthcare training institutions, professional websites, emergency
                            medical services and digital systems.
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-white py-6 md:py-12">
                <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-teal-50 blur-3xl" />
                <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-slate-100 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-7 md:grid-cols-2">
                        {projects.map((project, index) => (
                            <article
                                key={project.title}
                                className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-5 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/70"
                            >
                                <div className="absolute -right-8 -top-8 flex h-28 w-28 items-center justify-center rounded-full bg-white text-5xl font-black text-slate-100 transition group-hover:bg-teal-50 group-hover:text-teal-100">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div className="relative flex items-start justify-between gap-5">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-teal-300 transition group-hover:bg-teal-700 group-hover:text-white">
                                            <FaLayerGroup />
                                        </div>

                                        <div>
                                            <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-700">
                                                {project.category}
                                            </p>

                                            <h2 className="mt-3 text-2xl font-black leading-tight text-slate-950">
                                                {project.title}
                                            </h2>
                                        </div>
                                    </div>

                                    {project.url && project.url !== "#" && (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`Visit ${project.title}`}
                                            className="relative rounded-full border border-slate-200 bg-white p-3 text-slate-500 transition hover:border-teal-700 hover:bg-teal-700 hover:text-white"
                                        >
                                            <FaExternalLinkAlt className="text-sm" />
                                        </a>
                                    )}
                                </div>

                                <p className="relative mt-6 leading-8 text-slate-600">
                                    {project.description}
                                </p>

                                <div className="relative mt-7 h-px w-full bg-gradient-to-r from-teal-200 via-slate-200 to-transparent" />

                                <div className="relative mt-6">
                                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                                        Scope Delivered
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.services.map((service) => (
                                            <span
                                                key={service}
                                                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 transition group-hover:border-teal-100 group-hover:bg-teal-50 group-hover:text-teal-800"
                                            >
                                                <FaCircleCheck className="text-teal-700" />
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative mt-8 flex flex-wrap items-center gap-3">
                                    {project.url && project.url !== "#" && (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-700"
                                        >
                                            Visit Project
                                            <FaExternalLinkAlt className="text-xs" />
                                        </a>
                                    )}

                                    <a
                                        href="/contact"
                                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-teal-700 hover:text-teal-700"
                                    >
                                        Discuss Similar Work
                                        <FaArrowRight className="text-xs" />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
};

export default Portfolio;
