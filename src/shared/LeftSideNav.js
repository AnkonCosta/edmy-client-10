import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/topics`)
            .then(res => res.json())
            .then(data => setTopics(data))
    }, [])

    return (
        <div className='shadow ps-5' style={{
            position: ' -webkit-sticky',
            position: 'sticky',
            top: '0'
        }
        }>
            <div class="btn-group center-btn" role="group" aria-label="Basic outlined example">
                <button type="button" class="btn btn-outline-primary">Home</button>
                <button type="button" class="btn btn-outline-success">Blog</button>
                <button type="button" class="btn btn-outline-danger">FAQ's</button>
            </div>
            {
                topics.map(topic => <p key={topic.id}>
                    <button className='btn btn-success '>
                        <Link className='fw-semibold text-white text-decoration-none' to={`/courses/${topic.id}`}> {topic.name}</Link>
                    </button>
                </p>)
            }
        </div >
    );
};

export default LeftSideNav;