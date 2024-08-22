import React, { useState, useEffect } from 'react';

const IntroductionToCSS = ({ id }) => {
    useEffect(() => {
        // Scroll to the element if the ID matches the passed ID
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, [id]);

    const [copied, setCopied] = useState('');

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code);
        setCopied('Copied!');
        setTimeout(() => setCopied(''), 2000); // Clear the message after 2 seconds
    };

    const inlineCSSCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inline CSS Example</title>
</head>
<body>
    <p style="color: red;">This is a red paragraph.</p>
</body>
</html>
    `;

    const internalCSSCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Internal CSS Example</title>
    <style>
        p {
            color: blue;
        }
    </style>
</head>
<body>
    <p>This is a blue paragraph.</p>
</body>
</html>
    `;

    const externalCSSHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>External CSS Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <p class="styled-paragraph">This is a styled paragraph.</p>
</body>
</html>
    `;

    const externalCSSCode = `
/* styles.css */
.styled-paragraph {
    color: green;
    font-weight: bold;
}
    `;

    return (
        <div id="introductionToCSS" className="subLesson">
            <h3 className='subTitle'>Introduction to CSS</h3>
            <p className='subLessonText'>
                CSS (Cascading Style Sheets) is a language used to style and layout web pages. It allows you to control the appearance of elements on a webpage, including colors, fonts, spacing, and positioning.
            </p>

            <h4 className='subTextTitle'>What is CSS?</h4>
            <p className='subText'>
                CSS provides the look and feel of your web pages. It works alongside HTML to define how the content should be presented to the users. CSS can be applied in three different ways: inline, internal, and external.
            </p>

            <h4 className='subTextTitle'>Example: Inline CSS</h4>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(inlineCSSCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{inlineCSSCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={inlineCSSCode}
                className="code-preview"
                title="Inline CSS Preview"
            ></iframe>

            <h4 className='subTextTitle'>Example: Internal CSS</h4>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML + CSS</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(internalCSSCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{internalCSSCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={internalCSSCode}
                className="code-preview"
                title="Internal CSS Preview"
            ></iframe>

            <h4 className='subTextTitle'>Example: External CSS</h4>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(externalCSSHTML)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{externalCSSHTML}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">CSS</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(externalCSSCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{externalCSSCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={`<style>${externalCSSCode}</style>${externalCSSHTML}`}
                className="code-preview"
                title="External CSS Preview"
            ></iframe>
        </div>
    );
};

export default IntroductionToCSS;
