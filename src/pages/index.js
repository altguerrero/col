import React from "react";
import Menu from "../components/NavMenu";
import Hero from "../components/Hero";
import Aside from "../components/Aside";
import Footer from "../components/Footer";


// Sections
import Section1 from "../components/SectionsHome/Section1";
import Section2 from "../components/SectionsHome/Section2";
import Section3 from "../components/SectionsHome/Section3";
import Section4 from "../components/SectionsHome/Section4";
import Section5 from "../components/SectionsHome/Section5";
import Section6 from "../components/SectionsHome/Section6";
import Section7 from "../components/SectionsHome/Section7";


// markup
const IndexPage = () => {
  return (
    <>
      <Menu />
      <Hero />
      <main className="overflow-hidden">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
   
      </main>
      <Aside />
      <Footer />
    </>
  );
};

export default IndexPage;
