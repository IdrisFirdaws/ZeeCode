import React, { useState, useEffect } from 'react';

const ElementsAndTags = ({ id }) => {
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

    const htmlTags = [
        {
            title: 'Headings (h1-h6)',
            description: 'Headings are used to define the structure and hierarchy of the content. HTML provides six levels of headings, from <h1> (the highest level) to <h6> (the lowest level).',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Main Heading</h1>
    <h2>Subheading</h2>
    <h3>Sub-subheading</h3>
    <h4>Fourth-level heading</h4>
    <h5>Fifth-level heading</h5>
    <h6>Sixth-level heading</h6>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '200px'
        },
        {
            title: 'Paragraph',
            description: 'The <p> tag is used to define a paragraph of text. Paragraphs are block-level elements and are often used to separate blocks of text.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>This is a paragraph. It can contain text and other inline elements.</p>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '100px'
        },
        {
            title: 'Link',
            description: 'The <a> tag is used to create hyperlinks. The href attribute specifies the URL of the page the link goes to.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="https://example.com">This is a link to Example.com</a>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '100px'
        },
        {
            title: 'Image',
            description: 'The <img> tag is used to embed images in a web page. The src attribute specifies the path to the image file, and the alt attribute provides alternative text for the image.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <img src="https://via.placeholder.com/150" alt="Example Image">
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '150px'
        },
        {
            title: 'List',
            description: 'HTML supports both ordered and unordered lists. The <ul> tag is used to create an unordered list, while the <ol> tag is used for ordered lists. Each list item is defined using the <li> tag.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '100px'
        },
        {
            title: 'Table',
            description: 'The <table> tag is used to create tables. The <tr> tag defines a table row, the <th> tag defines a table header, and the <td> tag defines a table cell.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table border="1">
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
        <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
        </tr>
        <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
        </tr>
    </table>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '150px'
        },
        {
            title: 'Button',
            description: 'The <button> tag is used to create clickable buttons.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button>Click Me</button>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '100px'
        },
        {
            title: 'Form',
            description: 'The <form> tag is used to create an HTML form for user input. The <input> tag defines an input field, and the <label> tag defines a label for an input element.',
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
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
    </form>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '120px'
        },
        {
            title: 'Division',
            description: 'The <div> tag is a block-level element that is often used as a container for other HTML elements to style them with CSS or manipulate with JavaScript.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div style="background-color: lightgrey; padding: 10px;">
        This is a div container.
    </div>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '100px'
        },
        {
            title: 'Span',
            description: 'The <span> tag is an inline container that can be used to style or manipulate specific text or elements within a larger block.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>This is a <span style="color: red;">red text</span> inside a paragraph.</p>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '100px'
        }
    ];

    return (
        <div id="elements_and_tags" className="subLesson">
            <h3 className="subTitle">Elements and Tags</h3>
            <p className="subLessonText">
                HTML elements and tags are the basic building blocks of web pages. Each tag has a specific purpose and can be used to define different types of content and structure. Below are some of the most commonly used HTML tags with examples and live previews.
            </p>
            {htmlTags.map((tag, index) => (
                <div key={index} className="tag-section">
                    <h4 className="subTextTitle">{tag.title}</h4>
                    <p className="subText">{tag.description}</p>
                    {renderCodeSnippet(tag.code, tag.fileType)}
                    <h4 className="subTextTitle">Preview:</h4>
                    <iframe
                        srcDoc={tag.code}
                        className="code-preview"
                        style={{ height: tag.previewHeight }}
                        title={`${tag.title} Preview`}
                    ></iframe>
                </div>
            ))}
        </div>
    );
};

export default ElementsAndTags;
