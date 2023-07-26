import styled from "styled-components";
import Menu from "../../nav";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.header`
  min-height: 120px;
  max-height: 120px;
  background-color: var(--color-primary);
  color: var(--color-secondary);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
`;

const LogoText = styled.p`
  font-size: calc(1.2em + 0.8vw);
  text-decoration: none;
  text-underline: none;
  color: var(--color-secondary);
  margin: 0 10px;
  font-family: "Play", sans-serif;
  font-weight: bold;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <div className="logo-container">
        <NavLink
          to="/"
          className="d-flex align-items-center text-decoration-none"
        >
          <img src="/images/bits&bots-logo-icon.png" alt="Bits & Bots logo" />
          <LogoText>BITS & BOTS</LogoText>
        </NavLink>
      </div>
      <Menu />
    </HeaderContainer>
  );
}
