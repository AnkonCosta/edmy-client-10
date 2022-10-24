import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './CourseOutlet.css'

const CoursesOutlet = ({ course }) => {
    const { title, details, image_url, rating, total_sell, seller, } = course;
    return (
        <div>


            <Col>
                <Card className='shadoww'>
                    <Card.Img style={{ height: '300px' }} variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title> {title}</Card.Title>
                        <Card.Text>{details.slice(0, 100)}</Card.Text>
                    </Card.Body>
                    <Button className='mx-auto' variant="primary">Details</Button>
                </Card>
            </Col>
        </div >
    );
};

export default CoursesOutlet;