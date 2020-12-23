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
      camu: file(
        relativePath: { eq: "constructoras/camu.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      colpatria: file(
        relativePath: { eq: "constructoras/colpatria.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mora: file(
        relativePath: { eq: "constructoras/mora.jpg" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      prodesa: file(
        relativePath: { eq: "constructoras/prodesa.png" }
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
        slidesPerView={4}
        pagination={{ clickable: true }}
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
          <Img
            className="h-40  flex justify-center items-center mb-8"
            fluid={data.camu.childImageSharp.fluid}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Img
            className="h-40  flex justify-center items-center mb-8"
            fluid={data.colpatria.childImageSharp.fluid}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Img
            className="h-40  flex justify-center items-center mb-8"
            fluid={data.mora.childImageSharp.fluid}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Img
            className="h-40  flex justify-center items-center mb-8"
            fluid={data.prodesa.childImageSharp.fluid}
          />
        </SwiperSlide>
      </Swiper>
    </SliderContainer>
  );
}

export default Beta;

const SliderContainer = styled.div`
& img {
    filter: grayscale(100%);
    transition: all 0.3s;
    object-fit: contain !important;

    &:hover {
      filter: grayscale(0%);
      opacity: 1 !important;
    }
`;
