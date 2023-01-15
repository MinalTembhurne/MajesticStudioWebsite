import React from 'react';
import "../styles/Home.css";
import { Card, Col, Row, } from 'antd';
import ParallaxVideo from "./Parallax-video.js";
import FourthContainer from "./Fourth-container";
import Review from "./Review";
import About from './About';


// const { Meta } = Card;


function Home() {
    return (
        <div className="home">
            <ParallaxVideo />
            <div className="card-container">
                <Row>
                    <Col span={10} className="description"><h1>Welcome to<br />THE MAJESTIC STUDIO</h1><h3 >Relive your special day again and again with my exceptional photos. I look for those special personal moments, making sure everyone shines. Since 2015, I've been capturing beautiful memories and I'd love to capture yours. </h3></Col>
                    <Col span={14} className="float">
                        <Card className="custom-card"
                            style={{
                                width: 600,
                            }}
                            cover={<img alt="example" src="https://i0.wp.com/www.habkorea.net/wp-content/uploads/2020/02/The-Face-Studio-sample-19.jpg?resize=800%2C533&ssl=1" />}
                        >
                            {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
                        </Card></Col>
                </Row>
            </div>
            <div className="third-container">
                <div className="parallax-img parallax" >
                    <div className="hey">
                        <h1> Capturing your <br/>  <div className='majestic2'>majestic</div> <br/>moments in the most natural way....</h1>
                    </div>
                </div>
            </div>
            <FourthContainer />
            <Review />   
            <About />
        </div>

    )
}

export default Home;