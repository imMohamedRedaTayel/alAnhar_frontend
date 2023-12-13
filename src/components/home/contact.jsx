import React from 'react'

import AOS from 'aos';
import { useTranslation } from 'next-i18next';


const Contact = () => {

  const { t } = useTranslation("home");


    return <>
        <section className='Contact' >
            <div className="container">
                <div className="sec_title">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 data-aos="fade-up" data-aos-duration={700} > {t('home.contactUs.contact')} <span>{t('home.contactUs.us')} </span>  </h2>
                        </div>
                        <div className="col-md-8">
                            <div className="text">
                                <p data-aos="fade-up" data-aos-duration={700} > {t('home.contactUs.contactUsDesc')} </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="inner_box" data-aos="fade-up" data-aos-duration={800} >
                            <div className="image_box">
                                <div className="image">
                                    <img src="/Image/contact/greenhouse.webp" alt="gardenarea" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="inner_col" data-aos="fade-up" data-aos-duration={800} >
                            <div className="text">{t('home.contactUs.formTitle')}</div>
                        </div>
                        <div className="contact_form" data-aos="fade-up" data-aos-duration={800} >
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form_group">
                                            <input type="text" placeholder={t('home.contactUs.name')} />
                                        </div>
                                        <div className="form_group">
                                            <input type="email" placeholder={t('home.contactUs.email')} />
                                        </div>
                                        <div className="form_group">
                                            <input type="number" placeholder={t('home.contactUs.phoneNo')} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form_group">
                                            <textarea placeholder={t('home.contactUs.message')}></textarea>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <button type='submit' className='btnSubmit' >{t('home.contactUs.submitNow')}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </>
}

export default Contact