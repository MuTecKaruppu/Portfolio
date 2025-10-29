import { Link, NavLink } from "react-router-dom";
import Logo from "/assets/images/logo.png"
import { Mail, Phone } from "lucide-react";


export default function Header() {

    const contact_detail = [
        { ico: <Phone fontSize={'20px'} color={"#bd4f9a"}/>, title: "+91 9787218116 ", toLink: "tel:9787218116"},
        { ico: <Mail fontSize={'20px'} color={"#bd4f9a"}/>, title: "karuppasamy93472@gmail.com", toLink: "mailto:karuppasamy93472@gmail.com"}
    ]

    return (
        <header className="mt__header_wrapper">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-3 col-sm-2 col-xsm-2 col-2">
                        <div className="mt-site-logo-wrapper">
                            <Link className="site-logo" to="/"><img src={Logo} alt="Site Logo" /></Link>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-9 col-sm-10 col-xsm-10 col-10">

                        <div className="mt-header-nav">
                            <ul className="mt-primary-menu-no text-end mx-0 my-4 p-0 d-flex flex-wrap justify-content-end gap-2 gap-md-4 gap-lg-4">
                                {contact_detail.map((item, ind) => (
                                    <li className="mt__item d-flex align-items-center text-start gap-2" key={ind}>
                                        {item.ico}
                                        <Link to={item.toLink}>{item.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}