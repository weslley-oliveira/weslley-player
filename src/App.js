import { useEffect, useState } from 'react';
import { getTokenFromResponse } from './util/spotify';
import './App.css';
import Login from './components/login';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';

const spotify = new SpotifyWebApi()

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
   const hash =  getTokenFromResponse();   
   window.location.hash = "";
   const _token = hash.access_token

   if (_token) {
     setToken(_token)

     spotify.setAccessToken(_token)

     spotify.getMe().then((user) => {
       console.log('👨‍🦳', user)
     })
   }

   console.log("tete", token)
  }, [])


  return (
    <div className="App">
      {
        token ? (
          <Player />
        ) : (
          <Login />
        )
      }      
    </div>
  );
}

export default App;
