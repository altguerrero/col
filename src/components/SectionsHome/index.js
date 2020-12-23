import * as React from "react";
import Beta from "../Beta";
import Beta2 from "../Beta2";

// Section 1
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";



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
