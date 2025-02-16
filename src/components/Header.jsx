import React from 'react'
// import {Link} from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../assets/logo.png'

function Header() {
  return (
    <>
        <div className= {styles["header-container"]}>
            <div className= {styles["header-sub-container1"]} > 
              <img src={logo} alt="Logo" className={styles["logo"]}/>
            </div>
            <div className= {styles["header-sub-container2"]}>
                <ul className= {styles["header-options"]}>
                    <li className= {styles["header-hover"]}>About</li>
                    <li className= {styles["header-hover"]}>Admission</li>
                    <li className= {styles["header-hover"]}>Learning</li>
                    <li className= {styles["header-hover"]}>News & Events</li>
                    <li className= {styles["header-hover"]}>Contact</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header