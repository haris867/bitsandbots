import {
  PrimaryButton,
  SecondaryButton,
} from "../../components/commonStyles/buttons";
import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Container, Card, Col, Row } from "react-bootstrap";
import { styled } from "styled-components";
import { BsSearch } from "react-icons/bs";
import { MainHeading } from "../../components/commonStyles/headings";
import { GameCard } from "../../components/commonStyles/cards";
import CardsContainer from "../../components/cardsContainer";

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
        <CardsContainer />
      </Row>
    </Container>
  );
}
