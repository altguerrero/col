import * as React from "react";
import tw from "twin.macro";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import { Faceboock2, Youtube, Instagram, Linkedin } from "../Icons";

// markup
const Footer = () => {
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
    <footer className="bg-secondary pt-20">
      <div className="container grid grid-cols-2">
        <div></div>
        <div>
          <div className="text-white text-center text-base">
            <p className="mb-4">
              <span className="inline-block mx-2">Crédito Hipotecario</span> -{" "}
              <span className="inline-block mx-2">Servicios Inmobiliarios</span>
            </p>
            <p>
              <span className="inline-block mx-2">Cuenta de ahorros</span> -{" "}
              <span className="inline-block mx-2">Monetización</span> -{" "}
              <span className="inline-block mx-2">Nosotros</span>
            </p>
          </div>
          <div className="text-white flex justify-center mt-12">
            <div className="border border-white rounded-full p-2 mr-4">
              <Faceboock2 wh="h-5 w-5" />
            </div>
            <div className="border border-white rounded-full p-2 mr-4">
              <Instagram wh="h-5 w-5" />
            </div>
            <div className="border border-white rounded-full p-2 mr-4">
              <Linkedin wh="h-5 w-5" />
            </div>
            <div className="border border-white rounded-full p-2">
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
      <p className="text-center text-white text-base pb-8 pt-12">Politica de privacidad - mapa del sitio - 2020 Momentum</p>
    </footer>
  );
};

export default Footer;
