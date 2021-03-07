import { useEffect, useState } from 'react';
import { getTokenFromResponse } from './util/spotify';
import './App.css';
import Login from './components/login';

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
   const hash =  getTokenFromResponse();
   window.location.hash = "";

   const token = hash.access_token

   if (token) {
     setToken(token)
   }

   console.log("tete", token)
  }, [])


  return (
    <div className="App">      
      <Login />  
    </div>
  );
}

export default App;
