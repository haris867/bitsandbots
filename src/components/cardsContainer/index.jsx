import { Card, Col } from "react-bootstrap";
import { GameCard } from "../commonStyles/cards";
import { PrimaryButton, SecondaryButton } from "../commonStyles/buttons";
import { styled } from "styled-components";
import { TiStar } from "react-icons/ti";
import useGetData from "../../hooks/api/getData";

const RatingIcon = styled(TiStar)`
  fill: var(--color-primary) !important;
  font-size: calc(1.4rem + 0.4vw) !important;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export default function CardsContainer() {
  const url = `https://qg8g236v.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22Products%22%5D%7B%0A++%22name%22%3A+name%2C%0A++++%22price%22%3A+price%2C%0A++++%22rating%22%3A+rating%2C%0A++%22imageUrl%22%3A+image.asset-%3Eurl%2C%0A++++%22description%22%3A+description%2C%0A++++%22genres%22%3A+genres%0A%7D`;
  const { data, isLoading, isError } = useGetData(url);

  const games = data.result;

  console.log(data.result);

  return (
    <div className="d-flex flex-wrap">
      {games.map((game) => (
        <Col
          xs={12}
          md={6}
          lg={4}
          xxl={3}
          className="my-2 d-flex justify-content-center"
        >
          <Col md={8}>
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
                    <Card.Text className="fw-bold">NOK {game.price}</Card.Text>
                  </div>
                  <ButtonContainer className="card__button-container">
                    <PrimaryButton>ADD TO CART</PrimaryButton>
                    <SecondaryButton>VIEW</SecondaryButton>
                  </ButtonContainer>
                </Card.Body>
              </Col>
            </GameCard>
          </Col>
        </Col>
      ))}
      {/* <Col
        xs={12}
        md={6}
        lg={4}
        xxl={3}
        className="my-2 d-flex justify-content-center"
      >
        <Col md={8}>
          <GameCard className="my-2 h-100">
            <Col xs={3} md={11} className="h-100 card__image-container">
              <Card.Img
                className="rounded-0 p-2 w-100 h-100 object-fit-cover"
                variant="top"
                src="https://cdn.sanity.io/images/qg8g236v/production/f21380349596c3d00d1a61966d298f98b287edc7-672x918-png"
              />
            </Col>
            <Col xs={9} md={11} className="py-2 h-100 card-body__container">
              <Card.Body className="py-0 ps-2 h-100 d-flex flex-column justify-content-between pe-2">
                <Card.Title className="fw-bold">ROBOT WORLD</Card.Title>
                <div
                  className="d-flex justify-content-between mb-3"
                  style={{ fontFamily: "Roboto Mono", fontWeight: "100" }}
                >
                  <div className="d-flex align-items-center">
                    <Card.Text className="m-0 fw-bold">4.1</Card.Text>
                    <RatingIcon />
                  </div>
                  <Card.Text className="fw-bold">NOK 499</Card.Text>
                </div>
                <ButtonContainer className="card__button-container">
                  <PrimaryButton>ADD TO CART</PrimaryButton>
                  <SecondaryButton>VIEW</SecondaryButton>
                </ButtonContainer>
              </Card.Body>
            </Col>
          </GameCard>
        </Col>
      </Col> */}
    </div>
  );
}
