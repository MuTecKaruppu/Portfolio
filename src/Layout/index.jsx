import { Outlet, useLocation } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import ScrollToTopButton from "../component/ScrollToTopButton";
// import Breadcrumb from "../component/Breadcrumb";

// gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function Layout() {

    const location = useLocation();
    const isHome = (location.pathname === '/')


    // useEffect(() => {
    //     const smooth = ScrollSmoother.create({
    //         content: "#smooth-content",
    //         wrapper: "#smooth-wrapper",
    //         smooth: 1,
    //         effects: false
    //     });

    //     return () => {
    //         smooth.kill();
    //     };

    // }, []);

    return (
        <>
        {/* <div id="smooth-wrapper"> */}
            {/* <div id="smooth-content"> */}
                {/* <BackgriundPart /> */}
                {isHome && <Header />}
                {!isHome && (
                    <div className="mt__header">
                        <Header />
                        {/* <Breadcrumb mtDark/> */}
                    </div>
                )}
                <Outlet />
                <Footer mtDark/>
            {/* </div> */}
            <ScrollToTopButton />
        {/* </div> */}

        </>
    )
}