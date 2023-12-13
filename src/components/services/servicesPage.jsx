import React, { useEffect } from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import AOS from 'aos';
import GreenHouse from './tmp/greenHouse';
import SteelStructures from './tmp/steelStructures';
import Landscape from './tmp/Landscape ';
import { useTranslation } from 'next-i18next';





const ServicesPage = () => {

    const { t } = useTranslation("home");


    return <>

        <section className='main_pages' >
            <div className="container">
                <div className="title_box">
                    <h1> {t('services.title')} </h1>
                </div>
                <div className="page">
                    <ul>
                        <li> <a href="/">Home</a> <IoIosArrowForward /> </li>
                        <li> Services </li>
                    </ul>
                </div>
            </div>
        </section>
        <GreenHouse/>
        <SteelStructures/>
        <Landscape/>

    </>
}

export default ServicesPage