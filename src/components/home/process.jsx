import React, { useState } from 'react'
import { PiFlowerTulipLight } from 'react-icons/pi';
import AOS from 'aos';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';



const Process = () => {

  const { t } = useTranslation("home");


  const [show, setShow] = useState(false)
  const handleShow = () => setShow(false)
  const handleHide = () => setShow(false)
  const processCard = [
    {
      title: t('home.process.title1'),
    },
    {
      title: t('home.process.title2'),
    },
    {
      title: t('home.process.title3'),
    },
    {
      title: t('home.process.title4'),
    },
  ]

  return <>
    <section className='Process' >
      <div className="container">
        <div className="sec_title">
          <h2 data-aos="fade-up" data-aos-duration={700} > {t('home.process.ourWork')} <span>{t('home.process.process')} </span> </h2>
        </div>

        <div className="row">
          {processCard.map((process, idx) => {
            return <div className="col-md-3 mb-3 " key={idx} >
              <div className="process_card  " data-aos="fade-up" data-aos-duration={idx * 400} >
                <div className="inner_card">
                  <span className='count' > {idx + 1} </span>
                  <h4> <a href="#"> {process.title} </a> </h4>
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

export default Process