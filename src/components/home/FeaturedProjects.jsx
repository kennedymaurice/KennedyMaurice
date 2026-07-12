import { Link } from "react-router-dom";
import { FaArrowRight, FaExternalLinkAlt, FaLayerGroup } from "react-icons/fa";
import { projects } from "../../data/projects";

const FeaturedProjects = () => {
    const featuredProjects = projects.slice(0, 4);

    return (
        <section className="relative overflow-hidden bg-white py-6 md:py-12">
            <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#ff7d09]/10 blur-3xl" />
            <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-slate-100 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-3xl">
                        <span className="inline-flex rounded-full border border-[#ff7d09]/30 bg-[#ff7d09]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#ff7d09]">
                            Featured Work
                        </span>

                        <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                            Projects that demonstrate strategy, execution and industry depth.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            My work spans healthcare marketplaces, medical equipment businesses,
                            training institutions, professional websites, digital platforms and
                            healthcare service operations.
                        </p>
                    </div>

                    <Link
                        to="/portfolio"
                        className="inline-flex w-fit items-center gap-2 rounded-full bg-[#100484] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#ff7d09]"
                    >
                        View Full Portfolio
                        <FaArrowRight className="text-xs" />
                    </Link>
                </div>

                <div className="mt-6 md:mt-8 grid gap-7 md:grid-cols-2">
                    {featuredProjects.map((project, index) => (
                        <article
                            key={project.title}
                            className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ff7d09]/30 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/70"
                        >
                            <div className="absolute -right-3 -top-8 flex h-28 w-28 items-center justify-center rounded-full bg-white text-5xl font-black text-slate-100 transition group-hover:bg-[#ff7d09]/10 group-hover:text-[#d7fffb] text-slate-100 transition group-hover:text-[#ff7d09]/15 dark:!text-[rgba(255,255,255,0.10)] dark:group-hover:!text-[#03DAC6]/15">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <div className="relative flex items-start justify-between gap-5">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#100484] text-[#03DAC6] transition group-hover:bg-[#ff7d09] group-hover:text-white">
                                        <FaLayerGroup />
                                    </div>

                                    <div>
                                        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ff7d09]">
                                            {project.category}
                                        </p>

                                        <h3 className="mt-3 text-2xl font-black leading-tight text-slate-950">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>

                                {project.url && project.url !== "#" && (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`Visit ${project.title}`}
                                        className="relative rounded-full border border-slate-200 bg-white p-3 text-slate-500 transition hover:border-[#ff7d09] hover:bg-[#ff7d09] hover:text-white"
                                    >
                                        <FaExternalLinkAlt className="text-sm" />
                                    </a>
                                )}
                            </div>

                            <p className="relative mt-6 leading-8 text-slate-600">
                                {project.description}
                            </p>

                            <div className="relative mt-7 h-px w-full bg-gradient-to-r from-[#ff7d09]/35 via-[#1667FF]/20 to-transparent" />

                            <div className="relative mt-6 flex flex-wrap gap-2">
                                {project.services.map((service) => (
                                    <span
                                        key={service}
                                        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 transition group-hover:border-[#ff7d09]/20 group-hover:bg-[#ff7d09]/10 group-hover:text-[#100484]"
                                    >
                                        {service}
                                    </span>
                                ))}
                            </div>

                            {project.url && project.url !== "#" && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="relative mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#ff7d09] transition hover:text-slate-950"
                                >
                                    Visit Project
                                    <FaExternalLinkAlt className="text-xs" />
                                </a>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
