import { Link } from "react-router-dom";
import ArrowUpRightIcon from "../CustomIcons/ArrowUpRightIcon";


export default function Button(props) {
    return (
        (props.type == "button" ?
            <Link to={props.to} className="mt_button btn">
                <span>{props.text}<ArrowUpRightIcon className="ms-2"/></span>
                <span>{props.text}<ArrowUpRightIcon className="ms-2"/></span>
            </Link> :

            <Link to={props.to} className="mt_button">
                <span>{props.text}<ArrowUpRightIcon className="ms-2"/></span>
                <span>{props.text}<ArrowUpRightIcon className="ms-2"/></span>
            </Link>
        )
    )
}