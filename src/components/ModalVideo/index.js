import React, { useEffect, useRef, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "@emotion/styled";
import tw from "twin.macro";

// markup
const ModalVideo = ({ showModal, setShowModal }) => {
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
            <ModalWrapper className="" showModal={showModal}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/GGsWd2y_HVY"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
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

export default ModalVideo;

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
