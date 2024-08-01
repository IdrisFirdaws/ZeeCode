import React from 'react'
import * as icon from 'react-bootstrap-icons'

const Search = () => {
    return (
        <div className='search section'>

            <div className="title">Search tutorials</div>

            <div className="searchBox">
                <input type="text" placeholder='search for tutorials' />
                <button className="searchbtn btn1">
                    <icon.Search />
                </button>
            </div>

            <div className="content">
                <div className="contentLeft">
                    <div className="box1">
                        <div className="box2">
                            <img src="assets/posts/2.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <div className="contentRight">
                    <div className="title">
                        <span>Benefits </span> of our online tutorials
                    </div>

                    <ul className="benefitList">
                        <li className="benefitItem">
                            <div className="icon">
                                <icon.FilePersonFill />
                            </div>

                            <div className="text">
                                <h4 className="subTitle">
                                    Personalized Learning Paths
                                </h4>
                                <p className="contentText">
                                    Experience tailored tutorials that adapt to your individual learning style and pace. Our platform’s adaptive algorithms ensure that each lesson meets your unique needs, making learning more effective and engaging.                                </p>
                            </div>
                        </li>

                        <li className="benefitItem">
                            <div className="icon">
                                <icon.AlarmFill />
                            </div>
                            <div className="text">
                                <h4 className="subTitle">
                                    Flexible Access Anytime, Anywhere
                                </h4>
                                <p className="contentText">
                                    Gain access to a vast library of tutorials and resources whenever you need them. Whether you’re on the go or relaxing at home, our online platform provides the flexibility to learn at your convenience.                                </p>
                            </div>
                        </li>
                        <li className="benefitItem">
                            <div className="icon">
                                <icon.PersonFillGear />
                            </div>
                            <div className="text">
                                <h4 className="subTitle">
                                    Expert Guidance and Support
                                </h4>
                                <p className="contentText">
                                    Benefit from tutorials created by industry experts who bring real-world experience and insights to each lesson. Our support team is always available to help you overcome challenges and achieve your learning goals.                                </p>
                            </div>
                        </li>

                    </ul>
                    <a href="/login">
                        <button className="btn1">Start Now</button>
                    </a>
                </div>
            </div>

        </div >
    )
}

export default Search
