import React, { useState } from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Pig, Bill, Card } from "../../Icons";
import ModalForm from "../../ModalForm";

const Section4 = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const data = useStaticQuery(graphql`
    query {
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
    }
  `);
  return (
    <section id="section5">
      <div className="container ml-auto mr-auto lg:mr-0 lg:grid grid-cols-2 py-20 transform lg:translate-x-4">
        <div className="mb-12 lg:mb-0 px-4">
          <h2 className="text-center font-bold">
            <TitleMd className="block text-secondary">Solicita tu</TitleMd>
            <TitleXl className="block text-primary-light">
              Cuenta de ahorros
            </TitleXl>
            <TitleMd className="block text-secondary">Bancolombia</TitleMd>
          </h2>
          <div className="text-center sm:w-2/3 mx-auto text-gray-500 text-lg mx-20 mt-12 ">
            <p>
              Con ella no solo ahorraras el dinero para que cumplas tu meta de
              tener casa nueva en Colombia, sino que adicional podrás:
            </p>
          </div>

          <div className="xl:px-12 mx-auto grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-0 mt-8">
            <div className="flex flex-col items-center">
              <Pig wh="w-16 h-16 text-primary-light" />
              <h3 className="block mt-4 w-40 text-secondary font-bold text-center text-lg sm:text-xl">
                Transferir dinero a Colombia
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <Bill wh="w-16 h-16 text-primary-light" />
              <h3 className="block mt-4 w-40 text-secondary font-bold text-center text-lg sm:text-xl">
                Recibir Giros Internacionales
              </h3>
            </div>
            <div className="flex flex-col items-center col-span-2 sm:col-span-1">
              <Card wh="w-16 h-16 text-primary-light " />
              <h3 className="block mt-4 w-40 text-secondary font-bold text-center text-lg sm:text-xl">
                Realizar pagos a terceros
              </h3>
            </div>
          </div>

          <div className="text-center font-semibol text-gray-700 mt-12 text-base sm:text-lg">
            <p>"Frase motivadora"</p>
          </div>

          <ButtomMain
            className="mt-12 mx-auto font-bold text-xl focus:outline-none transform hover:scale-105 transition-all duration-200"
            image={data.buttom.childImageSharp.fluid.originalImg}
            subimage={data.flecha.childImageSharp.fluid.originalImg}
            onClick={openModal}
          >
            ¡Abre tu cuenta!
          </ButtomMain>
        </div>

        <div className="">
          <div className="">
            <Img className="w-full" fluid={data.ahorro.childImageSharp.fluid} />
          </div>
        </div>
      </div>
      {/* Modal */}
      <ModalForm showModal={showModal} setShowModal={setShowModal} />
    </section>
  );
};

export default Section4;

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
