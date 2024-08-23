import React, { useState, useEffect } from 'react';

const StylingForms = ({ id }) => {
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

    const formElementsCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Elements Styling</title>
    <style>
        form {
            max-width: 400px;
            margin: 0 auto;
        }
        input, textarea, select {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name">

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" placeholder="Enter your message"></textarea>

        <label for="country">Country:</label>
        <select id="country" name="country">
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="uk">UK</option>
        </select>

        <button type="submit">Submit</button>
    </form>
</body>
</html>
    `;

    const formStatesCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form States Styling</title>
    <style>
        input:focus, textarea:focus, select:focus {
            border-color: #007BFF;
            outline: none;
        }
        input:hover, textarea:hover, select:hover {
            border-color: #0056b3;
        }
        input:disabled, textarea:disabled, select:disabled {
            background-color: #e9ecef;
            border-color: #ced4da;
        }
    </style>
</head>
<body>
    <form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Enter your username">

        <label for="bio">Bio:</label>
        <textarea id="bio" name="bio" rows="4" placeholder="Enter your bio"></textarea>

        <label for="status">Status:</label>
        <select id="status" name="status">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
        </select>

        <button type="submit" disabled>Submit</button>
    </form>
</body>
</html>
    `;

    const customControlsCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Form Controls</title>
    <style>
        .custom-checkbox {
            position: relative;
            padding-left: 25px;
            cursor: pointer;
        }
        .custom-checkbox input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
        }
        .custom-checkbox .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 20px;
            width: 20px;
            background-color: #eee;
            border-radius: 3px;
        }
        .custom-checkbox input:checked ~ .checkmark {
            background-color: #007BFF;
        }
        .custom-checkbox .checkmark:after {
            content: "";
            position: absolute;
            display: none;
        }
        .custom-checkbox input:checked ~ .checkmark:after {
            display: block;
        }
        .custom-checkbox .checkmark:after {
            left: 7px;
            top: 3px;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
        }
    </style>
</head>
<body>
    <label class="custom-checkbox">Subscribe
        <input type="checkbox">
        <span class="checkmark"></span>
    </label>
</body>
</html>
    `;

    return (
        <div id="styling_forms" className="subLesson">
            <h3 className='subTitle'>Styling Forms</h3>
            <p className='subLessonText'>
                CSS allows you to style various form elements to improve the user experience. In this lesson, we’ll cover how to style form elements, manage form states, and create custom form controls.
            </p>

            <h4 className='subTextTitle'>Styling Form Elements</h4>
            <p className='subText'>
                You can style form elements like <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, and <code>&lt;select&gt;</code> to make them visually appealing and user-friendly.
            </p>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(formElementsCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{formElementsCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={formElementsCode}
                className="code-preview"
                title="Form Elements Preview"
            ></iframe>

            <h4 className='subTextTitle'>Styling Form States</h4>
            <p className='subText'>
                Form elements have different states like hover, focus, and disabled. CSS can be used to style these states, improving the form's interactivity and accessibility.
            </p>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(formStatesCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{formStatesCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={formStatesCode}
                className="code-preview"
                title="Form States Preview"
            ></iframe>

            <h4 className='subTextTitle'>Custom Form Controls</h4>
            <p className='subText'>
                You can create custom form controls, such as checkboxes and radio buttons, to match your website's design. This is done by using CSS to style the elements while hiding the default browser styles.
            </p>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(customControlsCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{customControlsCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={customControlsCode}
                className="code-preview"
                title="Custom Controls Preview"
            ></iframe>
        </div>
    );
};

export default StylingForms;
