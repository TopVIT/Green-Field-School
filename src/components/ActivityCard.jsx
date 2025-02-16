import React from 'react'
import styles from './ActivityCard.module.css'

function ActivityCard({src, title, desc}) {
  return (
    <div className={styles["activity-card"]}>
        <img src={src} alt={title} />
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>
  )
}

export default ActivityCard