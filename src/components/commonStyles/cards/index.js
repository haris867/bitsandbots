import { styled } from "styled-components";
import { Container, Card, Col, Row } from "react-bootstrap";

export const GameCard = styled(Card)`
  background-color: var(--color-quaternary) !important;
  display: flex;
  flex-direction: row;
  font-family: "Play", sans-serif;
  align-items: center;
`;
