import React from 'react'
import styles from './Hero.module.css'
import Divider from './Divider'
import FacilityBox from './FacilityBox'
import WhyChoose from './WhyChoose'
import ActivityCard from './ActivityCard'
import image from '../assets/image.jpg'
import facultyIcon from '../assets/facultyIcon.png'
import discIcon from '../assets/discIcon.png'
import drawingImg from '../assets/drawing.jpg'
import cricketImg from '../assets/cricket.jpg'

function Hero() {
  return (
    <div className= {styles["container"]}> 
      <div className= {styles["image-container"]}>
        <h1>Green Field Higher Secondary School</h1>
        <p>Shaping Your Children’s Future</p>
      </div>
      <div className={styles["content-container"]}>
        <div className={styles["heading"]}>
          <h2>Welcome to </h2>
          <h1>Green Field Higher Secondary School</h1>
        </div>

        <Divider text= "--------------"/>

        <div className={styles["school-image"]}>
          <img src={image} alt="School" />
        </div>

        
        <Divider text={"Our Facilities"}/>
        <div className={styles["facilities-container"]}>
          <FacilityBox text = {"Best Faculty"} src = {facultyIcon}/>
          <FacilityBox text = {"Library"} src = {discIcon}/>
          <FacilityBox text = {"Smart Classes"} src = {facultyIcon}/>
          <FacilityBox text = {"Discipline"} src = {discIcon}/>
        </div>

        <Divider text={"Why Choose Us?"}/>
        <div className={styles["why-choose-container"]}>
          <WhyChoose text={"Qualified Teachers"}/>
          <WhyChoose text={"Medical Facility"}/>
          <WhyChoose text={"Sports Facilities"}/>
          <WhyChoose text={"Extracurricular Clubs"}/>
          <WhyChoose text={"Supportive Community"}/>
          <p className={styles["why-choose-para"]}>
            Discover the excellence of Green Field Higher Secondary School, where academic rigor meets holistic development. Our dedicated faculty, state-of-the-art facilities, and nurturing environment ensure that every student thrives both in and out of the classroom. Join us at Green Field Higher Secondary School, where we cultivate curiosity, foster creativity, and build future leaders. Enroll today and give your child the foundation for a bright and successful future!
          </p>
        </div>

        <Divider text={"EXTRA ACTIVITIES"}/>

        <div className={styles["activities-container"]}>
          <ActivityCard src={drawingImg} title={"Drawing Competation"} desc={"Drawing And Painting Competition for students organized by ‘Art Club’."}/>
          <ActivityCard src={cricketImg} title={"Drawing Competation"} desc={"Drawing And Painting Competition for students organized by ‘Art Club’."}/>
          <ActivityCard src={drawingImg} title={"Drawing Competation"} desc={"Drawing And Painting Competition for students organized by ‘Art Club’."}/>
          <ActivityCard src={cricketImg} title={"Drawing Competation"} desc={"Drawing And Painting Competition for students organized by ‘Art Club’."}/>
        </div>

      </div>
    </div>
  )
}

export default Hero