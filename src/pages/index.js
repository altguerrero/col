import * as React from "react";
import Menu from "../components/NavMenu"
import Hero from "../components/Hero"
import Aside from "../components/Aside"

// markup
const IndexPage = () => {
  return (
    <>
    <Menu />
    <Hero />
    <main className="bg-red-500 h-screen">
      
    </main>
    <Aside />
    </>
  );
};

export default IndexPage;
