/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css';
import ME from '../../assets/second.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5> Experience</h5>
              <small>2+ Years</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Currently</h5>
              <small>Software Engineer @ Biz2Credit</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5> Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            I'm a highly skilled Full Stack Software Engineer with 1 year of experience in developing and deploying robust web applications. With expertise in JavaScript, TypeScript, AngularJS, React.js and Node.js, I have a proven track record of delivering high-quality, scalable software solutions.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section >

  )
}

export default About