import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { save } from "../../hooks/storage";
import { calculateTotalPrice } from "../../utils/helpers";
import * as S from "./index.styles";
import {
  CartContainerDiv,
  CartGameContainer,
  TotalPriceContainer,
} from "../commonStyles/cart";
import { PrimaryButton } from "../commonStyles/buttons";

export function CartContainer({ gameList = [], setGameList }) {
  function removeGameFromCart(gameId) {
    const updatedGameList = gameList.filter((game) => game._id !== gameId);
    save("cart", JSON.stringify(updatedGameList));
    setGameList(updatedGameList);
  }

  return (
    <div>
      {gameList.length > 0 ? (
        <div className="d-flex flex-column">
          <CartContainerDiv className="d-flex flex-wrap justify-content-center p-3">
            {gameList.map((game) => (
              <CartGameContainer xs={12} sm={10} className="d-flex m-2">
                <Col xs={2} className="m-2 d-flex object-fit-contain">
                  <img src={game.imageUrl} alt={game.name} className="w-100" />
                </Col>
                <Col
                  xs={6}
                  className="my-2 fw-bold d-flex flex-column justify-content-between"
                >
                  <p>{game.name}</p>
                  <div className="d-flex justify-content-between">
                    <p className="d-flex m-0 align-items-center">
                      {game.rating}
                      <S.RatingIcon />
                    </p>
                    <p className="m-0">NOK {game.price}</p>
                  </div>
                </Col>
                <Col
                  xs={4}
                  className="d-flex justify-content-center align-items-center"
                >
                  <S.RemoveIcon onClick={() => removeGameFromCart(game._id)} />
                </Col>
              </CartGameContainer>
            ))}
          </CartContainerDiv>
          <TotalPriceContainer>
            <div>YOUR TOTAL IS: </div>
            <div>NOK {calculateTotalPrice(gameList)}</div>
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
