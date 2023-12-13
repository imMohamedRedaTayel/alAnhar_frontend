import React from 'react'
import AOS from 'aos';
import { useTranslation } from 'next-i18next';

const Experience = () => {
    const { t } = useTranslation("home");

    return <>
        <section className='Experience' >
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="inner_colum" data-aos="fade-up" data-aos-duration={400} >
                            <div className="text"> <span> {t('about.descTitle')} </span> {t('about.desc')}
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className="image_box" data-aos="fade-up" data-aos-duration={500} >
                            <img src="/Image/aboutUs/team-4.webp" alt="gardenarea" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Experience