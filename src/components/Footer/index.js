import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import { Faceboock2, Youtube, Instagram, Linkedin } from "../Icons";
import Img from "gatsby-image";
import { Link, animateScroll as scroll } from "react-scroll";

// markup
const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      map: file(
        relativePath: { eq: "assets/map.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mapIcon: file(
        relativePath: { eq: "assets/map_icon.png" }
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
    <footer className="bg-secondary pt-20 relative z-50">
      <div className="container  mx-auto grid lg:grid-cols-2">
        <div className="mb-12 lg:mb-0">
          <MapContainer className="relative">
            <Img
              className="map w-full h-full"
              fluid={data.map.childImageSharp.fluid}
            />
            <MapCity className="city__1">
              <Img
                className="map__icon w-2 sm:w-4 city transition-all duration-200"
                fluid={data.mapIcon.childImageSharp.fluid}
              />
              <div className="map__info absolute top-0 transform -translate-y-4">
                <div className="text-white w-40 bg-white px-1 py-2 text-center rounded">
                  <p className="text-sm font-bold text-primary-light">
                    Colombia - Bogota
                  </p>
                  <p className="text-xs font-semibold text-gray-500">
                    +571 123 456 7890
                  </p>
                  <p className="text-xs font-semibold text-gray-500">
                    info@colraices.com
                  </p>
                </div>
              </div>
            </MapCity>
            <MapCity className="city__2">
              <Img
                className="map__icon w-2 sm:w-4 city transition-all duration-200"
                fluid={data.mapIcon.childImageSharp.fluid}
              />
              <div className="map__info absolute top-0 transform -translate-y-4">
                <div className="text-white w-40 bg-white px-1 py-2 text-center rounded">
                  <p className="text-sm font-bold text-primary-light">
                    Colombia - Bogota
                  </p>
                  <p className="text-xs font-semibold text-gray-500">
                    +571 123 456 7890
                  </p>
                  <p className="text-xs font-semibold text-gray-500">
                    info@colraices.com
                  </p>
                </div>
              </div>
            </MapCity>
            <MapCity className="city__3">
              <Img
                className="map__icon w-2 sm:w-4 city transition-all duration-200"
                fluid={data.mapIcon.childImageSharp.fluid}
              />
              <div className="map__info absolute top-0 transform -translate-y-4">
                <div className="text-white w-40 bg-white px-1 py-2 text-center rounded">
                  <p className="text-sm font-bold text-primary-light">
                    Colombia - Bogota
                  </p>
                  <p className="text-xs font-semibold text-gray-500">
                    +571 123 456 7890
                  </p>
                  <p className="text-xs font-semibold text-gray-500">
                    info@colraices.com
                  </p>
                </div>
              </div>
            </MapCity>
            <MapCity className="city__4">
              <Img
                className="map__icon w-2 sm:w-4 city transition-all duration-200"
                fluid={data.mapIcon.childImageSharp.fluid}
              />
              <div className="map__info absolute top-0 transform -translate-y-4">
                <div className="text-white w-40 bg-white px-1 py-2 text-center rounded">
                  <p className="text-sm font-bold text-primary-light">
                    Colombia - Bogota
                  </p>
                  <p className="text-xs font-semibold text-gray-500">
                    +571 123 456 7890
                  </p>
                  <p className="text-xs font-semibold text-gray-500">
                    info@colraices.com
                  </p>
                </div>
              </div>
            </MapCity>
            <MapCity className="city__5">
              <Img
                className="map__icon w-2 sm:w-4 city transition-all duration-200 z-0"
                fluid={data.mapIcon.childImageSharp.fluid}
              />
              <div className="map__info absolute top-0 transform -translate-y-4">
                <div className="text-white w-40 bg-white px-1 py-2 text-center rounded">
                  <p className="text-sm font-bold text-primary-light">
                    Colombia - Bogota
                  </p>
                  <p className="text-xs font-semibold text-gray-500">
                    +571 123 456 7890
                  </p>
                  <p className="text-xs font-semibold text-gray-500">
                    info@colraices.com
                  </p>
                </div>
              </div>
            </MapCity>
          </MapContainer>
        </div>
        <div>
          <div className="text-white text-center text-base">
            <p className="mb-4">
              <Link
                to="section1"
                offset={-70}
                className="inline-block mx-2 cursor-pointer transition duration-200 hover:opacity-75"
              >
                Crédito Hipotecario
              </Link>{" "}
              -{" "}
              <Link
                to="section3"
                offset={-70}
                className="inline-block mx-2 cursor-pointer transition duration-200 hover:opacity-75"
              >
                Servicios Inmobiliarios
              </Link>
            </p>
            <p>
              <Link
                to="section5"
                offset={-70}
                className="inline-block mx-2 cursor-pointer transition duration-200 hover:opacity-75"
              >
                Cuenta de ahorros
              </Link>{" "}
              -{" "}
              <Link
                to="section6"
                offset={-70}
                className="inline-block mx-2 cursor-pointer transition duration-200 hover:opacity-75"
              >
                Monetización
              </Link>{" "}
              -{" "}
              <Link
                to="section7"
                offset={-70}
                className="inline-block mx-2 cursor-pointer transition duration-200 hover:opacity-75"
              >
                Nosotros
              </Link>
            </p>
          </div>
          <div className="text-white flex justify-center mt-12">
            <div className="border border-white rounded-full cursor-pointer p-2 mr-4 hover:bg-white hover:text-secondary duration-200 transition-all">
              <Faceboock2 wh="h-5 w-5" />
            </div>
            <div className="border border-white rounded-full cursor-pointer p-2 mr-4 hover:bg-white hover:text-secondary duration-200 transition-all">
              <Instagram wh="h-5 w-5" />
            </div>
            <div className="border border-white rounded-full cursor-pointer p-2 mr-4 hover:bg-white hover:text-secondary duration-200 transition-all">
              <Linkedin wh="h-5 w-5" />
            </div>
            <div className="border border-white rounded-full cursor-pointer p-2 hover:bg-white hover:text-secondary duration-200 transition-all">
              <Youtube wh="h-5 w-5" />
            </div>
          </div>
          <div>
            <div className="text-base text-center mt-12 text-white">
              <p>Colraices - Oficina Principal - Bogotá - Colombia</p>
              <p>Calle 100 # 13 - 41 of 102 - (+571) 213 65487</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-white text-base pb-8 pt-12">
        Politica de privacidad - mapa del sitio - 2020 Momentum
      </p>
    </footer>
  );
};

export default Footer;

const MapContainer = styled.div`
  --city-1: translate(70px, -20px);
  --city-2: translate(75px, -50px);
  --city-3: translate(65px, -75px);
  --city-4: translate(145px, -105px);
  --city-5: translate(155px, -95px);

  @media (min-width: 640px) {
    --city-1: translate(115px, -40px);
    --city-2: translate(125px, -80px);
    --city-3: translate(105px, -115px);
    --city-4: translate(225px, -170px);
    --city-5: translate(240px, -150px);
  }
  @media (min-width: 768px) {
    --city-1: translate(170px, -60px);
    --city-2: translate(175px, -120px);
    --city-3: translate(165px, -175px);
    --city-4: translate(325px, -240px);
    --city-5: translate(350px, -210px);
  }

  @media (min-width: 1024px) {
    --city-1: translate(120px, -40px);
    --city-2: translate(125px, -85px);
    --city-3: translate(115px, -125px);
    --city-4: translate(230px, -170px);
    --city-5: translate(250px, -150px);
  }

  @media (min-width: 1280px) {
    --city-1: translate(150px, -55px);
    --city-2: translate(155px, -105px);
    --city-3: translate(145px, -155px);
    --city-4: translate(290px, -215px);
    --city-5: translate(310px, -190px);
  }

  @media (min-width: 1536px) {
    --city-1: translate(170px, -60px);
    --city-2: translate(175px, -120px);
    --city-3: translate(165px, -175px);
    --city-4: translate(325px, -240px);
    --city-5: translate(350px, -210px);
  }

  max-width: 320px;
  max-height: 284px;
  margin: 0 auto;

  @media (min-width: 640px) {
    max-width: 500px;
  }

  @media (min-width: 768px) {
    max-width: 715px;
  }

  .map__info {
    max-heght: 0;
    max-width: 0;
    opacity: 0;
    overflow: hidden;
    transition: all 0.2s;
  }

  .city:hover + .map__info,
  .map__info:hover {
    max-heght: 1100;
    max-width: 11100;
    overflow: visible;
    opacity: 1;
    padding-left: 2rem;
  }
  .city__1 {
    transform: var(--city-1);
  }
  .city__2 {
    transform: var(--city-2);
  }
  .city__3 {
    transform: var(--city-3);
  }
  .city__4 {
    transform: var(--city-4);
  }
  .city__5 {
    transform: var(--city-5);
  }
`;
const MapCity = styled.div`
  position: absolute;
  bottom: 0;
  &:hover {
    z-index: 100;
  }

  &:hover .city {
    transform: scale(1.2);
  }
`;
