const initstate = {
  upcoming: [],
  popular: [],
  toprated: [],
  
};

const MovieReducer = (state = initstate, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        upcoming: action.payload.upcoming,
        popular: action.payload.popular,
        toprated: action.payload.toprated,
      };

    default:
      return { ...state };
  }
};

export default MovieReducer;
