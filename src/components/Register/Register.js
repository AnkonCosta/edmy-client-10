import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Register.css';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const { createUser } = useContext(AuthContext);

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
                toast.success('Your account is created successfully.');
                navigate('/')
            })
            .catch(err => {
                console.log(err)

            })
    }

    return (
        <div>
            <div className="container mx-auto ">
                <div className="row main-content mt-5 mx-auto bg-success text-center">
                    <div className="col-md-4 text-center company__info">
                        <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
                        <h4 className="company_title">Edmy</h4>
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
                                    <div className="row">
                                        <input type="checkbox" name="remember_me" id="remember_me" className="" />
                                        <label htmlFor="remember_me">Remember Me!</label>
                                    </div>
                                    <div className="row">
                                        <input type="submit" value="Submit" className="btn" />
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