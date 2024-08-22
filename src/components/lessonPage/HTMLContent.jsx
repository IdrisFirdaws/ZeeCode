// Example in HTMLContent.js
import React from 'react';
import Introduction from './html/Introduction';
import ElementsAndTags from './html/ElementsAndTags';
import Attributes from './html/Attributes';
import Accessibility from './html/Accessibilty';
import HTMLFeatures from './html/HTMLFeatures';
import TextFormatting from './html/TextFormating';
import LinksAndNavigation from './html/LinksAndNavigation';
import ImagesAndMultimedia from './html/ImagesAndMultimedia';

const HTMLContent = () => (
    <div className="lessonContent">
        <h2>HTML</h2>
        <Introduction />
        <ElementsAndTags />
        <Attributes />
        {/* <Accessibility />
        <HTMLFeatures /> */}
        <TextFormatting />
        <LinksAndNavigation />
        <ImagesAndMultimedia />
    </div>
);

export default HTMLContent;
