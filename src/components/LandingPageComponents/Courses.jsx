import React from 'react'
import * as icon from 'react-bootstrap-icons'

const Courses = () => {
    return (
        <div className='courses section'>
            <div className="title">
                Our popular courses
            </div>
            <p className='titleText'>Explore a range of top-rated courses designed to equip you with the skills and knowledge you need to succeed. Whether you're looking to advance your career, explore new hobbies, or simply expand your horizons, our diverse selection of courses has something for everyone. Each course is crafted by experts in the field, ensuring high-quality content that's both engaging and practical. Join thousands of learners who have already discovered the benefits of our unique approach to education. Start your learning journey today and unlock new opportunities!</p>

            <div className="content">
                <div className="courseItem">
                    <img src="assets/posts/img-06.jpg" alt="" className='courseImg' />

                    <div className="courseRate">
                        <span className="category">web design</span>

                        <span className="rate">
                            <icon.StarFill />
                            <icon.StarFill />
                            <icon.StarFill />
                            <icon.StarFill />
                            <icon.StarHalf />
                        </span>
                    </div>

                    <div className="courseDets">
                        <div className="subTitle">
                            introducton to HTML
                        </div>

                        <hr />
                        <div className="tutors">
                            <div className="tutorItem">
                                <img src="assets/persons/2.jpg" alt="" />
                                <span className="name">Firdaws</span>
                            </div>
                            {/* <div className="tutorItem">
                                <img src="assets/persons/3.jpg" alt="" />
                                <span className="name">Rufai</span>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="courseItem">
                    <img src="assets/posts/img-03.jpg" alt="" className='courseImg' />

                    <div className="courseRate">
                        <span className="category">web design</span>

                        <span className="rate">
                            <icon.StarFill />
                            <icon.StarFill />
                            <icon.StarFill />
                            <icon.StarFill />
                            <icon.StarFill />
                        </span>
                    </div>

                    <div className="courseDets">
                        <div className="subTitle">
                            bootstrap5 tutorial
                        </div>

                        <hr />
                        <div className="tutors">
                            <div className="tutorItem">
                                <img src="assets/persons/2.jpg" alt="" />
                                <span className="name">ZeeCode</span>
                            </div>
                            {/* <div className="tutorItem">
                                <img src="assets/persons/3.jpg" alt="" />
                                <span className="name">Rufai</span>
                            </div> */}

                        </div>
                    </div>
                </div>

                <div className="courseItem">
                    <img src="assets/posts/img-01.jpg" alt="" className='courseImg' />

                    <div className="courseRate">
                        <span className="category">web design</span>

                        <span className="rate">
                            <icon.StarFill />
                            <icon.StarFill />
                            <icon.StarFill />
                            <icon.StarFill />
                            <icon.StarHalf />
                        </span>
                    </div>

                    <div className="courseDets">
                        <div className="subTitle">
                            introducton to CSS
                        </div>

                        <hr />
                        <div className="tutors">
                            {/* <div className="tutorItem">
                                <img src="assets/persons/2.jpg" alt="" />
                                <span className="name">ZeeCode</span>
                            </div> */}
                            <div className="tutorItem">
                                <img src="assets/persons/3.jpg" alt="" />
                                <span className="name">Rufai</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a href="/login">
                <button className='btn1'>Start Now</button>
            </a>
        </div>
    )
}

export default Courses
