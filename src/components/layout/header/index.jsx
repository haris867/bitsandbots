import Menu from "../../nav";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import * as S from "./index.styles";

export default function Header() {
  const { pathname } = useLocation();
  return (
    <S.HeaderContainer>
      <div className="logo-container">
        <NavLink
          to="/"
          className="d-flex align-items-center text-decoration-none"
        >
          <img src="/images/bits&bots-logo-icon.png" alt="Bits & Bots logo" />
          <S.LogoText>BITS & BOTS</S.LogoText>
        </NavLink>
      </div>
      {pathname !== "/" && <Menu />}
    </S.HeaderContainer>
  );
}
