import React, { useState } from "react";
import tw from "twin.macro";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import "./style.css";
import styled from "@emotion/styled";
import { Faceboock, Instagram, Youtube, Whatsapp } from "../Icons";

// data
const links = [
  {
    text: "Crédito de vivienda",
    url: "https://www.gatsbyjs.com/docs/",
  },
  {
    text: "Portal Inmobiliario",
    url: "https://www.gatsbyjs.com/tutorial/",
  },
  {
    text: "Cuenta de ahorros y monetización",
    url: "https://www.gatsbyjs.com/tutorial/",
  },
];

const Header = tw.header`
  fixed w-full  bg-white shadow transition-all duration-300 z-50
`;
const Container = tw.div`
  container  relative   h-full
`;
const Logo = tw.div`
  absolute top-0 mt-4 md:mt-3 px-4 transition-all duration-300  
`;
const Menu = tw.nav`
  w-full h-full  transition-all duration-300 
`;

const List = tw.ul`
  flex flex-col xl:flex-row w-full mx-auto h-full xl:justify-center items-center 
`;

const Item = tw.li`
 text-center  text-lg text-gray-500 leading-5 mx-6 w-full xl:w-48  h-16 xl:h-full border-b xl:border-none
`;

// markup
const NavMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(
        relativePath: { eq: "logo.png" }
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

  const [state, setstate] = useState(false);

  return (
    <Header
      className={state ? "h-full max-h-screen" : "overflow-hidden h-16 md:h-20"}
    >
      <Container
        className={`h-16 md:h-20 ${
          state ? "justify-center" : "flex items-center"
        }`}
      >
        <Logo
          className={
            state
              ? "w-full flex justify-center transform translate-y-8 scale-150 "
              : ""
          }
        >
          <img
            className="h-6 md:h-12 mt-1"
            src={data.logo.childImageSharp.fluid.originalImg}
            alt="Colraices"
          />
        </Logo>
        <Menu
          className={
            state
              ? "absolute flex flex-col transform pt-32"
              : "  xl:block opacity-0 xl:opacity-100 "
          }
        >
          <List >
            {links.map((link) => (
              <Item>
                <Link
                  to="/"
                  className="block h-full hover:bg-secondary transition duration-200  hover:text-white flex justify-center items-center "
                  activeClassName="active"
                >
                  {link.text}
                </Link>
              </Item>
            ))}
          </List>
          <div className="flex flex-col items-center py-4">
            <button
              onClick={() => setstate(!state)}
              className="is-active w-full block hamburger  hamburger--slider  mx-auto focus:outline-none "
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <ListSocial>
              <ItemSocial>
                <LinkSocial href="www.faceboock.com" rel="noopener nofollow">
                  <Faceboock wh="h-8 w-8" />
                </LinkSocial>
              </ItemSocial>
              <ItemSocial>
                <LinkSocial href="www.faceboock.com" rel="noopener nofollow">
                  <Instagram wh="h-8 w-8" />
                </LinkSocial>
              </ItemSocial>
              <ItemSocial>
                <LinkSocial href="www.faceboock.com" rel="noopener nofollow">
                  <Youtube wh="h-8 w-8" />
                </LinkSocial>
              </ItemSocial>
              <ItemSocial>
                <LinkSocial href="www.faceboock.com" rel="noopener nofollow">
                  <Whatsapp wh="h-8 w-8" />
                </LinkSocial>
              </ItemSocial>
            </ListSocial>
            <div className="flex py-6 items-center text-gray-700 text-base">
              <Whatsapp wh="h-8 w-8 text-green-500 mr-2" /> ¿Tienes algúna
              inquietud?
            </div>
          </div>
        </Menu>
        <button
          onClick={() => setstate(!state)}
          className={`inline-block xl:hidden hamburger hamburger--slider absolute right-0 mx-4 focus:outline-none ${
            state ? "is-active hidden" : ""
          } `}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </Container>
    </Header>
  );
};

export default NavMenu;

const ListSocial = tw.ul`
    flex w-full p-4 justify-center mt-5
`;
const ItemSocial = tw.li`
   text-white mx-3 hover:text-primary-dark transition-all duration-200 transform hover:scale-110
`;

const LinkSocial = styled.a`
  & svg {
    filter: drop-shadow(0px 0px 3px #000);
  }
`;
