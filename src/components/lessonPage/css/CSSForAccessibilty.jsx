import React, { useState, useEffect } from 'react';

const CSSForAccessibility = ({ id }) => {
    useEffect(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, [id]);

    const [copied, setCopied] = useState('');

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code);
        setCopied('Copied!');
        setTimeout(() => setCopied(''), 2000);
    };

    const accessibilityExamples = [
        {
            title: 'Ensure Sufficient Color Contrast',
            description: 'Color contrast is essential for readability. Ensure that the text color has enough contrast against the background color to be readable by users with visual impairments. Use tools like the WebAIM Contrast Checker to test your color choices.',
            cssCode: `
/* Accessible Text Color */
body {
    background-color: #ffffff;
    color: #000000;
}

/* Ensure good contrast */
h1, h2, h3, h4, h5, h6 {
    color: #000000; /* High contrast text color */
    background-color: #f0f0f0; /* Subtle background color */
}`,
            previewHtml: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* Accessible Text Color */
        body {
            background-color: #ffffff;
            color: #000000;
        }

        /* Ensure good contrast */
        h1, h2, h3, h4, h5, h6 {
            color: #000000; /* High contrast text color */
            background-color: #f0f0f0; /* Subtle background color */
        }
    </style>
    <title>Color Contrast Example</title>
</head>
<body>
    <h1>Accessible Heading</h1>
    <p>This is a paragraph with sufficient color contrast.</p>
</body>
</html>
`
        },
        {
            title: 'Provide Clear Focus Indicators',
            description: 'Focus indicators like outlines are crucial for keyboard navigation. Ensure that interactive elements such as buttons and links have clear focus styles to assist users who navigate using keyboards or assistive technologies.',
            cssCode: `
/* Focus Indicator */
button:focus, a:focus {
    outline: 3px solid #3498db; /* Visible outline on focus */
    outline-offset: 2px; /* Offset the outline slightly for better visibility */
}

/* Remove default outline for custom styling */
button {
    outline: none; /* Remove default outline */
    border: 2px solid #3498db; /* Custom border */
}`,
            previewHtml: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* Focus Indicator */
        button:focus, a:focus {
            outline: 3px solid #3498db; /* Visible outline on focus */
            outline-offset: 2px; /* Offset the outline slightly for better visibility */
        }

        /* Remove default outline for custom styling */
        button {
            outline: none; /* Remove default outline */
            border: 2px solid #3498db; /* Custom border */
        }
    </style>
    <title>Focus Indicator Example</title>
</head>
<body>
    <button>Focus Me</button>
    <a href="#">Focus Me Too</a>
</body>
</html>
`
        },
        {
            title: 'Use Semantic HTML Elements',
            description: 'Semantic HTML elements provide meaning and structure to content, making it easier for screen readers to interpret. Use elements like <header>, <nav>, <main>, <section>, and <footer> to structure your content logically.',
            cssCode: `
/* Semantic HTML Structure */
header, nav, main, section, footer {
    display: block; /* Ensure these elements are block-level */
    padding: 20px;
    margin: 0 auto;
    max-width: 1200px;
}

/* Styling for screen reader text */
.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}`,
            previewHtml: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* Semantic HTML Structure */
        header, nav, main, section, footer {
            display: block; /* Ensure these elements are block-level */
            padding: 20px;
            margin: 0 auto;
            max-width: 1200px;
        }

        /* Styling for screen reader text */
        .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            margin: -1px;
            padding: 0;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            border: 0;
        }
    </style>
    <title>Semantic HTML Example</title>
</head>
<body>
    <header>
        <h1>Website Header</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    <main>
        <section>
            <h2>Main Section</h2>
            <p>This is a paragraph in the main section.</p>
        </section>
    </main>
    <footer>
        <p>Footer Content</p>
    </footer>
</body>
</html>
`
        },
        {
            title: 'Ensure Readable Typography',
            description: 'Typography plays a significant role in accessibility. Use readable fonts, appropriate sizes, and line spacing. Avoid overly small text and ensure that text is legible across different devices and screen sizes.',
            cssCode: `
/* Readable Typography */
body {
    font-family: Arial, sans-serif;
    font-size: 16px; /* Base font size */
    line-height: 1.6; /* Line height for readability */
}

h1 {
    font-size: 2em; /* Larger font size for headings */
    margin-bottom: 0.5em;
}

p {
    margin-bottom: 1em;
}`,
            previewHtml: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* Readable Typography */
        body {
            font-family: Arial, sans-serif;
            font-size: 16px; /* Base font size */
            line-height: 1.6; /* Line height for readability */
        }

        h1 {
            font-size: 2em; /* Larger font size for headings */
            margin-bottom: 0.5em;
        }

        p {
            margin-bottom: 1em;
        }
    </style>
    <title>Readable Typography Example</title>
</head>
<body>
    <h1>Heading 1</h1>
    <p>This is a sample paragraph demonstrating readable typography.</p>
</body>
</html>
`
        },
        {
            title: 'Avoid Using Color Alone to Convey Information',
            description: 'Do not rely solely on color to convey information. Ensure that text or icons are used in addition to color to provide context. This helps users with color blindness or other visual impairments understand content accurately.',
            cssCode: `
/* Color and Text Indicator */
.error {
    color: #e74c3c;
    font-weight: bold;
}

.error::before {
    content: "⚠️"; /* Adding an icon for additional context */
    margin-right: 5px;
}

.success {
    color: #2ecc71;
    font-weight: bold;
}

.success::before {
    content: "✅"; /* Adding an icon for additional context */
    margin-right: 5px;
}`,
            previewHtml: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* Color and Text Indicator */
        .error {
            color: #e74c3c;
            font-weight: bold;
        }

        .error::before {
            content: "⚠️"; /* Adding an icon for additional context */
            margin-right: 5px;
        }

        .success {
            color: #2ecc71;
            font-weight: bold;
        }

        .success::before {
            content: "✅"; /* Adding an icon for additional context */
            margin-right: 5px;
        }
    </style>
    <title>Color and Text Example</title>
</head>
<body>
    <p class="error">Error message</p>
    <p class="success">Success message</p>
</body>
</html>
`
        }
    ];

    return (
        <div id="css_for_accessibility" className="subLesson">
            <h3 className="subTitle">CSS for Accessibility</h3>
            <p className="subLessonText">
                Making your CSS accessible ensures that your website or application is usable by people with various disabilities. Here are key practices to enhance accessibility in your CSS:
            </p>

            {accessibilityExamples.map((example, index) => (
                <div key={index}>
                    <h4 className="subTextTitle">{example.title}</h4>
                    <p className="subText">{example.description}</p>

                    <h5 className="subTextTitle">CSS Code</h5>
                    <div className="code-snippet-container">
                        <div className="code-snippet-header">
                            <span className="file-type">CSS</span>
                            <button className="copy-code-btn" onClick={() => handleCopy(example.cssCode)}>
                                Copy Code
                            </button>
                        </div>
                        <pre className="code-snippet">
                            <code>{example.cssCode}</code>
                        </pre>
                        {copied && <p className="copy-status">{copied}</p>}
                    </div>

                    <h5 className="subTextTitle">HTML Preview</h5>
                    <iframe
                        srcDoc={example.previewHtml}
                        title={`Preview for ${example.title}`}
                        className="code-preview"
                        sandbox="allow-same-origin"
                    ></iframe>
                </div>
            ))}
        </div>
    );
};

export default CSSForAccessibility;
