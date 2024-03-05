import React from 'react'

const Courses = () => {
    return (
        <div className='courses section'>
            <div className="title">
                Our popular courses
            </div>
            <p className='titleText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime pariatur ex, a, excepturi quod quos velit laborum id porro dolor fugiat! Dicta unde eaque tempora, adipisci vitae commodi ex cupiditate.</p>

            <div className="content">
                <div className="courseItem">
                    <img src="assets/posts/img-06.jpg" alt="" className='courseImg' />

                    <div className="courseRate">
                        <span className="category">web design</span>

                        <span className="rate">
                            <img src="assets/menu.svg" alt="" />
                            <img src="assets/menu.svg" alt="" />
                            <img src="assets/menu.svg" alt="" />
                            <img src="assets/menu.svg" alt="" />
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
                            <div className="tutorItem">
                                <img src="assets/persons/3.jpg" alt="" />
                                <span className="name">Rufai</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="courseItem">
                    <img src="assets/posts/img-03.jpg" alt="" className='courseImg' />

                    <div className="courseRate">
                        <span className="category">web design</span>

                        <span className="rate">
                            <img src="assets/menu.svg" alt="" />
                            <img src="assets/menu.svg" alt="" />
                            <img src="assets/menu.svg" alt="" />
                            <img src="assets/menu.svg" alt="" />
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
                                <span className="name">Firdaws</span>
                            </div>
                            <div className="tutorItem">
                                <img src="assets/persons/3.jpg" alt="" />
                                <span className="name">Rufai</span>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="courseItem">
                    <img src="assets/posts/img-01.jpg" alt="" className='courseImg' />

                    <div className="courseRate">
                        <span className="category">web design</span>

                        <span className="rate">
                            <img src="assets/menu.svg" alt="" />
                            <img src="assets/menu.svg" alt="" />
                            <img src="assets/menu.svg" alt="" />
                            <img src="assets/menu.svg" alt="" />
                        </span>
                    </div>

                    <div className="courseDets">
                        <div className="subTitle">
                            introducton to CSS
                        </div>

                        <hr />
                        <div className="tutors">
                            <div className="tutorItem">
                                <img src="assets/persons/2.jpg" alt="" />
                                <span className="name">Firdaws</span>
                            </div>
                            <div className="tutorItem">
                                <img src="assets/persons/3.jpg" alt="" />
                                <span className="name">Rufai</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className='btn1'>Start Now</button>
        </div>
    )
}

export default Courses
