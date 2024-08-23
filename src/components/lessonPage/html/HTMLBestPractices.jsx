import React, { useState } from 'react';

const HTMLBestPractices = () => {
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

    const bestPracticesExamples = [
        {
            title: 'Use Semantic HTML',
            description: 'Semantic HTML tags (like <header>, <footer>, <article>, and <section>) give meaning to the web page structure and improve accessibility and SEO.',
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
        <h1>Welcome to My Website</h1>
    </header>
    <main>
        <article>
            <h2>Article Title</h2>
            <p>This is the content of the article.</p>
        </article>
    </main>
    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
</body>
</html>
            `,
            fileType: 'HTML'
        },
        {
            title: 'Use Alt Attributes for Images',
            description: 'Always use the alt attribute for <img> elements to describe the content of the image. This improves accessibility for screen readers and helps with SEO.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alt Attribute Example</title>
</head>
<body>
    <img src="logo.png" alt="Company Logo">
</body>
</html>
            `,
            fileType: 'HTML'
        },
        {
            title: 'Use Proper Heading Hierarchy',
            description: 'Use headings (<h1>, <h2>, <h3>, etc.) to create a clear hierarchy of content. This helps users and search engines understand the structure of your content.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Heading Hierarchy Example</title>
</head>
<body>
    <h1>Main Heading</h1>
    <h2>Subheading 1</h2>
    <h3>Sub-subheading 1</h3>
    <h2>Subheading 2</h2>
</body>
</html>
            `,
            fileType: 'HTML'
        },
        {
            title: 'Use <label> for Form Elements',
            description: 'Always use <label> elements with form inputs to improve accessibility and usability. The for attribute should match the id of the corresponding input.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Label Example</title>
</head>
<body>
    <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
    </form>
</body>
</html>
            `,
            fileType: 'HTML'
        },
        {
            title: 'Avoid Inline Styles',
            description: 'Use external CSS for styling rather than inline styles to keep HTML clean and maintainable. External stylesheets also improve page load times and cacheability.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>External CSS Example</title>
</head>
<body>
    <h1 class="main-title">Welcome</h1>
</body>
</html>
            `,
            fileType: 'HTML'
        }
    ];

    return (
        <div id="html_best_practices" className="subLesson">
            <h3 className="subTitle">HTML Best Practices</h3>
            <p className="subLessonText">
                Following HTML best practices ensures that your code is clean, maintainable, and accessible. These practices help improve the structure and readability of your HTML documents, making them more user-friendly and SEO-friendly.
            </p>
            {bestPracticesExamples.map((example, index) => (
                <div key={index} className="tag-section">
                    <h4 className="subTextTitle">{example.title}</h4>
                    <p className="subText">{example.description}</p>
                    {renderCodeSnippet(example.code, example.fileType)}
                </div>
            ))}
        </div>
    );
};

export default HTMLBestPractices;
