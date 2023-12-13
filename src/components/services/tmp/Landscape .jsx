import { useTranslation } from 'next-i18next';
import React from 'react'

const Landscape  = () => {

    const { t } = useTranslation("home");


    const landScapeData = [
        {
            h4Text: t('services.steelStructures.landscape.card1Title'),
            imgSrc1: '/Image/aboutUs/man-image.webp',
            imgSrc2: '/Image/aboutUs/man-image.webp',
        },
        {
            h4Text: t('services.steelStructures.landscape.card2Title'),
            imgSrc1: '/Image/aboutUs/man-image.webp',
            imgSrc2: '/Image/aboutUs/man-image.webp',
        },
    ]

    const Wateringnetwork = [
        {
            h4Text: t('services.steelStructures.landscape.card3Title'),
            imgSrc1: '/Image/aboutUs/man-image.webp',
            imgSrc2: '/Image/aboutUs/man-image.webp',
        },
        {
            h4Text: t('services.steelStructures.landscape.card4Title'),
            imgSrc1: '/Image/aboutUs/man-image.webp',
            imgSrc2: '/Image/aboutUs/man-image.webp',
        },
    ]

    const waterSystems = [
        {
            h4Text: t('services.steelStructures.landscape.card5Title'),
            imgSrc1: '/Image/aboutUs/man-image.webp',
            imgSrc2: '/Image/aboutUs/man-image.webp',
        },
        {
            h4Text: t('services.steelStructures.landscape.card6Title'),
            imgSrc1: '/Image/aboutUs/man-image.webp',
            imgSrc2: '/Image/aboutUs/man-image.webp',
        },
    ]

    const maintenance = [
        {
            h4Text: t('services.steelStructures.landscape.card7Title'),
            imgSrc1: '/Image/aboutUs/man-image.webp',
            imgSrc2: '/Image/aboutUs/man-image.webp',
        },
        {
            h4Text: t('services.steelStructures.landscape.card8Title'),
            imgSrc1: '/Image/aboutUs/man-image.webp',
            imgSrc2: '/Image/aboutUs/man-image.webp',
        },
    ]


    return <>

        <section className='landScape greenHouse' >
            <div className="container">

                <div className="sec_title">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 data-aos="fade-up" data-aos-duration={400} > {t('services.steelStructures.landscape.land')} <span> {t('services.steelStructures.landscape.scape')} </span>  </h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    { landScapeData.map( ( box , idx ) => { 
                        return <div className="col-md-6" key={idx} >
                        <div className="landscape_box">
                            <div className="inner_box">
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <div className="image_box" data-aos="fade-up" data-aos-duration={500} >
                                            <img src={ box.imgSrc1 } alt="gardenarea" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="image_box" data-aos="fade-up" data-aos-duration={500} >
                                            <img src={ box.imgSrc2 } alt="gardenarea" />
                                        </div>
                                    </div>
                                </div>
                                <h4> { box.h4Text } </h4>

                            </div>
                        </div>
                    </div>
                     } ) }
                </div>

                <div className="sec_title">
                    <div className="row">
                        <div className="col-md-4">
                        <h2 data-aos="fade-up" data-aos-duration={400} > {t('services.steelStructures.landscape.watering')} <span> {t('services.steelStructures.landscape.network')} </span>  </h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    { Wateringnetwork.map( ( box , idx ) => { 
                        return <div className="col-md-6" key={idx} >
                        <div className="landscape_box">
                            <div className="inner_box">
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <div className="image_box" data-aos="fade-up" data-aos-duration={500} >
                                            <img src={ box.imgSrc1 } alt="gardenarea" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="image_box" data-aos="fade-up" data-aos-duration={500} >
                                            <img src={ box.imgSrc2 } alt="gardenarea" />
                                        </div>
                                    </div>
                                </div>
                                <h4> { box.h4Text } </h4>
                            </div>
                        </div>
                    </div>
                     } ) }
                </div>

                <div className="sec_title">
                    <div className="row">
                        <div className="col-md-4">
                        <h2 data-aos="fade-up" data-aos-duration={400} > {t('services.steelStructures.landscape.water')} <span> {t('services.steelStructures.landscape.systems')} </span>  </h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    { waterSystems.map( ( box , idx ) => { 
                        return <div className="col-md-6" key={idx} >
                        <div className="landscape_box">
                            <div className="inner_box">
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <div className="image_box" data-aos="fade-up" data-aos-duration={500} >
                                            <img src={ box.imgSrc1 } alt="gardenarea" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="image_box" data-aos="fade-up" data-aos-duration={500} >
                                            <img src={ box.imgSrc2 } alt="gardenarea" />
                                        </div>
                                    </div>
                                </div>
                                <h4> { box.h4Text } </h4>
                            </div>
                        </div>
                    </div>
                     } ) }
                </div>

                <div className="sec_title">
                    <div className="row">
                        <div className="col-md-4">
                        <h2 data-aos="fade-up" data-aos-duration={400} > {t('services.steelStructures.landscape.main')} <span> {t('services.steelStructures.landscape.tenance')} </span>  </h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    { maintenance.map( ( box , idx ) => { 
                        return <div className="col-md-6" key={idx} >
                        <div className="landscape_box">
                            <div className="inner_box">
                                <div className="row mb-4 ">
                                    <div className="col-md-6">
                                        <div className="image_box" data-aos="fade-up" data-aos-duration={500} >
                                            <img src={ box.imgSrc1 } alt="gardenarea" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="image_box" data-aos="fade-up" data-aos-duration={500} >
                                            <img src={ box.imgSrc2 } alt="gardenarea" />
                                        </div>
                                    </div>
                                </div>
                                <h4> { box.h4Text } </h4>
                            </div>
                        </div>
                    </div>
                     } ) }
                </div>

            </div>

        </section>



    </>
}

export default Landscape 