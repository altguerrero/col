import React, { useState } from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";

const Section6 = () => {
  const [modal, setModal] = useState(false);

  const data = useStaticQuery(graphql`
    query {
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
    <section id="section6">
      <div className="w-1/2 h-1 bg-primary-light mx-auto rounded px-4"></div>
      <Background className="pb-8">
        <Title className="mx-auto font-bold text-secondary text-center py-8 px-4">
          <p>Ahora puedes monetizar tus ingresos</p>
        </Title>

        <div className="w-3/4 xl:w-1/2 mx-auto text-center text-gray-500 text-base sm:text-lg">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem
          </p>
        </div>
        <ButtomMain
          href="https://vitrinacolombia.colraices.com/hacer-cuentas/"
          target="_blanck"
          rel="noopener nofollow"
          className="mt-8 mx-auto font-bold text-xl focus:outline-none transform hover:scale-105 transition-all duration-200"
          image={data.buttom.childImageSharp.fluid.originalImg}
          subimage={data.flecha.childImageSharp.fluid.originalImg}
          onClick={() => setModal(!modal)}
        >
          ¡Hazlo ahora!
        </ButtomMain>
      </Background>
      <div className="w-1/2 h-1 bg-primary-light mx-auto rounded"></div>
    </section>
  );
};

const Background = styled.div`
  background-color: #f6f6f6;
`;

const ButtomMain = styled.a`
  background: url("${(props) => props.image}");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 60px;
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

const VideoContainer = styled.div``;
const Title = styled.div`
  line-height: 1.1;
  font-size: 25px;
  width: 100%;
  max-width: 664px;

  @media (min-width: 640px) {
    font-size: 35px;
  }
`;

export default Section6;
