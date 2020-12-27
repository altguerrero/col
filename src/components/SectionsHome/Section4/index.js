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
      <Background>
        <Title className="mx-auto font-bold text-secondary text-center py-8 px-4">
          <p>Descubre los proyectos de las mejores constructoras el país</p>
        </Title>

        <div className="lg:w-1/2 mx-auto pb-8 px-4">
          <Gallery />
        </div>
      </Background>
      <div className="w-1/2 h-1 bg-primary-light mx-auto rounded"></div>
    </section>
  );
};

export default Section4;

const Background = styled.div`
  background-color: #f6f6f6;
`;
const Title = styled.div`
  line-height: 1.1;
  font-size: 25px;
  width: 100%;
  max-width: 664px;

  @media (min-width: 640px) {
    font-size: 35px;
  }
`;
