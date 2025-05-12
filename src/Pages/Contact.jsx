import React from 'react'
import Layout from '../component/layout/Layout'
import contact from '../assets/images/contact.jpg'
import MyForm from '../component/layout/MyForm'

function Contact() {
    return (
        <>
            <div className={`h-screen w-full bg-cover text-center pb-10`}
                style={{ backgroundImage: `url(${contact})` }}>
            </div>

            <div className='container max-w-4xl mx-auto'>

                <div className='text-[30px] pr-8'>
                    <h1 className='pb-10'>Let's Make Magic!</h1>
                </div>
                <div className='pb-10 line-height-[20px]'>
                    <p> Are you a brand looking to tell your unique stories in the most beautiful way possible
                        , or are you looking to <br />
                        create dynamic, elegant, timeless or trendy portraits for the
                        discerning individual, whatever your style is, we <br />
                        work to make your dream come true</p>
                </div>
                <div>
                    <div>
                        <h1>Please fill out the contact form below and I'll be in touch shortly.</h1>
                        <MyForm />
                    </div>
                    <div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact;