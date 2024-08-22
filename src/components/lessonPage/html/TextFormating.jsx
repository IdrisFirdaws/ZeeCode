import React, { useEffect, useState } from 'react';

const TextFormatting = ({ id }) => {
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

    const textFormattingExamples = [
        {
            title: 'Bold Text',
            description: 'The <strong> tag is used to make text bold. It indicates that the text has strong importance.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>This is <strong>bold</strong> text.</p>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '100px'
        },
        {
            title: 'Italic Text',
            description: 'The <em> tag is used to make text italic. It indicates that the text has emphasized importance.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>This is <em>italic</em> text.</p>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '100px'
        },
        {
            title: 'Underline Text',
            description: 'The <u> tag is used to underline text. It is typically used for stylistic purposes, but it can also indicate non-standard text.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>This is <u>underlined</u> text.</p>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '100px'
        },
        {
            title: 'Strikethrough Text',
            description: 'The <del> tag is used to indicate that text has been deleted or is no longer relevant. It typically renders text with a strikethrough.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>This is <del>strikethrough</del> text.</p>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '100px'
        },
        {
            title: 'Subscript and Superscript',
            description: 'The <sub> and <sup> tags are used to display subscript and superscript text, respectively.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>This is H<sub>2</sub>O and E = mc<sup>2</sup>.</p>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '100px'
        },
        {
            title: 'Code Text',
            description: 'The <code> tag is used to display a single line of code or a short snippet of code.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Use the <code>console.log()</code> function to print output to the console.</p>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '100px'
        },
        {
            title: 'Blockquote',
            description: 'The <blockquote> tag is used to define a block of text that is a quotation from another source. It is typically indented from the surrounding text.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <blockquote>
        <p>This is a blockquote. It is used for quoting blocks of text from other sources.</p>
    </blockquote>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '120px'
        },
        {
            title: 'Citations',
            description: 'The <cite> tag is used to reference the title of a work, such as a book, movie, or article. It typically renders the text in italics.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>This is a citation: <cite>The Great Gatsby</cite></p>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '100px'
        },
        {
            title: 'Highlighted Text',
            description: 'The <mark> tag is used to highlight parts of the text. It is typically rendered with a yellow background.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>This is <mark>highlighted</mark> text.</p>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '100px'
        }
    ];

    return (
        <div id="text_formatting" className="subLesson">
            <h3 className="subTitle">Text Formatting</h3>
            <p className="subLessonText">
                Text formatting tags in HTML are used to alter the appearance of text. These tags can be used to make text bold, italic, underlined, and more. Below are some common text formatting tags with examples and live previews.
            </p>
            {textFormattingExamples.map((example, index) => (
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

export default TextFormatting;
