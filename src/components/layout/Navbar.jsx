import { useEffect, useState } from "react";
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

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const headerClass = scrolled
        ? "bg-white/95 text-slate-950 shadow-sm ring-1 ring-slate-200/70 backdrop-blur-xl"
        : "bg-slate-950/70 text-white ring-1 ring-white/10 backdrop-blur-xl";

    return (
        <header
            className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${headerClass}`}
        >
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <Link to="/" className="group flex flex-col leading-none">
                        <span
                            className={`text-xl font-black tracking-tight transition-colors ${
                                scrolled ? "text-slate-950" : "text-white"
                            }`}
                        >
                            Kennedy Maurice
                        </span>

                        <span
                            className={`mt-1 text-[11px] font-medium tracking-wide transition-colors ${
                                scrolled ? "text-slate-500" : "text-slate-300"
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
                            href="https://wa.me/254700000000"
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
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition lg:hidden ${
                            scrolled ? "bg-slate-100 text-slate-900" : "bg-white/10 text-white"
                        }`}
                        aria-label="Toggle Menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div
                    className={`border-t lg:hidden ${
                        scrolled
                            ? "border-slate-200 bg-white"
                            : "border-white/10 bg-slate-950/95 backdrop-blur-xl"
                    }`}
                >
                    <div className="mx-auto max-w-7xl px-5 py-5">
                        <nav className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                                            isActive
                                                ? scrolled
                                                    ? "bg-teal-50 text-teal-700"
                                                    : "bg-white/10 text-teal-300"
                                                : scrolled
                                                  ? "text-slate-700 hover:bg-slate-100"
                                                  : "text-slate-200 hover:bg-white/10"
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}

                            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                <a
                                    href="https://wa.me/254700000000"
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={() => setIsOpen(false)}
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-700"
                                >
                                    <FaWhatsapp />
                                    WhatsApp
                                </a>

                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-700"
                                >
                                    Book Consultation
                                    <FaArrowRight className="text-xs" />
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
