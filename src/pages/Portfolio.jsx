import SEO from "../components/seo/SEO";
import CTA from "../components/home/CTA";
import { projects } from "../data/projects";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
    return (
        <>
            <SEO
                title="Portfolio"
                description="Explore projects by Kennedy Maurice, including DigimedExpo, Kencare Medical Systems Limited, NIMET, Biospan Medical Solutions Limited and other healthcare and digital projects."
                path="/portfolio"
            />

            <section className="bg-slate-950 pt-32 pb-20 text-white md:pt-40 md:pb-28">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-4xl">
                        <span className="text-sm font-bold uppercase tracking-[0.25em] text-teal-300">
                            Portfolio
                        </span>

                        <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
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

            <section className="bg-white py-20 md:py-28">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-7 md:grid-cols-2">
                        {projects.map((project) => (
                            <article
                                key={project.title}
                                className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-teal-200 hover:bg-white hover:shadow-xl"
                            >
                                <div className="flex items-start justify-between gap-5">
                                    <div>
                                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
                                            {project.category}
                                        </p>

                                        <h2 className="mt-3 text-2xl font-bold text-slate-950">
                                            {project.title}
                                        </h2>
                                    </div>

                                    {project.url && project.url !== "#" && (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`Visit ${project.title}`}
                                            className="rounded-full border border-slate-200 bg-white p-3 text-slate-500 transition hover:border-teal-700 hover:text-teal-700"
                                        >
                                            <ExternalLink className="h-5 w-5" />
                                        </a>
                                    )}
                                </div>

                                <p className="mt-5 leading-7 text-slate-600">
                                    {project.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.services.map((service) => (
                                        <span
                                            key={service}
                                            className="rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-600 ring-1 ring-slate-200"
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
                                        className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-teal-700 transition hover:text-slate-950"
                                    >
                                        Visit Project
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                )}
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
