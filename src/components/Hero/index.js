import * as React from "react";
import tw from "twin.macro";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";

const HeroBack = styled.div`
  height: calc(100vh - 80px);
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
    postion: absolute;
    top: 0;
    background-color: #2d2d2d;
    opacity: 0.75;
  }
`;

const Container = tw.div`
 container absolute 
`;
const GridContainer = tw.div`
 grid grid-cols-2
`;
const Title = tw.h1`
  text-white font-bold text-6xl 
`;
const FormContainer = styled.div`
  background-color: rgba(45, 45, 45, .75);
  width: 75%;
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
    border-top: 3px solid #CAA55E;
    border-left: 3px solid #CAA55E;
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
    border-right: 3px solid #CAA55E;
    border-bottom: 3px solid #CAA55E;
    border-radius: 0 0 10px 0;
  }
`;

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
    <HeroBack image={data.hero.childImageSharp.fluid.originalImg}>
      <Container>
        <GridContainer>
          <div className="mx-12 flex flex-col justify-center">
            <Title>¿Quieres comprar casa en Colombia?</Title>
            <span className="block text-right text-xl text-primary-dark font-bold mx-10 mt-2">
              ¡Este, es el camino!
            </span>
            <p className="text-white text-lg mt-8">
              Accede a créditos hipotecarios y Leasing Habitacional con
              beneficios exclusivos para colombianos en el exterior, abre tu
              cuenta de ahorros y descubre más de 130 inmuebles por todo
              Colombia para que puedas cumplir tus metas.
            </p>
          </div>
          <div>
            <FormContainer>
                <h3 className="text-white font-semibold text-2xl text-center leading-7">Déjanos tu datos,</h3>
                <h3 className="text-white font-semibold text-2xl text-center leading-7">¡Nosotros te llamamos!</h3>
                <form className="mt-4">
                  <input className="block w-full px-4 py-2 text-black border-none rounded-lg " type="text" name="Nombre" placeHolder="Tu nombre" required />
                  <input className="mt-4 block w-full px-4 py-2 text-black border-none rounded-lg " type="email" name="Correo" placeHolder="Tu correo electrónico" required />
                  <input className="mt-4 block w-full px-4 py-2 text-black border-none rounded-lg " type="tel" name="Telefono" placeHolder="Tu teléfono" required />
                  <select required className="mt-4 block w-full px-4 py-2 text-black border-none rounded-lg">
                    <option disabled selected>Selecciona el servicio de tu interes</option>
                    <option value="Crédito Hipotecario">Crédito Hipotecario</option>
                    <option value="Leasing Habitacional">Leasing Habitacional</option>
                    <option value="Cuenta de ahorros">Cuenta de ahorros</option>
                    <option value="Servicios inmoviliario">Servicios inmoviliario</option>
                    <option value="Otros">Otros</option>
                  </select>
                  <button type="submit" className="border border-white hover:bg-primary-light hover:border-primary-light transition-all duration-200 block rounded-lg text-center px-4 py-2 text-white w-full mt-4 text-lg">¡Quiero Tener mi casa en Colombia!</button>
                  <label className="text-white text-center flex items-center justify-center mt-4">
                    <input type="checkbox" name="terminos" required id="terminos" className="mr-2" />
                    Acepto <a href="#" className="text-link px-1">política de tratamiento</a> de datos
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
