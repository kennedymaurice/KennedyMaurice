import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaWhatsapp,
    FaXTwitter,
    FaInstagram,
    FaArrowRight,
} from "react-icons/fa6";

const footerGroups = [
    {
        title: "Explore",
        links: [
            { label: "Home", to: "/" },
            { label: "About", to: "/about" },
            { label: "Services", to: "/services" },
            { label: "Portfolio", to: "/portfolio" },
            { label: "Insights", to: "/insights" },
            { label: "Contact", to: "/contact" },
        ],
    },
    {
        title: "Consulting",
        links: [
            {
                label: "Healthcare Consultancy",
                to: "/services#healthcare-business-consultancy",
            },
            {
                label: "Medical Equipment Sourcing",
                to: "/services#medical-equipment-sourcing",
            },
            {
                label: "Business Registration",
                to: "/services#business-registration-compliance",
            },
            {
                label: "TVET Institutional Support",
                to: "/services#tvet-institutional-support",
            },
        ],
    },
    {
        title: "Digital Services",
        links: [
            {
                label: "Web Development",
                to: "/services#web-development-digital-systems",
            },
            {
                label: "AI Training",
                to: "/services#ai-training-digital-productivity",
            },
            {
                label: "Digital Systems",
                to: "/services#web-development-digital-systems",
            },
            {
                label: "Social Media Support",
                to: "/services#social-media-management",
            },
        ],
    },
    {
        title: "Quick Actions",
        links: [
            { label: "Start a Project", to: "/contact" },
            { label: "View Portfolio", to: "/portfolio" },
            { label: "Read Insights", to: "/insights" },
            { label: "Book Consultation", to: "/contact" },
        ],
    },
];

const socials = [
    {
        name: "WhatsApp",
        icon: FaWhatsapp,
        link: `https://wa.me/254737320000?text=${encodeURIComponent(
            "Hello Kennedy,\n\nI visited your website and I would like to inquire about your services.\n\nKindly guide me on the next steps."
        )}`,
    },
    {
        name: "LinkedIn",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/kennedymaurice1",
    },
    {
        name: "Facebook",
        icon: FaFacebookF,
        link: "https://www.facebook.com/kennedymaurice0",
    },
    {
        name: "X",
        icon: FaXTwitter,
        link: "https://twitter.com/kennedymaurice1",
    },
    {
        name: "Instagram",
        icon: FaInstagram,
        link: "https://www.instagram.com/kennedymaurice1",
    },
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden bg-[#07051f] text-white">
            {/* Background layers */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(3,218,198,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_35%)]" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#100484]/95 via-[#16045f]/95 to-[#020617]/98" />

            <div className="relative">
                <div className="mx-auto max-w-[90rem] px-5 pb-8 pt-14 lg:px-8 lg:pb-10 lg:pt-16 2xl:px-10">
                    <div className="grid gap-10 lg:grid-cols-[1fr_2.4fr] lg:gap-14">
                        {/* Brand */}
                        <div>
                            <Link to="/" className="inline-block">
                                <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                                    <span className="bg-gradient-to-r from-[#ff7d09] via-[#ffb347] to-[#03DAC6] bg-clip-text text-transparent">
                                        Kennedy Maurice
                                    </span>
                                </h2>

                                <p className="mt-3 max-w-md text-sm font-semibold leading-6 text-[#03DAC6]">
                                    Healthcare Business, Digital Systems & Market Access Consultant
                                </p>
                            </Link>

                            <p className="mt-5 max-w-lg text-sm leading-7 text-white/75">
                                I help healthcare businesses, institutions, entrepreneurs and
                                service-based organizations establish, digitize, comply, procure,
                                market and grow through consulting, technology, procurement support,
                                AI productivity and operational excellence.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                {socials.map((social) => {
                                    const Icon = social.icon;

                                    return (
                                        <a
                                            key={social.name}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.name}
                                            className="group grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/10 text-white shadow-lg shadow-black/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#03DAC6] hover:bg-[#03DAC6] hover:text-[#100484]"
                                        >
                                            <Icon className="text-[17px]" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Link Groups */}
                        <div className="grid gap-8 border-y border-white/10 py-8 sm:grid-cols-2 lg:grid-cols-4">
                            {footerGroups.map((group) => (
                                <div key={group.title} className="relative">
                                    <h3 className="text-sm font-black uppercase tracking-[0.22em] text-[#03DAC6]">
                                        {group.title}
                                    </h3>

                                    <div className="mt-4 h-px w-12 bg-[#03DAC6]" />

                                    <ul className="mt-5 space-y-3">
                                        {group.links.map((link) => (
                                            <li key={link.label}>
                                                <Link
                                                    to={link.to}
                                                    className="group inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
                                                >
                                                    <span className="h-1.5 w-1.5 rounded-full bg-white/30 transition group-hover:bg-[#03DAC6]" />
                                                    <span>{link.label}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Strip */}
                    <div className="mt-10 grid min-w-0 gap-6 rounded-3xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/20 backdrop-blur md:grid-cols-[minmax(0,1.45fr)_auto] md:items-center md:p-7">
                        <div className="min-w-0 text-center md:text-left">
                            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#03DAC6]">
                                Ready to build, digitize or grow?
                            </p>

                            <h3 className="mt-2 text-xl font-black leading-tight text-white sm:text-2xl">
                                <span className="bg-gradient-to-r from-[#ff7d09] via-[#ffb347] to-[#03DAC6] bg-clip-text text-transparent">
                                    Let’s discuss your healthcare, business, technology or market
                                    access project.
                                </span>
                            </h3>
                        </div>

                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#03DAC6] px-6 py-3 text-sm font-black text-[#100484] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white"
                        >
                            Start a Conversation
                            <FaArrowRight className="text-sm" />
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="relative border-t border-white/10 bg-black/20 px-5 py-5 text-center backdrop-blur">
                    <p className="text-sm text-white/70">
                        © {year} Kennedy Maurice. All rights reserved.
                    </p>

                    <p className="mt-2 text-xs text-white/45">
                        Healthcare • Business • Technology • Procurement • AI Productivity • Market
                        Access
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
