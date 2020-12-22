import React, { useEffect } from "react";
import Menu from "../components/NavMenu";
import Hero from "../components/Hero";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import CountUp from "react-countup";
import Aos from "aos";
import "aos/dist/aos.css";

// Sections
import Section1 from "../components/SectionsHome/Section1";
import Section2 from "../components/SectionsHome/Section2";


// markup
const IndexPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Menu />
      <Hero />
      <main className="overflow-hidden">
        <Section1 />
        <Section2 />
   
      </main>
      <Aside />
      <Footer />
    </>
  );
};

export default IndexPage;
