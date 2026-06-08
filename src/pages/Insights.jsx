import SEO from "../components/seo/SEO";
import CTA from "../components/home/CTA";
import { FaArrowRight, FaBookOpen, FaCalendarDays, FaLightbulb } from "react-icons/fa6";
import { blogs } from "../data/blogs";
import { Link } from "react-router-dom";

const Insights = () => {
    return (
        <>
            <SEO
                title="Insights"
                description="Insights by Kennedy Maurice on healthcare business, medical equipment sourcing, business registration, AI productivity, web development and institutional support."
                path="/insights"
            />

            <section className="relative overflow-hidden bg-slate-950 pt-32 pt-28 pb-6 text-white md:pt-30 md:pb-12">
                <div className="absolute left-0 top-0 h-[32rem] w-[32rem] rounded-full bg-teal-500/20 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-yellow-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-teal-300 backdrop-blur">
                            Insights
                        </div>

                        <h1 className="mt-5 text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                            Practical thinking for healthcare, business, technology and growth.
                        </h1>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            Guides, notes and practical ideas on healthcare business, procurement,
                            institutional development, digital systems, AI productivity and
                            entrepreneurship.
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-white py-6 md:py-12">
                <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-teal-50 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-slate-100 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="mb-12 grid gap-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-7 md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-10">
                        <div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-teal-300">
                                    <FaLightbulb />
                                </div>

                                <h2 className="text-2xl font-black text-slate-950">
                                    Knowledge that supports execution
                                </h2>
                            </div>

                            <p className="mt-4 leading-8 text-slate-600">
                                This section will grow into a practical knowledge hub for
                                entrepreneurs, healthcare founders, institutions and business
                                leaders who want clarity before taking action.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white p-6 shadow-sm">
                            <p className="text-4xl font-black text-teal-700">12+</p>
                            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-500">
                                Planned Expert Guides
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((post, index) => (
                            <article
                                key={post.title}
                                className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/70"
                            >
                                <div className="absolute -right-6 -top-6 text-7xl font-black text-slate-100 transition group-hover:text-teal-50">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <Link
                                    to={`/insights/${post.slug}`}
                                    className="relative -mx-7 -mt-7 mb-6 block overflow-hidden"
                                >
                                    <img
                                        src={post.image}
                                        alt={post.imageAlt}
                                        className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />

                                    <div className="absolute left-4 top-4">
                                        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-wider text-teal-700 backdrop-blur">
                                            {post.category}
                                        </span>
                                    </div>
                                </Link>

                                <h2 className="relative mt-6 text-2xl font-black leading-tight tracking-tight">
                                    <Link
                                        to={`/insights/${post.slug}`}
                                        className="text-slate-950 transition-colors duration-300 hover:text-teal-700"
                                    >
                                        {post.title}
                                    </Link>
                                </h2>

                                <p className="relative mt-4 leading-8 text-slate-600">
                                    {post.excerpt}
                                </p>

                                <div className="relative mt-6 h-px w-full bg-gradient-to-r from-teal-200 via-slate-200 to-transparent" />

                                <div className="relative mt-auto flex items-center justify-between pt-6">
                                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                                        <FaCalendarDays className="text-teal-700" />
                                        {post.date}
                                    </div>

                                    <Link
                                        to={`/insights/${post.slug}`}
                                        className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-700"
                                    >
                                        Read
                                        <FaArrowRight className="text-xs" />
                                    </Link>
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

export default Insights;
