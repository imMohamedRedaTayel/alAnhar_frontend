import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Navigation, Autoplay } from 'swiper/modules';
import { FaBook } from 'react-icons/fa';
import { useTranslation } from 'next-i18next'





import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';



const Hero = () => {

    const { t } = useTranslation('home')

    const slidesData = [
        {
            imgSrc: "/Image/hero/1.webp",
            h2Text: [ t("home.hero.provideServices"), t("home.hero.waterAgricultural")],
            h4Text: t('home.hero.supportDesc'),
        },
        {
            imgSrc: "/Image/hero/2.webp",
            h2Text: [t("home.hero.provideServices"), t("home.hero.waterAgricultural")],
            h4Text: t('home.hero.supportDesc'),
        },
        {
            imgSrc: "/Image/hero/3.webp",
            h2Text: [t("home.hero.provideServices"), t("home.hero.waterAgricultural")],
            h4Text: t('home.hero.supportDesc'),
        },
    ];


    return <>
        <section className='hero' >
            <Swiper
                modules={[Pagination, EffectFade, Navigation, Autoplay]}
                spaceBetween={30}
                effect={'fade'}
                slidesPerView={2}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay=
                {{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
            >

                {slidesData.map((slide, idx) => {
                    return <SwiperSlide key={idx} >
                        <div className="slide_item">
                            <img src={slide.imgSrc} alt="gardenarea" />
                            <div className="container">
                                <div className="content_item"  >
                                    <h2>
                                        {slide.h2Text.map((text, i) => (
                                            <React.Fragment key={i}>
                                                {text}
                                                {i < slide.h2Text.length - 1 && <br />}
                                            </React.Fragment>
                                        ))}
                                    </h2>
                                    <h4>
                                        {slide.h4Text}
                                    </h4>
                                    <div className="link_item">
                                        <a href="#"> {t('home.hero.contactUsBtn')} </a>
                                        <a href="#"> <FaBook /> {t('home.hero.downloadBtn')} </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                })}

            </Swiper>

        </section>
    </>
}

export default Hero