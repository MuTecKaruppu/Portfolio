import React from "react";
import Mainbanner from "../component/sections/MainBanner";
import OurSkil from "../component/sections/OurSkil";
import StartProject from "../component/sections/StartProject";
import ProjectFilter from "../component/sections/ProjectFilter";


export default function Home() {

    return (
        <>
            <div className="mt__hr"></div>
            <Mainbanner />
            <div className="mt__hr"></div>
            <OurSkil />
            <div className="mt__hr"></div>
            <ProjectFilter />
            <div className="mt__hr"></div>
            <StartProject />
            <div className="mt__hr"></div>

        </>
    )
}