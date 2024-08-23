import React, { useState, useEffect } from 'react';

const FormsAndInputElements = ({ id }) => {
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

    const formExamples = [
        {
            title: 'Basic Form Structure',
            description: 'Forms are created using the <form> element. The action attribute defines where the form data should be sent when submitted.',
            code: `
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
        <input type="text" id="name" name="name"><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '200px'
        },
        {
            title: 'Input Types',
            description: 'HTML offers various input types like text, password, email, number, date, and more. These input types provide different user interface controls.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br><br>
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob"><br><br>
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity"><br><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '220px'
        },
        {
            title: 'Checkboxes and Radio Buttons',
            description: 'Checkboxes allow users to select multiple options, while radio buttons allow selecting only one option from a group.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form>
        <label for="vehicle1">I have a bike:</label>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"><br><br>
        <label for="vehicle2">I have a car:</label>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"><br><br>
        <label for="gender1">Male:</label>
        <input type="radio" id="gender1" name="gender" value="Male"><br><br>
        <label for="gender2">Female:</label>
        <input type="radio" id="gender2" name="gender" value="Female"><br><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '250px'
        },
        {
            title: 'Dropdown Lists and Textareas',
            description: 'The <select> element creates a dropdown list, and the <textarea> element allows users to enter multiline text.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form>
        <label for="car">Choose a car:</label>
        <select id="car" name="car">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
        </select><br><br>
        <label for="message">Message:</label><br>
        <textarea id="message" name="message" rows="4" cols="50"></textarea><br><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '270px'
        },
        {
            title: 'Form Validation',
            description: 'HTML5 offers built-in form validation using attributes like required, pattern, min, and max.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/submit" method="POST">
        <label for="username">Username (required):</label>
        <input type="text" id="username" name="username" required><br><br>
        <label for="age">Age (must be 18+):</label>
        <input type="number" id="age" name="age" min="18" max="99"><br><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '200px'
        }
    ];

    return (
        <div id="forms_and_input_elements" className="subLesson">
            <h3 className="subTitle">Forms and Input Elements</h3>
            <p className="subLessonText">
                Forms are an essential part of web development, enabling user input and interaction. In this lesson, we'll explore the basics of form creation, input types, and validation in HTML.
            </p>
            {formExamples.map((example, index) => (
                <div key={index} className="tag-section">
                    <h4 className="subTextTitle">{example.title}</h4>
                    <p className="subText">{example.description}</p>
                    {renderCodeSnippet(example.code, example.fileType)}
                    <h4 className="subTextTitle">Preview:</h4>
                    <iframe
                        srcDoc={example.code}
                        className="code-preview"
                        style={{ height: example.previewHeight }}
                        title={`${example.title} Preview`}
                    ></iframe>
                </div>
            ))}
        </div>
    );
};

export default FormsAndInputElements;
