import { useEffect, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaXmark, FaArrowRight, FaWhatsapp, FaMoon, FaSun } from "react-icons/fa6";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Insights", path: "/insights" },
    { name: "Contact", path: "/contact" },
];

const getInitialTheme = () => {
    if (typeof window === "undefined") return "light";

    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") return savedTheme;

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(getInitialTheme);
    const isDark = theme === "dark";

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

    useEffect(() => {
        const root = document.documentElement;
        const themeColor = document.querySelector('meta[name="theme-color"]');

        root.classList.toggle("dark", isDark);
        root.style.colorScheme = theme;
        window.localStorage.setItem("theme", theme);
        themeColor?.setAttribute("content", isDark ? "#070707" : "#100484");
    }, [isDark, theme]);

    const closeMenu = () => setIsOpen(false);
    const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

    const headerClass =
        scrolled || isOpen
            ? "bg-white/95 text-slate-950 shadow-sm ring-1 ring-slate-200/70 backdrop-blur-xl dark:bg-[#070707]/95 dark:text-white dark:ring-white/10"
            : "bg-[#100484]/85 text-white ring-1 ring-white/10 backdrop-blur-xl";

    const themeButtonClass =
        scrolled || isOpen
            ? "bg-[#100484]/10 text-[#100484] hover:bg-[#ff7d09] hover:text-white dark:bg-white/10 dark:text-[#03DAC6] dark:hover:bg-[#ff7d09] dark:hover:text-white"
            : "bg-white/10 text-[#03DAC6] hover:bg-white hover:text-[#100484]";

    return (
        <header
            className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${headerClass}`}
        >
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <Link to="/" onClick={closeMenu} className="group flex flex-col leading-none">
                        <span
                            className={`text-xl font-black tracking-tight transition-colors ${
                                scrolled || isOpen ? "text-slate-950 dark:text-white" : "text-white"
                            }`}
                        >
                            Kennedy Maurice
                        </span>

                        <span
                            className={`mt-1 text-[11px] font-medium tracking-wide transition-colors ${
                                scrolled || isOpen
                                    ? "text-slate-500 dark:text-slate-300"
                                    : "text-slate-300"
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
                                                ? "bg-[#ff7d09]/10 text-[#ff7d09] dark:bg-white/10 dark:text-[#03DAC6]"
                                                : "bg-white/10 text-[#03DAC6]"
                                            : scrolled
                                              ? "text-slate-700 hover:bg-[#ff7d09]/10 hover:text-[#ff7d09] dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-[#03DAC6]"
                                              : "text-slate-200 hover:bg-white/10 hover:text-[#03DAC6]"
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="hidden items-center gap-3 lg:flex">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition ${themeButtonClass}`}
                            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                            aria-pressed={isDark}
                        >
                            {isDark ? <FaSun /> : <FaMoon />}
                        </button>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition ${
                                scrolled
                                    ? "bg-[#199221]/10 text-[#199221] hover:bg-[#199221] hover:text-white"
                                    : "bg-white/10 text-green-300 hover:bg-[#199221] hover:text-white"
                            }`}
                            aria-label="Chat on WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>

                        <Link
                            to="/contact"
                            className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition ${
                                scrolled
                                    ? "bg-[#ff7d09] text-white hover:bg-[#100484] dark:hover:bg-[#1667FF]"
                                    : "bg-[#ff7d09] text-white hover:bg-white hover:text-[#100484]"
                            }`}
                        >
                            Book Consultation
                            <FaArrowRight className="text-xs" />
                        </Link>
                    </div>

                    <button
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-950 transition hover:bg-[#ff7d09]/10 hover:text-[#ff7d09] dark:bg-white/10 dark:text-white dark:hover:text-[#03DAC6] lg:hidden"
                        aria-label="Toggle Menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-x-0 top-20 z-40 min-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-200 bg-white dark:border-white/10 dark:bg-[#070707] lg:hidden">
                    <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col px-5 py-6">
                        <div className="rounded-[2rem] bg-[#100484] p-6 text-white">
                            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#03DAC6]">
                                Kennedy Maurice
                            </p>

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
                                                ? "bg-[#ff7d09]/10 text-[#ff7d09] dark:bg-white/10 dark:text-[#03DAC6]"
                                                : "bg-slate-50 text-slate-800 hover:bg-slate-100 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </nav>

                        <div className="mt-6 grid gap-3">
                            <button
                                type="button"
                                onClick={toggleTheme}
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-[#100484] transition hover:border-[#ff7d09] hover:text-[#ff7d09] dark:border-white/10 dark:bg-white/5 dark:text-[#03DAC6]"
                                aria-pressed={isDark}
                            >
                                {isDark ? <FaSun /> : <FaMoon />}
                                {isDark ? "Light Mode" : "Dark Mode"}
                            </button>

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
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff7d09] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#100484]"
                            >
                                Book Consultation
                                <FaArrowRight className="text-xs" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
