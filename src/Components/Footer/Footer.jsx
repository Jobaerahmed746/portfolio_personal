import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_top">
        <div className="footer_top_left">
            <h1>JOBAER AHMED.</h1>
            <p>I am a frontend developer from Dhaka, Bangladesh with 2 years of experience in multiple Language like React JS, Next JS and JavaScript.</p>
        </div>
        <div className="footer_top_right">
            <div className="footer_email_input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer_subscribe">
                Subscribe
            </div>
        </div>
      </div>
      <hr />
      <div className="footer_bottom">
        <p className='footer_bottom_left'>© 2024 Jobaer Ahmed. All rights reserved.</p>
        <div className="footer_bottom_right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
