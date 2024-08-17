// Example in HTMLContent.js
import React from 'react';
import Introduction from './html/Introduction';
import ElementsAndTags from './html/ElementsAndTags';
import Attributes from './html/Attributes';
import Accessibility from './html/Accessibilty';
import HTMLFeatures from './html/HTMLFeatures';

const HTMLContent = () => (
    <div className="lessonContent">
        <h2>HTML</h2>
        <Introduction />
        <ElementsAndTags />
        <Attributes />
        <Accessibility />
        <HTMLFeatures />
    </div>
);

export default HTMLContent;
