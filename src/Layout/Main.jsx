import React from 'react';
import Header from '../pages/Sherad/Header/Header';
import Footer from '../pages/Sherad/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Sherad/LeftNav/LeftNav';
import RightNav from '../pages/Sherad/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Sherad/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={3}><LeftNav></LeftNav></Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}><RightNav></RightNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;