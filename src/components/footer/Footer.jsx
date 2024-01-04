import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { ImFacebook2 } from 'react-icons/im';


const Footer = () => {
  return (
    <footer>
      <a href='#' className="footer__logo">Naman Gupta</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://linkedin.com/in/naman12' target='_blank' rel="noopener noreferrer"><BsLinkedin /></a>
        <a href='https://instagram.com/_namman_' target='_blank' rel="noopener noreferrer"><GrInstagram /></a>
        <a href='https://www.facebook.com/profile.php?id=100003347086523' target='_blank' rel="noopener noreferrer"><ImFacebook2 /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; NAMAN GUPTA. All rights Reserved</small>
      </div>

    </footer >
  )
}

export default Footer