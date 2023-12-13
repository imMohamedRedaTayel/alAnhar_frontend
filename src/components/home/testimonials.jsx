import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import AOS from 'aos';
import { useTranslation } from 'next-i18next';





const Testimonials = () => {

  const { t } = useTranslation("home");


    const testimonialsData = [
        {
            imgSrc: "/Image/Testimonials/1.webp",
            h4Text: t('home.testimonials.title1'),
            paragraph: [t('home.testimonials.desc1')],

            name: t('home.testimonials.name1'),
            span: t('home.testimonials.job1'),
        },
        {
            imgSrc: "/Image/Testimonials/1.webp",
            h4Text: t('home.testimonials.title1'),
            paragraph: [t('home.testimonials.desc1')],

            name: t('home.testimonials.name1'),
            span: t('home.testimonials.job1'),
        },
    ]

    return <>
        <section className='Testimonials' >
            <div className="container">
                <div className="sec_title">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 data-aos="fade-up" data-aos-duration={700} > {t('home.testimonials.client')} <span>{t('home.testimonials.testimonials')} </span>  </h2>
                        </div>
                        <div className="col-md-8">
                            <div className="text">
                                <p data-aos="fade-up" data-aos-duration={700} > {t('home.testimonials.testimonialsDesc')} </p>

                            </div>
                        </div>
                    </div>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay=
                    {{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                >

                    {testimonialsData.map((card, idx) => {
                        return <SwiperSlide key={idx} >
                            <div className="testimonial-card" data-aos="fade-up" data-aos-duration={idx * 800} >
                                <div className="inner_card">
                                    <div className="thumb">
                                        <img src={card.imgSrc} alt="humans" />
                                    </div>
                                    <h4> {card.h4Text} </h4>
                                    <p>
                                        {card.paragraph.map((text, i) => (
                                            <React.Fragment key={i}>
                                                {text}
                                                {i < card.paragraph.length - 1 && <br />}
                                            </React.Fragment>
                                        ))}
                                    </p>
                                    <div className="info_card">
                                        <h5 className='name' > {card.name} </h5>
                                        <span> {card.span} </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    })}


                </Swiper>

            </div>
        </section>
    </>
}

export default Testimonials