import React from 'react';
import "../styles/About.css";
import { Col, Row } from 'antd';
import Profile from "../Assets/majestic.jpg"



function About() {
  return (
    <>
    <div className='about-title'>About</div>
      <div>
        <Row>
          <Col span={1}></Col>
          <Col className='intro-photgrapher' span={11}>
            <div className='intro-border'>
              <div className='intro-title'>Meet Harshal</div>
              <div className='intro-subtitle'>A Wedding and Portfolio Photographer</div>
              <div className='intro-detail'>Harshal has a passion for beautiful design, authentic moments, natural imagery, and preserving memories. Each of these passions play a key part in how Harshal approaches photography, and telling a story with images for the families and couples.</div>
            </div>
          </Col>
          <Col className='picture-photographer' span={11}><img src={Profile} alt="profile-picture" /><div className='sign'>Photographer.<br/>
            Storyteller. <br/>
            Blessed.
            </div></Col>
          <Col span={1}>
            
          </Col>
        </Row>
      </div>
    </>
  )
}

export default About