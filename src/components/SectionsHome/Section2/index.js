import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";

const Section2 = () => {
  const [state, setstate] = useState(0);
  const [state2, setstate2] = useState(0);
  const [state2_1, setstate2_1] = useState(0);
  const [state3, setstate3] = useState(0);

  const props = useSpring({
    config: {
      duration: 5000,
    },
    number: state,
    from: { number: 0 },
  });
  const props2 = useSpring({
    config: {
      duration: 5000,
    },
    number: state2,
    from: { number: 0 },
  });
  const props2_1 = useSpring({
    config: {
      duration: 5000,
    },
    number: state2_1,
    from: { number: 0 },
  });

  const props3 = useSpring({
    config: {
      duration: 5000,
    },
    number: state3,
    from: { number: 0 },
  });

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset > 760) {
        setstate(70);
        setstate2(5);
        setstate2_1(8);
        setstate3(13);
      }
    };
  });

  return (
    <section className="">
      <div className="w-1/2 h-1 bg-primary-light mx-auto rounded"></div>
      <Background>
        <div data-aos="fade-up" className="px-4">
          <Title
            onClick={() => setstate(70)}
            className="font-bold text-secondary text-center py-8"
          >
            Estamos comprometidos con las metas de los colombianos
          </Title>

          <div className="xl:w-1/2 mx-auto grid sm:grid-cols-3 gap-4">
            <div className="text-center">
              <Cantidad className="counter block font-bold text-primary-light">
                <animated.span>
                  {props.number.interpolate((x) => Math.floor((x * 100) / 100))}
                </animated.span>{" "}
                k
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
                <animated.span>
                  {props2.number.interpolate((x) =>
                    Math.floor((x * 100) / 100)
                  )}
                </animated.span>
                ,
                <animated.span>
                  {props2_1.number.interpolate((x) =>
                    Math.floor((x * 100) / 100)
                  )}
                </animated.span>{" "}
                K
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
                <animated.span>
                  {props3.number.interpolate((x) =>
                    Math.floor((x * 100) / 100)
                  )}
                </animated.span>{" "}
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
            ¡Ahora queremos ayudarte a ti a comprar tu casa en Colombia desde el
            exterior!
          </Description>
        </div>
      </Background>
      <div className="w-1/2 h-1 bg-primary-light mx-auto rounded"></div>
    </section>
  );
};

export default Section2;

const Background = styled.div`
  background-color: #f6f6f6;
`;

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
