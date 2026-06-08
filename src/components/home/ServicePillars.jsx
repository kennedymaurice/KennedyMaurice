import { Link } from "react-router-dom";
import { FaArrowRight, FaCircleCheck } from "react-icons/fa6";
import { services } from "../../data/services";

const ServicePillars = () => {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-6 md:py-12">
            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-teal-100/70 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-100/60 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <span className="inline-flex rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-teal-700 shadow-sm">
                        What I Do
                    </span>

                    <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                        Executive support across healthcare, business, technology and growth.
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                        I help founders, healthcare organizations, institutions and service-based
                        businesses move from idea to execution through strategy, compliance,
                        procurement, digital systems, AI productivity and market development.
                    </p>
                </div>

                <div className="mt-6 md:mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.slug}
                                className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-2xl hover:shadow-slate-200/70"
                            >
                                <div className="absolute right-6 top-6 text-7xl font-black leading-none text-slate-100 transition group-hover:text-teal-50">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div className="relative flex items-center gap-4">
                                    <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-teal-300 shadow-lg shadow-slate-200 transition group-hover:bg-teal-700 group-hover:text-white">
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <h3 className="max-w-[260px] text-xl font-black leading-tight text-slate-950">
                                        {service.title}
                                    </h3>
                                </div>

                                <p className="relative mt-6 leading-8 text-slate-600">
                                    {service.description}
                                </p>

                                <div className="relative mt-7 h-px w-full bg-gradient-to-r from-teal-200 via-slate-200 to-transparent" />

                                <ul className="relative mt-6 space-y-3">
                                    {service.items.slice(0, 4).map((item) => (
                                        <li
                                            key={item}
                                            className="flex gap-3 text-sm leading-6 text-slate-600"
                                        >
                                            <FaCircleCheck className="mt-1 shrink-0 text-sm text-teal-700" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="relative mt-auto pt-8">
                                    <Link
                                        to="/services"
                                        className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-700"
                                    >
                                        Explore Service
                                        <FaArrowRight className="text-xs" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-6 md:mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                    <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                        <div>
                            <h3 className="text-2xl font-black tracking-tight text-slate-950">
                                Not sure where your need fits?
                            </h3>

                            <p className="mt-3 leading-7 text-slate-600">
                                Many projects cut across multiple areas: registration, compliance,
                                procurement, website development, AI training, marketing and
                                operations. Start with a consultation and we can define the right
                                pathway.
                            </p>
                        </div>

                        <div className="flex md:justify-end">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-4 text-sm font-bold text-white transition hover:bg-teal-800"
                            >
                                Discuss Your Project
                                <FaArrowRight className="text-xs" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicePillars;
