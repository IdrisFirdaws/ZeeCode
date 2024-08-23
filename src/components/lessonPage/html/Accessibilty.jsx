import React, { useState } from 'react';

const AccessibilityOverview = () => {
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

    const accessibilityExamples = [
        {
            title: 'Introduction to Accessibility',
            description: 'Accessibility (a11y) refers to the design of products, devices, services, or environments for people with disabilities. In the context of web development, it involves creating web content that can be accessed by people with various disabilities, including visual, auditory, cognitive, and physical impairments.',
            code: '',
            fileType: ''
        },
        {
            title: 'Importance of Accessibility',
            description: 'Making your website accessible ensures that it can be used by as many people as possible, including those with disabilities. Accessibility also improves the overall user experience and can have a positive impact on SEO.',
            code: '',
            fileType: ''
        },
        {
            title: 'Key Concepts in Accessibility',
            description: 'Some key concepts in web accessibility include semantic HTML, ARIA (Accessible Rich Internet Applications) roles, keyboard navigation, and providing alternative text for non-text content.',
            code: '',
            fileType: ''
        },
        {
            title: 'Semantic HTML',
            description: 'Using semantic HTML elements like <header>, <footer>, <main>, <nav>, and <section> helps convey the meaning and structure of the content to assistive technologies.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic HTML Example</title>
</head>
<body>
    <header>
        <h1>Website Title</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
        </ul>
    </nav>
    <main>
        <section id="home">
            <h2>Home Section</h2>
            <p>Content for the home section.</p>
        </section>
        <section id="about">
            <h2>About Section</h2>
            <p>Content for the about section.</p>
        </section>
    </main>
    <footer>
        <p>Footer content.</p>
    </footer>
</body>
</html>
            `,
            fileType: 'HTML'
        },
        {
            title: 'ARIA Roles and Attributes',
            description: 'ARIA roles and attributes can be used to enhance accessibility for dynamic content and complex web applications. For example, the role="alert" attribute is used to identify an element as an alert, which should be announced by screen readers.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ARIA Roles Example</title>
</head>
<body>
    <div role="alert">This is an important alert message!</div>
</body>
</html>
            `,
            fileType: 'HTML'
        },
        {
            title: 'Keyboard Accessibility',
            description: 'Ensure that all interactive elements are accessible using keyboard navigation. This includes providing keyboard focus and handling keyboard events properly.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Keyboard Accessibility Example</title>
</head>
<body>
    <button tabindex="0">Click Me</button>
</body>
</html>
            `,
            fileType: 'HTML'
        }
    ];

    return (
        <div id="accessibility" className="subLesson">
            <h3 className="subTitle">Accessibility (a11y) Overview</h3>
            <p className="subLessonText">
                Accessibility (a11y) in web development ensures that websites are usable by people with various disabilities. It involves using semantic HTML, ARIA roles, and ensuring keyboard accessibility to create an inclusive web experience.
            </p>
            {accessibilityExamples.map((example, index) => (
                <div key={index} className="tag-section">
                    <h4 className="subTextTitle">{example.title}</h4>
                    <p className="subText">{example.description}</p>
                    {example.code && renderCodeSnippet(example.code, example.fileType)}
                </div>
            ))}
        </div>
    );
};

export default AccessibilityOverview;
