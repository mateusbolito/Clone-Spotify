import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constant";
export default function CurrentTrack() {
          
  const [{ token, currentlyPlaying}, dispatch] = useStateProvider();
  
  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      
      if (response.data !== "") {
        const currentlyPlaying = {
          id: response.data.item.id,
          name: response.data.item.name,
          artists: response.data.item.artists.map((artist) => artist.name),
          image: response.data.item.album.images[2].url,
        };
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
      } else {
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: null });
      }
    };
    getCurrentTrack();
  }, [token, dispatch]);

  return (
    <Container>
        {currentlyPlaying && (
            <div className="track">
                <div className="track__image">
                    <img src={currentlyPlaying.image} alt="currentplaying" />
                </div>
                <div className="track__info">
                    <h4>{currentlyPlaying.name}</h4>
                    <h6>{currentlyPlaying.artist} </h6>
                </div>
            </div>
        )}
    
    </Container>
  );
}

const Container = styled.div`
   .track {
    display: flex;
    align-items: center;
    gap: 1rem;
    &__image {
    }
    &__info {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      h4 {
        color: white;
      }
      h6 {
        color: #b3b3b3;
      }
    }
  }
`;