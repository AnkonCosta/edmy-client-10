import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import CoursesOutlet from '../../shared/CoursesOutlet';

const SpecificTopics = () => {
    const courses = useLoaderData();
    console.log(courses)

    return (
        <div>
            <Row xs={1} lg={2} className="g-4">
                {
                    courses.map(course => <CoursesOutlet
                        key={course._id}
                        course={course}
                    ></CoursesOutlet>)
                }
            </Row>
        </div>
    );
};

export default SpecificTopics;