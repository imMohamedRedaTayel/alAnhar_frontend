import { useTranslation } from 'next-i18next';
import React from 'react'

const GreenHouse = () => {

    const { t } = useTranslation("home");

    const greenHouseData = [
        {
            h4Text: t('services.greenHouse.card1'),
            paragraph: t('services.greenHouse.cardDesc1'),
            imgSrc1: '/Image/aboutUs/man-image.webp',
            imgSrc2: '/Image/aboutUs/man-image.webp',
        },
        {
            h4Text: t('services.greenHouse.card2'),
            paragraph: t('services.greenHouse.cardDesc2'),
            imgSrc1: '/Image/aboutUs/man-image.webp',
            imgSrc2: '/Image/aboutUs/man-image.webp',
        },
        {
            h4Text: t('services.greenHouse.card3'),
            paragraph: t('services.greenHouse.cardDesc3'),
            imgSrc1: '/Image/aboutUs/man-image.webp',
            imgSrc2: '/Image/aboutUs/man-image.webp',
        },
        {
            h4Text: t('services.greenHouse.card4'),
            paragraph: t('services.greenHouse.cardDesc4'),
            imgSrc1: '/Image/aboutUs/man-image.webp',
            imgSrc2: '/Image/aboutUs/man-image.webp',
        },
        {
            h4Text: t('services.greenHouse.card5'),
            paragraph: t('services.greenHouse.cardDesc5'),
            imgSrc1: '/Image/aboutUs/man-image.webp',
            imgSrc2: '/Image/aboutUs/man-image.webp',
        },
        {
            h4Text: t('services.greenHouse.card6'),
            paragraph: t('services.greenHouse.cardDesc6'),
            imgSrc1: '/Image/aboutUs/man-image.webp',
            imgSrc2: '/Image/aboutUs/man-image.webp',
        },

    ]


    return <>

        <section className='greenHouse' >
            <div className="container">
                <div className="sec_title">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 data-aos="fade-up" data-aos-duration={400} > {t('services.green')}  <span>{t('services.house')} </span>  </h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {greenHouseData.map((box, idx) => {
                        return <div className="col-md-4" key={idx} >
                            <div className="greenHouse_box">
                                <div className="inner_box">

                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <div className="image_box" data-aos="fade-up" data-aos-duration={500} >
                                                <img src={box.imgSrc1} alt="gardenarea" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="image_box" data-aos="fade-up" data-aos-duration={500} >
                                                <img src={box.imgSrc2} alt="gardenarea" />
                                            </div>
                                        </div>
                                    </div>
                                    <h4> {box.h4Text} </h4>
                                    <p>  {box.paragraph} </p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

            </div>

        </section>



    </>
}

export default GreenHouse