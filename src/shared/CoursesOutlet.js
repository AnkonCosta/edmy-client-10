import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './CourseOutlet.css'

const CoursesOutlet = ({ course }) => {
    const { title, details, image_url, price, rating, total_sell, seller, _id } = course;
    return (
        <div className=''>


            <Col>
                <Card className='shadow rounded'>
                    <Card.Img style={{ height: '300px' }} variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title> {title}</Card.Title>
                        <Card.Text>{details.slice(0, 80)} <Link to={`/details/${_id}`} > show more...</Link></Card.Text>
                        <div className='d-flex'>
                            <button className='btn btn-success'>Details</button>
                            <button className='btn btn-success'>Price: {price}</button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default CoursesOutlet;