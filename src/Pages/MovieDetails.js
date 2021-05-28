import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector} from "react-redux";
import { DurationHandler } from "../Util";
import PhotoVideoUI from "../Components/photosVideos";
import CastUI from "../Components/CastCrew";
import loading from '../loading.gif'


const MovieDetails = () => {
  const { overview, release_date, runtime, title, } = useSelector(
    (state) => state.movieinfo.movieinfo
  );
  // videos
  const [trailekey] = useSelector((state) => state.movieinfo.videos);
  const { isLoading } = useSelector((state) => state.movieinfo);
  const { videos } = useSelector((state) => state.movieinfo);

  // console.log(typeof videos.length);
  return (
    <>
    {isLoading && <Loading><img src={loading} alt="Loading gif" /></Loading>}
      {!isLoading && (
        <Moviedetailsinfo>
          <div className="trailer">
            <>
              {videos.length !== 0 && (
                <iframe
                  width="100%"
                  height="450"
                  src={`https://www.youtube.com/embed/${trailekey.key}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </>
          </div>
          <div className="title">
            <h1>{title}</h1>
            <div className="title-info">
              <p>Duration: {DurationHandler(runtime)} |</p>
              <p>Release: {release_date} |</p>
            </div>
          </div>
          <div className="overview">
            <h4>Overview</h4>
            <p>{overview}</p>
          </div>
          <PhotoVideoUI/>
          <CastUI />
        </Moviedetailsinfo>
      )}
    </>
  );
};

const Moviedetailsinfo = styled(motion.div)`
  .title {
    padding: 1rem;
    background: #373b69;
    .title-info {
      display: flex;
      align-items: center;
      p {
        padding: 0.4rem;
      }
    }
  }
  .overview {
    background: #373b69;
    margin: 1rem 0;
    padding: 2rem;
    h4 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.1rem;
      line-height: 1.5;
      letter-spacing: 200%;
    }
  }
  @media (max-width: 700px) {
    .trailer{
      iframe{
        height: 180px;
      }
    }
    .title {
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title-info {
        flex-direction: column;
        justify-content: center;
        p{
          font-size: .8rem;
        }
      }
      h1 {
        font-size: 1rem;
      }
    }
  }
  .overview {
    background: #373b69;
    margin: .5rem 0;
    padding: 1rem;
    h4 {
      font-size: 1rem;
      margin-bottom: .5rem;
    }
    p {
      font-size: .8rem;
      line-height: 1.5;
      letter-spacing: 200%;
    }
  }
`;
const Loading = styled.div`
display: flex;
justify-content:center;
align-items:center;
width: 100%;
height: 100vh;
`
export default MovieDetails;
