import { Card } from "react-bootstrap";
import { TiStar } from "react-icons/ti";
import styled from "styled-components";

export const SingleCard = styled(Card)`
  background-color: var(--color-secondary);
  border: none;
  font-family: "Roboto Mono", sans-serif;
`;
export const SingleCardBody = styled(Card.Body)`
  background-color: var(--color-quaternary);
  border: none;
  font-family: "Roboto Mono", sans-serif;
  border-radius: 5px;
`;

export const SingleCardText = styled(Card.Text)`
  font-size: calc(0.8rem + 0.3vw) !important;
  font-family: "Roboto Mono", sans-serif;
`;
export const SingleCardDetails = styled(Card.Text)`
  font-size: calc(1rem + 0.3vw) !important;
  font-family: "Roboto Mono", sans-serif;
`;
export const SingleCardTitle = styled(Card.Title)`
  font-family: "Play", sans-serif;
  color: var(--color-tertiary);
  font-size: calc(1rem + 0.3vw) !important;
  width: 100%;
  margin-bottom: 10px;
`;
export const SingleCardImage = styled(Card.Img)`
  border-radius: 0 !important;
  margin-bottom: 10px;
`;

export const SingleCardGenreTab = styled.div`
  max-width: 130px;
  background-color: var(--color-secondary);
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  height: 38px;
  font-family: "Play", sans-serif;
  font-weight: 600;
  font-size: calc(0.9rem + 0.1vw);
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 80px;
`;

export const RatingIcon = styled(TiStar)`
  fill: var(--color-primary) !important;
  font-size: calc(1.4rem + 0.4vw) !important;
`;
