import * as React from "react";
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
function Beta2() {
  const data = useStaticQuery(graphql`
    query {
      antioquia: file(
        relativePath: { eq: "slides/antioquia.jpg" }
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
        relativePath: { eq: "slides/valle.jpg" }
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
        relativePath: { eq: "slides/eje.jpg" }
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
        relativePath: { eq: "slides/cundinamarca.jpg" }
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
        relativePath: { eq: "slides/caribe.jpg" }
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
        relativePath: { eq: "slides/colombia.jpg" }
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
        spaceBetween={10}
        slidesPerView={3}
        pagination={{ clickable: true }}
        className="bg-red"
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="transform translate-x-10"
      >
        <SwiperSlide>
          <SlideContainer className="relative rounded shadow-xl	 overflow-hidden">
            <Img fluid={data.antioquia.childImageSharp.fluid} />
            <h3 className="text-white text-2xl font-bold absolute bottom-0 left-0 z-10 ml-4 mb-4 ">
              Antioqui
            </h3>
            <h4 className="block absolute mt-8 w-full text-white font-bold top-0 text-center z-10">
              <span className="block text-7xl">30</span>
              <span className="block text-2xl">Inmuebles</span>
            </h4>
          </SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer className="relative rounded shadow-xl	 overflow-hidden">
            <Img fluid={data.valle.childImageSharp.fluid} />
            <h3 className="text-white text-2xl font-bold absolute bottom-0 left-0 z-10 ml-4 mb-4 ">
              Valle
            </h3>
            <h4 className="block absolute mt-8 w-full text-white font-bold top-0 text-center z-10">
              <span className="block text-7xl">12</span>
              <span className="block text-2xl">Inmuebles</span>
            </h4>
          </SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer className="relative rounded shadow-xl	 overflow-hidden">
            <Img fluid={data.eje.childImageSharp.fluid} />
            <h3 className="text-white text-2xl font-bold absolute bottom-0 left-0 z-10 ml-4 mb-4 ">
              Eje Cafetero
            </h3>
            <h4 className="block absolute mt-8 w-full text-white font-bold top-0 text-center z-10">
              <span className="block text-7xl">9</span>
              <span className="block text-2xl">Inmuebles</span>
            </h4>
          </SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer className="relative rounded shadow-xl	 overflow-hidden">
            <Img fluid={data.cundinamarca.childImageSharp.fluid} />
            <h3 className="text-white text-2xl font-bold absolute bottom-0 left-0 z-10 ml-4 mb-4 ">
              Cundinamarca
            </h3>
            <h4 className="block absolute mt-8 w-full text-white font-bold top-0 text-center z-10">
              <span className="block text-7xl">50</span>
              <span className="block text-2xl">Inmuebles</span>
            </h4>
          </SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer className="relative rounded shadow-xl	 overflow-hidden mb-12">
            <Img fluid={data.caribe.childImageSharp.fluid} />
            <h3 className="text-white text-2xl font-bold absolute bottom-0 left-0 z-10 ml-4 mb-4 ">
              Costa Caribe
            </h3>
            <h4 className="block absolute mt-8 w-full text-white font-bold top-0 text-center z-10">
              <span className="block text-7xl">6</span>
              <span className="block text-2xl">Inmuebles</span>
            </h4>
          </SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer className="relative rounded shadow-xl	 overflow-hidden">
            <Img fluid={data.colombia.childImageSharp.fluid} />
            <h3 className="text-white text-2xl font-bold absolute bottom-0 left-0 z-10 ml-4 mb-4 ">
              Resto del país
            </h3>
            <h4 className="block absolute mt-8 w-full text-white font-bold top-0 text-center z-10">
              <span className="block text-7xl">47</span>
              <span className="block text-2xl">Inmuebles</span>
            </h4>
          </SlideContainer>
        </SwiperSlide>
      </Swiper>
    </Slider>
  );
}

export default Beta2;

const Slider = styled.div`
  max-width: 730px;
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
    height: 500px;
  }
  & h3,
  & h4 {
    text-shadow: 2px 2px 4px #000000a8;
    transition: all 0.3s;
  }

  & h4 {
    opacity: 0;
  }

  &:hover:before {
    background: #2d2d2db2 0% 0% no-repeat padding-box;
    mix-blend-mode: multiply;
    mix-blend-mode: multiply;
  }
  &:hover h4 {
    opacity: 1;
  }
`;
