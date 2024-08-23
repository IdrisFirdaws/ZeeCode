import React, { useState, useEffect } from 'react';

const Tables = ({ id }) => {
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

    const tableExamples = [
        {
            title: 'Basic Table Structure',
            description: 'A table in HTML is created using the <table> element, with rows defined by <tr> and cells by <td>. The <th> element is used for table headers.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Table</title>
</head>
<body>
    <table border="1">
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>John</td>
            <td>Doe</td>
            <td>25</td>
        </tr>
        <tr>
            <td>Jane</td>
            <td>Smith</td>
            <td>30</td>
        </tr>
    </table>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '150px'
        },
        {
            title: 'Table with Caption',
            description: 'You can add a caption to a table using the <caption> element. It provides a title or description for the table.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table with Caption</title>
</head>
<body>
    <table border="1">
        <caption>Student Grades</caption>
        <tr>
            <th>Student</th>
            <th>Grade</th>
        </tr>
        <tr>
            <td>John Doe</td>
            <td>A</td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>B</td>
        </tr>
    </table>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '150px'
        },
        {
            title: 'Spanning Rows and Columns',
            description: 'The rowspan and colspan attributes allow cells to span multiple rows or columns.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spanning Rows and Columns</title>
</head>
<body>
    <table border="1">
        <tr>
            <th rowspan="2">Name</th>
            <th colspan="2">Contact Details</th>
        </tr>
        <tr>
            <th>Email</th>
            <th>Phone</th>
        </tr>
        <tr>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>123-456-7890</td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>jane@example.com</td>
            <td>098-765-4321</td>
        </tr>
    </table>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '150px'
        },
        {
            title: 'Table with Nested Tables',
            description: 'Tables can be nested inside table cells to create complex layouts.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nested Tables</title>
</head>
<body>
    <table border="1">
        <tr>
            <th>Name</th>
            <th>Details</th>
        </tr>
        <tr>
            <td>John Doe</td>
            <td>
                <table border="1">
                    <tr>
                        <th>Email</th>
                        <td>john@example.com</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>123-456-7890</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '200px'
        },
        {
            title: 'Table with Styling',
            description: 'Tables can be styled using CSS to enhance their appearance.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Styled Table</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        tr:hover {
            background-color: #f5f5f5;
        }
    </style>
</head>
<body>
    <table>
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>John</td>
            <td>Doe</td>
            <td>25</td>
        </tr>
        <tr>
            <td>Jane</td>
            <td>Smith</td>
            <td>30</td>
        </tr>
    </table>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '180px'
        }
    ];

    return (
        <div id="tables" className="subLesson">
            <h3 className="subTitle">Tables</h3>
            <p className="subLessonText">
                Tables are used to display data in a structured format of rows and columns. In this lesson, we'll cover the basics of creating tables, adding captions, spanning rows and columns, and styling tables.
            </p>
            {tableExamples.map((example, index) => (
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

export default Tables;
