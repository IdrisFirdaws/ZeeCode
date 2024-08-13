import React from "react";
import * as icon from 'react-bootstrap-icons';

const LessonContent = ({ lesson, toggleSidebar, sidebarOpen }) => {
    if (!lesson) return <p>Lesson not found.</p>;

    return (
        <div className="lessonContent">
            <button onClick={toggleSidebar} className="toggleSidebarBtn">
                {sidebarOpen ? <icon.X /> : <icon.List />}
            </button>
            <h2 className="title">{lesson.title}</h2>
            <p className="titleText">{lesson.description}</p>
            {lesson.lessons.map((subLesson) => (
                <div
                    id={subLesson.id}
                    className="subLesson"
                    key={subLesson.id}
                >
                    <h3>{subLesson.title}</h3>
                    <p className="subLessonDesc">{subLesson.description}</p>
                    <div className="subLessonContent">
                        {subLesson.content.map((contentItem, index) => (
                            <div key={index} className="contentItem">
                                {contentItem}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LessonContent;
