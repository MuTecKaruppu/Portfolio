
import { useRef } from "react";
import ArrowUpRightIcon from "../CustomIcons/ArrowUpRightIcon";
import Heading from "../Heading";     
import emailjs from '@emailjs/browser';


export default function StartProject() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const checked = Array.from(form.current.querySelectorAll('input[name="skill"]:checked')).map((el) => el.value).join(', ');
        form.current.querySelector('input[name="skills"]').value = checked;
        form.current.querySelector('input[name="time"]').value = new Date().toLocaleString();

        emailjs.sendForm("service_vp97fv8", "template_h9imx4l", form.current, {
            publicKey: "x_fSSygZsa0N7yNYm",
        }) .then(
            () => {
                alert("✅ Message sent successfully!");
                form.current.reset();
            },
            (error) => {
                alert("❌ Failed to send message.");
                console.error(error.text);
            }
        );
    };


    return (
        <>
            <section id="contact" className="mt__section_start_project section-space">
                <div className="container">
                    <div className="row">

                        
                        <div className="col-12 col-md-3"></div>
                        <div className="col-12 col-md-6 mb-5 pb-3">
                            <Heading 
                                title_h1="Say Hi! and tell me about your idea"
                                content="Have a nice works? reach out and let's chat."
                            />
                        </div>
                        <div className="col-12 col-md-3"></div>

                        {/* Form */}

                        <div className="col-12">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="mt__input_grp mb-4">
                                    <div className="mt__field">
                                        <label className="h6 mb-2" htmlFor="name">Name *</label>
                                        <input type="text" id="name" name="name" placeholder="Hello..." required/>
                                    </div>
                                    <div className="mt__field">
                                        <label className="h6 mb-2" htmlFor="email">Email *</label>
                                        <input type="email" id="email" name="email" placeholder="Where can i reply" required/>
                                    </div>
                                </div>
                                <div className="mt__input_grp mb-4">
                                    <div className="mt__field">
                                        <label className="h6 mb-2" htmlFor="company">company name *</label>
                                        <input type="text" id="company" name="company" placeholder="Your company or website?" required/>
                                    </div>
                                </div>
                                <div className="mt__input_grp mb-4">
                                    <div className="mt__field">
                                        <div className="wdt-cus-check-box">
                                            <h6 className="mb-4">What's in your mind? *</h6>

                                            <div className="mt__form_control_wrap">
                                                <div className="mt__list_item"> 
                                                    <label>
                                                        <input type="checkbox" value="WordPress" name="skill" />
                                                        <span className="mt__list_item_label">WordPress</span>
                                                    </label> 
                                                    <label>
                                                        <input type="checkbox" value="Shopify" name="skill" />
                                                        <span className="mt__list_item_label">Shopify</span>
                                                    </label> 
                                                    <label>
                                                        <input type="checkbox" value="ReactJs" name="skill" />
                                                        <span className="mt__list_item_label">ReactJs</span>
                                                    </label> 
                                                    <label>
                                                        <input type="checkbox" value="HTML5" name="skill" />
                                                        <span className="mt__list_item_label">HTML5</span>
                                                    </label> 
                                                    <label>
                                                        <input type="checkbox" value="CSS3" name="skill" />
                                                        <span className="mt__list_item_label">CSS3</span>
                                                    </label> 
                                                    <label>
                                                        <input type="checkbox" value="Tailwind CSS" name="skill" />
                                                        <span className="mt__list_item_label">Tailwind CSS</span>
                                                    </label> 
                                                    <label>
                                                        <input type="checkbox" value="Bootstrap" name="skill" />
                                                        <span className="mt__list_item_label">Bootstrap</span>
                                                    </label> 
                                                    <label>
                                                        <input type="checkbox" value="RestFul API" name="skill" />
                                                        <span className="mt__list_item_label">RestFul API</span>
                                                    </label> 
                                                    <label>
                                                        <input type="checkbox" value="JavaScript" name="skill" />
                                                        <span className="mt__list_item_label">JavaScript</span>
                                                    </label> 
                                                </div>
                                            </div> 

                                            <input type="hidden" name="skills" />
                                            <input type="hidden" name="time" />

                                        </div>
                                    </div>
                                </div>

                                <div className="mt__input_grp mb-2">
                                    <div className="mt__field text-end justify-content-lg-end align-items-lg-end justify-content-start align-items-start">
                                        <button type="submit" className="mt_button">
                                            <span>Send me<ArrowUpRightIcon className="ms-2"/></span>
                                            <span>Send me<ArrowUpRightIcon className="ms-2"/></span>
                                        </button>

                                        <p className="mt-3">I'll must get back to you within 24 hours.</p>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}