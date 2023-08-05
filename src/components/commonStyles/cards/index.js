import styled from "styled-components";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const GameCard = styled(Card)`
  background-color: var(--color-quaternary) !important;
  display: flex;
  flex-direction: row;
  font-family: "Play", sans-serif;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px !important;
`;

export const CardLink = styled(Link)`
  text-decoration: none;
`;
