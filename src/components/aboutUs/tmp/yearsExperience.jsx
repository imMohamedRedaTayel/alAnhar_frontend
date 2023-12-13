import React, { useEffect } from 'react'
import AOS from 'aos';
import { useTranslation } from 'next-i18next';

const YearsExperience = () => {

    const { t } = useTranslation("home");


    const years = [
        {
            span: t('about.mission'),
            title: t('about.missionDesc')
        },
        {
            span: t('about.vision'),
            title: t('about.visionDesc')
        },
        
    ]

    useEffect(() => {
        AOS.init({ disable: 'true' });
    }, []);


    return <>
        <section className='choose-us years' >
            <div className="container">
                <div className="row ">
                    {years.map((years, idx) => {
                        return <div className="col-md-6 count_box" key={idx}  >
                            <div className="inner" data-aos="fade-up" data-aos-duration={idx * 400} >
                                <div className="count_outer">
                                    <span> {years.span}  </span>
                                </div>
                                <div className="counter_title">
                                    {years.title}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    </>
}

export default YearsExperience