import React, { useEffect, useRef, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "@emotion/styled";


// markup
const ModalForm = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background
          className="overflow-y-auto"
          ref={modalRef}
          onClick={closeModal}
        >
          <animated.div style={animation}>
            <ModalWrapper
              className="grid xl:grid-cols-2 px-4 lg:px-12 xl:px-0 pb-12 xl:py-0"
              showModal={showModal}
            >
              <div>
                <Title className=" text-secondary font-bold text-center xl:text-left mt-48 xl:mt-0">
                  Aquí inicias tu camino hacia tu casa en Colombia
                </Title>
                <Description className="block  text-center xl:text-right  text-primary-light font-bold mt-2">
                  ¡Estamos contigo!
                </Description>
                <p className="block text-gray-700 text-center sm:text-left text-base sm:text-xl mt-8 sm:w-3/4 xl:w-auto mx-auto mb-12 xl:mb-0">
                  Accede a créditos hipotecarios y Leasing Habitacional con
                  beneficios exclusivos para colombianos en el exterior, abre tu
                  cuenta de ahorros y descubre más de 130 inmuebles por todo
                  Colombia para que puedas cumplir tus metas.
                </p>
              </div>
              <div>
                <FormContainer className="ml-auto mr-auto mr-auto">
                  <h3 className="text-secondary font-semibold text-lg sm:text-2xl text-center leading-6">
                    Déjanos tu datos,
                  </h3>
                  <h3 className="text-secondary font-semibold text-lg sm:text-2xl text-center leading-6">
                    ¡Nosotros te llamamos!
                  </h3>
                  <form className="mt-4">
                    <input
                      className="block w-full px-4 py-2 text-black border rounded-lg "
                      type="text"
                      name="Nombre"
                      placeHolder="Tu nombre"
                      required
                    />
                    <input
                      className="mt-4 block w-full px-4 py-2 text-black border rounded-lg "
                      type="email"
                      name="Correo"
                      placeHolder="Tu correo electrónico"
                      required
                    />
                    <input
                      className="mt-4 block w-full px-4 py-2 text-black border rounded-lg "
                      type="tel"
                      name="Telefono"
                      placeHolder="Tu teléfono"
                      required
                    />
                    <select
                      required
                      className="mt-4 block w-full px-4 py-2 text-black border rounded-lg"
                    >
                      <option disabled selected>
                        Selecciona el servicio de tu interes
                      </option>
                      <option value="Crédito Hipotecario">
                        Crédito Hipotecario
                      </option>
                      <option value="Leasing Habitacional">
                        Leasing Habitacional
                      </option>
                      <option value="Cuenta de ahorros">
                        Cuenta de ahorros
                      </option>
                      <option value="Servicios inmoviliario">
                        Servicios inmoviliario
                      </option>
                      <option value="Otros">Otros</option>
                    </select>
                    <button
                      type="submit"
                      className="border border-primary-light hover:bg-primary-light hover:border-primary-light transition-all duration-200 block rounded-lg text-center px-4 py-2 text-primary-light hover:text-white w-full mt-4 text-base sm:text-lg"
                    >
                      ¡Quiero Tener mi casa en Colombia!
                    </button>
                    <label className="text-gray-700 text-center flex flex-wrap items-center justify-center mt-4 text-xs">
                      <input
                        type="checkbox"
                        name="terminos"
                        required
                        id="terminos"
                        className="mr-2"
                      />
                      Acepto{" "}
                      <a href="www.google.com" className="text-link inline-block mx-1 ">
                        política de tratamiento
                      </a>{" "}
                      de datos
                    </label>
                  </form>
                </FormContainer>
              </div>
            </ModalWrapper>
            <button
              onClick={() => setShowModal((prev) => !prev)}
              className={`hamburger hamburger--slider z-50 is-active absolute mt-4 xl:mt-8 top-0 right-0 mx-8 focus:outline-none `}
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default ModalForm;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  position: fixed;
  top: 0;
  z-index: 60;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 100%;
  max-width: 1253px;

  position: relative;
`;

const Title = styled.h3`
  font-size: 35px;
  @media (min-width: 768px) {
    font-size: 51px;
  }

  line-height: 1.2;
`;
const Description = styled.span`
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 30px;
  }

  line-height: 1.2;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  background: #ffffff;
  box-shadow: 0px 0px 6px #00000021;
  padding: 1rem 1.75rem;
  border-radius: 10px;
  position: relative;
  z-index: 100;

  &:before {
    content: "";
    display: block;
    height: 50%;
    width: 50%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    border-top: 3px solid #caa55e;
    border-left: 3px solid #caa55e;
    border-radius: 10px 0 0 0;
  }
  &:after {
    content: "";
    display: block;
    height: 50%;
    width: 50%;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
    border-right: 3px solid #caa55e;
    border-bottom: 3px solid #caa55e;
    border-radius: 0 0 10px 0;
  }
`;
