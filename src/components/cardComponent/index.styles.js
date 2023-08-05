import { FaShoppingCart } from "react-icons/fa";
import { TiStar } from "react-icons/ti";
import styled from "styled-components";

export const RatingIcon = styled(TiStar)`
  fill: var(--color-primary) !important;
  font-size: calc(1.3rem + 0.4vw) !important;
`;

export const CartIcon = styled(FaShoppingCart)`
  color: var(--color-secondary);
  font-size: 1em;
`;
export const GameDetailsDiv = styled.div`
  font-family: "Roboto Mono", sans-serif;
`;
