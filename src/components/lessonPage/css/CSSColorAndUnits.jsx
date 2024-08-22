import React, { useState, useEffect } from 'react';

const CSSColorsAndUnits = ({ id }) => {
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

    const colorCSSCode = `
/* Color Values */
p {
    color: blue; /* Named color */
    background-color: #f0f0f0; /* Hex color */
}

/* RGBA Color */
div {
    color: rgba(255, 99, 71, 0.5); /* RGBA color with opacity */
}

/* HSL Color */
h1 {
    color: hsl(120, 100%, 50%); /* HSL color */
}
    `;

    const colorExampleHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Example</title>
    <style>
        p {
            color: blue; /* Named color */
            background-color: #f0f0f0; /* Hex color */
        }

        div {
            color: rgba(255, 99, 71, 0.5); /* RGBA color with opacity */
        }

        h1 {
            color: hsl(120, 100%, 50%); /* HSL color */
        }
    </style>
</head>
<body>
    <p>This paragraph uses named and hex colors.</p>
    <div>This div uses RGBA color.</div>
    <h1>This heading uses HSL color.</h1>
</body>
</html>
    `;

    const cssUnitsCode = `
/* CSS Units */
p {
    font-size: 16px; /* Pixels */
    margin: 2em; /* EM units */
    padding: 1rem; /* REM units */
    width: 50%; /* Percentage */
}
    `;

    const unitsExampleHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Units Example</title>
    <style>
        p {
            font-size: 16px; /* Pixels */
            margin: 2em; /* EM units */
            padding: 1rem; /* REM units */
            width: 50%; /* Percentage */
        }
    </style>
</head>
<body>
    <p>This paragraph demonstrates various CSS units.</p>
</body>
</html>
    `;

    return (
        <div id="css_colors_and_units" className="subLesson">
            <h3 className='subTitle'>CSS Colors and Units</h3>
            <p className='subLessonText'>
                CSS colors and units are essential for styling web pages. Colors can be defined using various formats, and units help in setting sizes and spacing in a flexible manner.
            </p>

            <h4 className='subTextTitle'>CSS Colors</h4>
            <p className='subText'>
                Colors in CSS can be defined using several formats:
            </p>
            <ul>
                <li><strong>Named Colors:</strong> Standard color names like <code>blue</code>.</li>
                <li><strong>Hex Colors:</strong> Color codes in hexadecimal format, e.g., <code>#f0f0f0</code>.</li>
                <li><strong>RGBA Colors:</strong> Colors with Red, Green, Blue, and Alpha (opacity) values, e.g., <code>rgba(255, 99, 71, 0.5)</code>.</li>
                <li><strong>HSL Colors:</strong> Colors based on Hue, Saturation, and Lightness, e.g., <code>hsl(120, 100%, 50%)</code>.</li>
            </ul>

            <h4 className='subTextTitle'>Example: CSS Colors</h4>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML + CSS</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(colorExampleHTML)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{colorExampleHTML}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={colorExampleHTML}
                className="code-preview"
                title="CSS Colors Preview"
            ></iframe>

            <h4 className='subTextTitle'>CSS Units</h4>
            <p className='subText'>
                CSS units determine the size and spacing of elements. Common units include:
            </p>
            <ul>
                <li><strong>Pixels (px):</strong> A fixed unit of measurement.</li>
                <li><strong>EM:</strong> Relative to the font size of the element.</li>
                <li><strong>REM:</strong> Relative to the font size of the root element.</li>
                <li><strong>Percentage (%):</strong> Relative to the parent element's size.</li>
            </ul>

            <h4 className='subTextTitle'>Example: CSS Units</h4>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML + CSS</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(unitsExampleHTML)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{unitsExampleHTML}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={unitsExampleHTML}
                className="code-preview"
                title="CSS Units Preview"
            ></iframe>
        </div>
    );
};

export default CSSColorsAndUnits;
