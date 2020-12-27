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
      slide1: file(
        relativePath: { eq: "slides/slide_1.jpg" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slide2: file(
        relativePath: { eq: "slides/slide_1_2.jpg" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slide3: file(
        relativePath: { eq: "slides/slide_1_3.jpg" }
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
        className=""
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className=""
      >
        <SwiperSlide>
          <div className="relative">
            <Img
              className="block rounded-lg overflow-hidden mb-12 sm:ml-12 "
              fluid={data.slide1.childImageSharp.fluid}
            />
            <Description className="message absolute bottom-0 inline-block py-4 pl-16 pr-8 mb-8 xl:mb-16">
              <p className="font-bold text-white text-center">Financia hasta</p>
              <p className="font-bold text-white text-center">
                {" "}
                el <span>80</span>%
              </p>
            </Description>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Img
              className="block rounded-lg overflow-hidden mb-12 sm:ml-12 "
              fluid={data.slide2.childImageSharp.fluid}
            />
            <Description className="message absolute bottom-0 inline-block py-4 pl-16 pr-8 mb-8 xl:mb-16">
              <p className="font-bold text-white text-center">Plazo de hasta</p>
              <p className="font-bold text-white text-center">
                <span>30 años</span>
              </p>
            </Description>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Img
              className="block rounded-lg overflow-hidden mb-12 sm:ml-12"
              fluid={data.slide3.childImageSharp.fluid}
            />
            <Description className="message absolute bottom-0 inline-block py-4 pl-16 pr-8 mb-8 xl:mb-16">
              <p className="font-bold text-white text-center">Cuota fija en</p>
              <p className="font-bold text-white text-center">
                <span>Pesos</span>
              </p>
            </Description>
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

const Description = styled.div`
  & p {
    line-height: 1;
    font-size: 23.5px;
  }
  & span {
    font-size: 45px;
  }
  @media (min-width: 1024px) {
    & p {
      font-size: 47px;
      line-height: 1;
    }
    & span {
      font-size: 90px;
    }
  }
`;
