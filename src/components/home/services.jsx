import React, { useEffect } from 'react'
import { PiFlowerTulipLight } from 'react-icons/pi';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'next-i18next';


const Services = () => {

    const { t } = useTranslation("home");

    useEffect(() => {
        AOS.init({ disable: 'true' });
    }, []);



    const servicesData = [
        {
            imgSrc: "/Image/services/1.webp",
            link: "#",
            caption: t('home.services.service1'),
        },
        {
            imgSrc: "/Image/services/2.webp",
            link: "#",
            caption: t('home.services.service2'),
        },
        {
            imgSrc: "/Image/services/2.webp",
            link: "#",
            caption: t('home.services.service3'),
        },
        {
            imgSrc: "/Image/services/2.webp",
            link: "#",
            caption: t('home.services.service4'),
        },
        {
            imgSrc: "/Image/services/2.webp",
            link: "#",
            caption: t('home.services.service5'),
        },
        {
            imgSrc: "/Image/services/2.webp",
            link: "#",
            caption: t('home.services.service6'),
        },



    ];

    const productData = [
        {
            imgSrc: "/Image/services/4.webp",
            h3Text: t('home.services.product1'),
        },
        {
            imgSrc: "/Image/services/4.webp",
            h3Text: t('home.services.product2'),
        },
        {
            imgSrc: "/Image/services/4.webp",
            h3Text: t('home.services.product3'),

        },
        {
            imgSrc: "/Image/services/4.webp",
            h3Text: t('home.services.product4'),
        },
    ]

    return <>
        <section className='services' >
            <div className="container">

                <div className="sec_title">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 data-aos="fade-up" data-aos-duration={400} > {t('home.services.our')} <span>{t('home.services.services')}</span>  </h2>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center ">
                    {servicesData.map((service, index) => {
                        return <div className="col-md-4" key={index} >
                            <div className="services_box" data-aos="fade-up" data-aos-duration={index * 400} >
                                <div className="inner_box" >
                                    <div className="image_box">
                                        <img src={service.imgSrc} alt="gardenarea" />
                                    </div>
                                    <div className="Caption_box">
                                        <h3>
                                             {service.caption} 
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

                <div className="sec_title">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 data-aos="fade-up" data-aos-duration={400} > {t('home.services.our')} <span>{t('home.services.product')}</span> </h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {productData.map((pro, idx) => {
                        return <div className="col-md-3 mb-3 " key={idx} >
                            <div className="product" data-aos="fade-up" data-aos-duration={idx * 400} >
                                <div className="image_box">
                                    <img src={pro.imgSrc} alt="gardenarea" />
                                </div>
                                <div className="content_box">
                                    <h3> {pro.h3Text.split(" ").slice(0, 2).join(" ")} </h3>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

            </div>
        </section>
    </>
}

export default Services