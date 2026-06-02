import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BackToTop from "../components/layout/BackToTop";

const MainLayout = () => {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Header />

            <AnimatePresence mode="wait">
                <motion.main
                    key={location.pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.15,
                        ease: "easeOut",
                    }}
                >
                    <Outlet />
                </motion.main>
            </AnimatePresence>

            <Footer />
            <BackToTop />
        </div>
    );
};

export default MainLayout;
