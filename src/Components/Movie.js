import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { loadMovieinfo } from "../Actions/MovieAction";
import { useDispatch} from "react-redux";


const Movie = ({ name, rating, poster,id}) => {
  const posterPath = "https://www.themoviedb.org/t/p/w220_and_h330_face";
  const ratingClass = (rate) => {
    if (rate >= 8) {
      return "green";
    } else if (rate > 5) {
      return "orange";
    } else if (rate <= 5) {
      return "red";
    }
  };
  const dispatch = useDispatch();
  const loadDetailsHandler = ()=>{
      dispatch(loadMovieinfo(id))
  }

  return (
    <MovieCard onClick={loadDetailsHandler}>
      <Link to={`/movie/${id}`}>
        <div className="poster">
          <img src={posterPath + poster} alt={name} />
          <span className={ratingClass(rating)}>{rating}</span>
        </div>
      </Link>
    </MovieCard>
  );
};
const MovieCard = styled(motion.div)`
  cursor: pointer;
  flex-basis: 200px;
  flex-grow: 0;
  flex-shrink: 0;
  margin: 0.6rem;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  .poster {
    width: 100%;
    position: relative;
    overflow: hidden;
    img {
      max-width: 100%;
      object-fit: cover;
      display: block;
    }
  }
  span {
    padding: 0.5rem;
    background: #222;
    position: absolute;
    top: 5%;
    right: 15%;
  }
  span.green {
    color: lightgreen;
  }
  span.orange {
    color: orange;
  }
  span.red {
    color: #800e0e;
  }
  &:hover {
    .poster {
      transform: scale(0.98);
    }
  }
  @media (max-width:700px){
    flex-basis: 100px;
    span{
      font-size: .6rem;
    }
  }
`;

export default Movie;
