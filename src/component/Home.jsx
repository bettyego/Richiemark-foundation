// import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import FocusAreas from "./FocusAreas";
import Gallery from "./Gallery";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import SEO from "./SEO";
import BackToTop from "./BackToTop";
import Newsletter from "./page/Newsletter";
import NewsletterPreview from "./page/NewsletterPreview";

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <SEO
        title="Home - Richmark Humanitarian Foundation"
        description="Richmark Humanitarian Foundation empowers Nigerian communities through health, education, human rights, and sustainable development initiatives. Join us in making a difference."
      />
      <Navbar />
      <Hero />
      <FocusAreas />
      <Gallery />
      <CallToAction />
      <NewsletterPreview />
      <Footer />
      <BackToTop />
      <Routes>
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </div>
  );
};

export default Home;
