import SEO from "../components/seo/SEO";
import CTA from "../components/home/CTA";
import { services } from "../data/services";
import { FaCircleCheck, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Services = () => {
    const getServiceWhatsAppLink = (service) => {
        const message = `
Hello Kennedy,

I am interested in discussing this service:

- Service: ${service.title}
- Link: https://www.kennedymaurice.com/services/${service.slug}

Kindly guide me on the next steps.
    `.trim();

        return `https://wa.me/254737320000?text=${encodeURIComponent(message)}`;
    };

    return (
        <>
            <SEO
                title="Services"
                description="Explore Kennedy Maurice's services in healthcare consultancy, medical equipment sourcing, business registration, TVET support, web development, AI training and digital marketing."
                path="/services"
            />

            <section className="relative overflow-hidden bg-slate-950 pt-32 pt-28 pb-6 text-white md:pt-30 md:pb-12">
                <div className="absolute left-0 top-0 h-[32rem] w-[32rem] rounded-full bg-teal-500/20 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-yellow-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-4xl">
                        <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-teal-300">
                            Services
                        </span>

                        <h1 className="mt-5 text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                            Practical support for businesses, healthcare organizations and
                            institutions.
                        </h1>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            I help clients establish, digitize, comply, procure, market and grow
                            through hands-on consulting, digital systems, institutional support, AI
                            training and operational execution.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white py-6 md:py-12">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <section
                                    key={service.slug}
                                    id={service.slug}
                                    className={`scroll-mt-28 rounded-[2rem] border border-slate-200 ${
                                        index % 2 === 0 ? "bg-slate-50" : "bg-white"
                                    }`}
                                >
                                    <div className="grid gap-8 p-5 md:p-7 md:p-10 lg:grid-cols-[0.85fr_1.15fr]">
                                        <div className="self-start lg:sticky lg:top-28">
                                            <div className="flex items-center gap-4">
                                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-teal-300">
                                                    <Icon className="h-7 w-7" />
                                                </div>

                                                <h2 className="text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
                                                    {service.title}
                                                </h2>
                                            </div>

                                            <p className="mt-6 leading-8 text-slate-600">
                                                {service.overview || service.description}
                                            </p>

                                            <a
                                                href={getServiceWhatsAppLink(service)}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mt-4 inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-800 md:mt-7"
                                            >
                                                Discuss This Service
                                                <FaArrowRight className="text-xs" />
                                            </a>
                                        </div>

                                        <div className="grid gap-6">
                                            <div>
                                                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">
                                                    What This Covers
                                                </h3>

                                                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                                    {service.items.map((item) => (
                                                        <div
                                                            key={item}
                                                            className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                                                        >
                                                            <FaCircleCheck className="mt-1 shrink-0 text-teal-700" />
                                                            <span className="text-sm leading-6 text-slate-700">
                                                                {item}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="grid gap-5 md:grid-cols-2">
                                                {service.idealFor && (
                                                    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
                                                        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900">
                                                            Ideal For
                                                        </h3>

                                                        <ul className="mt-4 space-y-3">
                                                            {service.idealFor.map((item) => (
                                                                <li
                                                                    key={item}
                                                                    className="text-sm leading-6 text-slate-600"
                                                                >
                                                                    • {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {service.outcomes && (
                                                    <div className="rounded-[1.5rem] border border-teal-100 bg-teal-50 p-6">
                                                        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-teal-900">
                                                            Expected Outcomes
                                                        </h3>

                                                        <ul className="mt-4 space-y-3">
                                                            {service.outcomes.map((item) => (
                                                                <li
                                                                    key={item}
                                                                    className="text-sm leading-6 text-teal-950"
                                                                >
                                                                    • {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
};

export default Services;
