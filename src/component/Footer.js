import React from 'react';
import { Col, Row } from 'antd';
import InstagramIcon from '@ant-design/icons/InstagramFilled';
import YoutubeIcon from '@ant-design/icons/YoutubeFilled';
import FacebookIcon from '@ant-design/icons/FacebookFilled';
import "../styles/Footer.css";

function Footer() {
    return (

        <div className="footer">
            <div>
                <Row>
                    <Col span={7}>
                        <h6>Photography</h6>
                        <p>Wedding</p>
                        <p> Engagement</p>
                        <p>Pre-wedding </p>
                        <p>Potraits</p>
                    </Col>
                    <Col span={10}>
                        <h6>Contact us</h6>
                        <div>
                            <p className="bold">Phone number:</p>
                            <div className="phone">
                            <p>Office - +91 8999946164 </p>
                            <p>Assistant- +91 70583 30406</p>
                            </div>
                            
                        </div>
                        <div>
                            <div className="bold">Email id: </div>
                            <p> hyerulkar@gmail.com </p>
                        </div>
                    </Col>
                    <Col span={7}>
                        <h6>Location</h6>
                        <p>Plot No, 38, New Mankapur Rd, New Mankapur, Nagpur, Maharashtra-440030, India </p>
                    </Col>
                </Row>
            </div>

            <div className="socialMedia">
                <a href="https://instagram.com/themajesticstudio?igshid=YmMyMTA2M2Y="><InstagramIcon /> </a>
                <a href="https://www.youtube.com/channel/UCph4uwFEvbNnwC8fss63hjA"><YoutubeIcon /></a>
                <a href="https://www.facebook.com/harshal.deudkar"><FacebookIcon /></a>
            </div>
            <p> &copy; 2023 TheMajesticStudio.com</p>
        </div>)
}

export default Footer;