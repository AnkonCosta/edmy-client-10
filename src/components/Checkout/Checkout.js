import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import './Checkout.css'

const Checkout = () => {
    const courseInfo = useLoaderData();
    const { _id, title, price, image_url } = courseInfo;

    const hotToastOn = () => {
        toast.success('Thanks for making the payment.');
    }
    return (
        <div>
            <div class="container">

                <div className='d-flex  border my-5 shadow rounded justify-content-evenly align-items-center'>
                    <img style={{ height: '130px' }} className='img-fluid rounded ' src={image_url} alt="" />
                    <div className='pe-5'>
                        <p className='h3 fw-bold'>{title}</p>
                        <p>Course Id: <span className='text-warning fw-bold'>{_id}</span></p>
                        <p>Price: <span className='text-warning fw-bold'>{price}</span></p>
                    </div>

                </div>
                <div class="row">
                    <div class="col-lg-4 mb-lg-0 mb-3">

                        <div class="card p-3">
                            <div class="img-box">
                                <img src="https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png" alt="" />
                            </div>
                            <div class="number">
                                <label class="fw-bold" for="">**** **** **** 1060</label>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <small><span class="fw-bold">Expiry date:</span><span>10/16</span></small>
                                <small><span class="fw-bold">Name:</span><span>Kumar</span></small>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-lg-0 mb-3">
                        <div class="card p-3">
                            <div class="img-box">
                                <img src="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png"
                                    alt="" />
                            </div>
                            <div class="number">
                                <label class="fw-bold">**** **** **** 1060</label>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <small><span class="fw-bold">Expiry date:</span><span>10/16</span></small>
                                <small><span class="fw-bold">Name:</span><span>Kumar</span></small>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-lg-0 mb-3">
                        <div class="card p-3">
                            <div class="img-box">
                                <img src="https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png"
                                    alt="" />
                            </div>
                            <div class="number">
                                <label class="fw-bold">**** **** **** 1060</label>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <small><span class="fw-bold">Expiry date:</span><span>10/16</span></small>
                                <small><span class="fw-bold">Name:</span><span>Kumar</span></small>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mt-4">
                        <div class="card p-3">
                            <p class="mb-0 fw-bold h4">Payment Methods</p>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="card p-3">
                            <div class="card-body border p-0">
                                <p>
                                    <a class="btn btn-primary w-100 h-100 d-flex align-items-center justify-content-between"
                                        data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true"
                                        aria-controls="collapseExample">
                                        <span class="fw-bold">PayPal</span>
                                        <span class="fab fa-cc-paypal">
                                        </span>
                                    </a>
                                </p>
                                <div class="collapse p-3 pt-0" id="collapseExample">
                                    <div class="row">
                                        <div class="col-8">
                                            <p class="h4 mb-0">Summary</p>
                                            <p class="mb-0"><span class="fw-bold">Product: {title}</span><span class="c-green">: {title}</span></p>
                                            <p class="mb-0"><span class="fw-bold">Price:</span><span
                                                class="c-green">:{price}</span></p>
                                            <p class="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                                                nihil neque
                                                quisquam aut
                                                repellendus, dicta vero? Animi dicta cupiditate, facilis provident quibusdam ab
                                                quis,
                                                iste harum ipsum hic, nemo qui!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body border p-0">
                                <p>
                                    <a class="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                                        data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true"
                                        aria-controls="collapseExample">
                                        <span class="fw-bold">Credit Card</span>
                                        <span class="">
                                            <span class="fab fa-cc-amex"></span>
                                            <span class="fab fa-cc-mastercard"></span>
                                            <span class="fab fa-cc-discover"></span>
                                        </span>
                                    </a>
                                </p>
                                <div class="collapse show p-3 pt-0" id="collapseExample">
                                    <div class="row">
                                        <div class="col-lg-5 mb-lg-0 mb-3">
                                            <p class="h4 mb-0">Summary</p>
                                            <p class="mb-0"><span class="fw-bold">Product:</span><span class="c-green">:{title}</span>
                                            </p>
                                            <p class="mb-0">
                                                <span class="fw-bold">Price:</span>
                                                <span class="c-green">:{price}</span>
                                            </p>

                                        </div>
                                        <div class="col-lg-7">
                                            <form action="" class="form">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="form__div">
                                                            <input type="text" class="form-control" placeholder=" " />
                                                            <label for="" class="form__label">Card Number</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-6">
                                                        <div class="form__div">
                                                            <input type="text" class="form-control" placeholder=" " />
                                                            <label for="" class="form__label">MM / yy</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-6">
                                                        <div class="form__div">
                                                            <input type="password" class="form-control" placeholder=" " />
                                                            <label for="" class="form__label">cvv code</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form__div">
                                                            <input type="text" class="form-control" placeholder=" " />
                                                            <label for="" class="form__label">name on the card</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="btn btn-primary w-100">Sumbit</div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div onClick={hotToastOn} class="btn btn-primary payment">
                            Make Payment
                        </div>
                        <Toaster></Toaster>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;