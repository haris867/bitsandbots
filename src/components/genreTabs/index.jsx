import { SecondaryButton } from "../commonStyles/buttons";

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
            className={`mx-2 mb-2 ${
              selectedGenres.includes(genre) ? "selected" : ""
            }`}
            key={genre._id}
          >
            {genre.genre}
          </SecondaryButton>
        ))}
      </div>
    </>
  );
}
