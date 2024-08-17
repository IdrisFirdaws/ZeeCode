import React, { useState, useEffect } from 'react';

const Introduction = ({ id }) => {
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

    const htmlCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello, world!</h1>
    <p>This is a paragraph.</p>
</body>
</html>
    `;

    return (
        <div id="introduction" className="subLesson">
            <h3 className='subTitle'>Introduction to HTML</h3>
            <p className='subLessonText'>
                HTML (HyperText Markup Language) is the standard markup language used to create web pages.
                It provides the basic structure for web documents and is used alongside CSS and JavaScript
                to create interactive and styled web pages.
            </p>
            <h4 className='subTextTitle'>Basic HTML Structure</h4>
            <p className='subText'>
                A basic HTML document consists of the following components:
            </p>
            <ul>
                <li><strong>DOCTYPE Declaration:</strong> Specifies the document type and version of HTML.</li>
                <li><strong>html:</strong> The root element that wraps all the content on the page.</li>
                <li><strong>head:</strong> Contains metadata about the document, such as title and link to stylesheets.</li>
                <li><strong>body:</strong> Contains the content of the page, including headings, paragraphs, images, and more.</li>
            </ul>
            <h4 className='subTextTitle'>Example</h4>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(htmlCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{htmlCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={htmlCode}
                className="code-preview"
                title="HTML Preview"
            ></iframe>
        </div>
    );
};

export default Introduction;
