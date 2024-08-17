import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as icon from 'react-bootstrap-icons'
import Sidebar from '../../components/lessonPage/lessonPageSidebar'; // Ensure the correct import path
import HTMLContent from '../../components/lessonPage/HTMLContent'; // Ensure the correct import path
import CSSContent from '../../components/lessonPage/CSSContent'; // Ensure the correct import path
import FetchTopics from '../../hooks/fetchTopics'; // Import FetchTopics hook
import FrontendRoadmap from '../../components/lessonPage/FrontendRaodmap';
import JavaScriptContent from '../../components/lessonPage/JavaScriptContent';
import VersionControlContent from '../../components/lessonPage/VersionControlContent';
import FramWorksLiberariesContent from '../../components/lessonPage/FramWorksLiberariesContent';

const LessonPage = () => {
    const { lessonId } = useParams();
    const { lessons, loading, error } = FetchTopics(); // Using FetchTopics hook
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(prevState => !prevState); // Ensure toggling works
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setSidebarOpen(true); // Ensure sidebar is open on larger screens
            } else {
                setSidebarOpen(false); // Hide sidebar on smaller screens
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const subLessons = lessons[lessonId]?.sublessons || [];

    return (
        <div className={`lessonPage ${sidebarOpen ? 'sidebarOpen' : ''}`}>
            <Sidebar
                subLessons={subLessons}
                toggleSidebar={toggleSidebar}
                sidebarOpen={sidebarOpen}
            />
            <div className="lessonContentContainer">
                {lessonId === 'frontend_roadmap' && <FrontendRoadmap />}
                {lessonId === 'html' && <HTMLContent />}
                {lessonId === 'css' && <CSSContent />}
                {lessonId === 'javascript' && <JavaScriptContent />}
                {lessonId === 'version_control' && <VersionControlContent />}
                {lessonId === 'frameworks_libraries' && <FramWorksLiberariesContent />}
                {/* Add conditions for other lessons as needed */}
            </div>
            <button
                onClick={toggleSidebar}
                className="toggleSidebarBtn"
                style={{ position: 'fixed', top: '90px', right: '30px', zIndex: '1000' }}
            >
                {sidebarOpen ? (
                    <icon.X />
                ) : (
                    <icon.List />
                )}
            </button>
        </div>
    );
};

export default LessonPage;
