import React, { useState } from 'react'
import AOS from 'aos';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';


const ContactUs = () => {

  const { t } = useTranslation("home");


    const [show, setShow] = useState(false)
    const handleShow = () => setShow(false)
    const handleHide = () => setShow(false)
    const processCard = [
      {
        h3Text:t('about.goals.process1'),
        title:t('about.goals.processDesc1'),        
      },
      {
        h3Text:t('about.goals.process2'),
        title:t('about.goals.processDesc2'),        
      },
      {
        h3Text:t('about.goals.process3'),
        title:t('about.goals.processDesc3'),        
      },
      {
        h3Text:t('about.goals.process4'),
        title:t('about.goals.processDesc4'),        
      },
      {
        h3Text:t('about.goals.process5'),
        title:t('about.goals.processDesc5'),        
      },
      {
        h3Text:t('about.goals.process6'),
        title:t('about.goals.processDesc6'),        
      },
      {
        h3Text:t('about.goals.process7'),
        title:t('about.goals.processDesc7'),        
      },
      {
        h3Text:t('about.goals.process8'),
        title:t('about.goals.processDesc8'),        
      },
    ]
  
    return <>
      <section className='Process' >
        <div className="container">
          <div className="sec_title">
            <h2 data-aos="fade-up" data-aos-duration={700} > {t('about.goals.goals')}  </h2>
          </div>
  
          <div className="row">
            {processCard.map((process, idx) => {
              return <div className="col-md-3 mb-3 " key={idx} >
                <div className="process_card  " data-aos="fade-up" data-aos-duration={idx * 800} >
                  <div className="inner_card">
                    <span className='count' > {idx + 1} </span>
                    <h3> { process.h3Text } </h3>
                    {/* <h4> <a href="#"> {process.title} </a> </h4> */}

                    <button onClick={() => setShow(process)}> {t('home.process.showMore')} </button>
                  </div>
                </div>
              </div>
            })}
          </div>
  
        </div>
      </section>
      <Modal centered show={show} onHide={handleHide}>
        <Modal.Body>
          <p>{show.title}</p>
        </Modal.Body>
      </Modal>
    </>

}

export default ContactUs