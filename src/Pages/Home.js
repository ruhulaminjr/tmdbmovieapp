import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../Actions/MovieAction";
import Movie from "../Components/Movie";
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  const { upcoming, popular, toprated } = useSelector(
    (state) => state.moviedata
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  return (
    <MovieContainer>
      <div>
        <h2>Whats Popular</h2>
      </div>

      <Movies>
        {popular.map((movie) => (
          <Movie
            name={movie.title}
            poster={movie.poster_path}
            rating={movie.vote_average}
            key={movie.id}
            id={movie.id}
          />
        ))}
      </Movies>
      {/* toprated movie  */}
      <div>
        <h2>Whats TopRated</h2>
      </div>
      <Movies>
        {toprated.map((movie) => (
          <Movie
            name={movie.title}
            poster={movie.poster_path}
            rating={movie.vote_average}
            key={movie.id}
            id={movie.id}
          />
        ))}
      </Movies>
      <div>
        <h2>Whats Upcoming</h2>
      </div>

      <Movies>
        {upcoming.map((movie) => (
          <Movie
            name={movie.title}
            poster={movie.poster_path}
            rating={movie.vote_average}
            key={movie.id}
            id={movie.id}
          />
        ))}
      </Movies>
    </MovieContainer>
  );
};
const MovieContainer = styled(motion.div)`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
  }
  @media (max-width: 700px) {
    div {
      margin: 0.5rem 0;
      h2 {
        font-size: 1rem;
      }
    }
  }
`;
const Movies = styled(motion.div)`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  margin: 2rem 0;
  @media (max-width: 700px) {
    gap: 0.5rem;
    margin: 1rem 0;
  }
`;

export default Home;
