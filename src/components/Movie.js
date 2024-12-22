import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React from "react";

export default function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <h1>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h1>
      <img src={coverImg} alt={title} />
      <p>{summary}</p>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};
