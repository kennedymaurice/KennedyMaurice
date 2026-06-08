import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const id = hash.replace("#", "");

        const timeout = setTimeout(() => {
            const element = document.getElementById(id);

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 100);

        return () => clearTimeout(timeout);
    }, [hash, pathname]);

    return null;
};

export default ScrollToHash;
