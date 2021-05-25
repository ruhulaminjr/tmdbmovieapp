const initstate = {
  movieinfo: [],
  credits: [],
  videos: [],
  photos: [],
  isLoading: true,
  searched: [],
  isSearched: false,
};

const MovieInfoReducer = (state = initstate, action) => {
  switch (action.type) {
    case "FETCH_MOVIEINFO":
      return {
        ...state,
        movieinfo: action.payload.movieInfo,
        credits: action.payload.movieCast,
        videos: action.payload.movieVideo,
        photos: action.payload.mimages,
        isLoading: false,
      };
    case "FETCH_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_SEARCH":
      return {
        ...state,
        isSearched: true,
        searched: action.payload.Moviesearchdata,
      };
    default:
      return {
        ...state,
      };
  }
};

export default MovieInfoReducer;
