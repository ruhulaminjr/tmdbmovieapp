import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Movie from '../Components/Movie';

const SearchUI = () => {
  const { searched} = useSelector((state) => state.movieinfo);
  return (
    <MoviesDiv>
      <div>
        <h2>Search Results</h2>
      </div>
      <div className="moviesall">
        {searched.map((movie) => (
          <Movie
            name={movie.title}
            poster={movie.poster_path}
            rating={movie.vote_average}
            key={movie.id}
            id={movie.id}
          />
        ))}
      </div>
    </MoviesDiv>
  );
};

const MoviesDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  .moviesall {
    display: flex;
    flex-wrap: wrap;
  }
  `;

  export default SearchUI;



