import { useEffect, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaXmark, FaArrowRight, FaWhatsapp } from "react-icons/fa6";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Insights", path: "/insights" },
    { name: "Contact", path: "/contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const whatsappUrl = useMemo(() => {
        const message = `
Hello Kennedy,

I visited your website and I would like to inquire about your services.

Kindly guide me on the next steps.
        `.trim();

        return `https://wa.me/254737320000?text=${encodeURIComponent(message)}`;
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    const headerClass =
        scrolled || isOpen
            ? "bg-white/95 text-slate-950 shadow-sm ring-1 ring-slate-200/70 backdrop-blur-xl"
            : "bg-slate-950/75 text-white ring-1 ring-white/10 backdrop-blur-xl";

    return (
        <header
            className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${headerClass}`}
        >
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <Link to="/" onClick={closeMenu} className="group flex flex-col leading-none">
                        <span
                            className={`text-xl font-black tracking-tight transition-colors ${
                                scrolled || isOpen ? "text-slate-950" : "text-white"
                            }`}
                        >
                            Kennedy Maurice
                        </span>

                        <span
                            className={`mt-1 text-[11px] font-medium tracking-wide transition-colors ${
                                scrolled || isOpen ? "text-slate-500" : "text-slate-300"
                            }`}
                        >
                            Healthcare • Business • Technology
                        </span>
                    </Link>

                    <nav className="hidden items-center gap-2 lg:flex">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `rounded-full px-4 py-2 text-sm font-semibold transition ${
                                        isActive
                                            ? scrolled
                                                ? "bg-teal-50 text-teal-700"
                                                : "bg-white/10 text-teal-300"
                                            : scrolled
                                              ? "text-slate-700 hover:bg-slate-100 hover:text-teal-700"
                                              : "text-slate-200 hover:bg-white/10 hover:text-teal-300"
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="hidden items-center gap-3 lg:flex">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition ${
                                scrolled
                                    ? "bg-green-50 text-green-600 hover:bg-green-600 hover:text-white"
                                    : "bg-white/10 text-green-300 hover:bg-green-500 hover:text-white"
                            }`}
                            aria-label="Chat on WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>

                        <Link
                            to="/contact"
                            className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition ${
                                scrolled
                                    ? "bg-teal-700 text-white hover:bg-teal-800"
                                    : "bg-teal-400 text-slate-950 hover:bg-teal-300"
                            }`}
                        >
                            Book Consultation
                            <FaArrowRight className="text-xs" />
                        </Link>
                    </div>

                    <button
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-950 transition hover:bg-teal-50 hover:text-teal-700 lg:hidden"
                        aria-label="Toggle Menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-x-0 top-20 z-40 min-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-200 bg-white lg:hidden">
                    <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col px-5 py-6">
                        <div className="rounded-[2rem] bg-slate-950 p-6 text-white">
                            <p className="text-xs font-black uppercase tracking-[0.24em] text-teal-300">
                                Kennedy Maurice
                            </p>

                            <h2 className="mt-3 text-2xl font-black leading-tight">
                                Healthcare Business, Digital Systems & Market Access Consultant
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-slate-300">
                                Helping organizations establish, digitize, comply, procure, market
                                and grow.
                            </p>
                        </div>

                        <nav className="mt-6 flex flex-col gap-2">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        `rounded-2xl px-5 py-4 text-base font-bold transition ${
                                            isActive
                                                ? "bg-teal-50 text-teal-700"
                                                : "bg-slate-50 text-slate-800 hover:bg-slate-100"
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </nav>

                        <div className="mt-6 grid gap-3">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noreferrer"
                                onClick={closeMenu}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-4 text-sm font-bold text-white transition hover:bg-green-700"
                            >
                                <FaWhatsapp />
                                WhatsApp Kennedy
                            </a>

                            <Link
                                to="/contact"
                                onClick={closeMenu}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-5 py-4 text-sm font-bold text-white transition hover:bg-teal-800"
                            >
                                Book Consultation
                                <FaArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="mt-auto pt-8">
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                                    Core Areas
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {[
                                        "Healthcare",
                                        "Business",
                                        "Technology",
                                        "AI",
                                        "Procurement",
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-600 ring-1 ring-slate-200"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
