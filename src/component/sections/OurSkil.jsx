import { useEffect, useState } from "react";
import Heading from "../Heading";

const skills = [
    { name: "React.js / Vite", level: 80 },
    { name: "JavaScript (ES6+)", level: 85 },
    { name: "HTML5 / CSS3 / Bootstrap", level: 95 },
    { name: "Node.js / Express.js", level: 50 },
    { name: "Shopify / WordPress", level: 95 },
    { name: "Git / GitHub / VS Code", level: 90 },
];

export default function OurSkil() {

    const [active, setActive] = useState(false);

    useEffect(() => {
        const onScroll = () => {
        const progressBars = document.querySelector(".skills__section");
        if (!progressBars) return;

        const oTop = progressBars.getBoundingClientRect().top - window.innerHeight + 100;

            if (oTop < 0) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (

        <section className="skills__section section-space">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3"></div>
                    <div className="col-12 col-md-7 mb-2 mb-md-4 mb-lg-5 mb-sm-3 pb-3">
                        <Heading 
                            title_h1="My Skills"
                            content="I combine creativity and technical expertise to build fast, responsive, and user-friendly web applications. Here’s a quick overview of my core skills and proficiency levels:"
                        />
                    </div>
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 mt__dots">
                        <div className="row progress-items px-1 px-lg-4 py-4">
                            {skills.map((skill, i) => (
                            <div key={i} className="progress-item col-12 col-md-6 col-lg-6 p-3 px-lg-4">
                                <h6 className="d-flex justify-content-between gap-2 mb-4 d-block">
                                    <span>{skill.name}</span>
                                    <span>{skill.level}%</span>
                                </h6>
                                <div className="mt_progress_parent">
                                    <div className={`progress ${ active ? "progressbar-active" : "" }`}
                                         style={{ left: active ? `${skill.level}%` : "0%", }}
                                    />
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
