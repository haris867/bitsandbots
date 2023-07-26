import {
  PrimaryButton,
  SecondaryButton,
} from "../../components/commonStyles/buttons";
import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { games, genres } from "./list";
import { Container, Card, Col, Row } from "react-bootstrap";
import { styled } from "styled-components";
import { TiStar } from "react-icons/ti";
import { BsSearch } from "react-icons/bs";
import {
  MainHeading,
  MainHeadingContainer,
} from "../../components/commonStyles/headings";

const GameCard = styled(Card)`
  background-color: var(--color-quaternary) !important;
  display: flex;
  flex-direction: row;
  font-family: "Play", sans-serif;
  align-items: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;
const RatingIcon = styled(TiStar)`
  fill: var(--color-primary) !important;
  font-size: calc(1.4rem + 0.4vw) !important;
`;
const SearchIcon = styled(BsSearch)`
  font-size: calc(1.325rem + 0.9vw) !important;
  cursor: pointer;
`;
const SearchInput = styled.input`
  flex: 1 0 100px;
  max-width: 500px;
  font-family: "Roboto Mono", sans-serif;
  min-height: calc(2.5rem + 0.7vw) !important;
  max-height: calc(2.5rem + 0.7vw) !important;
`;

// <MainHeadingContainer className="d-flex justify-content-between align-items-center">
//   <MainHeading className="fs-2 mb-0">Venues</MainHeading>

//   <St.SearchIcon
//     onClick={() => setOpen(!open)}
//     aria-controls="search-form"
//     aria-expanded={open}
//     className="cursor-pointer primary-color fs-2"
//   />
// </MainHeadingContainer>;

export default function Games() {
  const [open, setOpen] = useState(false);
  const [searchGenres, setSearchGenres] = useState([]);

  function genreClick(e) {
    e.target.classList.toggle("selected");
    if (e.target.classList.contains("selected")) {
      setSearchGenres([...searchGenres, e.target.innerText]);
    } else {
      setSearchGenres(
        searchGenres.filter((genre) => genre !== e.target.innerText)
      );
    }
    console.log(searchGenres);
  }

  return (
    <Container>
      <Col
        md={11}
        className="d-flex justify-content-between align-items-center mt-3 mb-0 mx-auto"
      >
        <MainHeading className="fs-2 fw-bold mb-0">Games</MainHeading>
        <SearchIcon
          onClick={() => setOpen(!open)}
          aria-controls="search-form"
          aria-expanded={open}
        />
      </Col>
      <Row>
        <Collapse in={open}>
          <Col id="search-form" md={11} className="p-0 mx-auto">
            <div className="d-flex justify-content-center">
              <SearchInput
                className="m-2"
                type="text"
                placeholder="Search by title"
              />
            </div>
            <div className="d-flex flex-wrap mx-auto">
              <SecondaryButton
                onClick={genreClick}
                style={{ flex: "1 0 80px" }}
                className="mx-2 mb-2"
              >
                ACTION
              </SecondaryButton>
              <SecondaryButton
                onClick={genreClick}
                style={{ flex: "1 0 80px" }}
                className="mx-2 mb-2"
              >
                CASUAL
              </SecondaryButton>
              <SecondaryButton
                onClick={genreClick}
                style={{ flex: "1 0 80px" }}
                className="mx-2 mb-2"
              >
                ADVENTURE
              </SecondaryButton>
              <SecondaryButton
                onClick={genreClick}
                style={{ flex: "1 0 80px" }}
                className="mx-2 mb-2"
              >
                ACTION
              </SecondaryButton>
              <SecondaryButton
                onClick={genreClick}
                style={{ flex: "1 0 80px" }}
                className="mx-2 mb-2"
              >
                CASUAL
              </SecondaryButton>
              <SecondaryButton
                onClick={genreClick}
                style={{ flex: "1 0 80px" }}
                className="mx-2 mb-2"
              >
                ADVENTURE
              </SecondaryButton>
              <SecondaryButton
                onClick={genreClick}
                style={{ flex: "1 0 80px" }}
                className="mx-2 mb-2"
              >
                ACTION
              </SecondaryButton>
              <SecondaryButton
                onClick={genreClick}
                style={{ flex: "1 0 80px" }}
                className="mx-2 mb-2"
              >
                CASUAL
              </SecondaryButton>
              <SecondaryButton
                onClick={genreClick}
                style={{ flex: "1 0 80px" }}
                className="mx-2 mb-2"
              >
                ADVENTURE
              </SecondaryButton>
            </div>
          </Col>
        </Collapse>
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
                  src="/images/robot-world.jpg"
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
        </Col>
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
                  src="/images/robot-world.jpg"
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
        </Col>
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
                  src="/images/robot-world.jpg"
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
        </Col>
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
                  src="/images/robot-world.jpg"
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
        </Col>
      </Row>
    </Container>
  );
}
