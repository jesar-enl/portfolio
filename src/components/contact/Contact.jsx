import React, { useRef } from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsMessenger} from 'react-icons/bs'
import {FaWhatsapp} from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1n41gdk', 'template_926xy4b', form.current, 'OTYSdFkd2rkp9TOPs')
    
    e.target.reset()

  };

  return (
    <section id='contact' >
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* Contact options on the left */}
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jesarmarcin@gmail.com</h5>
            <a href="mailto:jesarmarcin@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Jesar Marcin</h5>
            <a href="https://m.me/kyambadde.jesse.7" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+256709866770</h5>
            <a href="https://api.whatsapp.com/send?phone+256709866770" target="_blank">Send a message</a>
          </article>
        </div>

        {/* Contact form on the right */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="10" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact