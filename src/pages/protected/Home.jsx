import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useLessons from '../../hooks/UseLessons'; // Adjust the path if necessary

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { lessons, loading, error } = useLessons(); // Fetch all lessons here

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    // Handle cases where lessons might be undefined or null
    const filteredLessons = lessons ? Object.keys(lessons).filter((lessonId) =>
        lessons[lessonId].title.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

    return (
        <div className='home section'>
            <h2 className='title'>Lessons</h2>
            <div className="searchBox">
                <input
                    type="text"
                    placeholder="Search lessons..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
                />
            </div>
            <p className='titleText'>Please browse through our available lessons and select the one you'd like to take. Each lesson is designed to enhance your learning experience and help you achieve your educational goals.</p>
            {lessons && (
                <ul className='lessonList'>
                    {filteredLessons.length > 0 ? (
                        filteredLessons.map((lessonId) => (
                            <li key={lessonId}>
                                <Link to={`/lessons/${lessonId}`}>{lessons[lessonId].title}</Link>
                            </li>
                        ))
                    ) : (
                        <li>No lessons found.</li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default Home;


