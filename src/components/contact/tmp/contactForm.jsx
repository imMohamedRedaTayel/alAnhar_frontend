import React from 'react'

const ContactForm = () => {
    return <section className='ContactForm' >
        <div className="container">
            <div className="title">
                <h2> Send Us a <span>Message</span> </h2>
            </div>
            <div className="contact_form">
                <form>
                    <div className="row">
                        <div className="col-md-4 form_group ">
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className="col-md-4 form_group ">
                            <input type="email" placeholder='Email' />
                        </div>
                        <div className="col-md-4 form_group ">
                            <input type="text" placeholder='Phone' />
                        </div>
                        <div className="col-md-12 form_group ">
                            <textarea type="text" placeholder='Your Needs...' />
                        </div>
                        <div className="form_group col-md-12 text-center  ">
                            <button>Submit Now</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
}

export default ContactForm