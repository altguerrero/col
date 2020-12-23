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
        relativePath: { eq: "aliados/davivienda.jpg" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      bbva: file(
        relativePath: { eq: "aliados/bbva.jpg" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      bancolombia: file(
        relativePath: { eq: "aliados/bancolombia.jpg" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      giros: file(
        relativePath: { eq: "aliados/giros.jpg" }
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
      <div className="grid lg:grid-cols-2 py-20" data-aos="fade-right">
        <div className="">
          <h2 className="text-center font-bold">
            <span className="block text-lg sm:text-2xl text-secondary">
              Solicita tu
            </span>
            <span className="block text-2xl sm:text-4xl text-primary-light">
              Crédito Hipotecario
            </span>
            <span className="block text-lg sm:text-2xl text-secondary">
              con uno de nuestros aliados
            </span>
          </h2>
          <div className="grid grid-cols-2 w-2/4  gap-12 mx-auto mt-12">
            <Aliado className="">
              <Img className="" fluid={data.davivienda.childImageSharp.fluid} />
            </Aliado>
            <Aliado className="">
              <Img className="" fluid={data.bbva.childImageSharp.fluid} />
            </Aliado>
            <Aliado className="">
              <Img
                className=""
                fluid={data.bancolombia.childImageSharp.fluid}
              />
            </Aliado>
            <Aliado className="">
              <Img className="" fluid={data.giros.childImageSharp.fluid} />
            </Aliado>
          </div>
          <div className="text-center w-2/3 mx-auto text-gray-500 text-base mx-20 mt-12 ">
            <p>
              Disfruta de tasas de interés especiales de{" "}
              <b>x.x% efectivo anual</b>, además de{" "}
              <strong>beneficios exclusivos</strong> para colombianos en el
              exterior.
            </p>
          </div>

          <ButtomMain
            className="mt-12 mx-auto font-bold"
            image={data.buttom.childImageSharp.fluid.originalImg} 
            subimage={data.flecha.childImageSharp.fluid.originalImg}
            onClick={() => setModal(!modal)}
          >
            Solicita tu Crédito
          </ButtomMain>
        </div>

        <div className="w-96 lg:w-auto mx-auto lg:mx-0 mt-12 lg:mt-0">
          <Gallery />
        </div>
      </div>
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

const Aliado = styled.div`
  max-width: 150px;

  & img {
    filter: grayscale(100%);
    transition: all 0.3s;
    opacity: 0.75 !important;

    &:hover {
      filter: grayscale(0%);
      opacity: 1 !important;
    }
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
    right:-20px;
    bottom:0;
    
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
