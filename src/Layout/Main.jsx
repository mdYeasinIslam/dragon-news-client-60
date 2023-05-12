import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header/>
            <Container className='mt-5'>
                <Row>
                    <Col xl={3}>
                        <LeftSideNav />
                    </Col>
                    <Col xl={6}>
                        <Outlet />
                    </Col>
                    <Col xl="3">
                        <RightSideNav />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;