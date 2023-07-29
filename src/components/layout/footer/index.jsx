import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const FooterContainer = styled.footer`
  min-height: 120px;
  max-height: 120px;
  background-color: var(--color-primary);
  color: var(--color-secondary);
  padding: 0 20px;
  font-family: "Play", sans-serif;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100% !important;
`;
const FooterNavList = styled.ul`
  list-style-type: none;
  color: red !important;
  display: ${(props) => (props.hide ? "none" : "block")};
`;

const FooterLink = styled(NavLink)`
  color: var(--color-secondary);
  text-decoration: none;
`;

export default function Footer() {
  const { pathname } = useLocation();

  return (
    <FooterContainer>
      <FooterContent className="mt-4">
        <div className="footer-copyright">Bits & Bots &copy;</div>

        <div className="footer-logo-container logo-container">
          <Link to="/">
            <img src="/images/bits&bots-logo-icon.png" alt="Bits & Bots logo" />
          </Link>
        </div>
        <div className="footer-links">
          <FooterNavList className="mb-0" hide={pathname === "/"}>
            <li>
              <FooterLink to="/games">Games</FooterLink>
            </li>
            <li>
              <FooterLink to="/about">About</FooterLink>
            </li>
            <li>
              <FooterLink to="/contact">Contact</FooterLink>
            </li>
          </FooterNavList>
        </div>
      </FooterContent>
    </FooterContainer>
  );
}
