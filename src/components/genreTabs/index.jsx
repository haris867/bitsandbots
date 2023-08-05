import { GenreButton, SecondaryButton } from "../commonStyles/buttons";

export default function GenreTabs({
  genres = [],
  onGenreClick,
  selectedGenres,
}) {
  return (
    <>
      <div className="d-flex flex-wrap mx-auto">
        {genres.map((genre) => (
          <GenreButton
            onClick={onGenreClick}
            className={`mx-2 mb-2 ${
              selectedGenres.includes(genre) ? "selected" : ""
            }`}
            key={genre._id}
          >
            {genre.genre}
          </GenreButton>
        ))}
      </div>
    </>
  );
}
