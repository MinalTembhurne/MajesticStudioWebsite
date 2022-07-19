
import React from 'react'
import { Card, Col, Row } from "antd";
import "../styles/Fourth-container.css";

const FourthContainer = () => (
    <div className='fourth-container'>
        <div className="site-card-wrapper">
            <Row gutter={16}>
                <Col span={6}>
                    <Card title="Wedding" bordered={false}>
                    <img src="https://www.lindseyparadiso.com/wp-content/uploads/2022/01/Lindsey-Paradiso-Photography-seattle-wedding-photographer-2887-scaled.jpg" alt="wedding" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Engagement" bordered={false}>
                        <img src="https://www.lindseyparadiso.com/wp-content/uploads/2020/05/brides-on-mill-mountain-roanoke-va-lindsey-paradiso-wedding-photography-9196-scaled.jpg" alt="engagement" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Pre-wedding" bordered={false}>
                        <img src="https://www.lindseyparadiso.com/wp-content/uploads/2022/02/Lindsey-Paradiso-Photography-seattle-wedding-photographer-6652-scaled.jpg" alt="pre-wedding" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Potrait" bordered={false}>
                       <img src="https://www.lindseyparadiso.com/wp-content/uploads/2022/02/lindsey-paradiso-wedding-photography-pnw-seattle-washington-6775.jpg" alt="potraits" /> 
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
)
export default FourthContainer;