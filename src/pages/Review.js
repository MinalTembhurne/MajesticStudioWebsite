import React from 'react';
// import { Col, Row } from 'antd';
import "../styles/Review.css";
import { Carousel, Card } from 'antd';

const { Meta } = Card;
const Review = () => (
    <div className='review'>
        <div className='review-title'>
            <h2>What past clients are saying</h2>
            <h1>Kind Words</h1>
        </div>
        <div>
            <Carousel slidesToShow={3}
                slidesToScroll={2}
                arrows
                prevArrow={<div className='arrowtest'>TEST</div>}
                nextArrow={<div>TEST</div>}>
                <div>
                    <Card
                        hoverable
                        style={{
                            width: 350,
                        }}
                        cover={<img alt="example" src="https://images.indianexpress.com/2022/03/hyun1.jpeg" />}
                    >
                        <Meta title="#AlvarezAtLast" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    </Card>
                </div>
                <div>
                    <Card
                        hoverable
                        style={{
                            width: 350,
                        }}
                        cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWXon49eXmm35eE88W35T_zRY2XVCfSXguPX9HLHCs6YKssv5WFGp75i32leHKXAq-ZBU&usqp=CAU" />}
                    >
                        <Meta title="#CheersToErinAndBarry" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    </Card>
                </div>
                <div>
                    <Card
                        hoverable
                        style={{
                            width: 350,
                        }}
                        cover={<img alt="example" src="https://media.herworld.com/public/2021/04/korea_artiz_studio_pre-wedding_photography_singapore_2-768x1061.jpg?compress=true&quality=80&w=480&dpr=2.6" />}
                    >
                        <Meta title="#MinyanForever" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    </Card>
                </div>
                <div>
                    <Card
                        hoverable
                        style={{
                            width: 350,
                        }}
                        cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRIcdeqlRx-CEpXgSnCHv0CTGNPQjNxS4Yqg&usqp=CAU" />}
                    >
                        <Meta title="#HappilyEveretsAfter" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    </Card>
                </div>
                <div>
                    <Card
                        hoverable
                        style={{
                            width: 350,
                        }}
                        cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFZJWrUl2Ea8JiCfzCS-NG2zjIPhrKN8akGA&usqp=CAU" />}
                    >
                        <Meta title="#CaptivatedByKaplan" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    </Card>
                </div>
                <div>
                    <Card
                        hoverable
                        style={{
                            width: 350,
                        }}
                        cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8kYPlLrUbXKNj0LwAdLRy2vh6opyd6eiX3g&usqp=CAU" />}
                    >
                        <Meta title="#CrazyAboutCrawford" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    </Card>
                </div>
                <div>
                    <Card
                        hoverable
                        style={{
                            width: 350,
                        }}
                        cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5RkYzMBhXgFcomWCxxbEVAe04NB1n7aPO_A&usqp=CAU" />}
                    >
                        <Meta title="#CalantoniDreaming" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    </Card>
                </div>
                <div>
                    <Card
                        hoverable
                        style={{
                            width: 350,
                        }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="#Love2BLoved" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    </Card>
                </div>
                <div>
                    <Card
                        hoverable
                        style={{
                            width: 350,
                        }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="#FinalyMetMyMatch" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    </Card>
                </div>
            </Carousel>
        </div>
    </div>
);
export default Review