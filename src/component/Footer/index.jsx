
export default function Footer({mtDark}) {

    const date = new Date().getFullYear();

    return (
        <footer id="footer" className={`mt__footer_wrapper mt-footer-1 position-relative ${mtDark = true ? "mt_dark" : ""}`}>

            <div className="mt-footer-bottom position-relative py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="mt_copyrights text-center d-block m-0">Copyright ©2020 - {date} | Design and Built by Karuppasamy</p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}