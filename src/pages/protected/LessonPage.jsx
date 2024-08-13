import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/lessonPage/lessonPageSidebar";
import LessonContent from "../../components/lessonPage/LessonContent";
import useLessons from '../../hooks/UseLessons';
import * as icon from 'react-bootstrap-icons';

const LessonPage = () => {
    const { lessonId } = useParams();
    const { lesson, loading, error } = useLessons(lessonId);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
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

    return (
        <div className={`lessonPage ${sidebarOpen ? 'open' : ''}`}>
            <Sidebar subLessons={lesson?.lessons || []} toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
            <div className="lessonContentContainer">
                <LessonContent lesson={lesson} toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
            </div>
        </div>
    );
};

export default LessonPage;


