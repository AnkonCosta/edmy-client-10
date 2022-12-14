import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './TopicDetails.css';
import { FaDownload, FaStar } from "react-icons/fa";
import { useReactToPrint } from 'react-to-print';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const TopicsDetails = () => {


    const detailsTopic = useLoaderData();
    console.log(detailsTopic)
    const { details, image_url, rating, author, title, total_sell, _id, price } = detailsTopic;
    console.log(price)
    return (
        <div ref={ref} className='mb-5'>
            <div className='container my-2 mx-auto d-flex justify-content-between align-items-center'>
                <h2>{title}</h2>
                <Pdf targetRef={ref} filename='Edmy.pdf'>
                    {
                        ({ toPdf }) => (
                            <FaDownload title={`download ${title} page`} role='button' className=' h1 text-danger pointer text-end ' onClick={toPdf}></FaDownload>
                        )
                    }
                </Pdf>
            </div>
            <div className='details-page-hero d-flex align-items-center justify-content-center text-white' style={{ backgroundImage: `Url("${image_url}")` }}>

                <div >
                    <h1 className='h1'>{title}</h1>

                </div>
            </div>


            <section className='row  row-cols-md-2 g-2 g-lg-3  conteiner  mx-auto'>
                <div className=' px-5 mt-5 text-center'>
                    <h3 className='mb-3'>{title}</h3>
                    <p className='text-start fw-semibold'>{details}</p>
                    <ul className='text-start'>
                        <li>25 classes</li>
                        <li>24/7 online support</li>
                        <li>Job apply help</li>
                        <li>Online Study Materials</li>
                    </ul>
                    <p>Price: <span className='text-danger fw-bold'> {price}</span></p>

                    <Link to={`/checkout/${_id}`}><button className='btn btn-outline-warning fw-semibold'>Get Premium Access</button></Link>
                </div>
                <div className='   text-center '>
                    <div className='author-bg w-50   mx-auto h-100  '>

                        <div className='author-main rounded'>

                            <img className='img-fluid mb-3' src={author?.img} alt="" />
                            <h4 className='fw-bold'> {author?.name}</h4>
                            <div className='d-md-flex justify-content-evenly align-items-center'>
                                <div className='d-flex justify-content-evenly align-items-center '>
                                    <FaStar className='me-2' width={'40px'}></FaStar>
                                    <p className='m-0 text-warning fw-bold '>{rating.number}</p>
                                </div>
                                <div className='d-flex justify-content-evenly align-items-center'>
                                    <span className='me-2 '>Total Sell:</span>
                                    <p className='m-0 text-warning fw-bold'>{total_sell}</p>
                                </div>
                            </div>
                            <Link to={`/checkout/${_id}`}><button className='btn btn-outline-warning fw-semibold'>Get Premium Access</button></Link>

                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default TopicsDetails;