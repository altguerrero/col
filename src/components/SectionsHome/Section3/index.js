import React, { useState } from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Gallery from "./gallery";
import ModalForm from "../../ModalForm";

const Section3 = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

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
    <section className="container ml-auto mr-auto lg:ml-0  lg:mr-auto">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 py-20">
        <div>
          <Gallery />
        </div>
        <div className="flex flex-col justify-around xl:pl-8 xl:pr-20 mb-12 lg:mb-0">
          <Title className="text-center block mx-auto font-bold text-secondary mb-8">
            ¡Elige la casa que quieres <br /> donde siempre la quisiste!
          </Title>
          <Description className="text-center text-gray-500 mx-20 ">
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
          </Description>
          <div className="flex flex-col sm:flex-row mt-12 justify-center items-center">
            <span
              onClick={openModal}
              className="block cursor-pointer text-center text-xl sm:text-2xl text-secondary transition-all duration-200 hover:opacity-75 sm:mr-12 mb-8 sm:mb-0"
            >
              Solicita más información
            </span>
            <ButtomMain
              className="font-bold text-xl sm:text-2xl focus:outline-none transform hover:scale-105 transition-all duration-200"
              image={data.buttom.childImageSharp.fluid.originalImg}
              subimage={data.flecha.childImageSharp.fluid.originalImg}
            >
              Explora
            </ButtomMain>
          </div>
        </div>
      </div>
      {/* Modal */}
      <ModalForm showModal={showModal} setShowModal={setShowModal} />
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

const Title = styled.h2`
  font-size: 25px;

  @media (min-width: 640px) {
    font-size: 35px;
  }

  @media (min-width: 1536px) {
    font-size: 45px;
  }
`;
const Description = styled.h2`
  font-size: 16px;
  @media (min-width: 640px) {
    font-size: 20px;
  }
  @media (min-width: 1536px) {
    font-size: 25px;
  }
`;
