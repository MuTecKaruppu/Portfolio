import { Link, useNavigate } from "react-router-dom";


export default function ThemeCard({themeItem}) {

    const {img, category, title, url, description} = themeItem;
    const navigate = useNavigate()

    return(<>
    
        <div className="theme_wrapper">
            <div className="image_grp">
                <div className="image_wrapper position-relative cursor-pointer">
                    <Link to={url} className="position-absolute w-100 h-100"></Link>
                    <img src={img} alt={title} />
                </div>
            </div>
            <div className="content_grp">
                <div className="category_items">{category}</div>
                <h5 className="theme_title"><Link to={url}>{title}</Link></h5>
                {/* <p className="theme_description">{description}</p> */}

            </div>
        </div>

    </>)
}