import React, { useState, useEffect } from 'react';

const HTMLFeatures = ({ id }) => {
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
        form: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/submit" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        
        <button type="submit">Submit</button>
    </form>
</body>
</html>
        `,
        semantic: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <h1>My Website</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section>
            <h2>Introduction</h2>
            <p>Welcome to my website!</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
</body>
</html>
        `,
        media: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <video controls>
        <source src="video.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    
    <audio controls>
        <source src="audio.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    
    <img src="https://via.placeholder.com/300" alt="Placeholder image">
</body>
</html>
        `,
        iframe: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <iframe src="https://www.example.com" width="600" height="400" title="Example Website"></iframe>
</body>
</html>
        `,
        meta: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A brief description of the page">
    <meta name="keywords" content="HTML, meta tags, SEO">
    <meta name="author" content="Your Name">
    <title>Document</title>
</head>
<body>
    <p>Meta tags are used to provide metadata about the HTML document.</p>
</body>
</html>
        `
    };

    const getDescription = (feature) => {
        const descriptions = {
            form: 'create interactive forms for user input.',
            semantic: 'use semantic elements to structure your document for better readability and SEO.',
            media: 'embed media elements like videos, audio, and images.',
            iframe: 'embed another document within the current document.',
            meta: 'provide metadata about the HTML document, such as description, keywords, and author.'
        };

        return descriptions[feature] || 'provide additional information about an element.';
    };

    return (
        <div id='html5_features' className="subLesson">
            <h3 className="subTitle">HTML Features</h3>
            <p className="subLessonText">
                HTML features include various elements and attributes that enhance the functionality and accessibility of web pages. Here are some important HTML features:
            </p>

            {Object.entries(codeSnippets).map(([feature, code]) => (
                <React.Fragment key={feature}>
                    <h4 className="subTextTitle">
                        {feature.charAt(0).toUpperCase() + feature.slice(1)} Feature
                    </h4>
                    <p className="subText">
                        The <code>{feature}</code> feature is used to {getDescription(feature)}.
                    </p>
                    {renderCodeSnippet(code, 'HTML')}
                    <h4 className="subTextTitle">Preview:</h4>
                    <iframe
                        srcDoc={code}
                        className="code-preview"
                        title={`${feature.charAt(0).toUpperCase() + feature.slice(1)} Feature Preview`}
                    ></iframe>
                </React.Fragment>
            ))}
        </div>
    );
};

export default HTMLFeatures;
