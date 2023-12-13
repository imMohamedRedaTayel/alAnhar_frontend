import React, { useEffect } from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import Experience from './tmp/experience';
import YearsExperience from './tmp/yearsExperience';
import ChooseUS from '../home/chooseUS';
import ContactUs from './tmp/contactUs';
import { useRouter } from 'next/router';
import AOS from 'aos';
import Choose_Us from './tmp/choose_Us';
import { useTranslation } from 'next-i18next';

const AboutusPage = () => {

    
    const { t } = useTranslation("home");

    const router = useRouter()

    useEffect(() => {
        AOS.init({ disable: 'true' });
    }, []);

    return <>
        <section className='main_pages' >
            <div className="container">
                <div className="title_box">
                    <h1> {t('about.aboutTitle')} </h1>
                </div>
                <div className="page">
                    <ul>
                        <li> <a href="/">Home</a> <IoIosArrowForward /> </li>
                        <li> About Us </li>
                    </ul>
                </div>
            </div>
        </section>
        <Experience />
        <YearsExperience />
        <ContactUs />
        <Choose_Us/>
    </>


}

export default AboutusPage