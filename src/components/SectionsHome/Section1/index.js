import React, { useState } from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Gallery from "./gallery";
import tw from "twin.macro";

const Section1 = () => {
  const [state, setstate] = useState(false);
  const [modal, setModal] = useState(false);

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
      <Container className="mx-auto lg:ml-auto">
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
              className="mt-12 mx-auto text-xl  font-bold"
              image={data.buttom.childImageSharp.fluid.originalImg}
              subimage={data.flecha.childImageSharp.fluid.originalImg}
              onClick={() => setModal(!modal)}
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
      <Modal
        className={`flex overflow-y-auto pt-20 justify-center items-center fixed top-0 left-0 h-full w-full transform transition-all duration-300  ${
          modal ? "z-40 opacity-100 scale-1" : "opacity-0 -z-50 scale-0"
        } `}
      >
        <Container className="z-50">
          <GridContainer className="py-12 lg:py-0 gap-8 lg:gap-0">
            <button
              onClick={() => setModal(false)}
              className={`hamburger hamburger--slider z-50 is-active fixed mt-24 top-0 right-0 mx-4 focus:outline-none ${
                state ? "is-active hidden" : ""
              } `}
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <div className="mx-4 lg:mx-12 flex flex-col justify-center mt-24 lg:mt-0">
              <Title>Aquí inicias tu camino hacia tu casa en Colombia</Title>
              <span className="block text-right text-lg sm:text-xl text-primary-light font-bold mx-auto lg:mx-12 mt-2">
                ¡Estamos contigo!
              </span>
              <p className="text-gray-700 text-base  sm:text-lg mt-8 w-3/4 lg:w-auto mx-auto">
                Accede a créditos hipotecarios y Leasing Habitacional con
                beneficios exclusivos para colombianos en el exterior, abre tu
                cuenta de ahorros y descubre más de 130 inmuebles por todo
                Colombia para que puedas cumplir tus metas.
              </p>
            </div>
            <div>
              <FormContainer className="w-3/4">
                <h3 className="text-secondary font-semibold text-lg sm:text-2xl text-center leading-6">
                  Déjanos tu datos,
                </h3>
                <h3 className="text-secondary font-semibold text-lg sm:text-2xl text-center leading-6">
                  ¡Nosotros te llamamos!
                </h3>
                <form className="mt-4">
                  <input
                    className="block w-full px-4 py-2 text-black border rounded-lg "
                    type="text"
                    name="Nombre"
                    placeHolder="Tu nombre"
                    required
                  />
                  <input
                    className="mt-4 block w-full px-4 py-2 text-black border rounded-lg "
                    type="email"
                    name="Correo"
                    placeHolder="Tu correo electrónico"
                    required
                  />
                  <input
                    className="mt-4 block w-full px-4 py-2 text-black border rounded-lg "
                    type="tel"
                    name="Telefono"
                    placeHolder="Tu teléfono"
                    required
                  />
                  <select
                    required
                    className="mt-4 block w-full px-4 py-2 text-black border rounded-lg"
                  >
                    <option disabled selected>
                      Selecciona el servicio de tu interes
                    </option>
                    <option value="Crédito Hipotecario">
                      Crédito Hipotecario
                    </option>
                    <option value="Leasing Habitacional">
                      Leasing Habitacional
                    </option>
                    <option value="Cuenta de ahorros">Cuenta de ahorros</option>
                    <option value="Servicios inmoviliario">
                      Servicios inmoviliario
                    </option>
                    <option value="Otros">Otros</option>
                  </select>
                  <button
                    type="submit"
                    className="border border-primary-light hover:bg-primary-light hover:border-primary-light transition-all duration-200 block rounded-lg text-center px-4 py-2 text-primary-light w-full mt-4 text-base sm:text-lg"
                  >
                    ¡Quiero Tener mi casa en Colombia!
                  </button>
                  <label className="text-gray-700 text-center flex flex-wrap items-center justify-center mt-4 text-xs">
                    <input
                      type="checkbox"
                      name="terminos"
                      required
                      id="terminos"
                      className="mr-2"
                    />
                    Acepto{" "}
                    <a href="#" className="text-link inline-block mx-1 ">
                      política de tratamiento
                    </a>{" "}
                    de datos
                  </label>
                </form>
              </FormContainer>
            </div>
          </GridContainer>
        </Container>
      </Modal>
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

const Modal = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 0.98;
`;

const Container = tw.div`
 container 
`;
const GridContainer = tw.div`
 grid lg:grid-cols-2
`;
const Title = tw.h1`
  text-secondary font-bold text-2xl sm:text-4xl lg:text-5xl xl:text-6xl  text-center lg:text-left mt-16 md:mt-20 lg:mt-0
`;
const FormContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 6px #00000021;
  margin: 0 auto;
  padding: 1rem 1.75rem;
  border-radius: 10px;
  position: relative;
  z-index: 100;

  &:before {
    content: "";
    display: block;
    height: 50%;
    width: 50%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    border-top: 3px solid #caa55e;
    border-left: 3px solid #caa55e;
    border-radius: 10px 0 0 0;
  }
  &:after {
    content: "";
    display: block;
    height: 50%;
    width: 50%;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
    border-right: 3px solid #caa55e;
    border-bottom: 3px solid #caa55e;
    border-radius: 0 0 10px 0;
  }
`;
