

export default function Heading(props) {
    return (
        <>
            { props.subTitle || props.title || props.title_h1 || props.title_3 || props.title_4 || props.content ? (
                <div className="mt__heading_wrapper">
                    
                    {props.subTitle && <div className="mt__sub_heading d-inline-flex">
                        <div className="mt__text_marquee d-inline-flex flex-nowrap">
                            <span className="mt__marquee"> {props.subTitle} </span>
                            <span className="mt__marquee clone"> {props.subTitle} </span>
                        </div>
                    </div>}
                    
                    {props.title && <h2 className="mt__heading">{props.title}</h2>}
                    {props.title_h1 && <h2 className="mt__heading h1">{props.title_h1}</h2>}
                    {props.title_h3 && <h2 className="mt__heading h3">{props.title_h3}</h2>}
                    {props.title_h4 && <h2 className="mt__heading h4">{props.title_h4}</h2>}
                    
                    {props.content && <p className="mt__content m-0">{props.content}</p>}
                </div>
            ) : ( 
            
                <p className="m-0 p-3 teritary_bg mt_round_sm">No Records Found</p> 

            )}           
        </>
    )
};