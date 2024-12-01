import React, { useRef, useState } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {

  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      <h1>JOBAER  AHMED.</h1>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
         <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><a className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></a>{menu=="home"?<img src={underline} alt =''/>:<></>}</li>
        <li><a className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About me</p></a>{menu=="about"?<img src={underline} alt =''/>:<></>}</li>
        <li><a className='anchor-link' offset={50} href='#resume'><p onClick={()=>setMenu("resume")}>Resume</p></a>{menu=="resume"?<img src={underline} alt =''/>:<></>}</li>
        <li><a className='anchor-link' offset={50} href='#portfolio'><p onClick={()=>setMenu("portfolio")}>Portfolio</p></a>{menu=="portfolio"?<img src={underline} alt =''/>:<></>}</li>
        <li><a className='anchor-link'offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></a>{menu=="contact"?<img src={underline} alt =''/>:<></>}</li>
      </ul>
      <div className="nav-connect"> <a className='anchor-link'offset={50} href='#contact'>Connect With Me</a></div>

    </div>
  )
}

export default Navbar
