import { Link, useParams } from "react-router-dom";
import SEO from "../components/seo/SEO";
import CTA from "../components/home/CTA";
import { blogs } from "../data/blogs";
import {
    FaArrowLeft,
    FaCalendarDays,
    FaClock,
    FaCircleCheck,
    FaQuoteLeft,
    FaUserTie,
} from "react-icons/fa6";

const ContentBlock = ({ block }) => {
    if (block.type === "intro") {
        return (
            <p className="text-xl font-medium leading-10 text-slate-800 md:text-2xl">
                {block.text}
            </p>
        );
    }

    if (block.type === "heading") {
        return (
            <h2 className="mt-6 md:mt-10 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                {block.text}
            </h2>
        );
    }

    if (block.type === "paragraph") {
        return <p className="mt-6 text-lg leading-9 text-slate-700">{block.text}</p>;
    }

    if (block.type === "quote") {
        return (
            <blockquote className="mt-8 rounded-[2rem] border-l-4 border-teal-600 bg-slate-50 p-7">
                <FaQuoteLeft className="text-2xl text-teal-700" />
                <p className="mt-4 text-xl font-bold leading-9 text-slate-900">{block.text}</p>
            </blockquote>
        );
    }

    if (block.type === "list") {
        return (
            <ul className="mt-7 space-y-4">
                {block.items.map((item) => (
                    <li
                        key={item}
                        className="flex gap-4 rounded-2xl bg-slate-50 p-4 text-lg leading-8 text-slate-700"
                    >
                        <FaCircleCheck className="mt-2 shrink-0 text-teal-700" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        );
    }

    if (block.type === "steps") {
        return (
            <div className="mt-8 space-y-5">
                {block.items.map((item, index) => (
                    <div
                        key={item.title}
                        className="grid gap-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[auto_1fr]"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-teal-300">
                            {index + 1}
                        </div>

                        <div>
                            <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
                            <p className="mt-2 leading-8 text-slate-600">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (block.type === "callout") {
        return (
            <div className="mt-10 rounded-[2rem] border border-teal-200 bg-teal-50 p-7">
                {block.title && <h3 className="text-xl font-black text-teal-950">{block.title}</h3>}
                <p className="mt-3 text-lg font-semibold leading-8 text-teal-950">{block.text}</p>
            </div>
        );
    }

    return null;
};

const BlogDetails = () => {
    const { slug } = useParams();
    const blog = blogs.find((item) => item.slug === slug);
    const otherInsights = blogs.filter((item) => item.slug !== slug).slice(0, 4);

    if (!blog) {
        return (
            <section className="bg-white pt-32 pb-20">
                <div className="mx-auto max-w-4xl px-5">
                    <h1 className="text-4xl font-black text-slate-950">Article not found</h1>

                    <Link
                        to="/insights"
                        className="mt-6 inline-flex items-center gap-2 font-bold text-teal-700"
                    >
                        <FaArrowLeft />
                        Back to Insights
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <>
            <SEO
                title={blog.title}
                description={blog.excerpt}
                path={`/insights/${blog.slug}`}
                image={blog.image}
                type="article"
            />

            <section className="relative overflow-hidden bg-slate-950 pt-32 pt-28 pb-6 text-white md:pt-30 md:pb-12">
                <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl" />
                <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                    <Link
                        to="/insights"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-slate-200 transition hover:text-teal-300"
                    >
                        <FaArrowLeft className="text-xs" />
                        Back to Insights
                    </Link>

                    <div className="mt-10 grid gap-6 md:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div>
                            <p className="text-sm font-black uppercase tracking-[0.25em] text-teal-300">
                                {blog.category}
                            </p>

                            <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
                                {blog.title}
                            </h1>

                            <p className="mt-6 text-xl leading-9 text-slate-300">{blog.excerpt}</p>

                            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
                                <span className="inline-flex items-center gap-2">
                                    <FaCalendarDays className="text-teal-300" />
                                    {blog.date}
                                </span>

                                <span className="inline-flex items-center gap-2">
                                    <FaClock className="text-teal-300" />
                                    {blog.readTime}
                                </span>

                                {blog.author && (
                                    <span className="inline-flex items-center gap-2">
                                        <FaUserTie className="text-teal-300" />
                                        {blog.author.name}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-3 backdrop-blur">
                            <img
                                src={blog.image}
                                alt={blog.imageAlt || blog.title}
                                className="h-[360px] w-full rounded-[1.5rem] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <article className="bg-white py-6 md:py-12">
                <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.75fr_0.25fr] lg:px-8">
                    <div className="max-w-4xl">
                        {blog.content.map((block, index) => (
                            <ContentBlock key={index} block={block} />
                        ))}
                    </div>

                    <aside className="hidden lg:block">
                        <div className="sticky top-28 space-y-6">
                            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                                <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">
                                    Article Tags
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {blog.tags?.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-600 ring-1 ring-slate-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                                <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">
                                    Other Insights
                                </p>

                                <div className="mt-5 space-y-4">
                                    {otherInsights.map((item) => (
                                        <Link
                                            key={item.slug}
                                            to={`/insights/${item.slug}`}
                                            className="group block rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-teal-200 hover:shadow-md"
                                        >
                                            <p className="text-xs font-black uppercase tracking-[0.16em] text-teal-700">
                                                {item.category}
                                            </p>

                                            <h3 className="mt-2 text-sm font-black leading-6 text-slate-950 transition group-hover:text-teal-700">
                                                {item.title}
                                            </h3>

                                            <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
                                                {item.excerpt}
                                            </p>
                                        </Link>
                                    ))}
                                </div>

                                <Link
                                    to="/insights"
                                    className="mt-5 inline-flex text-sm font-bold text-teal-700 transition hover:text-slate-950"
                                >
                                    View all insights
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </article>

            <CTA />
        </>
    );
};

export default BlogDetails;
