import React from 'react'
import { MdMessage } from "react-icons/md";
import styles from './Buttons.module.css'

const Buttons = (props) => {
  return (
    <div className={styles.nope}>
        <button className={props.isOutline ? styles.tera : styles.mera}>
      {props.icon}
      {props.text}
      
      </button>
    </div>
  )
}

export default Buttons
