// src/components/lessonPage/CSSContent.js
import React from 'react';
import IntroductionToCSS from './css/IntroductionToCSS';
import BoxModel from './css/BoxModel';
import CSSSyntaxAndSelectors from './css/CSSSyntaxAndSelectors';
import CSSColorsAndUnits from './css/CSSColorAndUnits';
import Typography from './css/Typography';


const CSSContent = () => (
    <div className="lessonContent">
        <h2 className='title'>CSS</h2>
        <h2 className='title'>This lesson is still being updated</h2>
        <IntroductionToCSS />
        <CSSSyntaxAndSelectors />
        <CSSColorsAndUnits />
        <Typography />
        <BoxModel />
    </div>
);

export default CSSContent;
