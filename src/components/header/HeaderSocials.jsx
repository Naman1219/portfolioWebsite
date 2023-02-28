import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com/in/naman12" target={"_blank"}><BsLinkedin /></a>
      <a href="https://github.com/Naman1219" target={"_blank"}><FaGithub /></a>
      <a href="https://leetcode.com/namman12" target={"_blank"}><SiLeetcode /></a>
    </div>
  )
}

export default HeaderSocials