import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <div className='header'> 
        <h2>My Application</h2>
        <h3><Link to='/login'>Login</Link></h3>
      </div>
      <hr></hr>
    </div>
  )
}

