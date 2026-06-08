import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Globe2, Stethoscope, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
    "Healthcare business consulting",
    "Medical equipment sourcing",
    "MERN stack development",
    "AI productivity training",
];

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-slate-950 pt-28 text-white md:pt-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(234,179,8,0.16),transparent_30%)]" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-6 md:gap-14 px-5 pb-12 lg:grid-cols-2 lg:px-8 lg:pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-teal-100 backdrop-blur">
                        <Globe2 className="h-4 w-4 text-teal-300" />
                        Healthcare • Business • Technology
                    </div>

                    <h1 className="max-w-4xl text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                        Building businesses, digital platforms & healthcare solutions.
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                        I help healthcare businesses, training institutions, entrepreneurs, and
                        service-based organizations establish, digitize, comply, procure, market,
                        and grow through practical consulting, technology, AI, and operational
                        support.
                    </p>

                    <div className="mt-6 md:mt-8 flex flex-col gap-4 sm:flex-row">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-teal-400"
                        >
                            Book a Consultation
                            <ArrowRight className="h-4 w-4" />
                        </Link>

                        <Link
                            to="/portfolio"
                            className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
                        >
                            View My Work
                        </Link>
                    </div>

                    <div className="mt-6 md:mt-8 grid gap-3 sm:grid-cols-2">
                        {highlights.map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-3 text-sm text-slate-300"
                            >
                                <CheckCircle2 className="h-5 w-5 text-teal-300" />
                                {item}
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="relative"
                >
                    <div className="relative mx-auto max-w-md rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
                        <div className="overflow-hidden rounded-[1.5rem] bg-slate-900">
                            <img
                                src="/kennedy-maurice.webp"
                                alt="Kennedy Maurice"
                                className="h-[460px] w-full object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-slate-900/95 p-5 shadow-2xl backdrop-blur">
                            <p className="text-sm font-semibold text-teal-300">Kennedy Maurice</p>
                            <p className="mt-1 text-sm text-slate-300">
                                Healthcare Business, Digital Systems & Market Access Consultant
                            </p>
                        </div>
                    </div>

                    <div className="absolute -left-5 top-10 hidden rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur md:block">
                        <Stethoscope className="h-7 w-7 text-teal-300" />
                    </div>

                    <div className="absolute -right-5 bottom-24 hidden rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur md:block">
                        <Code2 className="h-7 w-7 text-yellow-300" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
