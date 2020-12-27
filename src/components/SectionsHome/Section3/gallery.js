import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Pagination, Navigation, Autoplay]);

// markup
const Beta2 = () => {
  const data = useStaticQuery(graphql`
    query {
      antioquia: file(
        relativePath: { eq: "slides/antioquia.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      valle: file(
        relativePath: { eq: "slides/valle.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      eje: file(
        relativePath: { eq: "slides/eje.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      cundinamarca: file(
        relativePath: { eq: "slides/cundinamarca.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      caribe: file(
        relativePath: { eq: "slides/caribe.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      colombia: file(
        relativePath: { eq: "slides/colombia.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      davivienda: file(
        relativePath: { eq: "slides/slide_1_1.jpg" }
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
    <Slider>
      <Swiper
        spaceBetween={3}
        slidesPerView={2}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // 640: {
          //   slidesPerView: 2,
          //   spaceBetween: 20,
          // },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="transform"
      >
        <SwiperSlide>
          <SlideContainer className="relative rounded shadow-xl	 overflow-hidden">
            <Img fluid={data.antioquia.childImageSharp.fluid} />
            <h3 className="text-white text-lg md:text-2xl font-bold absolute bottom-0 left-0 z-10 ml-4 mb-4 ">
              Antioquia
            </h3>
          </SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer className="relative rounded shadow-xl	 overflow-hidden">
            <Img fluid={data.valle.childImageSharp.fluid} />
            <h3 className="text-white text-lg md:text-2xl font-bold absolute bottom-0 left-0 z-10 ml-4 mb-4 ">
              Valle
            </h3>
          </SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer className="relative rounded shadow-xl	 overflow-hidden">
            <Img fluid={data.eje.childImageSharp.fluid} />
            <h3 className="text-white text-lg md:text-2xl font-bold absolute bottom-0 left-0 z-10 ml-4 mb-4 ">
              Eje Cafetero
            </h3>
          </SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer className="relative rounded shadow-xl	 overflow-hidden">
            <Img fluid={data.cundinamarca.childImageSharp.fluid} />
            <h3 className="text-white text-lg md:text-2xl font-bold absolute bottom-0 left-0 z-10 ml-4 mb-4 ">
              Cundinamarca
            </h3>
          </SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer className="relative rounded shadow-xl	 overflow-hidden mb-12">
            <Img fluid={data.caribe.childImageSharp.fluid} />
            <h3 className="text-white text-lg md:text-2xl font-bold absolute bottom-0 left-0 z-10 ml-4 mb-4 ">
              Costa Caribe
            </h3>
          </SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer className="relative rounded shadow-xl	 overflow-hidden">
            <Img fluid={data.colombia.childImageSharp.fluid} />
            <h3 className="text-white text-lg md:text-2xl font-bold absolute bottom-0 left-0 z-10 ml-4 mb-4 ">
              Resto del país
            </h3>
          </SlideContainer>
        </SwiperSlide>
      </Swiper>
    </Slider>
  );
};

export default Beta2;

const Slider = styled.div`
  width: 100%;
  height: 300px;
  padding: 1rem;
  padding: 0;
  @media (min-width: 1536px) {
    width: 801px;
  }
  @media (min-width: 768px) {
    height: 500px;
  }
  @media (min-width: 1024px) {
    height: 700px;
  }
`;

const SlideContainer = styled.div`
  &:before {
    content: " ";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: transparent
      linear-gradient(180deg, #ffffff 0%, #ffffff 38%, #b4b1b1 100%) 0% 0%
      no-repeat padding-box;
    z-index: 10;
    mix-blend-mode: multiply;
    transition: all 0.3s;
  }
  & div {
    height: 300px;

    @media (min-width: 768px) {
      height: 500px;
    }
    @media (min-width: 1024px) {
      height: 700px;
    }
  }

  &:hover:before {
    background: #2d2d2db2 0% 0% no-repeat padding-box;
    mix-blend-mode: multiply;
    mix-blend-mode: multiply;
  }
`;
