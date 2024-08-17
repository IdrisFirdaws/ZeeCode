import React, { useState, useEffect } from 'react';

const Accessibility = ({ id }) => {
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
        alt: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <img src="https://via.placeholder.com/150" alt="Placeholder image description">
</body>
</html>
        `,
        ariaLabel: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button aria-label="Close">X</button>
</body>
</html>
        `,
        role: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <nav role="navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
    </nav>
</body>
</html>
        `,
        tabindex: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="#home" tabindex="1">Home</a>
    <a href="#about" tabindex="2">About</a>
</body>
</html>
        `,
        ariaDescribedBy: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <label id="description">Enter your name:</label>
    <input type="text" aria-describedby="description">
</body>
</html>
        `,
        ariaLive: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div aria-live="polite">
        <p>Live region content updates dynamically.</p>
    </div>
</body>
</html>
        `
    };

    const getDescription = (attr) => {
        const descriptions = {
            alt: 'provide alternative text for images if they cannot be displayed.',
            ariaLabel: 'provide an accessible name for interactive elements.',
            role: 'define the role of an element to help assistive technologies understand its purpose.',
            tabindex: 'control the order in which elements receive focus when navigating with a keyboard.',
            ariaDescribedBy: 'provide a reference to an element that describes the current element.',
            ariaLive: 'announce dynamic content updates to screen readers.'
        };

        return descriptions[attr] || 'provide additional information about an element.';
    };

    return (
        <div id='accessibility_a11y' className="subLesson">
            <h3 className="subTitle">Accessibility (a11y)</h3>
            <p className="subLessonText">
                Accessibility (a11y) ensures that web content is usable by everyone, including people with disabilities. Here are some key accessibility attributes and techniques:
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

export default Accessibility;
