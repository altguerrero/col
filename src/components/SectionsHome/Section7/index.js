import React, { useState } from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Play } from "../../Icons";
import ModalVideo from "../../ModalVideo";

const Section7 = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const data = useStaticQuery(graphql`
    query {
      videoBack: file(
        relativePath: { eq: "assets/video_back.jpg" }
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
    <Container
      id="section7"
      className="container mr-auto ml-auto xl:ml-0 flex flex-col-reverse xl:grid py-20"
    >
      <div className="lg:px-12">
        <VideoContainer>
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/GGsWd2y_HVY"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoContainer>
      </div>
      <TextContainer className="flex flex-col justify-around  mb-12 mr-auto ml-auto xl:ml-0  xl:mb-0">
        <h3 className="text-center">
          <Title className="block font-bold text-secondary">#TodosSomos</Title>
          <TitleXl className="block font-bold text-primary-light">
            Colraices
          </TitleXl>
        </h3>
        <Description className="mx-12 mt-12 text-center font-semibold text-gray-700">
          <p>
            Son muchas las historias y momentos los que hacen parte de este
            saludo de navidad y fin de año.
          </p>
          <p>
            Buscamos el bienestar de la familia Colombiana porque creemos que un
            propósito se cumple, cuando miramos juntos hacia un mejor mañana.
          </p>
          <p>
            Desde Colraices servicios inmobiliarios y financieros te decimos
          </p>
          <p>¡Gracias! Feliz navidad y un afortunado 2021.</p>
          <p>"Creemos en Colombia, trabajamos por ella".</p>
        </Description>
      </TextContainer>
      {/* Modal */}
      <ModalVideo showModal={showModal} setShowModal={setShowModal} />
    </Container>
  );
};

const Container = styled.section`
  grid-template-columns: 742px 1fr;
`;

const TextContainer = styled.div`
  max-width: 658px;
`;
const VideoContainer = styled.div`
  max-width: 742px;
  height: 328px;
  @media (min-width: 640px) {
    height: 528px;
  }
  &:hover .cover {
    transform: scale(1.2);
  }
`;

const Title = styled.span`
  font-size: 35px;
  line-height: 1;
  @media (min-width: 640px) {
    font-size: 45px;
  }
`;
const TitleXl = styled.span`
  font-size: 59px;
  line-height: 1;
  @media (min-width: 640px) {
    font-size: 69px;
  }
`;
const Description = styled.div`
  font-size: 20px;

  & p {
    margin-bottom: 1rem;
  }
`;
export default Section7;
