import * as React from "react";
import Menu from "../components/NavMenu";
import Hero from "../components/Hero";
import Aside from "../components/Aside";
import Footer from "../components/Footer";


// markup
const IndexPage = () => {
 
  return (
    <>
      <Menu />
      {/* <Hero /> */}
      <main className="overflow-hidden">
       
      </main>
      <Aside />
      <Footer />
    </>
  );
};

export default IndexPage;

