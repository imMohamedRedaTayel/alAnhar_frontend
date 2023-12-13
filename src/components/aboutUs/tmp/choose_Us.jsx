import { useTranslation } from 'next-i18next';
import React from 'react'

const Choose_Us = () => {

  const { t } = useTranslation("home");


  const chooseUsData = [
    {

      //   title: "Support for the Kingdom’s Vision 2030 ",
      description: t('about.chooseUs.desc'),
      link: "#",
    },
  ]

  return <>
    <section className='choose-us Managers ' >
      <div className="container">
      <div className="sec_title">
        <h2 data-aos="fade-up" data-aos-duration={700} > {t('about.chooseUs.general')} <span> {t('about.chooseUs.manager')} </span> </h2>
      </div>
      <div className="row align-items-center ">
        {chooseUsData.map((card, idx) => {
          return <div key={idx} className="col-md-8 p-0 ">
            <div className="Card" data-aos="fade-up" data-aos-duration={idx * 800} >
              <div className="inner_card">
                <p> {card.description} </p>
              </div>
            </div>
          </div>
        })}

        <div className="col-md-4 card_img ">
          <div className="image_box" data-aos="fade-up" data-aos-duration={500} >
            <img src="/Image/aboutUs/man-image.webp" alt="gardenarea" />
          </div>
        </div>

      </div>
      </div>
    </section>
  </>

}

export default Choose_Us