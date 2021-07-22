import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  /* console.log("куки Home", localStorage.getItem("token"))*/
  return (
    <>
      <h1>Home</h1>
      <u>
        <li>
          <Link to="/main">Main</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/secret">Secret</Link>
        </li>
      </u>
    </>
  )
}
