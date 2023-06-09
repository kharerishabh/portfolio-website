import React from 'react'
import './Footer.css'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Rishabh Khare</a>
      <ul className='permalinks'>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Skills</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://instagram.com'><FaInstagramSquare/></a>
        <a href='https://twitter.com'><BsTwitter/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Rishabh Khare | All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer