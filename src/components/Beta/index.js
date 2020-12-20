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
      className="transform translate-x-10"
    >
      <SwiperSlide>
        <div className="relative">
          <Img fluid={data.davivienda.childImageSharp.fluid} />
          <div className="bg-secondary absolute bottom-0 inline-block rounded py-4 px-8 mb-6 ml-6">
            <p className="font-bold text-white text-4xl text-center">
              Financia hasta
            </p>
            <p className="font-bold text-white text-4xl text-center">
              {" "}
              el <span className="text-6xl">80%</span>
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Img fluid={data.davivienda.childImageSharp.fluid} />
        <div className="bg-secondary absolute bottom-0 inline-block rounded py-4 px-8 mb-6 ml-6">
          <p className="font-bold text-white text-4xl text-center">
            Plazo de hasta 
          </p>
          <p className="font-bold text-white text-4xl text-center">
            {" "}
           <span className="text-6xl">30 años</span>
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Img fluid={data.davivienda.childImageSharp.fluid} />
        <div className="bg-secondary absolute bottom-0 inline-block rounded py-4 px-8 mb-6 ml-6">
          <p className="font-bold text-white text-4xl text-center">
            Financia hasta
          </p>
          <p className="font-bold text-white text-4xl text-center">
            {" "}
            el <span className="text-6xl">80%</span>
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Img fluid={data.davivienda.childImageSharp.fluid} />
        <div className="bg-secondary absolute bottom-0 inline-block rounded py-4 px-8 mb-6 ml-6">
          <p className="font-bold text-white text-4xl text-center">
            Financia hasta
          </p>
          <p className="font-bold text-white text-4xl text-center">
            {" "}
            el <span className="text-6xl">80%</span>
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Beta;
