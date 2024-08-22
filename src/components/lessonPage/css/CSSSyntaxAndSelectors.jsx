import React, { useState, useEffect } from 'react';

const CSSSyntaxAndSelectors = ({ id }) => {
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

    const basicCSSCode = `
p {
    color: blue;
    font-size: 16px;
}
    `;

    const elementSelectorHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Element Selector Example</title>
    <style>
        p {
            color: green;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <p>This paragraph is selected by the element selector.</p>
</body>
</html>
    `;

    const classSelectorHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class Selector Example</title>
    <style>
        .highlight {
            background-color: yellow;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <p class="highlight">This paragraph is selected by the class selector.</p>
</body>
</html>
    `;

    const idSelectorHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ID Selector Example</title>
    <style>
        #unique {
            color: red;
            text-align: center;
        }
    </style>
</head>
<body>
    <p id="unique">This paragraph is selected by the ID selector.</p>
</body>
</html>
    `;

    const combinedSelectorsHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Combined Selectors Example</title>
    <style>
        p {
            color: purple;
        }

        .highlight {
            background-color: yellow;
            font-weight: bold;
        }

        #unique {
            text-transform: uppercase;
        }
    </style>
</head>
<body>
    <p>This paragraph is selected by the element selector.</p>
    <p class="highlight">This paragraph is selected by the class selector.</p>
    <p id="unique">This paragraph is selected by the ID selector.</p>
    <p class="highlight" id="unique">This paragraph is selected by both class and ID selectors.</p>
</body>
</html>
    `;

    return (
        <div id="css_syntax_and_selectors" className="subLesson">
            <h3 className='subTitle'>CSS Syntax and Selectors</h3>
            <p className='subLessonText'>
                CSS (Cascading Style Sheets) is used to style the appearance of web pages. Understanding CSS syntax and selectors is fundamental to effectively applying styles to HTML elements.
            </p>

            <h4 className='subTextTitle'>CSS Syntax</h4>
            <p className='subText'>
                A CSS rule is composed of a selector and a declaration block. The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.
            </p>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">CSS</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(basicCSSCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{basicCSSCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>

            <h4 className='subTextTitle'>CSS Selectors</h4>
            <p className='subText'>
                CSS selectors are used to "select" the HTML elements you want to style. There are several types of selectors:
            </p>
            <ul>
                <li><strong>Element Selector:</strong> Targets elements by their tag name.</li>
                <li><strong>Class Selector:</strong> Targets elements with a specific class attribute.</li>
                <li><strong>ID Selector:</strong> Targets a single element with a specific id attribute.</li>
                <li><strong>Combined Selectors:</strong> Multiple selectors can be combined for more specific targeting.</li>
            </ul>

            <h4 className='subTextTitle'>Example: Element Selector</h4>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML + CSS</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(elementSelectorHTML)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{elementSelectorHTML}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={elementSelectorHTML}
                className="code-preview"
                title="Element Selector Preview"
            ></iframe>

            <h4 className='subTextTitle'>Example: Class Selector</h4>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML + CSS</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(classSelectorHTML)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{classSelectorHTML}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={classSelectorHTML}
                className="code-preview"
                title="Class Selector Preview"
            ></iframe>

            <h4 className='subTextTitle'>Example: ID Selector</h4>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML + CSS</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(idSelectorHTML)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{idSelectorHTML}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={idSelectorHTML}
                className="code-preview"
                title="ID Selector Preview"
            ></iframe>

            <h4 className='subTextTitle'>Example: Combined Selectors</h4>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML + CSS</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(combinedSelectorsHTML)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{combinedSelectorsHTML}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={combinedSelectorsHTML}
                className="code-preview"
                title="Combined Selectors Preview"
            ></iframe>
        </div>
    );
};

export default CSSSyntaxAndSelectors;
