import { Col, Row, Container } from "react-bootstrap";
import * as S from "./index.styles";
import { MainHeading } from "../commonStyles/headings";
import { PrimaryButton, SecondaryButton } from "../commonStyles/buttons";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function SingleGameCard({ game = [] }) {
  const gameData = game;
  const genres = gameData.genres || [];

  const [isInCart, handleCartClick] = useCart(gameData);

  return (
    <Container>
      <Col xs={12} className="text-center mt-3 mb-4 mx-auto">
        <MainHeading className="fs-3 fw-bold mb-0 text-uppercase">
          {gameData.name}
        </MainHeading>
      </Col>
      <Helmet>
        <title>
          {game && game.name ? `Bits & Bots | ${game.name}` : "Bits & Bots"}
        </title>
      </Helmet>
      <Row className="d-flex justify-content-center">
        <Col xs={8} sm={7} md={6} lg={4} xl={3} className=" mb-4">
          <S.SingleCard>
            <S.SingleCardImage src={gameData.imageUrl} />
          </S.SingleCard>
          <div className="d-flex justify-content-between">
            <S.SingleCardDetails className="d-flex fw-bold">
              {gameData.rating} <S.RatingIcon />
            </S.SingleCardDetails>
            <S.SingleCardDetails className="fw-bold">
              NOK {gameData.price}
            </S.SingleCardDetails>
          </div>
          <div className="d-flex justify-content-center flex-column">
            <PrimaryButton onClick={handleCartClick}>
              {isInCart ? (
                <>
                  ADDED <S.CartIcon />{" "}
                </>
              ) : (
                "ADD TO CART"
              )}
            </PrimaryButton>
            {isInCart ? (
              <Link to="/cart" className="text-center my-2">
                <SecondaryButton className="w-100">GO TO CART</SecondaryButton>
              </Link>
            ) : null}
          </div>
        </Col>
        <Col xs={10} sm={10} md={8} lg={7} xl={6} className=" mb-4">
          <S.SingleCardBody className="p-3">
            <S.SingleCardTitle className="fs-2 fw-bold">
              DESCRIPTION
            </S.SingleCardTitle>
            <S.SingleCardText>{gameData.description}</S.SingleCardText>
            <div className="d-flex flex-wrap mx-auto">
              <S.SingleCardTitle className="fs-2 fw-bold">
                GENRES
              </S.SingleCardTitle>
              {genres.map((genre) => (
                <S.SingleCardGenreTab key={genre._id} className="me-2 mb-2">
                  {genre.genre}
                </S.SingleCardGenreTab>
              ))}
            </div>
          </S.SingleCardBody>
        </Col>
      </Row>
    </Container>
  );
}
