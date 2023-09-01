import { useEffect } from "react"
import Login from "./components/Login"
import { useStateProvider } from "./utils/StateProvider"
import { reducerCases } from "./utils/Constant"
import Spotify from "./components/Spotify"
function App() {
  const [{ token}, dispatch] = useStateProvider()

 useEffect(()=> {
  const hash = window.location.hash;
  if(hash) {
    const token = hash.substring(1).split("&")[0].split('=')[1];
    dispatch({type:reducerCases.SET_TOKEN, token})
  }
 }, [dispatch, token])

  return (
     <div>
      {token ? <Spotify/> :  <Login/>}
     </div>
  )
}

export default App
