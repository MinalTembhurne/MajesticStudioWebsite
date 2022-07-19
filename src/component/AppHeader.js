
import { Menu, Col, Row } from 'antd';
import React, { useState } from 'react';
import Logo from "../Assets/logoM.png";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const items = [
    {

        label: <Link to="/">Home</Link>,
        key: 'home',
    },
    {
        label: <Link to="/gallery"> Gallery</Link>,
        key: 'SubMenu',
        children: [
            {
                label: 'Wedding',
                key: 'wedding',
            },
            {
                label: 'Engagement',
                key: 'engagement',
            },
            {
                label: 'Pre-wedding',
                key: 'pre-wedding',
            },
            {
                label: 'Potraits',
                key: 'potraits',
            },
        ],
    },


    {
        label: <Link to="/about"> About</Link>,
        key: 'about',
    },
    {
        label: <Link to="/contact"> Contact</Link>,
        key: 'contact',
    },

];

const AppHeader = () => {
    const [current, setCurrent] = useState('');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };


    return (
        <Row className="navbar">
            <Col span={10} ><img className="logo" src={Logo} alt="logo" /></Col>
            <Col span={14}>
                <Menu className="menu" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </Col>
        </Row>);
};

export default AppHeader;