// src/components/lessonPage/CSSContent.js
import React from 'react';
import IntroductionToCSS from './css/IntroductionToCSS';
import BoxModel from './css/BoxModel';
import CSSSyntaxAndSelectors from './css/CSSSyntaxAndSelectors';
import CSSColorsAndUnits from './css/CSSColorAndUnits';
import Typography from './css/Typography';
import LayoutTechniques from './css/LayoutTechniques';
import ResponsiveDesign from './css/ResponsiveDesign';
import StylingForms from './css/StylingForms';
import TransitionsAndAnimations from './css/TransitionAndAnimation';
import CSSVariables from './css/CSSVariables';
import AdvancedLayoutTechniques from './css/AdvancedLayoutTechniques';


const CSSContent = () => (
    <div className="lessonContent">
        <h2 className='title'>CSS</h2>
        <h2 className='title'>This lesson is still being updated</h2>
        <IntroductionToCSS />
        <CSSSyntaxAndSelectors />
        <CSSColorsAndUnits />
        <Typography />
        <BoxModel />
        <LayoutTechniques />
        <ResponsiveDesign />
        <StylingForms />
        <TransitionsAndAnimations />
        <CSSVariables />
        <AdvancedLayoutTechniques />
    </div>
);

export default CSSContent;
