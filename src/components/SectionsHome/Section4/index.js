import React, { useState } from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import tw from "twin.macro";

const Section4 = () => {
  //   const data = useStaticQuery(graphql`
  //     query {

  //     }
  //   `);
  return (
    <section>
      <div className="w-1/2 h-1 bg-primary-light mx-auto rounded"></div>
      <div className="bg-gray-200">
        <div className="text-2xl mx-auto font-bold text-secondary text-center py-8">
          <p>Descubre los proyectos de las mejores</p>
          <p>constructoras el país</p>
        </div>

        <div className="w-1/2 mx-auto grid grid-cols-4 justify-items-center"></div>
      </div>
      <div className="w-1/2 h-1 bg-primary-light mx-auto rounded"></div>
    </section>
  );
};

export default Section4;
