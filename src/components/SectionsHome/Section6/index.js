import React, { useState } from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import ModalForm from "../../ModalForm";

const Section6 = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

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
          <p className="font-bold ">¿Qué es la monetización de divisas?</p>
          <p>
            Es el ingreso de divisas al país fruto de la venta de bienes y
            activos ganados por concepto de trabajo o prestación de servicios en
            el exterior.
          </p>

          <p className="font-bold mt-4">
            ¿De qué tributos están exentos quienes monetizan recursos?
          </p>
          <a
            href="https://www.redescolombia.org/"
            rel="noopener nofollow"
            target="black"
            className="underline"
          >
            En el caso de la monetización la Ley 1565 de 2012 establece la
            exención del Gravamen a los Movimientos Financieros (GMF).
          </a>

          <p className="font-bold mt-4">
            ¿Está gravado con algún tributo el ingreso de divisas al país?
          </p>
          <p>No</p>

          <p className="font-bold mt-4">
            ¿Por qué medio deben ingresar al país las divisas fruto de la
            monetización de recursos?
          </p>
          <p>
            La monetización de recursos deberá realizarse a través de un
            intermediario del mercado cambiario previa certificación de
            proveniencia de los recursos.
          </p>
        </div>
        <ButtomMain
          className="mt-8 mx-auto font-bold text-xl focus:outline-none transform hover:scale-105 transition-all duration-200"
          image={data.buttom.childImageSharp.fluid.originalImg}
          subimage={data.flecha.childImageSharp.fluid.originalImg}
          onClick={openModal}
        >
          ¡Hazlo ahora!
        </ButtomMain>
      </Background>
      <div className="w-1/2 h-1 bg-primary-light mx-auto rounded"></div>
      {/* Modal */}
      <ModalForm showModal={showModal} setShowModal={setShowModal} />
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
