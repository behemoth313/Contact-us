import React from 'react'
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <div>
      <nav>
        <div className="logo">
            <img src='/images/lomo.jpg' alt='logo hai'></img>
        </div>
        <ul>
            <li>home</li>
            <li>contact</li>
            <li>about</li>
            
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
