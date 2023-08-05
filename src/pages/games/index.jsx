import {
  PrimaryButton,
  SecondaryButton,
} from "../../components/commonStyles/buttons";
import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Container, Card, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { MainHeading } from "../../components/commonStyles/headings";
import { GameCard } from "../../components/commonStyles/cards";
import CardsContainer from "../../components/cardsContainer";
import useGetData from "../../hooks/api/getData";
import { LoadingSpinner } from "../../components/commonStyles/loadingSpinner";
import GenreTabs from "../../components/genreTabs";
import { SearchInput } from "../../components/commonStyles/inputs";
import { fetchUrl } from "../../utils/constants";
import useAuthentication from "../../hooks/useAuth";

const SearchIcon = styled(BsSearch)`
  font-size: calc(1.325rem + 0.9vw) !important;
  cursor: pointer;
`;

export default function Games() {
  useAuthentication();

  const { data, isFetchLoading, isFetchError } = useGetData(fetchUrl);

  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
  }

  if (isFetchLoading) {
    return (
      <div className="mt-3 d-flex justify-content-center">
        <LoadingSpinner animation="border" size="lg" role="status">
          <span className="visually-hidden">Loading...</span>
        </LoadingSpinner>
      </div>
    );
  }

  if (isFetchError) {
    return (
      <div className="mt-3 d-flex justify-content-center">An error occured</div>
    );
  }

  var games = data.products;
  if (data && data.genres) {
    var genres = data.genres;
  }

  if (games) {
    var filteredGames = games.filter((game) =>
      game.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (searchGenres.length > 0) {
    filteredGames = filteredGames.filter((game) =>
      game.genres.some((genre) => searchGenres.includes(genre.genre))
    );
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
          <Col id="search-form" md={10} className="p-0 mx-auto">
            <div className="d-flex justify-content-center">
              <SearchInput
                className="m-2"
                type="text"
                placeholder="Search by title"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <GenreTabs
              genres={genres}
              onGenreClick={genreClick}
              selectedGenres={searchGenres}
            />
          </Col>
        </Collapse>
        <CardsContainer games={filteredGames} />
      </Row>
    </Container>
  );
}
