import React from 'react'
import AOS from 'aos';
import { useTranslation } from 'next-i18next';



const Map = () => {
    const { t } = useTranslation("home");

    return <>
        <section className='Map' >
            <div className="container">
                <div className="info_colum"  >
                    <div className="inerr_colum" data-aos="fade-up" data-aos-duration={700} >
                        <div className="sec_title">
                            <h2>{t('home.map.contactDetails')}</h2>
                        </div>
                        <div className="content">
                            <h5> {t('home.map.visitUs')} </h5>
                            <div className="text">
                            {t('home.map.contactDetails')} <br />
                            {t('home.map.kingdom')}  <br />
                            {t('home.map.riyadh')} <br />

                                <div className="link">
                                    <div> {t('home.map.l§andline')}
                                        <a href='#'> + 00966114111552  </a>
                                    </div>
                                    <div> {t('home.map.postalCode')}
                                        <a href='#'>  <span> 12651 </span> </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Map