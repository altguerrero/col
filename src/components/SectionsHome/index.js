import * as React from "react";
import Beta from "../Beta";
import Beta2 from "../Beta2";

// Section 1
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Pig, Bill } from "../components/Icons";

const SectionsHome = () => {
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
    <>
     
      <section>
        <div className="w-1/2 h-1 bg-primary-light mx-auto rounded"></div>
        <div className="bg-gray-200">
          <p className="text-2xl font-bold text-secondary text-center py-8">
            Estamos comprometidos con las metas de los colombianos
          </p>
          <div className="w-1/2 mx-auto grid grid-cols-3">
            <div className="text-center">
              <span className="block font-bold text-primary-light text-5xl">
                70 K
              </span>
              <h3 className="text-secondary pt-4">
                <span className="block text-base font-semibold">
                  Familias colombianas
                </span>
                <span className="block text-2xl font-bold">Asesoradas</span>
              </h3>
            </div>
            <div className="text-center">
              <span className="block font-bold text-primary-light text-5xl">
                5,8 K
              </span>
              <h3 className="text-secondary pt-4">
                <span className="block text-base font-semibold">
                  Casas en todo Colombia
                </span>
                <span className="block text-2xl font-bold">Entregadas</span>
              </h3>
            </div>
            <div className="text-center">
              <span className="block font-bold text-primary-light text-5xl">
                13
              </span>
              <h3 className="text-secondary pt-4">
                <span className="block text-base font-semibold">
                  Países con atención
                </span>
                <span className="block text-2xl font-bold">Permanente</span>
              </h3>
            </div>
          </div>

          <p className="text-lg text-secondary text-center py-8">
            ¡Ahora queremos ayudarte a ti a comprar tu casa en Colombia desde el
            exterior!
          </p>
        </div>
        <div className="w-1/2 h-1 bg-primary-light mx-auto rounded"></div>
      </section>
      <section className="container">
        <div className="grid grid-cols-2 py-20">
          <div>
            <Beta2 />
          </div>
          <div>
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
      <section>
        <div className="w-1/2 h-1 bg-primary-light mx-auto rounded"></div>
        <div className="bg-gray-200">
          <div className="text-2xl mx-auto font-bold text-secondary text-center py-8">
            <p>Descubre los proyectos de las mejores</p>
            <p>constructoras el país</p>
          </div>

          <div className="w-1/2 mx-auto grid grid-cols-4 justify-items-center"></div>
        </div>
        <div className="w-1/2 h-1 bg-primary-light mx-auto rounded"></div>
      </section>
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
              className="mt-12 mx-auto"
              image={data.buttom.childImageSharp.fluid.originalImg}
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

      <section>
        <div className="w-1/2 h-1 bg-primary-light mx-auto rounded"></div>
        <div className="bg-gray-200 py-8">
          <div className="text-2xl mx-auto font-bold text-secondary text-center mb-8">
            <p>Ahora puedes monetizar tus ingresos</p>
          </div>

          <div className="w-1/2 mx-auto text-center text-gray-500 text-base  ">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem
            </p>
          </div>
          <ButtomMain
            className="mt-8 mx-auto"
            image={data.buttom.childImageSharp.fluid.originalImg}
          >
            ¡Hazlo ahora!
          </ButtomMain>
        </div>
        <div className="w-1/2 h-1 bg-primary-light mx-auto rounded"></div>
      </section>

      <section className="container grid grid-cols-2 py-20">
        <div></div>
        <div>
          <h3 className="text-center">
            <span className="block text-4xl font-bold text-secondary">
              #TodosSomos
            </span>
            <span className="block text-6xl font-bold text-primary-light">
              Colraices
            </span>
          </h3>
          <div className="mx-12 mt-12 text-center font-semibold text-gray-700">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea
            </p>
          </div>
        </div>
      </section>
    </>
  );
};



const Constructora = styled.div`
  max-width: 100px;

  & img {
    filter: grayscale(100%);
    transition: all .3s;
    flex;
    justify-content: center;
    align-items: center;

    &:hover {
      filter: grayscale(0%);
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
`;
