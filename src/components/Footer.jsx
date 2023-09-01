
import styled from "styled-components"
import PlayerControls from "./PlayerControls"
import Volume from "./Volume"
import CurrentTrack from "./CurrentTrack"



 export default function Footer() {
    return(
        <ContainerFooter>
            <CurrentTrack/>
            <PlayerControls/>
            <Volume/>
        </ContainerFooter>
    )
 }
 const ContainerFooter = styled.div`
 width: 100%;
 height: 100%;
 background-color: #181818;
  border-top: 1px solid #282828;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

 `
