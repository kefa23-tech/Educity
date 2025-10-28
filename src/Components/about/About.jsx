import React from 'react'
import'./about.css'
import play_icon from '../../assets/play-icon.png'
import about_img from '../../assets/about.png'



const About = ({setPlayState}) => {
  return (
    <div className='about' >
        <div className='about-left'>
            <img src={about_img} className='about-img'/>
            <img src={play_icon} className='play-icon' onClick={()=>{
              setPlayState(true)
            }}/>
        </div>
          <div className='about-right' >
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>
                Embark on a transformative educational journey
                with our universtiys comprehensve education programs.
                Our cutting-edge curriculum is designed to empower students
                with the knowledge, skills, and experiences needed to excel 
                in the dynamic filed of education.
            </p>
             <p>
                Our cutting-edge curriculum is designed to empower students
                with the knowledge, skills, and experiences needed to excel 
                in the dynamic filed of education.
            </p>
            <p>
                with our universtiys comprehensve education programs.
                Our cutting-edge curriculum is designed to empower students
                with the knowledge, skills, and experiences needed to excel 
                in the dynamic filed of education.
            </p>
           
        </div>
    </div>
  )
}

export default About