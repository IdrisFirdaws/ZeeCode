// src/components/lessonPage/css/BoxModel.js
import React, { useEffect } from 'react';

const BoxModel = ({ id }) => {
    useEffect(() => {
        // Scroll into view if this is the active sublesson
        if (id === 'box_model') {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [id]);

    return (
        <div id="box_model" className="subLesson">
            <h3>Box Model</h3>
            <p>Box Model content goes here.</p>
            {/* Add more content and components as needed */}
        </div>
    );
};

export default BoxModel;
