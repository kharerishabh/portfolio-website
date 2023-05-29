import React, { useRef } from 'react';
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uh4io1i', 'template_wvn2w59', form.current, 'kkSgLt3tevs1PjHsa')
      
    e.target.reset()
    alert('Email send Successfully')
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email me</h4>
            <h5>at - rishabhkhare43@gmail.com</h5>
            <a href='mailto:rishabhkhare43@gmail.com' target='_blank'>Send Email</a>
          </article>
          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>97.....</h5>
            <a href='https://api.whatsapp.com/send?phone=+919792995998' target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='text' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>
        
      </div>
    </section>
  )
}

export default Contact