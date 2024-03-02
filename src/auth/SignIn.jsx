import React from 'react'

import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import Preloader from './Preloader';

const SignIn = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay (e.g., fetching data from an API)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        // Clean up the timer to avoid memory leaks
        return () => clearTimeout(timer);
    }, []);

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation and submission here
        console.log(formData);
    };

    return (
        <div className='formContainer'>
            <div className="formWrapper">

                {loading ? <Preloader /> : (
                    <div className="formContent signupFormcontent">
                        <div className="logoContainer">
                            <img src="assets/logo1.png " alt="" className="logo" />

                        </div>

                        <h2 className="formTitle">Sign in</h2>
                        <p className="formDesc">
                            Welcome back to O-live
                        </p>


                        <form className="form" onSubmit={handleSubmit}>
                            <div className="formItem">
                                <label htmlFor="username" className="formLabel">Username:</label>
                                <input className="formInput" type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
                            </div>

                            <div className="formItem">
                                <label className="formLabel">Password:</label>
                                <input className="formInput" type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                            </div>

                            <Link to="/" className="formBtncontainer">
                                <button type="submit" className="formButton btn1">Sign In</button>
                            </Link>

                        </form>

                        <div className="formRedirectcontainer">
                            <p className="formRedirectText">
                                Don't have an account?
                            </p>
                            <Link
                                to="/sign-up"
                                className="formRedirect"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>

                )}

            </div>
            <div className="formImg">
                {/* <h1>ZeeCode</h1> */}
            </div>
        </div>
    )
}

export default SignIn
