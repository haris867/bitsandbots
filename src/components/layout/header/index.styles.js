import styled from "styled-components";

export const HeaderContainer = styled.header`
  min-height: 120px;
  max-height: 120px;
  background-color: var(--color-primary);
  color: var(--color-secondary);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
`;

export const LogoText = styled.p`
  font-size: calc(1.2em + 0.8vw);
  text-decoration: none;
  text-underline: none;
  color: var(--color-secondary);
  margin: 0 10px;
  font-family: "Play", sans-serif;
  font-weight: bold;
`;
