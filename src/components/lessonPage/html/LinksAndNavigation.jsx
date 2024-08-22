import React, { useState, useEffect } from 'react';

const LinksAndNavigation = ({ id }) => {
    useEffect(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, [id]);

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

    const navigationExamples = [
        {
            title: 'Basic Link',
            description: 'The <a> tag is used to create hyperlinks. The href attribute specifies the URL of the page the link goes to.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="https://example.com">Visit Example.com</a>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '100px'
        },
        {
            title: 'Open Link in New Tab',
            description: 'To open a link in a new tab, use the target="_blank" attribute in the <a> tag.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="https://example.com" target="_blank">Visit Example.com in New Tab</a>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '100px'
        },
        {
            title: 'Internal Links',
            description: 'Internal links are used to navigate within the same webpage. The href attribute contains a hash (#) followed by the ID of the element you want to scroll to.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="#section1">Go to Section 1</a>
    <a href="#section2">Go to Section 2</a>
    <h2 id="section1">Section 1</h2>
    <p>This is the first section.</p>
    <h2 id="section2">Section 2</h2>
    <p>This is the second section.</p>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '150px'
        },
        {
            title: 'Navigation Menu',
            description: 'A navigation menu is a list of links that allows users to navigate to different pages or sections of a website.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <h2 id="home">Home</h2>
    <p>Welcome to the homepage.</p>
    <h2 id="about">About</h2>
    <p>This is the about section.</p>
    <h2 id="services">Services</h2>
    <p>Here are the services we offer.</p>
    <h2 id="contact">Contact</h2>
    <p>Get in touch with us.</p>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '200px'
        },
        {
            title: 'Image as Link',
            description: 'You can use an image as a link by placing an <img> tag inside an <a> tag.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="https://example.com">
        <img src="https://via.placeholder.com/150" alt="Example Image">
    </a>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '150px'
        }
    ];

    return (
        <div id="links_and_navigation" className="subLesson">
            <h3 className="subTitle">Links and Navigation</h3>
            <p className="subLessonText">
                Links are an essential part of web navigation. They allow users to move between different pages or sections of a website. In this lesson, we'll explore how to create different types of links and navigation menus in HTML.
            </p>
            {navigationExamples.map((example, index) => (
                <div key={index} className="tag-section">
                    <h4 className="subTextTitle">{example.title}</h4>
                    <p className="subText">{example.description}</p>
                    {renderCodeSnippet(example.code, example.fileType)}
                    <h4 className="subTextTitle">Preview:</h4>
                    <iframe
                        srcDoc={example.code}
                        className="code-preview"
                        style={{ height: example.previewHeight }}
                        title={`${example.title} Preview`}
                    ></iframe>
                </div>
            ))}
        </div>
    );
};

export default LinksAndNavigation;
