import React from 'react'
import { BsClock } from 'react-icons/bs';
import AOS from 'aos';
import { useTranslation } from 'next-i18next';



const ChooseUS = () => {

  const { t } = useTranslation("home");

  const chooseUsData = [
    {
      text: "t",
      icon: <BsClock />,
      title: t('home.whyChooseUs.title1'),
      description: t('home.whyChooseUs.desc1'),
      link: "#",
    },
    {
      text: "i",
      icon: <BsClock />,
      title: t('home.whyChooseUs.title2'),
      description: t('home.whyChooseUs.desc2'),
      link: "#",
    },
    {
      text: "m",
      icon: <BsClock />,
      title: t('home.whyChooseUs.title3'),
      description: t('home.whyChooseUs.desc3'),
      link: "#",
    },
    {
      text: "e",
      icon: <BsClock />,
      title: t('home.whyChooseUs.title4'),
      description: t('home.whyChooseUs.desc4'),
      link: "#",
    },
  ]

  return <>
    <section className='choose-us' >
      <div className="sec_title">
        <h2 data-aos="fade-up" data-aos-duration={700} > {t('home.whyChooseUs.whyTo')} <span>{t('home.whyChooseUs.chooseUs')}</span> </h2>
      </div>
      <div className="row">
        {chooseUsData.map((card, idx) => {
          return <div key={idx} className="col-md-3 p-0 ">
            <div className="Card" data-aos="fade-up" data-aos-duration={idx * 400} >
              <div className="inner_card">
                {/* <span className='text' > {card.text} </span> */}
                <div className="icon_card">
                  {/* <span className='icon' > {card.icon} </span> */}
                </div>
                <h3>  {card.title}  </h3>
                <p> {card.description} </p>
              </div>
            </div>
          </div>
        })}

      </div>
    </section>
  </>
}

export default ChooseUS