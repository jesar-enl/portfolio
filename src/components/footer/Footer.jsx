import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {ImTwitter} from 'react-icons/im'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">JESSE K</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank"><FaFacebookF/></a>
        <a href="https://instagram.com" target="_blank"><BsInstagram/></a>
        <a href="https://twitter.com" target="_blank"><ImTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jesse Kyambadde. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer