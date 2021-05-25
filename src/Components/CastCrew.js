import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const CastUI = () => {
  const photURL = "https://www.themoviedb.org/t/p/w220_and_h330_face";

  const { credits } = useSelector((state) => state.movieinfo);
  return (
    <Castdiv>
      <h2>Cast & Crew</h2>
      <div className="actors">
        {credits.cast.map((actor) => (
          <div className="box" key={actor.name}>
            <div className="img">
              <img src={`${photURL}${actor.profile_path}`} alt="" />
            </div>
            <div className="name">
              <p>{actor.name}</p>
            </div>
            <div className="name2">
              <p>{actor.character}</p>
            </div>
          </div>
        ))}
      </div>
    </Castdiv>
  );
};
const Castdiv = styled.div`
  background: #373b69;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem;
  .actors {
    display: flex;
    gap: 1rem;
  }
  .box {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    background: #575151;
    flex-basis: 180px;
    flex-grow: 0;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 1rem;
    .name {
      p {
        font-size: 1.2rem;
      }
    }
    .img {
      width: 100%;
      img {
        max-width: 100%;
        border-radius: 0.5rem;
      }
    }
  }
  @media (max-width: 700px) {
    h2 {
      font-size: 1rem;
    }
    margin: 0.5rem 0;
    padding: 0.5rem;
    gap: 0.5rem;
    .actors {
      gap: 0.5rem;
    }
    .box {
      padding: 0.5rem;
      flex-basis: 100px;
      .name {
        p {
          font-size: 0.8rem;
        }
      }
      .name2 {
        p {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

export default CastUI;
