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
        <div style={{
            position: ' -webkit-sticky',
            position: 'sticky',
            top: '0'
        }
        }>
            <h3>This is Left side nav.</h3>
            {
                topics.map(topic => <p key={topic.id}>
                    <Link to={`/courses/${topic.id}`}> {topic.name}</Link>
                </p>)
            }
        </div >
    );
};

export default LeftSideNav;