import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Login.css';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {


        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                navigate('/')

            })
            .catch(err => {
                console.log(err)
                setError(toast.error(err.message))
            })
    }


    return (
        <div>
            <div className="container mx-auto ">
                <div className="row main-content mt-5 mx-auto bg-success text-center">
                    <div className="col-md-4 text-center company__info">
                        <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
                        <h4 className="company_title">Your Company Logo</h4>
                    </div>
                    <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                        <div className="container-fluid">
                            <div className="row">
                                <h2>Log In</h2>
                            </div>
                            <div className="row">
                                <form onSubmit={handleSubmit} control="" className="form-group">
                                    <div className="row">
                                        <input type="email" name="email" id="email" className="form__input" placeholder="Your Email" />
                                    </div>
                                    <div className="row">
                                        <span className="fa fa-lock"></span>
                                        <input type="password" name="password" id="password" className="form__input" placeholder="Password" />
                                    </div>
                                    <div className="row">
                                        <input type="checkbox" name="remember_me" id="remember_me" className="" />

                                    </div>
                                    <div className="row">
                                        <input type="submit" value="Submit" className="btn" />
                                    </div>
                                </form>
                            </div>

                            <div className="row">
                                <p>New to this site? <Link to='/register'>Register Here</Link ></p>
                            </div>
                        </div>
                    </div>
                    <Toaster></Toaster>
                </div>
            </div>

        </div >
    );
};

export default Login;