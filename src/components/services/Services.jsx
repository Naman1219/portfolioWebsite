import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Applications</h3>
          </div>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon' />
              <p>Reviewing and debugging code using Chrome Dev Tools.</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>Development of cutting edge Web Applications</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>Troubleshooting problems with performance or UI/UX.</p>
            </li>
          </ul>
        </article>
        {/* End of WEB APPLICATION */}

        <article className='service'>
          <div className='service__head'>
            <h3>Backend Development</h3>
          </div>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon' />
              <p>Designing and Integrating Api from scratch following REST</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>Debugging and Fixing existing code using version control systems</p>
            </li>


            <li><BiCheck className='service__list-icon' />
              <p>Api Integration using React Redux</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>Collaborating with cross-functional teams, to ensure seamless integration of CI/CD pipelines.</p>
            </li>
          </ul>
        </article>
        {/* End of Backend Development*/}

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon' />
              <p>Responsive designs adaptable to all kind of devices.</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>User centered view of development.</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>Continuous upgradations for existing systems.</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}

      </div>
    </section>
  )
}

export default Services