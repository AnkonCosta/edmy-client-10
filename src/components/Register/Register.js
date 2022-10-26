import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Register.css';
import toast, { Toaster } from 'react-hot-toast';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const { createUser, googleProviderLogin, FacebookProviderLogin, updateUserProfile } = useContext(AuthContext);
    const GoogleProvider = new GoogleAuthProvider();
    const FacebookProvider = new FacebookAuthProvider();

    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                handleUpdateUserProfile(name, photoURL)
                toast.success('Your account is created successfully.');
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                navigate('/')

            })
    }


    const handleGoogleSignIn = () => {
        googleProviderLogin(GoogleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')

            })
            .catch(err => console.log(err))
    }
    const handleFacebookSignIn = () => {
        FacebookProviderLogin(FacebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')

            })
            .catch(err => console.log(err))
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(result => {

            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="container mx-auto ">
                <div className="row main-content mt-5 mx-auto bg-success text-center">
                    <div className="col-md-4 text-center company__info">
                        <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
                        <h4 className="company_title">Edmy</h4>
                        <button onClick={handleGoogleSignIn} className='ms-4 d-none d-md-block btn btn-outline-warning fw-semibold'>Google</button>
                        <button onClick={handleFacebookSignIn} className='ms-4 d-none d-md-block btn btn-outline-warning fw-semibold'>Facebook</button>
                    </div>
                    <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                        <div className="container-fluid">
                            <div className="row">
                                <h2>Register</h2>
                            </div>
                            <div className="row">
                                <form onSubmit={handleSubmit} control="" className="form-group">
                                    <div className="row">
                                        <input type="text" name="name" id="name" className="form__input" placeholder="Full Name" />
                                    </div>
                                    <div className="row">
                                        <input type="text" name="photoURL" id="" className="form__input" placeholder="PhotoURL" />
                                    </div>
                                    <div className="row">
                                        <input type="email" name="email" id="username" className="form__input" placeholder="Your email" />

                                    </div>
                                    <div className="row">
                                        <span className="fa fa-lock"></span>
                                        <input type="password" name="password" id="password" className="form__input" placeholder="Password" />
                                    </div>
                                    <div className='d-flex'>
                                        <p onClick={handleGoogleSignIn} className='me-1 d-md-none btn btn-outline-warning fw-semibold'>Google</p>
                                        <p onClick={handleFacebookSignIn} className='me-1 d-md-none btn btn-outline-warning fw-semibold'>Facebook</p>
                                    </div>
                                    <div>
                                        <button className='btn btn-success'>Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div className="row">
                                <p>Already have an account? <Link to='/login' >Login Here</Link ></p>
                            </div>
                            <Toaster></Toaster>
                        </div>
                    </div>
                </div>
            </div>



        </div >
    );
};

export default Register;