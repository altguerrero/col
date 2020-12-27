import React, { Component, refs } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import tw from "twin.macro";

class Section2 extends Component {
  render() {
    return (
      <section className="">
        <div className="w-1/2 h-1 bg-primary-light mx-auto rounded"></div>
        <Background>
          <div data-aos="fade-up" className="px-4">
            <Title className="font-bold text-secondary text-center py-8">
              Estamos comprometidos con las metas de los colombianos
            </Title>
            <div className="xl:w-1/2 mx-auto grid sm:grid-cols-3 gap-4">
              <div className="text-center">
                <Cantidad className="counter block font-bold text-primary-light">
                  70
                </Cantidad>
                <h3 className="text-secondary pt-2">
                  <CantidadTitle className="block text-base font-semibold">
                    Familias colombianas
                  </CantidadTitle>
                  <Bold className="block font-bold">Asesoradas</Bold>
                </h3>
              </div>
              <div className="text-center">
                <Cantidad className="block font-bold text-primary-light">
                  5,8 K
                </Cantidad>
                <h3 className="text-secondary pt-2">
                  <CantidadTitle className="block text-base font-semibold">
                    Casas en todo Colombia
                  </CantidadTitle>
                  <Bold className="block font-bold">Entregadas</Bold>
                </h3>
              </div>
              <div className="text-center">
                <Cantidad className="block font-bold text-primary-light">
                  13
                </Cantidad>
                <h3 className="text-secondary pt-2">
                  <CantidadTitle className="block text-base font-semibold">
                    Países con atención
                  </CantidadTitle>
                  <Bold className="block font-bold">Permanente</Bold>
                </h3>
              </div>
            </div>

            <Description className="text-center text-secondary font-semibold text-center py-8">
              ¡Ahora queremos ayudarte a ti a comprar tu casa en Colombia desde
              el exterior!
            </Description>
          </div>
        </Background>
        <div className="w-1/2 h-1 bg-primary-light mx-auto rounded"></div>
      </section>
    );
  }
}

export default Section2;

const Background = styled.div`
  background-color: #f6f6f6;
`

const Title = styled.h2`
  font-size: 25px;

  @media (min-width: 640px) {
    font-size: 28px;
  }
`;

const Cantidad = styled.div`
  font-size: 45px;

  @media (min-width: 640px) {
    font-size: 70px;
  }

  @media (min-width: 1280px) {
    font-size: 80px;
  }
`;
const Bold = styled.span`
  font-size: 20px;
  line-height: 0.7;

  @media (min-width: 640px) {
    font-size: 28px;
  }
`;

const CantidadTitle = styled.p`
  font-size: 14px;

  @media (min-width: 640px) {
    font-size: 16px;
  }
`;
const Description = styled.p`
  font-size: 18px;

  @media (min-width: 640px) {
    font-size: 20px;
  }
`;
