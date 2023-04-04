import React from 'react'
import InstagramIcon from '@ant-design/icons/InstagramFilled';
import YoutubeIcon from '@ant-design/icons/YoutubeFilled';
import FacebookIcon from '@ant-design/icons/FacebookFilled';
import "../styles/Contact.css";

const Contact = () => {
    return (
        <>
            <div className='main'>
                <h1>Contact</h1>
                <p> Visit our Social media </p>
                <div className='socialMedia'>
                    <a href="https://instagram.com/themajesticstudio?igshid=YmMyMTA2M2Y="><InstagramIcon /> </a>
                    <a href="https://www.youtube.com/channel/UCph4uwFEvbNnwC8fss63hjA"><YoutubeIcon /></a>
                    <a href="https://www.facebook.com/harshal.deudkar"><FacebookIcon /></a>
                </div>
                <p>To Know more about Booking Process and Shoot availibility</p>
                <p> </p>
                <p> Message us on Whatsapp</p>
                </div>
                <div className='booking'>
                <button>Book Now</button>
                </div>
                
        </>
    )
}

export default Contact