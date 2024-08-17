import React, { useState, useEffect } from 'react';

const Attributes = ({ id }) => {
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

    const codeSnippets = {
        id: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="main-title">Main Title</h1>
</body>
</html>
        `,
        href: `
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
        src: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <img src="https://via.placeholder.com/150" alt="Placeholder Image">
</body>
</html>
        `,
        alt: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <img src="https://via.placeholder.com/150" alt="An example image">
</body>
</html>
        `,
        title: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="https://example.com" title="Go to Example.com">Visit Example.com</a>
</body>
</html>
        `,
        style: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p style="color: blue;">This is a blue paragraph.</p>
</body>
</html>
        `,
        lang: `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Este es un documento en español.</p>
</body>
</html>
        `,
        charset: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>This document uses UTF-8 encoding.</p>
</body>
</html>
        `
    };

    const getDescription = (attr) => {
        const descriptions = {
            id: 'specify a unique id for an HTML element. It is often used to select elements with JavaScript or CSS.',
            href: 'specify the URL of the page that the link goes to.',
            src: 'specify the path to an image, video, or other embedded content.',
            alt: 'provide alternative text for an image if it cannot be displayed.',
            title: 'specify extra information about an element, usually shown as a tooltip when the mouse is over the element.',
            style: 'apply inline CSS styles to an element.',
            lang: 'declare the language of an HTML document.',
            charset: 'declare the character encoding of the document.'
        };

        return descriptions[attr] || 'provide additional information about an element.';
    };

    return (
        <div id='attributes' className="subLesson">
            <h3 className="subTitle">HTML Attributes</h3>
            <p className="subLessonText">
                HTML attributes provide additional information about HTML elements. They are always specified in the start tag and usually come in name/value pairs like <code>name="value"</code>. Here are some commonly used HTML attributes:
            </p>

            {Object.entries(codeSnippets).map(([attr, code]) => (
                <React.Fragment key={attr}>
                    <h4 className="subTextTitle">
                        {attr.charAt(0).toUpperCase() + attr.slice(1)} Attribute
                    </h4>
                    <p className="subText">
                        The <code>{attr}</code> attribute is used to {getDescription(attr)}.
                    </p>
                    {renderCodeSnippet(code, 'HTML')}
                    <h4 className="subTextTitle">Preview:</h4>
                    <iframe
                        srcDoc={code}
                        className="code-preview"
                        title={`${attr.charAt(0).toUpperCase() + attr.slice(1)} Attribute Preview`}
                    ></iframe>
                </React.Fragment>
            ))}
        </div>
    );
};

export default Attributes;
