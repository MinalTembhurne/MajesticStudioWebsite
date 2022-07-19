import React from 'react';
import { Col, Row } from 'antd';
import "../styles/Review.css";

const Review = () => (
    <div className='review'>
        <div className='review-title'>
            <h2>What past clients are saying</h2>
            <h1>Kind Words</h1>
        </div>
        <div className='review-grid'>
            <Row>
                <Col span={5} offset={1}>
                </Col>
                <Col span={6}>
                    <img src="https://static.wixstatic.com/media/30a214_3b76f63190664d4c899df23d6624ae72~mv2.jpg/v1/crop/x_208,y_0,w_5196,h_3741/fill/w_1000,h_720,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PICS-A%20(52).jpg" alt="review1" />
                    <div class="talk-bubble">
                        <div class="talktext">
                            <p>CSS Talk Bubble configured by classes. Defaults to square shape, no triangle. Height is auto-adjusting to the height of the text.</p>
                        </div>
                    </div>
                </Col>
                <Col span={5} offset={1}>
                    <h6>hieeeeeeee</h6>
                </Col>
                <Col span={6}>
                    <img src="https://static.wixstatic.com/media/30a214_993d171831c24c52819a7c2557fef15b~mv2.jpg/v1/crop/x_383,y_0,w_657,h_961/fill/w_642,h_940,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/17887588226348292.jpg" alt="review2" />
                </Col>
            </Row>
            <Row>
                <Col span={6} offset={1}>
                    <img src="https://static.wixstatic.com/media/30a214_964e5b16669b4695953b1df7595acfdb~mv2.jpg/v1/crop/x_1504,y_54,w_2121,h_3183/fill/w_608,h_880,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PICS-Shantaya%20and%20Al-0488.jpg" alt="review3" />
                </Col>
                <Col span={5}>
                    <h6>hieeeeeeee</h6>
                </Col>
                <Col span={6}>
                    <img src="https://static.wixstatic.com/media/30a214_f4cfb07bc7b3445998e05131428866dc~mv2.jpg/v1/crop/x_720,y_39,w_5030,h_3403/fill/w_1040,h_700,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PICS-Jackie%20and%20Diana-7040.jpg" alt="review4" />
                </Col>
                <Col span={5} offset={1}>
                    <h6>hieeeeeeee</h6>
                </Col>
            </Row>
        </div>
    </div>
);


export default Review