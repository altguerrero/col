import * as React from "react";
import tw from "twin.macro";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby"

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
  w-full h-20 bg-white shadow 
`;
const Container = tw.div`
  container h-full relative flex items-center
`;
const Logo = tw.div`
  absolute left-0
`
const Menu = tw.nav`
  w-full h-full flex justify-center 
`;

const List = tw.ul`
  flex w-full mx-auto h-full justify-center items-center h-full
`;

const Item = tw.li`
 text-center w-48 text-lg text-gray-500 leading-5 mx-6 h-full
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
  return (
    <Header>
      <Container>
      <Logo>
        <img className="object-contain" src={data.logo.childImageSharp.fluid.originalImg} alt="Colraices" />
      </Logo>
      <Menu>
        <List>
          {links.map((link) => (
            <Item>
              <Link
                to="/"
                className="block h-full hover:bg-blue-900 transition duration-200  hover:text-white flex justify-center items-center "
                activeClassName="active">
                  {link.text}
              </Link>
            </Item>
          ))}
        </List>
      </Menu>
      </Container>
    </Header>
  );
};

export default NavMenu;
