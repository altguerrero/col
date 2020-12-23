import React, { useState } from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import tw from "twin.macro";
import Gallery from "./gallery";

const Section4 = () => {
  return (
    <section>
      <div className="w-1/2 h-1 bg-primary-light mx-auto rounded"></div>
      <div className="bg-gray-200">
        <div className="text-2xl mx-auto font-bold text-secondary text-center py-8">
          <p>Descubre los proyectos de las mejores</p>
          <p>constructoras el país</p>
        </div>

        <div className="w-1/2 mx-auto pb-8">
          <Gallery />
        </div>
      </div>
      <div className="w-1/2 h-1 bg-primary-light mx-auto rounded"></div>
    </section>
  );
};

export default Section4;
