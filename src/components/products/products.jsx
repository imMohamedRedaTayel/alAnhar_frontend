import { useRouter } from 'next/router';
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';


const Products = () => {


    const productData = [
        {
            imgSrc: "/Image/services/4.webp",
            h3Text: "water systems",
        },
        {
            imgSrc: "/Image/services/4.webp",
            h3Text: "watering network",
        },
        {
            imgSrc: "/Image/services/4.webp",
            h3Text: "Greenhouse supplies and equipments",

        },
        {
            imgSrc: "/Image/services/4.webp",
            h3Text: "Landscape and garden supplies and equipments",

        },
    ]


    return <>
        <section className='main_pages' >
            <div className="container">
                <div className="title_box">
                    <h1>Our Products</h1>
                </div>
                <div className="page">
                    <ul>
                        <li> <a href="/">Home</a> <IoIosArrowForward /> </li>
                        <li> Products </li>
                    </ul>
                </div>
            </div>
        </section>

        <div className="services">
            <div className="container">
                <div className="sec_title">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 data-aos="fade-up" data-aos-duration={400} > Our   <span>Product</span>  </h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {productData.map((pro, idx) => {
                        return <div className="col-md-6  mb-4" key={idx} >
                            <div className="product" data-aos="fade-up" data-aos-duration={idx * 800} >
                                <div className="image_box">
                                    <img src={pro.imgSrc} alt="gardenarea" />
                                </div>
                                <div className="content_box">
                                    <h3> {pro.h3Text.split(" ").slice(0, 2).join(" ")} </h3>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>

        </div>




    </>
}

export default Products