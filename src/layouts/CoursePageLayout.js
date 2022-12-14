import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../shared/LeftSideNav';

const CoursePageLayout = () => {
    return (
        <Container>
            <Row>
                <Col lg='3'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg='9'>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </Container>
    );
};

export default CoursePageLayout;