import React, { useState } from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Gallery from "./gallery";
import tw from "twin.macro";
import ModalForm from "../../ModalForm";

const Section1 = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const data = useStaticQuery(graphql`
    query {
      davivienda: file(
        relativePath: { eq: "aliados/davivienda_normal.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            originalImg
          }
        }
      }
      daviviendaHover: file(
        relativePath: { eq: "aliados/davivienda_hover.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            originalImg
          }
        }
      }

      banco: file(
        relativePath: { eq: "aliados/banco_normal.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            originalImg
          }
        }
      }
      bancoHover: file(
        relativePath: { eq: "aliados/banco_hover.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            originalImg
          }
        }
      }

      bancolombia: file(
        relativePath: { eq: "aliados/bancolombia_normal.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            originalImg
          }
        }
      }
      bancolombiaHover: file(
        relativePath: { eq: "aliados/bancolombia_hover.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            originalImg
          }
        }
      }

      giros: file(
        relativePath: { eq: "aliados/giros_normal.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            originalImg
          }
        }
      }
      girosHover: file(
        relativePath: { eq: "aliados/giros_hover.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            originalImg
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

      ahorro: file(
        relativePath: { eq: "sections/ahorro.jpg" }
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
    <section>
      <Container className="mx-auto lg:ml-auto transform lg:translate-x-6">
        <div className="lg:grid lg:grid-cols-2 py-20 ">
          <div className="mb-12 lg:mb-0 px-4 sm:px-0">
            <h2 className="text-center font-bold">
              <TitleMd className="block text-secondary">Solicita tu</TitleMd>
              <TitleXl className="block text-primary-light">
                Crédito Hipotecario
              </TitleXl>
              <TitleMd className="block text-secondary">
                con uno de nuestros aliados
              </TitleMd>
            </h2>
            <div className="grid md:px-24 lg:px-0 grid-cols-2 xl:px-16 gap-4 sm:gap-12 mx-auto mt-12">
              <LogoAliado
                normal={data.davivienda.childImageSharp.fluid.originalImg}
                hover={data.daviviendaHover.childImageSharp.fluid.originalImg}
              />

              <LogoAliado
                normal={data.banco.childImageSharp.fluid.originalImg}
                hover={data.bancoHover.childImageSharp.fluid.originalImg}
              />

              <LogoAliado
                normal={data.bancolombia.childImageSharp.fluid.originalImg}
                hover={data.bancolombiaHover.childImageSharp.fluid.originalImg}
              />

              <LogoAliado
                normal={data.giros.childImageSharp.fluid.originalImg}
                hover={data.girosHover.childImageSharp.fluid.originalImg}
              />
            </div>
            <Description className="text-center mx-auto text-gray-500 mx-20 mt-12 ">
              <p>
                Disfruta de tasas de interés especiales de{" "}
                <b>x.x% efectivo anual</b>, además de{" "}
                <strong>beneficios exclusivos</strong> para colombianos en el
                exterior.
              </p>
            </Description>

            <ButtomMain
              className="mt-12 mx-auto text-xl focus:outline-none transform hover:scale-105 transition-all duration-200  font-bold"
              image={data.buttom.childImageSharp.fluid.originalImg}
              subimage={data.flecha.childImageSharp.fluid.originalImg}
              onClick={openModal}
            >
              Solicita tu Crédito
            </ButtomMain>
          </div>

          <GalleryContainer className="lg:w-auto mx-auto lg:mx-0">
            <Gallery />
          </GalleryContainer>
        </div>
      </Container>
      {/* Modal */}
      <ModalForm showModal={showModal} setShowModal={setShowModal} />
    </section>
  );
};

export default Section1;

const GalleryContainer = styled.span`
  width: 100%;
  max-width: 500px;

  @media (min-width: 1024px) {
    max-width: 100%;
  }
`;

const TitleMd = styled.span`
  font-size: 25px;
  line-height: 0.5;

  @media (min-width: 640px) {
    font-size: 35px;
  }
`;
const TitleXl = styled.span`
  font-size: 30px;

  @media (min-width: 640px) {
    font-size: 50px;
  }
`;
const Description = styled.div`
  max-width: 586px;

  & p {
    font-size: 15px;
  }
  @media (min-width: 640px) {
    & p {
      font-size: 19px;
    }
  }
`;

const LogoAliado = styled.div`
  background: url("${(props) => props.normal}");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 130px;
  height: 80px;
  transition: all 0.3s ease;
  margin: 0 auto;

  &:hover {
    background: url("${(props) => props.hover}");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    transform: scale(1.125);
  }

  @media (min-width: 640px) {
    width: 200px;
  }
`;

const ButtomMain = styled.button`
  background: url("${(props) => props.image}");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  color: #fff;
  display: block;
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

const Container = tw.div`
 container 
`;
