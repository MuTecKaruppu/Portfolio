import { useState } from "react";
import { category, themes } from "../../data/theme";
import Heading from "../Heading";
import ArrowUpRightIcon from "../CustomIcons/ArrowUpRightIcon";
import ThemeCard from "../widgets/ThemeCard";


export default function ProjectFilter() {

    const [tab, setTab] = useState("all");

    return ( <>
        
        <section className="mt__section_start_project section-space">
            <div className="container">
                <div className="row">

                    {/* Heading */}

                    <div className="col-12 col-lg-5 mb-lg-5 mb-sm-3 pb-3 text-lg-start text-center">
                        <Heading title_h1="Our Project" />
                    </div>

                    {/* Filter */}

                    <div className="col-12 col-lg-7 mb-lg-5 mb-sm-3 pb-3 d-flex flex-wrap gap-3 align-items-end justify-content-lg-end justify-content-center">
                        {category.map((items, ind) => (
                            <button 
                            onClick={()=> setTab(items)} 
                            className={`mt_button cat_items ${items === tab ? 'active' : ""}`} 
                            key={ind}>
                                <span>{items}<ArrowUpRightIcon className="ms-2"/></span>
                                <span>{items}<ArrowUpRightIcon className="ms-2"/></span>
                            </button>
                        ))}
                    </div>
                        
                    {/* Theme List */}

                    <div className="col-12 mt__dots d-flex flex-wrap">
                        {themes.filter((value) => tab === "all" ? true : value.category === tab).map((theme, ind) => (
                            <div key={ind} className="col-12 col-md-6 col-lg-4 p-2">
                                <ThemeCard themeItem={theme}/>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
        
    </> )
}