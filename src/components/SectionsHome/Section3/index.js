import React, { useState } from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Gallery from "./gallery";
import tw from "twin.macro";

const Section3 = () => {
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
    <section className="container">
      <div className="grid grid-cols-2 py-20">
        <div>
          <Gallery />
        </div>
        <div className="flex flex-col justify-around">
          <h3 className="text-center block w-1/2 mx-auto text-2xl font-bold text-secondary">
            ¡Elige la casa que quieres donde siempre la quisiste!
          </h3>
          <div className="text-center text-gray-500 text-base mx-20 mt-12 ">
            <p>
              <b className="text-primary-light">
                Más de 130 proyectos disponibles
              </b>{" "}
              en las principales ciudades del país con opción de compra sobre
              planos y con posibilidad de diferir el pago de la{" "}
              <strong className="text-primary-light">
                cuota inicial hasta en 24 meses
              </strong>{" "}
              y la posibilidad de compra de inmuebles VIS y no VIS.
            </p>
          </div>
          <div className="flex mt-12 justify-around items-center">
            <span className="block text-base text-secondary">
              Solicita más información
            </span>
            <ButtomMain image={data.buttom.childImageSharp.fluid.originalImg}>
              Explora
            </ButtomMain>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;

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
`;
