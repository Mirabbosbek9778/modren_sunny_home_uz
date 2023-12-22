import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Product from "../pages/product/Product";
import Gallery from "../pages/galley/Gallery";
import Information from "../pages/information/Information";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import Error404 from "../assets/img/404eror.png";
import Detail from "../pages/product/detail/Detail";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/information" element={<Information />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/detailed/:id" element={<Detail />} />
      <Route path="*" element={<img src={Error404} alt="" />} />
    </Routes>
  );
};

export default Root;
