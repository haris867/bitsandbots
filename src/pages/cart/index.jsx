import {
  MainHeading,
  MainHeadingContainer,
} from "../../components/commonStyles/headings";
import { Container, Card, Col, Row } from "react-bootstrap";
import { styled } from "styled-components";
import { PrimaryButton } from "../../components/commonStyles/buttons";
import { Link } from "react-router-dom";
import { TiDelete, TiStar } from "react-icons/ti";

const CartContainer = styled.div`
  background-color: var(--color-quaternary);
  border-radius: 5px;
  font-family: "Play", sans-serif;
`;
const RemoveIcon = styled(TiDelete)`
  color: var(--color-primary);
  font-size: calc(2rem + 2vw) !important;
  cursor: pointer;
  max-width: 50px;
`;

const RatingIcon = styled(TiStar)`
  fill: var(--color-primary) !important;
  font-size: calc(1.4rem + 0.4vw) !important;
`;

const gameList = [
  {
    name: "Dreamscape",
    imageUrl:
      "https://cdn.sanity.io/images/qg8g236v/production/f21380349596c3d00d1a61966d298f98b287edc7-672x918.png",
    rating: 4.5,
    price: 299,
  },
  {
    name: "Dreamscape",
    imageUrl:
      "https://cdn.sanity.io/images/qg8g236v/production/f21380349596c3d00d1a61966d298f98b287edc7-672x918.png",
    rating: 3.6,
    price: 399,
  },
  {
    name: "Dreamscape",
    imageUrl:
      "https://cdn.sanity.io/images/qg8g236v/production/f21380349596c3d00d1a61966d298f98b287edc7-672x918.png",
    rating: 4.1,
    price: 499,
  },
];

export default function Cart() {
  return (
    <Container>
      <Col
        md={11}
        lg={8}
        className="d-flex justify-content-between align-items-center mt-3 mb-0 mx-auto"
      >
        <MainHeading className="fs-2 fw-bold mb-3">Your cart</MainHeading>
      </Col>
      <Col xs={12} md={8} lg={6} className="mx-auto">
        {gameList.length > 0 ? (
          <div className="d-flex flex-column">
            <CartContainer className="d-flex flex-wrap justify-content-center p-3">
              {gameList.map((game) => (
                <Col
                  xs={12}
                  sm={10}
                  className="d-flex m-2"
                  style={{ backgroundColor: "var(--color-secondary)" }}
                >
                  <Col xs={2} className="m-2 d-flex">
                    <img
                      src={game.imageUrl}
                      alt=""
                      style={{ objectFit: "contain" }}
                      className="w-100"
                    />
                  </Col>
                  <Col
                    xs={6}
                    className="my-2 fw-bold d-flex flex-column justify-content-between"
                  >
                    <p>{game.name}</p>
                    <div className="d-flex justify-content-between">
                      <p className="d-flex m-0">
                        {game.rating}
                        <RatingIcon />
                      </p>
                      <p className="m-0">NOK {game.price}</p>
                    </div>
                  </Col>
                  <Col
                    xs={4}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <RemoveIcon />
                  </Col>
                </Col>
              ))}
            </CartContainer>
            <Link to="/checkout" className="text-center my-3">
              <PrimaryButton>CHECKOUT</PrimaryButton>
            </Link>
          </div>
        ) : (
          <div className="d-flex flex-column">
            <CartContainer className="p-4 my-3 text-center fs-5 fw-bold">
              YOUR CART IS EMPTY
            </CartContainer>
            <Link to="/games" className="text-center">
              <PrimaryButton>BROWSE GAMES</PrimaryButton>
            </Link>
          </div>
        )}
      </Col>
    </Container>
  );
}
