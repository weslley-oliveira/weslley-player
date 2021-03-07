import React from 'react'
import './login.css'
import { accessUrl } from '../util/spotify'


function Login() {
    return (
        <div className="login">
            <img 
            src="https://avatars.githubusercontent.com/u/71903909?s=400&u=aa5ac1a61b19d6a6d0a9b3a21d247112897769d3&v=4"
            alt="Profile Pic"
            />
            <h1>I hope you enjoy my Player</h1>
            {/* Logo */}
            <a href={accessUrl}>Login With Spotify</a>
            
            {/* Login */}            
        </div>
    )
}

export default Login
