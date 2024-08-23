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
import FormsAndInputElements from './html/FormsAndInputElements';
import Tables from './html/Tables';
import DocumentMetadata from './html/DocumentMetadata';
import HTMLEntities from './html/HTMLEntities';
import HTMLBestPractices from './html/HTMLBestPractices';

const HTMLContent = () => (
    <div className="lessonContent">
        <h2>HTML</h2>
        <Introduction />
        <ElementsAndTags />
        <Attributes />
        <TextFormatting />
        <LinksAndNavigation />
        <ImagesAndMultimedia />
        <FormsAndInputElements />
        <HTMLFeatures />
        <Tables />
        <DocumentMetadata />
        <HTMLEntities />
        <Accessibility />
        <HTMLBestPractices />
        <a className='ad' href="https://youtu.be/lL6huPLHc58" target="_blank" rel="noopener noreferrer">Practice: Build a webpage using only HTML</a>

    </div>
);

export default HTMLContent;
