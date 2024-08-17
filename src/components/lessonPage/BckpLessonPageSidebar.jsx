// Sidebar.js
import React from 'react';

const Sidebar = ({ subLessons, toggleSidebar, sidebarOpen }) => {
    const handleScrollToSubLesson = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="sidebar">
            <h3 className='subTitle'>Sublessons</h3>
            <ul>
                {subLessons.map((subLesson) => (
                    <li key={subLesson.id} onClick={toggleSidebar}>
                        <button onClick={() => handleScrollToSubLesson(subLesson.id)} >
                            {subLesson.title}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
