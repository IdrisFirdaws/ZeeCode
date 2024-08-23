import React from 'react';
import * as icon from 'react-bootstrap-icons';
import FetchTopics from '../../hooks/fetchTopics'; // Adjust the path if necessary

const Courses = () => {
    const { lessons, loading, error } = FetchTopics();

    // Handle the state where the data is still loading
    if (loading) {
        return <div>Loading...</div>;
    }

    // Handle errors
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Convert lessons object to an array for easier manipulation
    const lessonArray = Array.isArray(lessons) ? lessons : Object.values(lessons);

    // Randomly select three courses
    const getRandomCourses = (lessons, count) => {
        const shuffled = lessons.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const selectedCourses = getRandomCourses(lessonArray, 3);

    return (
        <div className='courses section'>
            <div className="title">Our popular courses</div>
            <p className='titleText'>
                Explore a range of top-rated courses designed to equip you with the skills and knowledge you need to succeed.
                Whether you're looking to advance your career, explore new hobbies, or simply expand your horizons, our diverse
                selection of courses has something for everyone. Each course is crafted by experts in the field, ensuring
                high-quality content that's both engaging and practical. Join thousands of learners who have already discovered
                the benefits of our unique approach to education. Start your learning journey today and unlock new opportunities!
            </p>

            <div className="content">
                {selectedCourses.map((course, index) => (
                    <div className="courseItem" key={index}>
                        <img src={course.imageUrl || "assets/posts/img-01.jpg"} alt="" className='courseImg' />
                        <div className="courseRate">
                            <span className="category">{course.category || "web design"}</span>
                            <span className="rate">
                                <icon.StarFill />
                                <icon.StarFill />
                                <icon.StarFill />
                                <icon.StarFill />
                                <icon.StarHalf />
                            </span>
                        </div>
                        <div className="courseDets">
                            <div className="subTitle">{course.title || "Course Title"}</div>
                            <hr />
                            <div className="tutors">
                                {course.tutors && course.tutors.map((tutor, i) => (
                                    <div className="tutorItem" key={i}>
                                        <img src={tutor.image || "assets/persons/2.jpg"} alt="" />
                                        <span className="name">{tutor.name || "Tutor Name"}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <a href="/private">
                <button className='btn1'>Start Tutorial Now</button>
            </a>
        </div>
    );
};

export default Courses;
