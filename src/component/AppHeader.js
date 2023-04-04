
import { Menu, Col, Row } from 'antd';
import React, { useState } from 'react';
import Logo from "../Assets/logoM.png";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const items = [
    {
        label: <Link to="/MajesticStudioWebsite">Home</Link>,
        key: 'home',
    },
    {
        label: "Gallery",
        key: 'SubMenu',
        children: [
            {
                label: <Link to="/MajesticStudioWebsite/gallery/wedding"> Wedding </Link>,
                key: 'wedding',
            },
            {
                label: <Link to="/MajesticStudioWebsite/gallery/engagement"> Engagement </Link>,
                key: 'engagement',
            },
            {
                label: <Link to="/MajesticStudioWebsite/gallery/pre-wedding">Pre-Wedding</Link>,
                key: 'pre-wedding',
            },
            {
                label: <Link to="/MajesticStudioWebsite/gallery/potraits"> Potraits </Link>,
                key: 'potraits',
            },
        ],
    },

    {
        label: <Link to="/MajesticStudioWebsite/about"> About</Link>,
        key: 'about',
    },
    {
        label: <Link to="/MajesticStudioWebsite/contact"> Contact</Link>,
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