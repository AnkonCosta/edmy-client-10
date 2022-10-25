import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Home = () => {
    return (
        <div className='bg-img py-5 p-5 p-md-5'>
            <div style={{ height: '800px' }} className='d-md-flex  justify-content-evenly align-items-center '>
                <div>
                    <img className='img-fluid' style={{ width: '500px' }} src="https://edmy-react.hibootstrap.com/images/banner/banner-img-1.png" alt="cartoon" />
                </div>
                <div>
                    <h1 className='text-white h1 hero-text'>Improve Your Online Learning <br /> Experience  Better Instantly</h1>
                    <p>We have <span className='text-warning fw-bold'>1k+</span> Online courses & <span className='text-warning fw-bold'>100k+</span> Online registered student. <br /> Find your desired Courses from them.

                    </p>
                    <button className='btn btn-danger px-5 '><Link to='/courses' className='text-decoration-none text-white fw-semibold'>See Our Courses</Link></button>
                </div>
            </div>

            <section className='container mx-auto'>

                <h1 className='hero-text text-center'>Who are we?</h1>
                <div className='d-flex'>
                    <div>
                        <p>Come with us, we also teach children about the basic values of human beings as honesty, kindness, generosity, courage, freedom, equality and respect. Learn to celebrate diversity in a spirit of understanding and tolerance and develop a positive regard and awareness of other people. They are taught the values and responsibilities needed to become active members of the community...</p>
                    </div>

                </div>
            </section>
        </div >
    );
};

export default Home;