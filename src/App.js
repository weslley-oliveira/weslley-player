import { useEffect } from 'react';
import { getTokenFromResponse } from './util/spotify';
import './App.css';
import Login from './components/login';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import { useStateValue } from './util/StateProvider';

const spotify = new SpotifyWebApi()

function App() { 
  const [{ user, token, playlists }, dispatch] = useStateValue();

  useEffect(() => {
   const hash =  getTokenFromResponse();   
   window.location.hash = "";
   const _token = hash.access_token

   if (_token) {
      console.log('🍠',_token)
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

     spotify.setAccessToken(_token) 
         
     spotify.getMe().then((user) => {      
       dispatch({
         type: 'SET_USER',
         user: user,
       })
     })
   }

   spotify.getUserPlaylists().then((playlists) => {
     
    dispatch({
      type: 'SET_PLAYLIST',
      playlists: playlists,
    })
   })

  }, [])
  
  return (
    <div className="App">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }      
    </div>
  );
}


export default App;
