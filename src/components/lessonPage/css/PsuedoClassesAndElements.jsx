import React, { useState, useEffect } from 'react';

const PseudoClassesAndPseudoElements = ({ id }) => {
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

    const pseudoClassExamples = [
        {
            title: ':hover, :focus',
            description: 'The :hover pseudo-class applies styles when the user hovers over an element. The :focus pseudo-class applies styles when an element gains focus (e.g., when clicked or tabbed to).',
            htmlCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>:hover, :focus Example</title>
    <style>
        button {
            background-color: lightgray;
            color: black;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: yellow;
        }
        button:focus {
            outline: 2px solid blue;
        }
       
    </style>
</head>
<body>
    <button>Interactive Button</button>
</body>
</html>`,
        },
        {
            title: ':active',
            description: 'The :active pseudo-class applies styles when an element is being clicked or activated.',
            htmlCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>:active Example</title>
    <style>
        button {
            background-color: lightgray;
            color: black;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
        }
        button:active {
            background-color: green;
            color: white;
        }
    </style>
</head>
<body>
    <button>Click me</button>
</body>
</html>`,
        },
        {
            title: ':first-child',
            description: 'The :first-child pseudo-class selects the first child element of its parent.',
            htmlCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>:first-child Example</title>
    <style>
        p:first-child {
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <p>First paragraph</p>
    <p>Second paragraph</p>
</body>
</html>`,
        },
        {
            title: ':nth-child(n)',
            description: 'The :nth-child(n) pseudo-class selects the nth child of its parent, where n can be a number, keyword, or formula.',
            htmlCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>:nth-child Example</title>
    <style>
        li:nth-child(odd) {
            background-color: #f0f0f0;
        }
        li:nth-child(even) {
            background-color: #ccc;
        }
    </style>
</head>
<body>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
    </ul>
</body>
</html>`,
        },
        {
            title: ':not(selector)',
            description: 'The :not(selector) pseudo-class selects elements that do not match the given selector.',
            htmlCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>:not Example</title>
    <style>
        p:not(.highlight) {
            color: gray;
        }
    </style>
</head>
<body>
    <p class="highlight">Highlighted paragraph</p>
    <p>Normal paragraph</p>
    <p>Another normal paragraph</p>
</body>
</html>`,
        },
        {
            title: ':last-child',
            description: 'The :last-child pseudo-class selects the last child element of its parent.',
            htmlCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>:last-child Example</title>
    <style>
        p:last-child {
            color: green;
            font-style: italic;
        }
    </style>
</head>
<body>
    <p>First paragraph</p>
    <p>Second paragraph</p>
    <p>Third paragraph</p>
</body>
</html>`,
        },
        {
            title: ':checked',
            description: 'The :checked pseudo-class applies styles to an element, such as a checkbox or radio button, that is checked.',
            htmlCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>:checked Example</title>
    <style>
        input:checked + label {
            font-weight: bold;
            color: green;
        }
    </style>
</head>
<body>
    <input type="checkbox" id="check" />
    <label for="check">I agree to the terms and conditions</label>
</body>
</html>`,
        }
    ];

    return (
        <div id="pseudo_classes_and_pseudo_elements" className="subLesson">
            <h3 className="subTitle">CSS Pseudo-Classes and Pseudo-Elements</h3>
            <p className="subLessonText">
                CSS pseudo-classes are used to define the special states of an element, while pseudo-elements are used to style specific parts of an element. Here, we'll explore some common pseudo-classes.
            </p>

            {pseudoClassExamples.map((example, index) => (
                <div key={index}>
                    <h4 className="subTextTitle">{example.title}</h4>
                    <p className="subText">{example.description}</p>
                    <div className="code-snippet-container">
                        <div className="code-snippet-header">
                            <span className="file-type">HTML</span>
                            <button className="copy-code-btn" onClick={() => handleCopy(example.htmlCode)}>
                                Copy Code
                            </button>
                        </div>
                        <pre className="code-snippet">
                            <code>{example.htmlCode}</code>
                        </pre>
                        {copied && <p className="copy-status">{copied}</p>}
                    </div>
                    <h4 className="subTextTitle">Preview</h4>
                    <iframe
                        srcDoc={example.htmlCode}
                        className="code-preview"
                        title={`${example.title} Preview`}
                    ></iframe>
                </div>
            ))}
        </div>
    );
};

export default PseudoClassesAndPseudoElements;
