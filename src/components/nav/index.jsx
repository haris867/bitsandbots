import { useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
import * as S from "./index.styles";
import { LogOutButton } from "../commonStyles/buttons";

export default function Nav() {
  const [open, setOpen] = useState(false);

  function logOut() {
    localStorage.clear();
    window.location = "/";
  }

  return (
    <>
      <div className="d-flex align-items-center gap-3">
        <Link to="/cart">
          <S.CartIcon />
        </Link>
        <S.IconButton
          onClick={() => setOpen(!open)}
          aria-controls="collapse-nav"
          aria-expanded={open}
          className="d-flex"
        >
          <S.MenuIcon className="dropdown-toggle" />
        </S.IconButton>
      </div>
      <Collapse in={open}>
        <S.Nav id="collapse-nav">
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
          <div className="d-flex mx-2">
            <LogOutButton onClick={logOut}>LOG OUT</LogOutButton>
          </div>
        </S.Nav>
      </Collapse>
    </>
  );
}
