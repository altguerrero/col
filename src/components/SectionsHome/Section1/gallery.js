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
function Beta() {
  const data = useStaticQuery(graphql`
    query {
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
    <SliderContainer>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="bg-red"
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className=""
      >
        <SwiperSlide>
          <div className="relative">
            <Img
              className="block rounded-lg overflow-hidden mb-12 ml-12"
              fluid={data.davivienda.childImageSharp.fluid}
            />
            <div className="message absolute bottom-0 inline-block py-4 pl-16 pr-8 mb-8 xl:mb-16">
              <p className="font-bold text-white text-2xl lg:text-4xl text-center">
                Financia hasta
              </p>
              <p className="font-bold text-white text-2xl lg:text-4xl text-center">
                {" "}
                el <span className="text-4xl lg:text-6xl">80%</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Img
              className="block rounded-lg overflow-hidden mb-12 ml-12"
              fluid={data.davivienda.childImageSharp.fluid}
            />
            <div className="message absolute bottom-0 inline-block py-4 pl-16 pr-8 mb-8 xl:mb-16">
              <p className="font-bold text-white text-2xl lg:text-4xl text-center">
                Plazo de hasta
              </p>
              <p className="font-bold text-white text-2xl lg:text-4xl text-center">
                <span className="text-4xl lg:text-6xl">30 años</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Img
              className="block rounded-lg overflow-hidden mb-12 ml-12"
              fluid={data.davivienda.childImageSharp.fluid}
            />
            <div className="message absolute bottom-0 inline-block py-4 pl-16 pr-8 mb-8 xl:mb-16">
              <p className="font-bold text-white text-2xl lg:text-4xl text-center">
                Cuota fija en
              </p>
              <p className="font-bold text-white text-2xl lg:text-4xl text-center">
                <span className="text-4xl lg:text-6xl">Pesos</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </SliderContainer>
  );
}

export default Beta;

const SliderContainer = styled.div`
  & .message {
    background: #2d4077 0% 0% no-repeat padding-box;
    opacity: 0.9;
    border-radius: 10px 0px 0px 10px;

    & p {
      text-shadow: 0px 3px 6px #00000099;
    }
  }
  & .swiper-container {
  }
`;
