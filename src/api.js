
const ApiKey = "?api_key=60dbf41a1c537e450033c2a17a17dddf";

export const UpcomingApiURL = () =>
  `https://api.themoviedb.org/3/movie/upcoming${ApiKey}`;

export const TopRatedApiURL = () => `
https://api.themoviedb.org/3/movie/top_rated${ApiKey}`;

export const PopularApiURL = () => {
  return `https://api.themoviedb.org/3/movie/popular${ApiKey}`;
};

export const MovieInfoURL = (movieid) =>
  `https://api.themoviedb.org/3/movie/${movieid}${ApiKey}`;
export const MovieCredit = (movieid) =>
  `https://api.themoviedb.org/3/movie/${movieid}/credits${ApiKey}`;
export const Movievideos = (movieid) =>
  `https://api.themoviedb.org/3/movie/${movieid}/videos${ApiKey}`;
  

  export const MovieImages = (movieid) =>
    `https://api.themoviedb.org/3/movie/${movieid}/images${ApiKey}`;
// console.log(MovieInfoURL());
//api.themoviedb.org/3/search/movie?&api_key=60dbf41a1c537e450033c2a17a17dddf&query="
  export const MovieSearch = (moviesearch) =>
    `https://api.themoviedb.org/3/search/movie${ApiKey}&query="${moviesearch}`;