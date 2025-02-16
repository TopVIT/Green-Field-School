import React from 'react'
import styles from './Divider.module.css'

function Divider({text}) {
  return (
    <div className={styles["divider"]}>----------------------------------------------- {text} -----------------------------------------------</div>
  )
}

export default Divider