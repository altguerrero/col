import React, { useState } from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Section6 = () => {
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

      buttom: file(
        relativePath: { eq: "assets/buttom.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            originalImg
          }
        }
      }

      flecha: file(
        relativePath: { eq: "assets/flecha.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            originalImg
          }
        }
      }
    }
  `);
  return (
    <>
      <section>
        <div className="w-1/2 h-1 bg-primary-light mx-auto rounded"></div>
        <div className="bg-gray-200 py-8">
          <div className="text-2xl mx-auto font-bold text-secondary text-center mb-8">
            <p>Ahora puedes monetizar tus ingresos</p>
          </div>

          <div className="w-1/2 mx-auto text-center text-gray-500 text-base  ">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem
            </p>
          </div>
          <ButtomMain
            className="mt-8 mx-auto font-bold"
            image={data.buttom.childImageSharp.fluid.originalImg}
            subimage={data.flecha.childImageSharp.fluid.originalImg}
            onClick={() => setModal(!modal)}
          >
            ¡Hazlo ahora!
          </ButtomMain>
        </div>
        <div className="w-1/2 h-1 bg-primary-light mx-auto rounded"></div>
      </section>

      <section className="container grid grid-cols-2 py-20">
        <div>
          <VideoContainer>
            <Img
              className=""
              fluid={data.videoBack.childImageSharp.fluid}
            />
          </VideoContainer>
        </div>
        <div className="flex flex-col justify-around">
          <h3 className="text-center">
            <span className="block text-4xl font-bold text-secondary">
              #TodosSomos
            </span>
            <span className="block text-6xl font-bold text-primary-light">
              Colraices
            </span>
          </h3>
          <div className="mx-12 mt-12 text-center font-semibold text-gray-700">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

const ButtomMain = styled.button`
  background: url("${(props) => props.image}");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  color: #fff;
  display: block;
  width: 240px;
  height: 60px;
  font-size: 1.125rem;
  position: relative;

  &:before {
    content: "";
    display: block;
    width: 54px;
    height: 60px;
    background-image: url("${(props) => props.subimage}");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    right: -20px;
    bottom: 0;
  }
`;

const VideoContainer = styled.div``

export default Section6;
