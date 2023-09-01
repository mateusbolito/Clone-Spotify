import { reducerCases } from "./Constant";

export const initialState = {
token: null,
playlists: [], 
userInfo: null,
playlists: [],
currentPlaying: null,
playerState: false,
selectedPlaylist: null,
selectedPlaylistId: "6Pgel8s8Dh1GIZ97wqDv2u"
} 

const reducer = (state, action) => {
    switch(action.type) {
    case reducerCases.SET_TOKEN : {
        return {
            ...state, token: action.token,
        };
    };
    case reducerCases.SET_USER:
        return {
          ...state,
          userInfo: action.userInfo,
        };
      case reducerCases.SET_PLAYLISTS:
        return {
          ...state,
          playlists: action.playlists,
        };
      case reducerCases.SET_PLAYING:
        return {
          ...state,
          currentlyPlaying: action.currentlyPlaying,
        };
      case reducerCases.SET_PLAYER_STATE:
        return {
          ...state,
          playerState: action.playerState,
        };
      case reducerCases.SET_PLAYLIST:
        return {
          ...state,
          selectedPlaylist: action.selectedPlaylist,
        };
      case reducerCases.SET_PLAYLIST_ID:
        return {
          ...state,
          selectedPlaylistId: action.selectedPlaylistId,
        };
     default:
        return state;
    }
} 
export default reducer