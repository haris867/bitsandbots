import styled from "styled-components";
import { TiDelete, TiStar } from "react-icons/ti";

export const RemoveIcon = styled(TiDelete)`
  color: var(--color-primary);
  font-size: calc(2rem + 2vw) !important;
  cursor: pointer;
  max-width: 50px;
`;

export const RatingIcon = styled(TiStar)`
  fill: var(--color-primary) !important;
  font-size: calc(1.4rem + 0.4vw) !important;
`;
