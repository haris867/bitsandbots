import { useParams } from "react-router-dom";
import SingleGameCard from "../../components/singleGameCard";
import useGetData from "../../hooks/api/getData";
import { LoadingSpinner } from "../../components/commonStyles/loadingSpinner";

export default function Game() {
  let { id } = useParams();

  const singleGameUrl = `https://qg8g236v.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22Products%22+%26%26+_id+%3D%3D+%22${id}%22%5D+%7B%0A++%22name%22%3A+name%2C%0A++%22price%22%3A+price%2C%0A++%22rating%22%3A+rating%2C%0A++%22imageUrl%22%3A+image.asset-%3Eurl%2C%0A++%22description%22%3A+description%2C%0A++%22genres%22%3A+genres%0A%7D`;

  const { data, isFetchLoading, isFetchError } = useGetData(singleGameUrl);

  var singleGame = data[0];
  console.log(singleGame);
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
  return <SingleGameCard game={singleGame} />;
}
