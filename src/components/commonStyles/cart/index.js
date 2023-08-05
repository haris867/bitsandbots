import styled from "styled-components";
import { Col } from "react-bootstrap";

export const CartContainerDiv = styled.div`
  background-color: var(--color-quaternary);
  border-radius: 5px;
  font-family: "Play", sans-serif;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px !important;
`;

export const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Play", sans-serif;
  font-weight: bold;
  font-size: calc(1rem + 0.3vw);
  margin: 10px 0;
`;

export const CartGameContainer = styled(Col)`
  background-color: var(--color-secondary) !important;
`;
