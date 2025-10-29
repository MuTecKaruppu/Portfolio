import TypewriterComponent from "typewriter-effect"
import Button from "../Button"
import SocialLinks from "../widgets/SocialLinks"

export default function Mainbanner() {
    return (
        <>
        
            <section className="main__banner_section section-space">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-7 ps-lg-0 py-lg-5 pe-lg-5 p-3 pb-5">
                            <span className="mt__handle  mb-3">🖐️</span>
                            <h1><span className="light">Hello!</span> I'm Karuppasamy,</h1>
                            <div className="role d-inline-block my-3">
                                <h4 className="before-line position-relative m-0 d-inline-flex align-items-center gap-3"> 
                                    <TypewriterComponent 
                                        options={{
                                            strings: ['Web Designer.', 'Frontend Developer.', 'react developer.', 'WordPress Developer.', 'shopify Developer.'],
                                            autoStart: true,
                                            loop: true
                                        }}
                                    />
                                </h4>
                            </div>
                            <p className="mb-3">I have <strong>4+ years</strong> experience in the frontend development.</p>
                            <p>I’m a passionate Frontend Developer who loves turning ideas into interactive digital experiences. From sleek landing pages to full-scale web applications, I use tools like React.js, WordPress, Shopify, and JavaScript to build scalable and performance-driven solutions. I enjoy crafting interfaces that are not just functional, but also engaging and accessible to all users.</p>

                            <div className="mt-button-grp mt-5 d-flex gap-3 flex-wrap">
                                <Button text="Let's Talk" to="#contact" />
                                <Button text="Download Resume" to="#contact" />
                            </div>

                        </div>
                        <div className="col-12 col-lg-5 mt__dots">
                            <div className="profile_fill h-100">
                                <div className="spacer-50 d-block d-lg-none"></div>
                                <img src="assets\images\karuppasamy.jpeg" alt="Karuppasamy" className="top-0"/>
                            </div>
                        </div>
                        {/* <div className="col-12 mt__dots mt-5">
                            <div className="social-follow-section px-3 py-1 body_bg d-flex justify-content-between align-items-center">
                                <h5 className="m-0">Follow Us </h5>
                                <SocialLinks />
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

        
        
        
        </>
    )
}