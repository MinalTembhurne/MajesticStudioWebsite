import React from 'react';
import "../styles/Home.css";
import { Card, Col, Row, } from 'antd';
import ParallaxVideo from "../pages/Parallax-video.js";
import FourthContainer from "../pages/Fourth-container";
import Review from "../pages/Review";

const { Meta } = Card;


function Home() {
    return (
        <div className="home">
            <ParallaxVideo />
            <div className="card-container">
                <Row>
                    <Col span={7}>
                        <Card className="custom-card"
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card></Col>
                    <Col span={10}><h1 className="description">Relive your special day again and again with my exceptional photos. I look for those special personal moments, making sure everyone shines. Since 2015, I've been capturing beautiful memories and I'd love to capture yours. </h1></Col>
                    <Col span={7} className="float">
                        <Card className="custom-card"
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card></Col>
                </Row>
            </div>
            <div className="third-container">
                <div className="parallax-img parallax" >
                    {/* <div className="hey">
                        <h1> Hey, I'm </h1> <h1 className='majestic'>The Majestic Studio ,</h1><br />
                        <h1 className='Wheel'>your new third wheel.</h1>
                    </div> */}
                </div>
            </div>
            <FourthContainer />
            <Review />
        </div>

    )
}

export default Home;