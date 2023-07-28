import { Card, Col } from "react-bootstrap";
import { CardLink, GameCard } from "../commonStyles/cards";
import { PrimaryButton, SecondaryButton } from "../commonStyles/buttons";
import { styled } from "styled-components";
import { TiStar } from "react-icons/ti";

const RatingIcon = styled(TiStar)`
  fill: var(--color-primary) !important;
  font-size: calc(1.4rem + 0.4vw) !important;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export default function CardsContainer({ games = [] }) {
  return (
    <div className="d-flex flex-wrap">
      {games.map((game) => (
        <Col
          xs={12}
          md={6}
          lg={4}
          xxl={3}
          className="my-2 d-flex justify-content-center"
          data-id={game.id}
        >
          <Col md={8}>
            <CardLink to={`/games/${game.id}`}>
              <GameCard className="my-2 h-100">
                <Col xs={3} md={11} className="h-100 card__image-container">
                  <Card.Img
                    className="rounded-0 p-2 w-100 h-100 object-fit-cover"
                    variant="top"
                    alt={game.name}
                    src={game.imageUrl}
                  />
                </Col>
                <Col xs={9} md={11} className="py-2 h-100 card-body__container">
                  <Card.Body className="py-0 ps-2 h-100 d-flex flex-column justify-content-between pe-2">
                    <Card.Title className="fw-bold">{game.name}</Card.Title>
                    <div
                      className="d-flex justify-content-between mb-3"
                      style={{ fontFamily: "Roboto Mono", fontWeight: "100" }}
                    >
                      <div className="d-flex align-items-center">
                        <Card.Text className="m-0 fw-bold">
                          {game.rating}
                        </Card.Text>
                        <RatingIcon />
                      </div>
                      <Card.Text className="fw-bold">
                        NOK {game.price}
                      </Card.Text>
                    </div>
                    <ButtonContainer className="card__button-container">
                      <PrimaryButton>ADD TO CART</PrimaryButton>
                      <SecondaryButton>VIEW</SecondaryButton>
                    </ButtonContainer>
                  </Card.Body>
                </Col>
              </GameCard>
            </CardLink>
          </Col>
        </Col>
      ))}
    </div>
  );
}
