import React, { useState, useEffect } from 'react';

const ResponsiveDesign = ({ id }) => {
    useEffect(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, [id]);

    const [copied, setCopied] = useState('');

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code);
        setCopied('Copied!');
        setTimeout(() => setCopied(''), 2000);
    };

    // Media Queries Code
    const mediaQueriesCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media Queries Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
        }
        h1 {
            color: #333;
        }
        /* Default styles */
        .responsive-box {
            background-color: lightcoral;
            padding: 20px;
            color: #fff;
        }
        /* Media queries for different screen sizes */
        @media (max-width: 768px) {
            .responsive-box {
                background-color: lightblue;
            }
        }
        @media (max-width: 480px) {
            .responsive-box {
                background-color: lightgreen;
                font-size: 14px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Responsive Design Example</h1>
        <div class="responsive-box">Resize the window to see the color changes.</div>
    </div>
</body>
</html>
    `;

    // Fluid Layouts Code
    const fluidLayoutsCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fluid Layouts Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 100%;
            padding: 20px;
            background-color: #fff;
            box-sizing: border-box;
        }
        .box {
            background-color: lightcoral;
            padding: 20px;
            color: #fff;
            margin: 10px 0;
        }
        @media (min-width: 768px) {
            .box {
                width: 48%;
                display: inline-block;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">Fluid Box 1</div>
        <div class="box">Fluid Box 2</div>
    </div>
</body>
</html>
    `;

    // Mobile-First Design Code
    const mobileFirstCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mobile-First Design Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 100%;
            padding: 20px;
            background-color: #fff;
            box-sizing: border-box;
        }
        .header {
            background-color: lightcoral;
            color: #fff;
            padding: 10px;
            text-align: center;
        }
        .content {
            padding: 20px;
        }
        /* Mobile-first styles */
        @media (min-width: 600px) {
            .header {
                background-color: lightblue;
            }
        }
        @media (min-width: 1024px) {
            .header {
                background-color: lightgreen;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">Mobile-First Design</div>
        <div class="content">Resize the window to see the color changes in the header.</div>
    </div>
</body>
</html>
    `;

    return (
        <div id="responsive_design" className="subLesson">
            <h3 className='subTitle'>Responsive Design</h3>
            <p className='subLessonText'>
                Responsive design ensures that your website looks and functions well on all devices, from desktops to mobile phones.
                It involves using flexible layouts, images, and media queries to adapt the design based on the screen size and resolution.
            </p>

            {/* Media Queries */}
            <h4 className='subTextTitle'>Media Queries</h4>
            <p className='subText'>
                Media queries allow you to apply CSS styles based on the device's screen size or other characteristics.
                They help create responsive designs by changing styles for different viewports.
            </p>
            <ul>
                <li><strong>@media:</strong> Defines the media query.</li>
                <li><strong>max-width:</strong> Targets screens with a maximum width.</li>
                <li><strong>min-width:</strong> Targets screens with a minimum width.</li>
            </ul>
            <h4 className='subTextTitle'>Example</h4>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(mediaQueriesCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{mediaQueriesCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={mediaQueriesCode}
                className="code-preview"
                title="Media Queries Preview"
            ></iframe>

            {/* Fluid Layouts */}
            <h4 className='subTextTitle'>Fluid Layouts</h4>
            <p className='subText'>
                Fluid layouts use relative units like percentages to make the design adaptable to different screen sizes.
                This approach helps maintain proportions and create layouts that adjust smoothly across various devices.
            </p>
            <ul>
                <li><strong>width:</strong> Set to a percentage to allow flexibility.</li>
                <li><strong>max-width:</strong> Prevents content from stretching too wide.</li>
            </ul>
            <h4 className='subTextTitle'>Example</h4>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(fluidLayoutsCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{fluidLayoutsCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={fluidLayoutsCode}
                className="code-preview"
                title="Fluid Layouts Preview"
            ></iframe>

            {/* Mobile-First Design */}
            <h4 className='subTextTitle'>Mobile-First Design</h4>
            <p className='subText'>
                Mobile-first design involves designing for the smallest screen sizes first and then adding styles for larger screens.
                This approach ensures that the website is optimized for mobile users and progressively enhanced for larger devices.
            </p>
            <ul>
                <li><strong>Mobile-first styles:</strong> Default styles for mobile devices.</li>
                <li><strong>Media queries:</strong> Used to add styles for larger screens.</li>
            </ul>
            <h4 className='subTextTitle'>Example</h4>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(mobileFirstCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{mobileFirstCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={mobileFirstCode}
                className="code-preview"
                title="Mobile-First Design Preview"
            ></iframe>
        </div>
    );
};

export default ResponsiveDesign;
