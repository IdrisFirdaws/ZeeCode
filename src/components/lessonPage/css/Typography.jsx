import React, { useState, useEffect } from 'react';

const Typography = ({ id }) => {
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

    const typographyCSSCode = `
/* Font Properties */
p {
    font-family: Arial, sans-serif; /* Font family */
    font-size: 16px; /* Font size */
    font-weight: bold; /* Font weight */
    line-height: 1.5; /* Line height */
}

/* Text Properties */
h1 {
    text-align: center; /* Text alignment */
    text-transform: uppercase; /* Text transformation */
    letter-spacing: 2px; /* Letter spacing */
    word-spacing: 4px; /* Word spacing */
}
    `;

    const typographyExampleHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Typography Example</title>
    <style>
        p {
            font-family: Arial, sans-serif; /* Font family */
            font-size: 16px; /* Font size */
            font-weight: bold; /* Font weight */
            line-height: 1.5; /* Line height */
        }

        h1 {
            text-align: center; /* Text alignment */
            text-transform: uppercase; /* Text transformation */
            letter-spacing: 2px; /* Letter spacing */
            word-spacing: 4px; /* Word spacing */
        }
    </style>
</head>
<body>
    <h1>Typography Example</h1>
    <p>This paragraph demonstrates font properties such as font family, size, weight, and line height.</p>
    <p>Typography plays a crucial role in making content readable and visually appealing.</p>
</body>
</html>
    `;

    return (
        <div id="typography" className="subLesson">
            <h3 className='subTitle'>Typography</h3>
            <p className='subLessonText'>
                Typography in CSS involves the styling of text to enhance readability and visual appeal. It includes setting font properties, text alignment, spacing, and transformations.
            </p>

            <h4 className='subTextTitle'>Font Properties</h4>
            <p className='subText'>
                Font properties control how text is displayed in terms of its typeface, size, weight, and spacing. Key properties include:
            </p>
            <ul>
                <li><strong>font-family:</strong> Defines the typeface used for the text.</li>
                <li><strong>font-size:</strong> Specifies the size of the font.</li>
                <li><strong>font-weight:</strong> Sets the thickness of the font (e.g., normal, bold).</li>
                <li><strong>line-height:</strong> Controls the space between lines of text.</li>
            </ul>

            <h4 className='subTextTitle'>Text Properties</h4>
            <p className='subText'>
                Text properties affect the alignment, transformation, and spacing of text. These include:
            </p>
            <ul>
                <li><strong>text-align:</strong> Aligns text within its container (e.g., left, center, right).</li>
                <li><strong>text-transform:</strong> Controls the capitalization of text (e.g., uppercase, lowercase).</li>
                <li><strong>letter-spacing:</strong> Adjusts the space between individual letters.</li>
                <li><strong>word-spacing:</strong> Adjusts the space between words.</li>
            </ul>

            <h4 className='subTextTitle'>Example: Typography</h4>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML + CSS</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(typographyExampleHTML)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{typographyExampleHTML}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={typographyExampleHTML}
                className="code-preview"
                title="Typography Preview"
            ></iframe>
        </div>
    );
};

export default Typography;
