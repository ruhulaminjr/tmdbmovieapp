import {combineReducers} from "redux";
import MovieReducer from './MovieDetails';
import MovieInfoReducer from './MovieInfo';
const allReducer = combineReducers({
    moviedata:MovieReducer,
    movieinfo:MovieInfoReducer,
})

export default allReducer;