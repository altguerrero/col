import * as React from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
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
      prodesa: file(
        relativePath: { eq: "constructoras/prodesa_normal.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            originalImg
          }
        }
      }
      prodesaHover: file(
        relativePath: { eq: "constructoras/prodesa_hover.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            originalImg
          }
        }
      }

      centenario: file(
        relativePath: { eq: "constructoras/centenario_normal.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            originalImg
          }
        }
      }
      centenarioHover: file(
        relativePath: { eq: "constructoras/centenario_hover.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            originalImg
          }
        }
      }

      camu: file(
        relativePath: { eq: "constructoras/camu_normal.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            originalImg
          }
        }
      }
      camuHover: file(
        relativePath: { eq: "constructoras/camu_hover.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            originalImg
          }
        }
      }

      colpatria: file(
        relativePath: { eq: "constructoras/colpatria_normal.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            originalImg
          }
        }
      }
      colpatriaHover: file(
        relativePath: { eq: "constructoras/colpatria_hover.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            originalImg
          }
        }
      }

      jaramillo: file(
        relativePath: { eq: "constructoras/jaramillo_normal.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            originalImg
          }
        }
      }
      jaramilloHover: file(
        relativePath: { eq: "constructoras/jaramillo_hover.png" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            originalImg
          }
        }
      }
    }
  `);
  return (
    <SliderContainer>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        pagination={{ clickable: true }}
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
          <LogoAliado
            normal={data.prodesa.childImageSharp.fluid.originalImg}
            hover={data.prodesaHover.childImageSharp.fluid.originalImg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LogoAliado
            normal={data.centenario.childImageSharp.fluid.originalImg}
            hover={data.centenarioHover.childImageSharp.fluid.originalImg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LogoAliado
            normal={data.camu.childImageSharp.fluid.originalImg}
            hover={data.camuHover.childImageSharp.fluid.originalImg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LogoAliado
            normal={data.colpatria.childImageSharp.fluid.originalImg}
            hover={data.colpatriaHover.childImageSharp.fluid.originalImg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LogoAliado
            normal={data.jaramillo.childImageSharp.fluid.originalImg}
            hover={data.jaramilloHover.childImageSharp.fluid.originalImg}
          />
        </SwiperSlide>
      </Swiper>
    </SliderContainer>
  );
}

export default Beta;

const SliderContainer = styled.div``;

const LogoAliado = styled.div`
  background: url("${(props) => props.normal}");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 110px;
  height: 110px;
  transition: all 0.3s ease;
  margin: 0 auto 3rem;

  &:hover {
    background: url("${(props) => props.hover}");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
