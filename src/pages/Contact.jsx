import SEO from "../components/seo/SEO";
import CTA from "../components/home/CTA";
import { Mail, MapPin, Phone, MessageCircle, Send } from "lucide-react";

const services = [
    "Healthcare Business Consultancy",
    "Medical Equipment Sourcing",
    "Import Facilitation",
    "Business Registration",
    "TVET / Institutional Support",
    "Web Development",
    "AI Training",
    "Digital Marketing",
    "Other",
];

const Contact = () => {
    return (
        <>
            <SEO
                title="Contact"
                description="Contact Kennedy Maurice for healthcare consultancy, medical equipment sourcing, business registration, web development, AI training and institutional support."
                path="/contact"
            />

            <section className="bg-slate-950 pt-32 pb-20 text-white md:pt-40 md:pb-28">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-4xl">
                        <span className="text-sm font-bold uppercase tracking-[0.25em] text-teal-300">
                            Contact
                        </span>

                        <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
                            Let's discuss your project, business or idea.
                        </h1>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            Whether you need support with healthcare consultancy, procurement,
                            digital systems, compliance, AI training or business development, I'd be
                            glad to explore how I can help.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white py-20 md:py-28">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                        {/* Contact Details */}
                        <div>
                            <h2 className="text-3xl font-bold text-slate-950">Get in Touch</h2>

                            <p className="mt-4 leading-7 text-slate-600">
                                Reach out through your preferred channel or submit the inquiry form
                                and I'll get back to you.
                            </p>

                            <div className="mt-10 space-y-5">
                                <div className="flex gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-700 text-white">
                                        <Phone className="h-5 w-5" />
                                    </div>

                                    <div>
                                        <p className="font-bold text-slate-950">Phone</p>

                                        <p className="text-slate-600">+254 XXX XXX XXX</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-700 text-white">
                                        <Mail className="h-5 w-5" />
                                    </div>

                                    <div>
                                        <p className="font-bold text-slate-950">Email</p>

                                        <p className="text-slate-600">info@kennedymaurice.co.ke</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-700 text-white">
                                        <MapPin className="h-5 w-5" />
                                    </div>

                                    <div>
                                        <p className="font-bold text-slate-950">Location</p>

                                        <p className="text-slate-600">Nairobi, Kenya</p>
                                    </div>
                                </div>

                                <a
                                    href="https://wa.me/254700000000"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-600 px-6 py-4 font-bold text-white transition hover:bg-green-700"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
                            <h3 className="text-2xl font-bold text-slate-950">Send an Inquiry</h3>

                            <form className="mt-8 space-y-5">
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-600"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-600"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Phone Number
                                    </label>

                                    <input
                                        type="tel"
                                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-600"
                                        placeholder="+254..."
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Service Needed
                                    </label>

                                    <select className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-600">
                                        <option>Select a service</option>

                                        {services.map((service) => (
                                            <option key={service}>{service}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Message
                                    </label>

                                    <textarea
                                        rows="5"
                                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-600"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-7 py-4 font-bold text-white transition hover:bg-teal-800"
                                >
                                    <Send className="h-4 w-4" />
                                    Send Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
};

export default Contact;
