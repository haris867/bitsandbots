import { Col, Collapse } from "react-bootstrap";
import { SecondaryButton } from "../commonStyles/buttons";
import { useState } from "react";
import { styled } from "styled-components";
import { SearchInput } from "../commonStyles/inputs";

export default function GenreTabs({
  genres = [],
  onGenreClick,
  selectedGenres,
}) {
  return (
    <>
      <div className="d-flex flex-wrap mx-auto">
        {genres.map((genre) => (
          <SecondaryButton
            onClick={onGenreClick}
            style={{ flex: "1 0 80px" }}
            className="mx-2 mb-2"
          >
            {genre}
          </SecondaryButton>
        ))}
      </div>
    </>
  );
}
