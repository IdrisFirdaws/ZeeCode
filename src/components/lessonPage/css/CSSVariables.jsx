import React, { useState, useEffect } from 'react';

const CSSVariables = ({ id }) => {
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

    const basicVariablesCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Variables</title>
    <style>
        :root {
            --primary-color: #007BFF;
            --secondary-color: #6C757D;
            --padding: 10px;
        }

        .box {
            background-color: var(--primary-color);
            color: #fff;
            padding: var(--padding);
        }

        .box-secondary {
            background-color: var(--secondary-color);
            color: #fff;
            padding: var(--padding);
        }
    </style>
</head>
<body>
    <div class="box">Primary Box</div>
    <div class="box-secondary">Secondary Box</div>
</body>
</html>
    `;

    const scopedVariablesCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scoped CSS Variables</title>
    <style>
        .container {
            --container-color: #FF5722;
            --container-padding: 15px;
        }

        .box {
            background-color: var(--container-color);
            padding: var(--container-padding);
            color: #fff;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">Box with Scoped Variables</div>
    </div>
</body>
</html>
    `;

    const themingWithVariablesCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Theming with CSS Variables</title>
    <style>
        :root {
            --primary-color: #007BFF;
            --secondary-color: #6C757D;
            --bg-color: #FFF;
            --text-color: #000;
        }

        body.dark-theme {
            --primary-color: #FF5722;
            --secondary-color: #FF9800;
            --bg-color: #333;
            --text-color: #FFF;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: Arial, sans-serif;
        }

        .box {
            background-color: var(--primary-color);
            color: var(--text-color);
            padding: 20px;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <div class="box">Themed Box</div>
    <button onclick="document.body.classList.toggle('dark-theme')">Toggle Theme</button>
</body>
</html>
    `;

    return (
        <div id="css_variables" className="subLesson">
            <h3 className="subTitle">CSS Variables (Custom Properties)</h3>
            <p className="subLessonText">
                CSS Variables, also known as custom properties, allow you to store values in one place and reuse them throughout your stylesheet. This makes it easier to maintain and update styles, especially when working with large projects.
            </p>

            <h4 className="subTextTitle">Defining and Using CSS Variables</h4>
            <p className="subText">
                CSS variables are defined within a selector, usually `:root`, which represents the document's root element. They are defined with a double dash (`--`) prefix and accessed using the `var()` function.
            </p>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(basicVariablesCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{basicVariablesCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className="subTextTitle">Preview</h4>
            <iframe
                srcDoc={basicVariablesCode}
                className="code-preview"
                title="CSS Variables Preview"
            ></iframe>

            <h4 className="subTextTitle">Scoped Variables</h4>
            <p className="subText">
                CSS variables can be scoped to specific elements, meaning they are only available within the element they are defined in and its descendants. This allows for more modular and reusable styles.
            </p>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(scopedVariablesCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{scopedVariablesCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className="subTextTitle">Preview</h4>
            <iframe
                srcDoc={scopedVariablesCode}
                className="code-preview"
                title="Scoped CSS Variables Preview"
            ></iframe>

            <h4 className="subTextTitle">Theming with CSS Variables</h4>
            <p className="subText">
                CSS variables are powerful for creating themes. You can define a set of variables for a light theme and a different set for a dark theme, then switch between them by toggling a class on the root element.
            </p>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(themingWithVariablesCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{themingWithVariablesCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className="subTextTitle">Preview</h4>
            <iframe
                srcDoc={themingWithVariablesCode}
                className="code-preview"
                title="Theming with CSS Variables Preview"
            ></iframe>
        </div>
    );
};

export default CSSVariables;
