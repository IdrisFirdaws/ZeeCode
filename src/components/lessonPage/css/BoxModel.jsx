import React, { useState, useEffect } from 'react';

const BoxModel = ({ id }) => {
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

    const basicBoxModelCSSCode = `
/* Basic Box Model */
.box {
    width: 200px; /* Width of the box */
    padding: 20px; /* Space inside the box */
    border: 5px solid black; /* Border around the box */
    margin: 15px; /* Space outside the box */
}
    `;

    const advancedBoxModelCSSCode = `
/* Advanced Box Model */
.advanced-box {
    width: 300px;
    padding: 30px;
    border: 10px solid red;
    margin: 20px;
    box-sizing: border-box; /* Includes padding and border in the element's total width and height */
}
    `;

    const boxModelExampleHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Box Model Example</title>
    <style>
        /* Basic Box Model */
        .box {
            width: 200px;
            padding: 20px;
            border: 5px solid black;
            margin: 15px;
        }

        /* Advanced Box Model */
        .advanced-box {
            width: 300px;
            padding: 30px;
            border: 10px solid red;
            margin: 20px;
            box-sizing: border-box;
        }
    </style>
</head>
<body>
    <div class="box">Basic Box Model</div>
    <div class="advanced-box">Advanced Box Model</div>
</body>
</html>
    `;

    return (
        <div id="box_model" className="subLesson">
            <h3 className='subTitle'>Box Model</h3>
            <p className='subLessonText'>
                The CSS Box Model describes the rectangular boxes generated for elements in the document tree. Each box consists of four parts: content, padding, border, and margin.
            </p>

            <h4 className='subTextTitle'>Basic Box Model</h4>
            <p className='subText'>
                The basic box model includes:
            </p>
            <ul>
                <li><strong>Content:</strong> The area where text and images appear. The dimensions of this area are controlled by the `width` and `height` properties.</li>
                <li><strong>Padding:</strong> Space between the content and the border. Controlled by the `padding` property.</li>
                <li><strong>Border:</strong> A border surrounding the padding (if any). Controlled by the `border` property.</li>
                <li><strong>Margin:</strong> Space outside the border. Controlled by the `margin` property.</li>
            </ul>

            <h4 className='subTextTitle'>Example: Basic Box Model</h4>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">CSS</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(basicBoxModelCSSCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{basicBoxModelCSSCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>

            <h4 className='subTextTitle'>Example: Advanced Box Model</h4>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">CSS</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(advancedBoxModelCSSCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{advancedBoxModelCSSCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>

            <h4 className='subTextTitle'>Preview</h4>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                </div>
                <pre className="code-snippet">
                    <code>{boxModelExampleHTML}</code>
                </pre>
            </div>
            <iframe
                srcDoc={boxModelExampleHTML}
                className="code-preview"
                title="Box Model Preview"
            ></iframe>
        </div>
    );
};

export default BoxModel;
