// src/components/lessonPage/CSSContent.js
import React from 'react';
import IntroductionToCSS from './css/IntroductionToCSS';
import BoxModel from './css/BoxModel';
// import Layout from './css/Layout';
// import ResponsiveDesign from './css/ResponsiveDesign';
// import CSSPreprocessors from './css/CSSPreprocessors';
// import AnimationsAndTransitions from './css/AnimationsAndTransitions';
// import CSSFrameworks from './css/CSSFrameworks';

const CSSContent = () => (
    <div className="lessonContent">
        <h2 className='title'>CSS</h2>
        <h2 className='title'>This lesson is still being updated</h2>
        <IntroductionToCSS />
        <BoxModel />
        {/* Uncomment and add the rest of the components as needed */}
        {/* <Layout />
        <ResponsiveDesign />
        <CSSPreprocessors />
        <AnimationsAndTransitions />
        <CSSFrameworks /> */}
    </div>
);

export default CSSContent;
