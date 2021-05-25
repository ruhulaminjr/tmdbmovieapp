import Home from "./Pages/Home";
import GlobalStyles from "./Components/Globalstyle";
import { Switch, Route } from "react-router-dom";
import MovieDetails from './Pages/MovieDetails';
import Navbar from './Pages/Navbar';
import SearchUI from './Pages/Search';
function App() {
  return (
    <div>
      <GlobalStyles />
      <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movie/:id">
          <MovieDetails/>
        </Route>
        <Route path="/search-results">
          <SearchUI/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
