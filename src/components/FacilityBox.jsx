import React from 'react'
import styles from './FacilityBox.module.css'

function FacilityBox({text, src}) {
  return (
    <div className={styles["box"]}>
        <img src={src} alt="image" />
        <p>{text}</p>
    </div>
  )
}

export default FacilityBox