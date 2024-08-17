import React, { useState } from 'react';

const IntroductionToCSS = () => {
    const [copied, setCopied] = useState('');

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code);
        setCopied('Copied!');
        setTimeout(() => setCopied(''), 2000);
    };

    const renderCodeSnippet = (code, fileType) => (
        <div className="code-snippet-container">
            <div className="code-snippet-header">
                <span className="file-type">{fileType}</span>
                <button className="copy-code-btn" onClick={() => handleCopy(code)}>
                    Copy Code
                </button>
            </div>
            <pre className="code-snippet">
                <code>{code}</code>
            </pre>
            {copied && <p className="copy-status">{copied}</p>}
        </div>
    );

    const cssCodeIntro = `
/* Introduction to CSS */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

h1 {
    color: #333;
    text-align: center;
}
    `;

    return (
        <div id="introduction-css" className="subLesson">
            <h3 className='subTitle'>Introduction to CSS</h3>
            <p className='subLessonText'>
                CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML. CSS defines how elements should be displayed on screen, paper, or in other media.
            </p>
            {renderCodeSnippet(cssCodeIntro, 'CSS')}
            <h4 className='subTextTitle'>Preview:</h4>
            <iframe
                srcDoc={cssCodeIntro}
                className="code-preview"
                title="CSS Introduction Preview"
            ></iframe>
        </div>
    );
};

export default IntroductionToCSS;
