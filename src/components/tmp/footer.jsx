import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';
import { IoIosArrowDropup } from 'react-icons/io';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineAttachEmail } from 'react-icons/md';
import AOS from 'aos';
import { useTranslation } from 'next-i18next';









const Footer = () => {

  const { t } = useTranslation("home");


  function scrollToTop() {
    const scrollToTopAnimation = () => {
      const currentPosition = window.scrollY;
      const targetPosition = 0;
      const duration = 3000;
      const startTime = performance.now();

      function scrollStep(timestamp) {
        const timeElapsed = timestamp - startTime;
        const scrollProgress = Math.min(timeElapsed / duration, 1);
        window.scrollTo(0, currentPosition - (currentPosition * scrollProgress));

        if (timeElapsed < duration) {
          requestAnimationFrame(scrollStep);
        } else {
          window.scrollTo(0, targetPosition);
        }
      }
      requestAnimationFrame(scrollStep);
    };

    scrollToTopAnimation();
  }




  return <>
    <section className='Footer' >
      <div className="container">
        <div className="footer_top">
          <div className="top_right  " data-aos="fade-up" data-aos-duration={700} >
            <div className="Scroll " onClick={scrollToTop} >  <IoIosArrowDropup />  <span> {t('footer.toTop')} </span> </div>
          </div>
        </div>

        <div className="footer_upper">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-widget" data-aos="fade-up" data-aos-duration={800} >
                <div className="logo">
                  <a href="#"> <img src="/Image/footer/footer-logo .webp" alt="logo" /> </a>
                </div>
                <div className="text"> {t('footer.desc')} </div>
                <div className="footer_details">
                  <ul>
                    <li> <a href="#"> <FaFacebookF /> </a> </li>
                    <li> <a href="#"> <BiLogoLinkedin /> </a> </li>
                    <li> <a href="#">  <AiOutlineTwitter /> </a> </li>
                    <li> <a href="#"> <FaInstagram /> </a> </li>
                  </ul>
                </div>
                <div className="call_button">
                  <div className='email' >
                    <div className='d-flex align-items-center ' >
                      <FiPhoneCall />
                      <div>
                        <span>+09966544966177</span>
                        <span>+00966508101898</span>
                      </div>
                    </div>
                    <div className='d-flex flex-column ' >
                      <h6>{t('footer.sendToUs')}</h6>
                      <li> <a href="mailto:info@alanhar.net"> <MdOutlineAttachEmail /> info@alanhar.net </a> </li>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="col-md-6">
              <div className="footer_links" data-aos="fade-up" data-aos-duration={800} >
                <div className="title">
                  <h2> {t('footer.usefullLinks')} </h2>
                </div>
                <div className="content">
                  <div className="row">
                    <div className="col-md-6">
                      <ul className='footer_list' >
                        <li> <a href="#"> About Us </a> </li>
                        <li> <a href="#"> Our Projects </a> </li>
                        <li> <a href="#"> Testimonials </a> </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className='footer_list' >
                        <li> <a href="#"> Our Services </a> </li>
                        <li> <a href="#"> Why Choose Us </a> </li>
                        <li> <a href="#"> Contact Us </a> </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>





          </div>
        </div>

        <div className="copyright-text">
        {t('footer.copyRight')}
          <a href="#"> {t('footer.siteName')} </a>
        </div>

      </div>
    </section>
  </>
}

export default Footer