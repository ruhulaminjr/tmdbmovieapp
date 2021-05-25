import React,{useState} from 'react';
import styled from 'styled-components';
import {Link,useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { searchMovieinfo } from "../Actions/MovieAction";

const Navbar = ()=>{
  const [Text,setText] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const formHandler = (e) => {
    e.preventDefault();
    console.log(Text);
    dispatch(searchMovieinfo(Text));
    history.push("/search-results");
    setText('');
  };
  const serachHandler = (e) => {
    setText(e.target.value);
  };
    return (
      <Nav>
        <Link to='/'>
          <h1>TMDB API</h1>
        </Link>
        <form id="form" onSubmit={formHandler}>
          <input type="text" id="search" className="search" placeholder="Search..." onChange={serachHandler} value={Text}/>
        </form>
      </Nav>
    );
}
const Nav = styled.div`
  background-color: #373b69;
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  .search {
    background-color: transparent;
    border: 2px solid #22254b;
    border-radius: 50px;
    font-family: inherit;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    color: #fff;
  }
  .search::placeholder {
    color: #fff;
  }
  .search:focus {
    outline: none;
    background-color: #22254b;
  }
  @media (max-width:700px){
    padding: .5rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    .search{
      padding: .5rem .5rem;
      font-size: .8rem;
      border-radius: 1rem;
    }
    h1{
      font-size: 1.5rem;
    }
  }
`;
export default Navbar;