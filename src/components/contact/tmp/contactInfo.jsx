import React from 'react'
import { BiSolidPhoneCall } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';



const ContactInfo = () => {
    return <>
        <section className='contact_info' >
            <div className="container">
                <div className="inner_container">
                    <div className="row">
                        <div className="col-md-5 address">
                            <div className="inner_colum">
                                <div className="box">
                                    <div className="content">
                                        <h5>Visit us on</h5>
                                        <div className="text">
                                            <h6>
                                            7896 Salam Street - 2512 Al-Dubeyah District <br />
                                            Kingdom of Saudi Arabia,  <br />
                                            Riyadh. <br />
                                            </h6>

                                            <div className="link">
                                                <div> Landline & Fax
                                                    <a href='#'> + 00966114111552  </a>
                                                </div>
                                                <div> postal code
                                                    <a href='#'>  <span> 12651 </span> </a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 address">
                            <div className="inner_colum">
                                <div className="row fix">
                                    <div className="col-md-6">
                                        <div className="contact_info">
                                            <h5> <BiSolidPhoneCall /> Phone </h5>
                                            <p> +09966544966177 <br /> +00966508101898 </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="contact_info">
                                            <h5> <AiOutlineMail /> Email </h5>
                                            <p> <a href="mailto:info@alanhar.net"> info@alanhar.net</a> </p>
                                        </div>
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

export default ContactInfo