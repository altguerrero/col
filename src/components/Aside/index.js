import * as React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { Faceboock, Instagram, Youtube, Whatsapp } from "../Icons";

const List = tw.ul`
    block h-screen mt-20 mr-6  top-0 right-0 flex flex-col justify-center fixed z-40
`;
const Item = tw.li`
    mb-3 text-white hover:text-primary-light transition-all duration-200 transform hover:scale-110
`;

const Link = styled.a`
    & svg {
        filter: drop-shadow(0px 0px 3px #000);
    }
`;

// markup
const Aside = () => {
  return (
    <aside className="hidden lg:block">
      <List>
        <Item>
          <Link href="https://www.facebook.com/colraices/" rel="noopener nofollow" target="_blanck">
            <Faceboock wh="h-6 w-6" />
          </Link>
        </Item>
        <Item>
          <Link href="https://www.instagram.com/colraices/?hl=es-la" rel="noopener nofollow" target="_blanck">
            <Instagram wh="h-6 w-6" />
          </Link>
        </Item>
        <Item>
          <Link href="https://www.youtube.com/channel/UCiBystYzqzabHULJWwgAjnw" rel="noopener nofollow" target="_blanck">
            <Youtube wh="h-6 w-6" />
          </Link>
        </Item>
        <Item>
          <Link href="www.faceboock.com" rel="noopener nofollow" target="_blanck">
            <Whatsapp wh="h-6 w-6" />
          </Link>
        </Item>
      </List>
    </aside>
  );
};

export default Aside;
