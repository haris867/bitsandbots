import styled from "styled-components";
import { Container, Card, Col, Row } from "react-bootstrap";
import { TiDelete, TiStar } from "react-icons/ti";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../commonStyles/buttons";
import { save } from "../../hooks/storage";

const CartContainerDiv = styled.div`
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

const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Play", sans-serif;
  font-weight: bold;
  font-size: calc(1rem + 0.3vw);
  margin: 10px 0;
`;

export function CartContainer({ gameList = [], setGameList }) {
  function removeGameFromCart(gameId) {
    const updatedGameList = gameList.filter((game) => game._id !== gameId);
    save("cart", JSON.stringify(updatedGameList));
    setGameList(updatedGameList);
  }

  function calculateTotalPrice() {
    return gameList.reduce((total, game) => total + game.price, 0);
  }

  return (
    <div>
      {gameList.length > 0 ? (
        <div className="d-flex flex-column">
          <CartContainerDiv className="d-flex flex-wrap justify-content-center p-3">
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
                  <RemoveIcon onClick={() => removeGameFromCart(game._id)} />
                </Col>
              </Col>
            ))}
          </CartContainerDiv>
          <TotalPriceContainer>
            <div>YOUR TOTAL IS: </div>
            <div>NOK {calculateTotalPrice()}</div>
          </TotalPriceContainer>
          <Link to="/checkout" className="text-center my-3">
            <PrimaryButton>CHECKOUT</PrimaryButton>
          </Link>
        </div>
      ) : (
        <div className="d-flex flex-column">
          <CartContainerDiv className="p-4 my-3 text-center fs-5 fw-bold">
            YOUR CART IS EMPTY
          </CartContainerDiv>
          <Link to="/games" className="text-center">
            <PrimaryButton>BROWSE GAMES</PrimaryButton>
          </Link>
        </div>
      )}
    </div>
  );
}
