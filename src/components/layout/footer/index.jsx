import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import * as S from "./index.styles";

export default function Footer() {
  const { pathname } = useLocation();

  return (
    <S.FooterContainer>
      <S.FooterContent className="mt-4">
        <div className="footer__copyright">Bits & Bots &copy;</div>

        <div className="footer__logo-container logo-container">
          {pathname === "/" ? (
            <img src="/images/bits&bots-logo-icon.png" alt="Bits & Bots logo" />
          ) : (
            <Link to="/games">
              <img
                src="/images/bits&bots-logo-icon.png"
                alt="Bits & Bots logo"
              />
            </Link>
          )}
        </div>
        {pathname !== "/" && (
          <div className="footer__links">
            <S.FooterNavList className="mb-0">
              <li>
                <S.FooterLink to="/games">Games</S.FooterLink>
              </li>
              <li>
                <S.FooterLink to="/about">About</S.FooterLink>
              </li>
              <li>
                <S.FooterLink to="/contact">Contact</S.FooterLink>
              </li>
            </S.FooterNavList>
          </div>
        )}
      </S.FooterContent>
    </S.FooterContainer>
  );
}
