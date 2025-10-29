import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import BlogGrid from "./pages/BlogGrid";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import BlogPostPage from "./pages/BlogPostPage";
// import BlogList from "./pages/BlogList";
// import Faq from "./pages/Faq";


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                {/* <Route path="/about-us" element={<About/>} />
                <Route path="/faq" element={<Faq/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/blog-grid" element={<BlogGrid />} />
                <Route path="/blog-list" element={<BlogList />} />
                <Route path="/blog-grid/:slug" element={<BlogPostPage />} />
                <Route path="/contact-us" element={<Contact/>} /> */}
            </Route>
        </Routes>
    )
}