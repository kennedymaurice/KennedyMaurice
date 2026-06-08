import { Link } from "react-router-dom";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

const CTA = () => {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-6 md:py-12">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-teal-100 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-slate-200 blur-3xl" />
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-950 p-5 md:p-8 text-white md:p-14">
                    <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />
                    <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />

                    <div className="relative grid gap-6 md:gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
                        <div>
                            <span className="text-sm font-bold uppercase tracking-[0.25em] text-teal-300">
                                Work With Me
                            </span>

                            <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
                                Need help establishing, digitizing, procuring, marketing or growing?
                            </h2>

                            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                                Whether you are starting a healthcare business, building a digital
                                platform, sourcing equipment, registering an organization, or
                                training your team on AI productivity, I can help you move from idea
                                to execution.
                            </p>
                        </div>

                        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                            <p className="text-sm font-semibold text-slate-300">
                                Start with a conversation.
                            </p>

                            <div className="mt-6 space-y-4">
                                <Link
                                    to="/contact"
                                    className="flex items-center justify-center gap-2 rounded-full bg-teal-500 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-teal-400"
                                >
                                    Book a Consultation
                                    <ArrowRight className="h-4 w-4" />
                                </Link>

                                <a
                                    href="mailto:info@kennedymaurice.co.ke"
                                    className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
                                >
                                    <Mail className="h-4 w-4" />
                                    Send Email
                                </a>

                                <a
                                    href="https://wa.me/254700000000"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
                                >
                                    <MessageCircle className="h-4 w-4" />
                                    WhatsApp Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
