import { MenuWrapper } from "./styles/MenuWrapper";
import { Logo } from "../../../theme/Logo";

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
        {links.map((link) => {
          return (
            <li>
              <a href={link.url}>{link.text}</a>
            </li>
          );
        })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <button>Login</button>
        <button>Signin</button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

export default Menu;
