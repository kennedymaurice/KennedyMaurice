import { useState } from "react";
import {
    FaEnvelope,
    FaLocationDot,
    FaPhone,
    FaWhatsapp,
    FaPaperPlane,
    FaCircleCheck,
} from "react-icons/fa6";
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
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Full name is required.";
        if (!formData.email.trim()) newErrors.email = "Email address is required.";
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
        if (!formData.service.trim()) newErrors.service = "Please select a service.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        const whatsappMessage = `
Hello Kennedy Maurice,

My name is ${formData.name}.

I would like to inquire about: ${formData.service}

Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
    `.trim();

        const whatsappUrl = `https://wa.me/254737320000?text=${encodeURIComponent(
            whatsappMessage
        )}`;

        window.open(whatsappUrl, "_blank");
    };
    return (
        <>
            <SEO
                title="Contact"
                description="Contact Kennedy Maurice for healthcare consultancy, medical equipment sourcing, business registration, web development, AI training and institutional support."
                path="/contact"
            />

            <section className="relative overflow-hidden bg-slate-950 pt-32 pt-28 pb-6 text-white md:pt-30 md:pb-12">
                <div className="absolute left-0 top-0 h-[32rem] w-[32rem] rounded-full bg-teal-500/20 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-yellow-400/10 blur-3xl" />
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-teal-300 backdrop-blur">
                            Contact
                        </div>

                        <h1 className="mt-5 text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl">
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

            <section className="relative overflow-hidden bg-white py-6 md:py-12">
                <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-teal-50 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-slate-100 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-xl md:p-8">
                            <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-teal-300">
                                Get in Touch
                            </span>

                            <h2 className="mt-6 text-3xl font-black tracking-tight md:text-4xl">
                                Let us discuss your project or service need.
                            </h2>

                            <p className="mt-5 leading-8 text-slate-300">
                                Reach out for healthcare consulting, medical equipment sourcing,
                                business registration, institutional support, web development, AI
                                training or digital strategy.
                            </p>

                            <div className="mt-8 space-y-5">
                                <a
                                    href="tel:+254737320000"
                                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-300">
                                        <FaPhone />
                                    </div>

                                    <div>
                                        <p className="font-bold text-white">Phone</p>
                                        <p className="mt-1 text-sm text-slate-300">
                                            +254 737 320 000
                                        </p>
                                        <p className="mt-1 text-sm text-slate-300">
                                            +254 725 543 354
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href="mailto:ken@digimedexpo.com"
                                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-300">
                                        <FaEnvelope />
                                    </div>

                                    <div>
                                        <p className="font-bold text-white">Email</p>
                                        <p className="mt-1 text-sm text-slate-300">
                                            ken@digimedexpo.com
                                        </p>
                                        <p className="mt-1 text-sm text-slate-300">
                                            kennedymaurice76@gmail.com
                                        </p>
                                    </div>
                                </a>

                                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-300">
                                        <FaLocationDot />
                                    </div>

                                    <div>
                                        <p className="font-bold text-white">Location</p>
                                        <p className="mt-1 text-sm text-slate-300">
                                            Nairobi, Kenya
                                        </p>
                                    </div>
                                </div>

                                <a
                                    href="https://wa.me/254737320000"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-3 rounded-full bg-green-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-green-700"
                                >
                                    <FaWhatsapp />
                                    Chat Directly on WhatsApp
                                </a>
                            </div>
                        </div>

                        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
                            <div className="flex items-start justify-between gap-5">
                                <div>
                                    <span className="inline-flex rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-teal-700">
                                        Inquiry Form
                                    </span>

                                    <h3 className="mt-5 text-3xl font-black text-slate-950">
                                        Send a WhatsApp Inquiry
                                    </h3>

                                    <p className="mt-3 leading-7 text-slate-600">
                                        Fill in the details below. The button will open WhatsApp
                                        with your message already prepared.
                                    </p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                                <div className="grid gap-5 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-bold text-slate-700">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>

                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full rounded-2xl border bg-white px-4 py-4 outline-none transition focus:border-teal-600 ${
                                                errors.name ? "border-red-400" : "border-slate-300"
                                            }`}
                                            placeholder="Your name"
                                        />

                                        {errors.name && (
                                            <p className="mt-2 text-sm font-semibold text-red-500">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-bold text-slate-700">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full rounded-2xl border bg-white px-4 py-4 outline-none transition focus:border-teal-600 ${
                                                errors.email ? "border-red-400" : "border-slate-300"
                                            }`}
                                            placeholder="your@email.com"
                                        />

                                        {errors.email && (
                                            <p className="mt-2 text-sm font-semibold text-red-500">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid gap-5 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-bold text-slate-700">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>

                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={`w-full rounded-2xl border bg-white px-4 py-4 outline-none transition focus:border-teal-600 ${
                                                errors.phone ? "border-red-400" : "border-slate-300"
                                            }`}
                                            placeholder="+254..."
                                        />

                                        {errors.phone && (
                                            <p className="mt-2 text-sm font-semibold text-red-500">
                                                {errors.phone}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-bold text-slate-700">
                                            Service Needed <span className="text-red-500">*</span>
                                        </label>

                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className={`w-full rounded-2xl border bg-white px-4 py-4 outline-none transition focus:border-teal-600 ${
                                                errors.service
                                                    ? "border-red-400"
                                                    : "border-slate-300"
                                            }`}
                                        >
                                            <option value="">Select a service</option>

                                            {services.map((service) => (
                                                <option key={service} value={service}>
                                                    {service}
                                                </option>
                                            ))}
                                        </select>

                                        {errors.service && (
                                            <p className="mt-2 text-sm font-semibold text-red-500">
                                                {errors.service}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-bold text-slate-700">
                                        Message <span className="text-red-500">*</span>
                                    </label>

                                    <textarea
                                        rows="5"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`w-full resize-none rounded-2xl border bg-white px-4 py-4 outline-none transition focus:border-teal-600 ${
                                            errors.message ? "border-red-400" : "border-slate-300"
                                        }`}
                                        placeholder="Tell me about your project..."
                                    />

                                    {errors.message && (
                                        <p className="mt-2 text-sm font-semibold text-red-500">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                <div className="rounded-2xl border border-teal-100 bg-teal-50 p-4">
                                    <div className="flex gap-3">
                                        <FaCircleCheck className="mt-1 shrink-0 text-teal-700" />

                                        <p className="text-sm leading-6 text-teal-950">
                                            Your inquiry will open in WhatsApp with a structured
                                            message. You can review it before sending.
                                        </p>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-7 py-4 font-bold text-white transition hover:bg-teal-800 md:w-auto"
                                >
                                    <FaPaperPlane />
                                    Send via WhatsApp
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
