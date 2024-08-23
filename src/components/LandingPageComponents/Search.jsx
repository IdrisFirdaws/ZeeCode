import React, { useState } from 'react';
import * as icon from 'react-bootstrap-icons';
import FetchTopics from '../../hooks/fetchTopics'; // Adjust the path if necessary

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchMade, setSearchMade] = useState(false); // Track if search has been performed
    const { lessons, loading, error } = FetchTopics();

    // Filter lessons based on search term
    const filteredLessons = lessons ? Object.keys(lessons).filter((lessonId) =>
        lessons[lessonId].title.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

    const handleSearch = () => {
        if (searchTerm.trim() !== "") {
            setSearchMade(true); // Set searchMade to true when search button is clicked
        } else {
            setSearchMade(false); // Clear searchMade if searchTerm is empty
        }
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        if (e.target.value.trim() === "") {
            setSearchMade(false); // Clear searchMade if searchTerm is cleared
        } else {
            setSearchMade(true);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='search section'>
            <div className="title">Search tutorials</div>
            <div className="searchBox">
                <input
                    type="text"
                    placeholder='search for tutorials'
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button className="searchbtn btn1" onClick={handleSearch}>
                    <icon.Search />
                </button>
            </div>

            {searchMade && filteredLessons.length > 0 && (
                <div className="searchResults">
                    <h3>Search Results:</h3>
                    <ul>
                        {filteredLessons.map((lessonId) => (
                            <li key={lessonId}>
                                <a href={`/lessons/${lessonId}`}>{lessons[lessonId].title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {searchMade && filteredLessons.length === 0 && (
                <div className="searchResults">
                    <p>No tutorials found for your search term.</p>
                </div>
            )}

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
                                    Experience tailored tutorials that adapt to your individual learning style and pace. Our platform’s adaptive algorithms ensure that each lesson meets your unique needs, making learning more effective and engaging.
                                </p>
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
                                    Gain access to a vast library of tutorials and resources whenever you need them. Whether you’re on the go or relaxing at home, our online platform provides the flexibility to learn at your convenience.
                                </p>
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
                                    Benefit from tutorials created by industry experts who bring real-world experience and insights to each lesson. Our support team is always available to help you overcome challenges and achieve your learning goals.
                                </p>
                            </div>
                        </li>
                    </ul>
                    <a href="/private">
                        <button className="btn1">Start Tutorial Now</button>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Search;
