import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SplashScreen from "./components/layout/SplashScreen";
import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./utils/ScrollToTop";
import BackToTop from "./components/layout/BackToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1800);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <SplashScreen />;
    }

    return (
        <BrowserRouter>
            <div className="min-h-screen bg-slate-50 text-slate-950">
                <ScrollToTop />
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/insights" element={<Insights />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/insights/:slug" element={<BlogDetails />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
