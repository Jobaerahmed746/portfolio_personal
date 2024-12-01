import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3e62f82b-11b8-4832-beda-9a205f51426f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact_title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact_section">
        <div className="contact_left">
            <h1>Let's Talk</h1>
            <p>Feel free to reach out for collaboration, inquiries, or just to connect! <br />I’m always open to discussing exciting projects and opportunities. <br />Let’s bring ideas to life together.</p>
            <div className="contact_details">
                <div className="contact_detail">
                    <img src={mail_icon} alt="" /> <p>jobaerahmed6705@gmail.com</p>
                </div>
                <div className="contact_detail">
                    <img src={call_icon} alt="" /> <p>01992-136705</p>
                </div>
                <div className="contact_detail">
                    <img src={location_icon} alt="" /> <p>Mirpur-01,Dhaka,Bangladesh</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className='contact_right'>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="text"  placeholder='Enter your email' name='email'/>
            <label htmlFor="">Write Your Message Here</label>
            <textarea name="" id="message"  rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact_submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
