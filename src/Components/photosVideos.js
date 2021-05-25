import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const PhotoVideoUI = () => {
  const banner = "https://www.themoviedb.org/t/p/w220_and_h330_face";
  const { videos, photos } = useSelector((state) => state.movieinfo);
  return (
    <VideoBox>
      <h2 className='h2t'>Videos & Photos</h2>
      <div className="videos">
        {videos.slice(0, 2).map((vid) => (
          <iframe
            width="180"
            height="150"
            src={`https://www.youtube.com/embed/${vid.key}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
            key={vid.key}
          ></iframe>
        ))}
        {photos.posters.slice(0, 4).map((photo) => (
          <img
            src={`${banner}${photo.file_path}`}
            alt={photo.file_path}
            key={photo.file_path}
          />
        ))}
        {photos.backdrops.slice(0, 5).map((photo) => (
          <img
            src={`${banner}${photo.file_path}`}
            alt={photo.file_path}
            key={photo.file_path}
          />
        ))}
      </div>
    </VideoBox>
  );
};

const VideoBox = styled.div`
    background: #373b69;
    padding: 1rem;
    h2{
      font-size: 1.5rem;
    }
  .videos{
    display: flex;
    overflow-x: auto;
    gap: 1rem;
    margin: 1rem 0;
    align-items: center;
    img{
      width: 180px;
      height: 150px;
      object-fit: cover;
    }
  }
  @media (max-width:700px){
    padding: .5rem;
    h2{
      font-size: 1rem;
    }
      .videos{
        gap: .5rem;
        margin: .5rem 0;
      iframe{
        width: 100px;
        height: 80px;
      }
      img{
        width: 100px;
        height: 80px;
      }
      }
  }
  
`;
export default PhotoVideoUI;
