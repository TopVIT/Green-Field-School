import React from 'react'
import styles from './Footer.module.css'
import logo from '../assets/logo.png'

function Footer() {
    return (
        <>
            <div className={styles["admission-querry"]}>
                <p>Need help regarding Admission? Contact us on - 9981899382</p>
            </div>
            <div className={styles["footer-container"]}>
                <div className={styles["sub-container1"]}>
                    <div className={styles["logo-container"]}>
                        <img src={logo} alt="Logo" className={styles["logo"]}/>
                    </div>
                    <div className={styles["link-container"]}>
                        <ul>
                            <li>Programs</li>
                            <li>Request Info</li>
                            <li>Faculty & staff</li>
                            <li>Alumni</li>
                            <li>Our School</li>
                        </ul>
                        <ul>
                            <li>Contact</li>
                            <li>Athletics</li>
                            <li>News & Events</li>
                            <li>Support</li>
                            <li>Map</li>
                        </ul>
                    </div>
                </div>
                <div className={styles["sub-container2"]}>
                    <div className={styles["address"]}>
                        <p>Near Shree Krishna Mandir,</p>
                        <p>Ward No. 12,</p>
                        <p>Nagar Parishad Kothri,</p>
                        <p>Sehore, 466114,</p>
                        <p>Madhya Pradesh</p>
                    </div>
                </div>
            </div>
            <div className={styles["coypright-section"]}>
                <p>© All rights reserved</p>
            </div>
        </>
    )
}

export default Footer