import axios from "axios";

import {
  UpcomingApiURL,
  PopularApiURL,
  TopRatedApiURL,
  MovieInfoURL,
  MovieCredit,
  Movievideos,
  MovieImages,
  MovieSearch,
} from "../api";

export const loadMovies = () => async (dispatch) => {
  const upcomingMovieData = await axios.get(UpcomingApiURL());
  const popularMovieData = await axios.get(PopularApiURL());
  const topratedMovieData = await axios.get(TopRatedApiURL());
  dispatch({
    type: "FETCH_MOVIES",
    payload: {
      upcoming: upcomingMovieData.data.results,
      popular: popularMovieData.data.results,
      toprated: topratedMovieData.data.results,
    },
  });
};

export const loadMovieinfo = (movieid) => async (dispatch) => {
  dispatch({
    type:"FETCH_LOADING",
  })
  const Movieinfodata = await axios.get(MovieInfoURL(movieid));
  const MCredit = await axios.get(MovieCredit(movieid));
  const Mvideos = await axios.get(Movievideos(movieid));
   const Mphotos = await axios.get(MovieImages(movieid));
  dispatch({
    type: "FETCH_MOVIEINFO",
    payload: {
      movieInfo: Movieinfodata.data,
      movieCast:MCredit.data,
      movieVideo:Mvideos.data.results,
      mimages:Mphotos.data,
    },
  });
};

export const searchMovieinfo = (movien_name)=> async (dispatch) =>{
  const searchData =await axios.get(MovieSearch(movien_name));
  dispatch({
    type: "FETCH_SEARCH",
    payload: {
      Moviesearchdata: searchData.data.results,
    },
  });
}