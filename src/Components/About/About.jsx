import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img2.png'

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>As a Front-End Developer with a passion for crafting intuitive and visually appealing user interfaces. I proficient in HTML, CSS, JavaScript and React JS with a strong understanding of responsive design and cross-browser compatibility. </p>
                <p>I'm continuously learning and exploring emerging technologies to stay at the forefront of front-end development also learning about back-end development.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p> <hr style={{width:"90%"}} />
                </div>
                <div className="about-skill">
                    <p>JavaScript</p> <hr style={{width:"70%"}} />
                </div>
                <div className="about-skill">
                    <p>React JS</p> <hr style={{width:"60%"}} />
                </div>
                <div className="about-skill">
                    <p>Next JS</p> <hr style={{width:"50%"}} />
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="achievment">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="achievment">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="achievment">
            <h1>10+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
