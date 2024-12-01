import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I am Jobaer Ahmed,</span> Frontend Developer in Bangladesh</h1>
      <p>I proficient in HTML, CSS, JavaScript and React JS with a strong understanding of responsive design and cross-browser compatibility. </p>
      <div className="hero-action">
        <div className="hero-connect"> <a className='anchor-link'offset={50} href='#contact'>Connect With Me</a></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
