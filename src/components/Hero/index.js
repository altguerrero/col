import * as React from "react";
import tw from "twin.macro";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";

// markup
const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(
        relativePath: { eq: "hero.jpg" }
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
    <HeroBack className="h-full lg:h-screen pt-20" image={data.hero.childImageSharp.fluid.originalImg}>
      <Container>
        <GridContainer data-aos="fade-up"  className="py-12 lg:py-0 gap-8 lg:gap-0">
          <div className="mx-4 lg:mx-12 flex flex-col justify-center">
            <Title>¿Quieres comprar casa en Colombia?</Title>
            <span className="block text-right text-lg sm:text-xl text-primary-dark font-bold mx-auto lg:mx-12 mt-2">
              ¡Este, es el camino!
            </span>
            <p className="text-white text-base -bottom-0sm:text-lg mt-8 w-3/4 lg:w-auto mx-auto">
              Accede a créditos hipotecarios y Leasing Habitacional con
              beneficios exclusivos para colombianos en el exterior, abre tu
              cuenta de ahorros y descubre más de 130 inmuebles por todo
              Colombia para que puedas cumplir tus metas.
            </p>
          </div>
          <div>
            <FormContainer className="w-3/4">
              <h3 className="text-white font-semibold text-lg sm:text-2xl text-center leading-6">
                Déjanos tu datos,
              </h3>
              <h3 className="text-white font-semibold text-lg sm:text-2xl text-center leading-6">
                ¡Nosotros te llamamos!
              </h3>
              <form className="mt-4">
                <input
                  className="block w-full px-4 py-2 text-black border-none rounded-lg "
                  type="text"
                  name="Nombre"
                  placeHolder="Tu nombre"
                  required
                />
                <input
                  className="mt-4 block w-full px-4 py-2 text-black border-none rounded-lg "
                  type="email"
                  name="Correo"
                  placeHolder="Tu correo electrónico"
                  required
                />
                <input
                  className="mt-4 block w-full px-4 py-2 text-black border-none rounded-lg "
                  type="tel"
                  name="Telefono"
                  placeHolder="Tu teléfono"
                  required
                />
                <select
                  required
                  className="mt-4 block w-full px-4 py-2 text-black border-none rounded-lg"
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
                  className="border border-white hover:bg-primary-light hover:border-primary-light transition-all duration-200 block rounded-lg text-center px-4 py-2 text-white w-full mt-4 text-base sm:text-lg"
                >
                  ¡Quiero Tener mi casa en Colombia!
                </button>
                <label className="text-white text-center flex flex-wrap	 items-center justify-center mt-4 text-xs">
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
    </HeroBack>
  );
};

export default Hero;

const HeroBack = styled.div`
  background: url("${(props) => props.image}") no-repeat fixed 100%;
  background-position: center;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    background-color: #2d2d2d;
    opacity: 0.75;
   
  }

`;

const Container = tw.div`
 container  z-10
`;
const GridContainer = tw.div`
 grid lg:grid-cols-2
`;
const Title = tw.h1`
  text-white font-bold text-2xl sm:text-4xl lg:text-5xl xl:text-6xl  text-center sm:text-left
`;
const FormContainer = styled.div`
  background-color: rgba(45, 45, 45, 0.75);
  margin: 0 auto;
  padding: 1rem 1.75rem;
  border-radius: 10px;
  position: relative;
  z-index: 10;

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
