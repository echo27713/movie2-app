import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import React, { useEffect, useState } from "react";

export default function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    console.log(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <p>{movie.title}</p>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <p>{movie.summary}</p>
        </div>
      )}
    </div>
  );
}
