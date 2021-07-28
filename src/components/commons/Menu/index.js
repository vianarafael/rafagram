import { MenuWrapper } from "./styles/MenuWrapper";
import { Logo } from "../../../theme/Logo";
import { Button } from "../Button";

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
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a href={link.url}>{link.text}</a>
            </li>
          );
        })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main">
          Login
        </Button>
        <Button variant="primary.main">Signup</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

export default Menu;
