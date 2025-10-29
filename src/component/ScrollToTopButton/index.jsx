
import { useEffect, useState } from "react";
import ArrowUp from "../CustomIcons/ArrowUp";

const ScrollToTopButton = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(window.scrollY > 200);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="mt__back_top_wrapper position-fixed end-3 bottom-3">
            {isVisible && ( <button className="mt__back_top" onClick={scrollToTop} aria-label="Scroll to top" > <ArrowUp /> </button> )}
        </div>
    );
};

export default ScrollToTopButton;
