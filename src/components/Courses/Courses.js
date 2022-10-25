import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesOutlet from '../../shared/CoursesOutlet';
import Row from 'react-bootstrap/Row';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)


    return (
        <div className='my-5'>
            <Row xs={1} lg={2} className="g-4">
                {
                    courses.map(course => <CoursesOutlet
                        key={course._id}
                        const course={course}
                    >

                    </CoursesOutlet>)
                }
            </Row>

        </div >
    );
};

export default Courses;