import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_47kqgox', 'template_lcekf7f', form.current, 'xhquH6xxgTFFwMLBu')
      
    e.target.reset()
  };
  return (
    <section id = 'contact'> 
    <h5>Get in touch</h5>

    <div className= "container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>hackerplanetgui@gmail.com</h5>
          <a href="mailto:hackerplanetgui@gmail.com" target = "_blank">Send a massage on Email</a>
        </article>
        <article className="contact__option">
          <BsMessenger className='contact__option-icon'/>
          <h4>Messanger</h4>
          <h5>Onlinesmit</h5>
          <a href="https://www.facebook.com/" target = "_blank">Send a massage on Messanger</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+919453569381</h5>
          <a href="https://api.whatsapp.com/send?phone=919453569381" target = "_blank">Send a massage on WhatsApp</a>
        </article>
      </div>
      <form ref = {form} onSubmit = {sendEmail} >
        <input type="text" name = 'name' placeholder='Your full name' required/>
        <input type="text" name='email' placeholder='Your full name' required />
        <textarea name='message' rows = '7' placeholder='Your full name' required> </textarea>
        <button className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default contact