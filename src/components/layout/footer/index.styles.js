import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FooterContainer = styled.footer`
  min-height: 120px;
  max-height: 120px;
  background-color: var(--color-primary);
  color: var(--color-secondary);
  padding: 0 20px;
  font-family: "Play", sans-serif;
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  height: 100% !important;
`;
export const FooterNavList = styled.ul`
  list-style-type: none;
  color: red !important;
`;

export const FooterLink = styled(NavLink)`
  color: var(--color-secondary);
  text-decoration: none;
`;
