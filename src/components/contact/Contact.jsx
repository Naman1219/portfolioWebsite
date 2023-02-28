import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    //('service id', 'template id', 'Public Key');
    emailjs.sendForm('service_5ndasql', 'template_yrdiqot', form.current, 'ND3fOzL42cW0fNoyC')
      .then((result) => {
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <a href='mailto:guptanaman1995@gmail.com' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <a href='https://www.instagram.com/_namman_' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <a href='https://api.whatsapp.com/send/?phone=918979531766' target='_blank'>Send a message</a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="6" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact