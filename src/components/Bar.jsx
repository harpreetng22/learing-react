import React from 'react'
import { Link } from 'react-router-dom'

function Bar() {
  return (
    <div>
        
    <ul className="nav nav-pills p-3 border bg-info bg-opacity-70 border-4  ">
        <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="">Contact us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/cards">Forums</Link>
        </li>
      </ul>
    </div>
  )
}

export default Bar