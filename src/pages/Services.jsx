import SEO from "../components/seo/SEO";
import CTA from "../components/home/CTA";
import { services } from "../data/services";
import { CheckCircle2 } from "lucide-react";

const Services = () => {
    return (
        <>
            <SEO
                title="Services"
                description="Explore Kennedy Maurice's services in healthcare consultancy, medical equipment sourcing, business registration, TVET support, web development, AI training and digital marketing."
                path="/services"
            />

            <section className="bg-slate-950 pt-32 pb-20 text-white md:pt-40 md:pb-28">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-4xl">
                        <span className="text-sm font-bold uppercase tracking-[0.25em] text-teal-300">
                            Services
                        </span>

                        <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
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

            <section className="bg-white py-20 md:py-28">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.slug}
                                    id={service.slug}
                                    className={`grid gap-8 rounded-[2rem] border border-slate-200 p-7 md:p-10 lg:grid-cols-[0.8fr_1.2fr] ${
                                        index % 2 === 0 ? "bg-slate-50" : "bg-white"
                                    }`}
                                >
                                    <div>
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-700 text-white">
                                            <Icon className="h-7 w-7" />
                                        </div>

                                        <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950">
                                            {service.title}
                                        </h2>

                                        <p className="mt-4 leading-7 text-slate-600">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        {service.items.map((item) => (
                                            <div
                                                key={item}
                                                className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                                            >
                                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
                                                <span className="text-sm leading-6 text-slate-700">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
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
