import React, { useEffect } from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import ContactInfo from './tmp/contactInfo';
import ContactForm from './tmp/contactForm';
import AOS from 'aos';



const ContactPage = () => {

  useEffect(() => {
    AOS.init({ disable: 'true' });
}, []);

  return <>

    <section className='main_pages' >
      <div className="container">
        <div className="title_box">
          <h1> Get Touch With Us </h1>
        </div>
        <div className="page">
          <ul>
            <li> <a href="/">Home</a> <IoIosArrowForward /> </li>
            <li> Contact </li>
          </ul>
        </div>
      </div>
    </section>
    <ContactInfo />
    <ContactForm />

  </>
}

export default ContactPage