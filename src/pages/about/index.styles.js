import { Card } from "react-bootstrap";
import styled from "styled-components";

export const AboutCard = styled(Card)`
  background-color: var(--color-secondary);
  border: none;
  font-family: "Roboto Mono", sans-serif;
`;

export const AboutCardText = styled(Card.Text)`
  font-size: calc(0.9rem + 0.3vw) !important;
`;
export const AboutCardTitle = styled(Card.Title)`
  font-family: "Play", sans-serif;
  color: var(--color-secondary);
  position: absolute;
  z-index: 1;
  font-size: calc(1.7rem + 1.2vw) !important;
  width: 100%;
  text-align: center;
`;
export const AboutCardImage = styled(Card.Img)`
  border-radius: 0 !important;
  margin-bottom: 20px;
  filter: brightness(0.4);
`;
