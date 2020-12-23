import React, { useState } from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import tw from "twin.macro";
import { Pig, Bill } from "../../Icons";

const Section4 = () => {
  const [modal, setModal] = useState(false);
  
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
    <section>
      <div className="grid grid-cols-2 py-20">
        <div>
          <h2 className="text-center font-bold">
            <span className="block text-2xl text-secondary">Solicita tu</span>
            <span className="block text-4xl text-primary-light">
              Cuenta de ahorros
            </span>
            <span className="block text-2xl text-secondary">Bancolombia</span>
          </h2>

          <div className="text-center w-2/3 mx-auto text-gray-500 text-base mx-20 mt-12 ">
            <p>
              Con ella no solo ahorraras el dinero para que cumplas tu meta de
              tener casa nueva en Colombia, sino que adicional podrás:
            </p>
          </div>

          <div className="w-2/3 mx-auto grid grid-cols-3 mt-8">
            <div className="flex flex-col items-center">
              <Pig wh="w-16 h-16 text-primary-light" />
              <h3 className="block mt-4 text-secondary font-bold text-center">
                Transferir dinero a Colombia
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <Bill wh="w-16 h-16 text-primary-light" />
              <h3 className="block mt-4 text-secondary font-bold text-center">
                Recibir Giros Internacionales
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <Bill wh="w-16 h-16 text-primary-light" />
              <h3 className="block mt-4 text-secondary font-bold text-center">
                Realizar pagos a terceros
              </h3>
            </div>
          </div>

          <div className="text-center font-semibol text-gray-700 mt-12">
            <p>"Frase motivadora"</p>
          </div>

          <ButtomMain
            className="mt-12 mx-auto font-bold"
            image={data.buttom.childImageSharp.fluid.originalImg}
            subimage={data.flecha.childImageSharp.fluid.originalImg}
            onClick={() => setModal(!modal)}
          >
            ¡Abre tu cuenta!
          </ButtomMain>
        </div>

        <div className="">
          <div className="mt-12 ml-8 transform translate-x-16">
            <Img className="" fluid={data.ahorro.childImageSharp.fluid} />
          </div>
        </div>
      </div>
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
    right: -20px;
    bottom: 0;
  }
`;
