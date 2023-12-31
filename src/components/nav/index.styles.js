import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";

export const Nav = styled.nav`
  position: absolute;
  top: 117px;
  right: 12px;
  font-family: "Play", sans-serif;
  z-index: 2;
  background: var(--color-quaternary);
  color: var(--color-secondary);
  text-align: center;
  border: 3px solid var(--color-primary);
  padding-bottom: 10px;
`;
export const NavContainer = styled.div`
  display: flex;
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding: 10px 13px;
  text-align: center;
  margin-bottom: 0;
`;

export const NavBarLink = styled(NavLink)`
  text-decoration: none;
  margin: 0 10px;
  color: var(--color-tertiary);
  :hover {
    color: var(--color-primary);
    text-decoration: underline;
  }
`;

export const IconButton = styled.button`
  background: none;
  color: var(--color-secondary);
  border: none;
  padding: 0;
`;

export const MenuIcon = styled(RxHamburgerMenu)`
  font-size: 2.5em;
  cursor: pointer;
  :hover {
    background: none !important;
  }
  :focus {
    background: none;
  }
`;

export const CartIcon = styled(FaShoppingCart)`
  color: var(--color-secondary);
  font-size: 2.5em;
`;
