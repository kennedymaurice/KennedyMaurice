import { Link } from "react-router-dom";
import {
    FaArrowRight,
    FaFacebookF,
    FaLinkedinIn,
    FaWhatsapp,
    FaXTwitter,
    FaInstagram,
    FaEnvelope,
    FaLocationDot,
    FaPhone,
} from "react-icons/fa6";

const footerLinks = [
    {
        title: "Explore",
        links: [
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Portfolio", path: "/portfolio" },
            { name: "Insights", path: "/insights" },
            { name: "Contact", path: "/contact" },
        ],
    },
    {
        title: "Services",
        links: [
            { name: "Healthcare Consultancy", path: "/services#healthcare-business-consultancy" },
            { name: "Medical Equipment Sourcing", path: "/services#medical-equipment-sourcing" },
            { name: "Business Registration", path: "/services#business-registration-compliance" },
            { name: "Web Development", path: "/services#web-development-digital-systems" },
            { name: "AI Training", path: "/services#ai-training-digital-productivity" },
            { name: "TVET Institutional Support", path: "/services#tvet-institutional-support" },
        ],
    },
];

const Footer = () => {
    const year = new Date().getFullYear();
    const whatsappMessage = encodeURIComponent(
        "Hello Kennedy,\n\nI visited your website and I would like to inquire about your services.\n\nKindly guide me on the next steps."
    );

    const whatsappUrl = `https://wa.me/254737320000?text=${whatsappMessage}`;

    return (
        <footer className="bg-slate-950 text-white">
            <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
                <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr]">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="inline-block">
                            <h2 className="text-3xl font-bold">Kennedy Maurice</h2>

                            <p className="mt-2 text-sm font-medium text-teal-300">
                                Healthcare Business, Digital Systems & Market Access Consultant
                            </p>
                        </Link>

                        <p className="mt-6 max-w-lg leading-8 text-slate-400">
                            Helping healthcare businesses, institutions, entrepreneurs, and
                            service-based organizations establish, digitize, comply, procure,
                            market, and grow through consulting, technology, procurement support, AI
                            productivity and operational excellence.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-300">
                                Healthcare
                            </span>

                            <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-300">
                                Technology
                            </span>

                            <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-300">
                                Procurement
                            </span>

                            <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-300">
                                AI Training
                            </span>
                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-slate-300">
                            Explore
                        </h3>

                        <ul className="mt-6 space-y-4">
                            {footerLinks[0].links.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-sm text-slate-400 transition hover:text-teal-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-slate-300">
                            Services
                        </h3>

                        <ul className="mt-6 space-y-4">
                            {footerLinks[1].links.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-sm text-slate-400 transition hover:text-teal-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact Strip */}
                <div className="mt-14 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
                    <div className="flex items-center gap-3 text-sm text-slate-400">
                        <FaLocationDot className="text-lg text-teal-300" />
                        Nairobi, Kenya
                    </div>

                    <a
                        href="mailto:info@kennedymaurice.co.ke"
                        className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-teal-300"
                    >
                        <FaEnvelope className="text-lg text-teal-300" />
                        info@kennedymaurice.co.ke
                    </a>

                    <a
                        href="tel:+254737320000"
                        className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-teal-300"
                    >
                        <FaPhone className="text-lg text-teal-300" />
                        +254 737 320 000
                    </a>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm text-slate-500">
                            © {year} Kennedy Maurice. All rights reserved.
                        </p>

                        <p className="mt-2 text-xs text-slate-600">
                            Healthcare • Business • Technology • Market Access
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="WhatsApp"
                            className="rounded-full border border-green-500/20 bg-green-500/10 p-3 text-green-400 transition hover:bg-green-500 hover:text-white"
                        >
                            <FaWhatsapp />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/kennedymaurice1"
                            aria-label="LinkedIn"
                            className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-teal-300 hover:text-teal-300"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href="https://www.facebook.com/kennedymaurice0"
                            aria-label="Facebook"
                            className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-teal-300 hover:text-teal-300"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="https://twitter.com/kennedymaurice1"
                            aria-label="X"
                            className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-teal-300 hover:text-teal-300"
                        >
                            <FaXTwitter />
                        </a>

                        <a
                            href="https://www.instagram.com/kennedymaurice1"
                            aria-label="Instagram"
                            className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-teal-300 hover:text-teal-300"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
