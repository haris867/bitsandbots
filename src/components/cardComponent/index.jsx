import { Card, Col } from "react-bootstrap";
import { CardLink, GameCard } from "../commonStyles/cards";
import { PrimaryButton, SecondaryButton } from "../commonStyles/buttons";
import * as S from "./index.styles";
import useCart from "../../hooks/useCart";

export default function CardComponent({ game }) {
  const [isInCart, handleCartClick] = useCart(game);
  return (
    <Col
      xs={12}
      md={6}
      lg={4}
      xxl={3}
      className="my-2 d-flex justify-content-center"
      key={game._id}
    >
      <Col md={8}>
        <CardLink to={`/game/${game._id}`}>
          <GameCard className="my-2 h-100">
            <Col xs={3} md={11} className="h-100 card__image-container">
              <Card.Img
                className="rounded-0 p-2 w-100 h-100 object-fit-cover"
                variant="top"
                alt={game.name}
                src={game.imageUrl}
                loading="lazy"
              />
            </Col>
            <Col xs={9} md={11} className="py-2 h-100 card-body__container">
              <Card.Body className="py-0 ps-2 h-100 d-flex flex-column justify-content-between pe-2">
                <Card.Title className="fw-bold">{game.name}</Card.Title>
                <S.GameDetailsDiv className="d-flex justify-content-between mb-3 fw-light">
                  <div className="d-flex align-items-center">
                    <Card.Text className="m-0 fw-bold">{game.rating}</Card.Text>
                    <S.RatingIcon />
                  </div>
                  <Card.Text className="fw-bold">NOK {game.price}</Card.Text>
                </S.GameDetailsDiv>
                <div className="card__button-container d-flex gap-2">
                  <PrimaryButton
                    onClick={handleCartClick}
                    className="d-flex justify-content-center align-items-center"
                  >
                    {isInCart ? (
                      <>
                        ADDED <S.CartIcon />
                      </>
                    ) : (
                      "ADD TO CART"
                    )}
                  </PrimaryButton>
                  <SecondaryButton>VIEW</SecondaryButton>
                </div>
              </Card.Body>
            </Col>
          </GameCard>
        </CardLink>
      </Col>
    </Col>
  );
}
