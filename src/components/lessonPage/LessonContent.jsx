import React from "react";
import * as icon from 'react-bootstrap-icons';

const LessonContent = ({ lesson, toggleSidebar, sidebarOpen }) => {
    // if (!lesson) return <p>Lesson not found.</p>;

    // return (
    //     <div className="lessonContent">
    //         <button onClick={toggleSidebar} className="toggleSidebarBtn">
    //             {sidebarOpen ? <icon.X /> : <icon.List />}
    //         </button>
    //         <h2 className="title">{lesson.title}</h2>
    //         {lesson.description && <p className="titleText">{lesson.description}</p>}

    //         {/* Ensure `lesson.lessons` exists and is an array before mapping */}
    //         {Array.isArray(lesson.lessons) && lesson.lessons.length > 0 ? (
    //             lesson.lessons.map((subLesson) => (
    //                 <div
    //                     id={subLesson.id}
    //                     className="subLesson"
    //                     key={subLesson.id}
    //                 >
    //                     <h3>{subLesson.title}</h3>
    //                     {subLesson.description && <p className="subLessonDesc">{subLesson.description}</p>}
    //                     <div className="subLessonContent">
    //                         {Array.isArray(subLesson.content) && subLesson.content.length > 0 ? (
    //                             subLesson.content.map((contentItem, index) => (
    //                                 <div key={index} className="contentItem">
    //                                     {contentItem}
    //                                 </div>
    //                             ))
    //                         ) : (
    //                             <p>No content available.</p>
    //                         )}
    //                     </div>
    //                 </div>
    //             ))
    //         ) : (
    //             <p>No sublessons available.</p>
    //         )}
    //     </div>
    // );
};

export default LessonContent;
