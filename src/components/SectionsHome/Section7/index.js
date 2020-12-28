import React, { useState } from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Play } from "../../Icons";

const Section7 = () => {
  const [modal, setModal] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      videoBack: file(
        relativePath: { eq: "assets/video_back.jpg" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Container id="section7" className="container mr-auto ml-auto xl:ml-0 flex flex-col-reverse xl:grid py-20">
      <div className="lg:px-12">
        <VideoContainer className="relative overflow-hidden rounded text-white hover:text-primary-light transition-all duration-200 h-full mx-auto">
          <Img
            className="cover transition-all duration-200 h-full"
            fluid={data.videoBack.childImageSharp.fluid}
          />
          <div className="absolute w-full w-full h-full bg-black top-0 opacity-50 flex justify-center items-center ">
            <Play wh="w-40 h-40 sm:w-48 sm:h-48" />
          </div>
        </VideoContainer>
      </div>
      <TextContainer className="flex flex-col justify-around  mb-12 mr-auto ml-auto xl:ml-0  xl:mb-0">
        <h3 className="text-center">
          <Title className="block font-bold text-secondary">#TodosSomos</Title>
          <TitleXl className="block font-bold text-primary-light">
            Colraices
          </TitleXl>
        </h3>
        <Description className="mx-12 mt-12 text-center font-semibold text-gray-700">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren.
          </p>
        </Description>
      </TextContainer>
    </Container>
  );
};

const Container = styled.section`
    grid-template-columns: 742px 1fr;
`;

const TextContainer = styled.div`
    max-width: 658px;
`;
const VideoContainer = styled.div`
  max-width: 742px;
  height: 328px;
  @media (min-width: 640px) {
    height: 528px;
  }
  &:hover .cover {
    transform: scale(1.2);
  }
`;

const Title = styled.span`
  font-size: 35px;
  line-height: 1;
  @media (min-width: 640px) {
    font-size: 45px;
  }
`;
const TitleXl = styled.span`
  font-size: 59px;
  line-height: 1;
  @media (min-width: 640px) {
    font-size: 69px;
  }
`;
const Description = styled.div`
  font-size: 20px;
  @media (min-width: 640px) {
    font-size: 25px;
  }
`;
export default Section7;
