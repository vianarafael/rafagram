import React from "react";
import { MenuWrapper } from "./styles/MenuWrapper";
import { Logo } from "../../../theme/Logo";
import { Button } from "../Button";
import Text from "../../foundations/Text";

const links = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "FAQ",
    url: "/faq",
  },
  {
    text: "About",
    url: "/about",
  },
];

function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.text}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main" href="/app/login">
          Login
        </Button>
        <Button variant="primary.main">Signup</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

export default Menu;
