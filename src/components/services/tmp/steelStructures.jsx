import React from 'react'
import { PiFlowerTulipLight } from 'react-icons/pi';
import AOS from 'aos';
import { useTranslation } from 'next-i18next';



const SteelStructures = () => {
    
    const { t } = useTranslation("home");


    const SteelStructuresData = [
        {
            imgSrc: '/Image/services/1.webp',
            h3Text: [t('services.steelStructures.steelStructures.regularGreenhouse'), t('services.steelStructures.steelStructures.structures'), t('services.steelStructures.steelStructures.inFormTunnels')]
        },
        {
            imgSrc: '/Image/services/2.webp',
            h3Text: [t('services.steelStructures.steelStructures.airConditioned'), t('services.steelStructures.steelStructures.structuresACFGACPL'), t('services.steelStructures.steelStructures.structuresACFGs')]
        },
        {
            imgSrc: '/Image/services/3.webp',
            h3Text: [t('services.steelStructures.steelStructures.listofSides'), t('services.steelStructures.steelStructures.multiArched'), t('services.steelStructures.steelStructures.hallStructures')]
        },
        {
            imgSrc: '/Image/services/2.webp',
            h3Text: [t('services.steelStructures.steelStructures.archedCeilings'), t('services.steelStructures.steelStructures.communication'), t('services.steelStructures.steelStructures.trussRoofs')]
        },
        {
            imgSrc: '/Image/services/1.webp',
            h3Text: [t('services.steelStructures.steelStructures.regularGreenhouse'), t('services.steelStructures.steelStructures.structures'), t('services.steelStructures.steelStructures.inFormTunnels')]
        },
    ]

    const SteelStructuresDataImported =[
        {
            imgSrc: '/Image/services/2.webp',
            h3Text: [t('services.steelStructures.importedData.multiArchedAgricultural')]
        },
        {
            imgSrc: '/Image/services/3.webp',
            h3Text: [t('services.steelStructures.importedData.multiUnitagriculturalHall')]
        },
    ]


    return <>
        <section className='services SteelStructures'>
            <div className="container">
                <div className="sec_title">
                    <div className="row">
                        <div className="col">
                            <h2 data-aos="fade-up" data-aos-duration={400} > {t('services.steelStructures.steelStructuresTitle')} <span>{t('services.steelStructures.greenhouses')}</span>  </h2>
                            <ul data-aos="fade-up" data-aos-duration={500}>
                                <li> {t('services.steelStructures.ironStructures')}  <br /> <span> {t('services.steelStructures.saudiIndustry')} </span> </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center justify-content-center ">
                    {SteelStructuresData.map((box, idx) => {
                        return <div className="col-md-4" key={idx} >
                            <div className="SteelStructures_box">
                                <div className="inner_box">
                                    <div className="image_box"data-aos="fade-up" data-aos-duration={500}>
                                        <img src={box.imgSrc} alt="gardenarea" />
                                    </div>
                                    <div className="Caption_box">
                                        <h3>
                                            {box.h3Text.map((text, i) => (
                                                <React.Fragment key={i}>
                                                    {text}
                                                    {i < box.h3Text.length - 1 && <br />}
                                                </React.Fragment>
                                            ))}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

                <div className="sec_title">
                    <div className="row">
                        <div className="col">
                            <ul  >
                            <li data-aos="fade-up" data-aos-duration={500}> {t('services.steelStructures.ironStructures')}  <br /> <span> {t('services.steelStructures.saudiIndustry')} </span> </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center ">
                    {SteelStructuresDataImported.map((box, idx) => {
                        return <div className="col-md-4" key={idx} >
                            <div className="SteelStructures_box">
                                <div className="inner_box">
                                    <div className="image_box" data-aos="fade-up" data-aos-duration={500} >
                                        <img src={box.imgSrc} alt="gardenarea" />
                                    </div>
                                    <div className="Caption_box">
                                        <h3>
                                            {box.h3Text.map((text, i) => (
                                                <React.Fragment key={i}>
                                                    {text}
                                                    {i < box.h3Text.length - 1 && <br />}
                                                </React.Fragment>
                                            ))}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

            </div>
        </section >
    </>
}

export default SteelStructures