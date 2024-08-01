import React from 'react'

const Teacher = () => {
    return (
        <div className='teacher sub'>
            <div className="teachRight">
                <div className="subTitle">
                    are you a certified teacher?
                    <h2>then <span>become an instructor</span></h2>
                </div>
                <p>Are you passionate about teaching and eager to share your expertise with a global audience? Join our team of instructors and inspire learners worldwide! As a certified teacher, you have the unique opportunity to create impactful courses that help students grow and succeed. We provide all the tools and support you need to bring your knowledge to life, from course creation resources to a platform that reaches thousands of learners. Start your journey with us and make a difference in education today!</p>

                <button className="btn1"><a href="#">Become an instructor</a></button>
            </div>

            <div className="teachLeft">
                <div className="box1">
                    <div className="box2">
                        <img src="assets/persons/5.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teacher
