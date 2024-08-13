import React from 'react';
import { Link } from 'react-router-dom';

const InstructorPage = () => {
    return (
        <div className="instructorPage section">
            <div className="container">
                <h1 className="mainTitle">Page is being worked on, sorry for the mess</h1>
                <h1 className="mainTitle">Join Our Team of Instructors</h1>
                <p className="introText">
                    At ZeeCode Academy, we pride ourselves on providing high-quality education and fostering a community of passionate learners and educators. While we are not currently seeking new instructors, we value your interest in joining our team.
                </p>

                <div className="content">
                    <div className="messageBox">
                        <h2>We Currently Don't Need Instructors</h2>
                        <p>
                            Thank you for considering ZeeCode Academy as a place to share your expertise and passion for teaching. At this time, we are not actively looking for new instructors. However, we encourage you to stay connected with us.
                        </p>
                        <p>
                            When opportunities arise, we will reach out to our network and keep you informed. If you would like to be notified when we start looking for new instructors, please sign up for our community.
                        </p>
                    </div>

                    <div className="communityBox">
                        <h3>Stay Informed</h3>
                        <p>
                            Sign up for our community to receive updates on new opportunities, events, and more:
                        </p>
                        <form className="communityForm">
                            <input type="email" placeholder="Enter your email address" required />
                            <button type="submit" className="btn1">Sign Up</button>
                        </form>
                    </div>
                </div>

                <div className="benefits">
                    <h3>Why Join ZeeCode Academy?</h3>
                    <ul className="benefitList">
                        <li className="benefitItem">
                            <div className="icon">
                                <img src="assets/icons/expertise.svg" alt="Expertise Icon" />
                            </div>
                            <div className="text">
                                <h4 className="subTitle">Share Your Expertise</h4>
                                <p className="contentText">
                                    Inspire and educate students by sharing your knowledge and experience in your field.
                                </p>
                            </div>
                        </li>
                        <li className="benefitItem">
                            <div className="icon">
                                <img src="assets/icons/community.svg" alt="Community Icon" />
                            </div>
                            <div className="text">
                                <h4 className="subTitle">Join a Vibrant Community</h4>
                                <p className="contentText">
                                    Be part of a supportive and collaborative community of educators and learners.
                                </p>
                            </div>
                        </li>
                        <li className="benefitItem">
                            <div className="icon">
                                <img src="assets/icons/growth.svg" alt="Growth Icon" />
                            </div>
                            <div className="text">
                                <h4 className="subTitle">Professional Growth</h4>
                                <p className="contentText">
                                    Enhance your teaching skills and grow professionally with ongoing training and development.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="backToHome">
                    <Link to="/" className="btn1">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default InstructorPage;
