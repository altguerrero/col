import React, { useState } from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import tw from "twin.macro";

const Section2 = () => {
  return (
    <section className="">
      <div className="w-1/2 h-1 bg-primary-light mx-auto rounded"></div>
      <div className="bg-gray-200">
        <div data-aos="fade-up" className="px-4">
          <p className="text-2xl font-bold text-secondary text-center py-8">
            Estamos comprometidos con las metas de los colombianos
          </p>
          <div className="lg:w-1/2 mx-auto grid sm:grid-cols-3 gap-4">
            <div className="text-center">
              <span className="block font-bold text-primary-light text-4xl sm:text-5xl">
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
              <span className="block font-bold text-primary-light text-4xl sm:text-5xl">
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
              <span className="block font-bold text-primary-light text-4xl sm:text-5xl">
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
      </div>
      <div className="w-1/2 h-1 bg-primary-light mx-auto rounded"></div>
    </section>
  );
};

export default Section2;

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
