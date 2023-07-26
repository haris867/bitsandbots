import { RxHamburgerMenu } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
import { styled } from "styled-components";
// import { load, remove } from "../../storage";
import * as S from "./index.styles";
import { SecondaryButton } from "../commonStyles/buttons";
// import { PrimaryButton } from "../commonStyles/buttons";
import { useLocation } from "react-router-dom";

const PrimaryButton = styled.button`
  border-radius: 4px;
  border: solid 2px var(--color-tertiary);
  background: var(--color-primary);
  color: white;
  padding: 4px 18px;
  min-width: calc(130px + 1vw);
  align-self: center;
  font-size: calc(0.8rem + 0.3vw);
  font-weight: 600;
`;

const IconButton = styled.button`
  background: none;
  color: var(--color-secondary);
  border: none;
  padding: 0;
`;

const MenuIcon = styled(RxHamburgerMenu)`
  font-size: 2.5em;
  cursor: pointer;
  :hover {
    background: none !important;
  }
  :focus {
    background: none;
  }
  display: ${(props) => (props.hide ? "none" : "block")};
`;

const CartIcon = styled(FaShoppingCart)`
  color: var(--color-secondary);
  font-size: 2.5em;
  display: ${(props) => (props.hide ? "none" : "block")};
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export default function Nav() {
  //   const loggedIn = load("user");
  //   const userData = loggedIn;
  const [open, setOpen] = useState(false);

  function logOut() {
    console.log("log out");
    //   remove("user");
    //   window.location = "/";
  }

  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <>
      <IconContainer>
        <Link to="/cart">
          <CartIcon hide={pathname === "/"} />
        </Link>
        <IconButton
          onClick={() => setOpen(!open)}
          aria-controls="collapse-nav"
          aria-expanded={open}
          className="d-flex"
        >
          <MenuIcon className="dropdown-toggle" hide={pathname === "/"} />
        </IconButton>
      </IconContainer>
      <Collapse in={open}>
        <S.Nav id="collapse-nav" hide={pathname === "/"}>
          <S.NavList>
            <li>
              <S.NavBarLink
                to="/games"
                onClick={() => setOpen(!open)}
                aria-controls="collapse-nav"
                aria-expanded={open}
                className="fs-4"
              >
                GAMES
              </S.NavBarLink>
            </li>
            <li>
              <S.NavBarLink
                to="/about"
                onClick={() => setOpen(!open)}
                aria-controls="collapse-nav"
                aria-expanded={open}
                className="fs-4"
              >
                ABOUT
              </S.NavBarLink>
            </li>
            <li>
              <S.NavBarLink
                to="/contact"
                onClick={() => setOpen(!open)}
                aria-controls="collapse-nav"
                aria-expanded={open}
                className="fs-4"
              >
                CONTACT
              </S.NavBarLink>
            </li>
          </S.NavList>
          <S.NavBarLink className="d-flex">
            <SecondaryButton onClick={logOut} style={{ flex: "1 0 120px" }}>
              LOG OUT
            </SecondaryButton>
          </S.NavBarLink>
        </S.Nav>
      </Collapse>
    </>
  );
}