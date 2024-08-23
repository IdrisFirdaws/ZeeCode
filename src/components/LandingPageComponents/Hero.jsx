import React from "react";
import * as icon from "react-bootstrap-icons";

const Hero = () => {
    return (
        <div className="hero sub">
            <div className="heroRight">
                <h1 className="intro">Develop your skill in a new and unique way</h1>
                <p className="text">
                    Step into a new era of learning. Our distinctive methods will help you
                    develop skills in a way that's both enjoyable and impactful.
                    Whether you're looking to advance your career or pick up a new hobby, our innovative methods will help you achieve your goals.
                </p>

                <div className="buttons">
                    <a href="/private">
                        <button className="btn1">Start Tutorial Now</button>
                    </a>
                    <button className="btn2">
                        <icon.Youtube />
                        Watch video
                    </button>
                </div>
            </div>

            <div className="heroLeft">
                <div className="bigCircle">
                    <img src="assets/heroImg.png" alt="" className="heroImg" />
                    <div className="smallCircle">
                        <div className="tag free">
                            <icon.PiggyBankFill />
                            completely free
                        </div>

                        <div className="tag courses">
                            <icon.BookFill />
                            50+ courses
                        </div>

                        <div className="tag students">
                            <icon.PeopleFill />
                            <div className="text">
                                1000+ online students
                                <div className="images">
                                    <img src="assets/persons/1.jpg" alt="" />
                                    <img src="assets/persons/2.jpg" alt="" />
                                    <img src="assets/persons/3.jpg" alt="" />
                                    <img src="assets/persons/4.jpg" alt="" />
                                    <img src="assets/persons/1.jpg" alt="" />
                                    <img src="assets/persons/2.jpg" alt="" />
                                    <img src="assets/persons/1.jpg" alt="" />
                                    <img src="assets/persons/2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
