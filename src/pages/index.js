import * as React from "react";
import Menu from "../components/NavMenu";
import Hero from "../components/Hero";
import Aside from "../components/Aside";

// Section 1
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// markup
const IndexPage = () => {
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

      prodesa: file(
        relativePath: { eq: "constructoras/prodesa.png" }
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
    }
  `);
  return (
    <>
      <Menu />
      <Hero />
      <main className=" h-screen">
        <section>
          <div className="container grid grid-cols-2 py-20">
            <div>
              <h2 className="text-center font-bold">
                <span className="block text-2xl text-secondary">
                  Solicita tu
                </span>
                <span className="block text-4xl text-primary-light">
                  Crédito Hipotecario
                </span>
                <span className="block text-2xl text-secondary">
                  con uno de nuestros aliados
                </span>
              </h2>
              <div className="grid grid-cols-2 w-2/4 gap-12 mx-auto mt-12">
                <Aliado>
                  <Img fluid={data.davivienda.childImageSharp.fluid} />
                </Aliado>
                <Aliado>
                  <Img fluid={data.bbva.childImageSharp.fluid} />
                </Aliado>
                <Aliado>
                  <Img fluid={data.bancolombia.childImageSharp.fluid} />
                </Aliado>
                <Aliado>
                  <Img fluid={data.giros.childImageSharp.fluid} />
                </Aliado>
              </div>
              <div className="text-center text-gray-500 text-base mx-20 mt-12 ">
                <p>
                  Disfruta de tasas de interés especiales de{" "}
                  <b>x.x% efectivo anual</b>, además de{" "}
                  <strong>beneficios exclusivos</strong> para colombianos en el
                  exterior.
                </p>
              </div>

              <ButtomMain
                className="mt-12 mx-auto"
                image={data.buttom.childImageSharp.fluid.originalImg}
              >
                Solicita tu Crédito
              </ButtomMain>
            </div>

            <div></div>
          </div>
        </section>

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
              ¡Ahora queremos ayudarte a ti a comprar tu casa en Colombia desde
              el exterior!
            </p>
          </div>
          <div className="w-1/2 h-1 bg-primary-light mx-auto rounded"></div>
        </section>

        <section className="container">
          <div className="grid grid-cols-2 py-20">
            <div></div>
            <div>
              <h3 className="block w-1/2 mx-auto text-2xl font-bold text-secondary">
                ¡Elige la casa que quieres donde siempre la quisiste!
              </h3>
              <div className="text-center text-gray-500 text-base mx-20 mt-12 ">
                <p>
                  <b className="text-primary-light">
                    Más de 130 proyectos disponibles
                  </b>{" "}
                  en las principales ciudades del país con opción de compra
                  sobre planos y con posibilidad de diferir el pago de la{" "}
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
                <ButtomMain
                  image={data.buttom.childImageSharp.fluid.originalImg}
                >
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
            
            <div className="w-1/2 mx-auto grid grid-cols-4 justify-items-center">
              <Constructora>
                <Img fluid={data.prodesa.childImageSharp.fluid} />
              </Constructora>
              <Constructora>
                <Img fluid={data.prodesa.childImageSharp.fluid} />
              </Constructora>
              <Constructora>
                <Img fluid={data.prodesa.childImageSharp.fluid} />
              </Constructora>
              <Constructora>
                <Img fluid={data.prodesa.childImageSharp.fluid} />
              </Constructora>
            </div>
          </div>
          <div className="w-1/2 h-1 bg-primary-light mx-auto rounded"></div>
        </section>
      </main>
      <Aside />
    </>
  );
};

export default IndexPage;

const Aliado = styled.div`
  max-width: 150px;

  & img {
    filter: grayscale(100%);
    transition: all .3s;
    opacity: .75 !important;
    flex;
    justify-content: center;
    align-items: center;

    &:hover {
      filter: grayscale(0%);
      opacity: 1 !important;
    }
  }

`;

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
