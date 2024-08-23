import React, { useState, useEffect } from 'react';

const HTMLEntities = ({ id }) => {
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

    const entitiesExamples = [
        {
            title: 'Basic HTML Entities',
            description: 'HTML entities are used to display reserved characters in HTML. For example, <, >, and & are reserved, so they must be written as entities to be displayed correctly.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML Entities Example</title>
</head>
<body>
    <p>Less than: &lt;</p>
    <p>Greater than: &gt;</p>
    <p>Ampersand: &amp;</p>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '120px'
        },
        {
            title: 'Non-breaking Space',
            description: 'The non-breaking space entity (&nbsp;) is used to prevent an automatic line break at its position in the text.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Non-breaking Space Example</title>
</head>
<body>
    <p>This&nbsp;sentence&nbsp;contains&nbsp;non-breaking&nbsp;spaces.</p>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '100px'
        },
        {
            title: 'Special Characters',
            description: 'HTML entities are also used to display special characters like ©, ®, ™, etc.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Special Characters Example</title>
</head>
<body>
    <p>Copyright: &copy;</p>
    <p>Registered Trademark: &reg;</p>
    <p>Trademark: &trade;</p>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '120px'
        },
        {
            title: 'Mathematical Symbols',
            description: 'Mathematical symbols can be displayed using HTML entities, such as &plus;, &minus;, &times;, and &divide;.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mathematical Symbols Example</title>
</head>
<body>
    <p>Addition: 10 &plus; 5 = 15</p>
    <p>Subtraction: 10 &minus; 5 = 5</p>
    <p>Multiplication: 10 &times; 5 = 50</p>
    <p>Division: 10 &divide; 5 = 2</p>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '140px'
        },
        {
            title: 'Currency Symbols',
            description: 'Currency symbols like $, €, and £ can be represented using HTML entities such as &dollar;, &euro;, and &pound;.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Currency Symbols Example</title>
</head>
<body>
    <p>Dollar: &dollar;100</p>
    <p>Euro: &euro;100</p>
    <p>Pound: &pound;100</p>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '120px'
        },
        {
            title: 'Accented Characters',
            description: 'Accented characters, like ñ, é, or ü, can be displayed using entities such as &ntilde;, &eacute;, and &uuml;.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Accented Characters Example</title>
</head>
<body>
    <p>Spanish: Espa&ntilde;a</p>
    <p>French: Cr&egrave;me br&ucirc;l&eacute;e</p>
    <p>German: &uuml;ber</p>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '120px'
        }
    ];

    return (
        <div id="html-entities" className="subLesson">
            <h3 className="subTitle">HTML Entities</h3>
            <p className="subLessonText">
                HTML entities are special codes used to represent characters that cannot be directly used in HTML. These characters include reserved characters, special symbols, and accented characters. By using entities, you can ensure these characters are correctly displayed on web pages.
            </p>
            {entitiesExamples.map((example, index) => (
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

export default HTMLEntities;
