import { Link } from "react-router-dom";
import { Dribbble, Facebook, Instagram, Linkedin } from "lucide-react";

export default function SocialLinks(props) {

    return (
        <ul className={`mt__social_links m-0 p-0 d-inline-flex flex-wrap gap-2 ${props.mtDark === true ? "mt_dark" : ""}`}>
            <li className="mt_social_item d-inline-block">
                <Link className="mt_sociali_link" to={'/'} target="_blank" rel="noopener noreferrer" >
                    <Facebook />
                </Link>
            </li>
            <li className="mt_social_item d-inline-block">
                <Link className="mt_sociali_link" to={'/'} target="_blank" rel="noopener noreferrer" >
                    <Dribbble />
                </Link>
            </li>
            <li className="mt_social_item d-inline-block">
                <Link className="mt_sociali_link" to={'https://www.linkedin.com/in/karuppasamy-o-19a343246/'} target="_blank" rel="noopener noreferrer" >
                    <Linkedin />
                </Link>
            </li>
            <li className="mt_social_item d-inline-block">
                <Link className="mt_sociali_link" to={'/'} target="_blank" rel="noopener noreferrer" >
                    <Instagram />
                </Link>
            </li>
        </ul>
    );
}
