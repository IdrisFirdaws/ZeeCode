import React, { useState, useEffect } from 'react';

const DocumentMetadata = ({ id }) => {
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

    const metadataExamples = [
        {
            title: 'Basic Metadata Elements',
            description: 'Metadata in HTML is specified in the {`<head>`} section using {`<meta>`} tags. These provide information such as the character set, page description, keywords, author, and viewport settings.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A brief description of the page content.">
    <meta name="keywords" content="HTML, CSS, JavaScript, metadata">
    <meta name="author" content="John Doe">
    <title>Basic Metadata Example</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '100px'
        },
        {
            title: 'Specifying the Character Set',
            description: 'The {`<meta charset="UTF-8">`} tag defines the character encoding for the HTML document, ensuring that it can display special characters correctly.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Character Set Example</title>
</head>
<body>
    <h1>¡Hola, mundo!</h1>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '100px'
        },
        {
            title: 'Viewport Settings for Responsive Design',
            description: 'The {`<meta name="viewport">`} tag is crucial for responsive design, controlling the layout on mobile browsers.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Viewport Example</title>
</head>
<body>
    <h1>Responsive Design</h1>
    <p>This page is optimized for different screen sizes.</p>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '100px'
        },
        {
            title: 'Setting the Document Language',
            description: 'The lang attribute in the {`<html>`} tag specifies the primary language of the document. This helps search engines and browsers to render the content correctly.',
            code: `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Document Language Example</title>
</head>
<body>
    <h1>¡Bienvenido!</h1>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '100px'
        },
        {
            title: 'Social Media Metadata (Open Graph)',
            description: 'Open Graph metadata improves how your content is displayed on social media platforms when shared. This example shows how to set Open Graph metadata for a webpage.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta property="og:title" content="The Rock">
    <meta property="og:type" content="video.movie">
    <meta property="og:url" content="http://www.imdb.com/title/tt0117500/">
    <meta property="og:image" content="http://ia.media-imdb.com/images/rock.jpg">
    <title>Open Graph Example</title>
</head>
<body>
    <h1>Open Graph Metadata</h1>
    <p>This page has metadata for social media sharing.</p>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '150px'
        },
        {
            title: 'SEO Metadata (Title and Description)',
            description: 'Setting a descriptive title and meta description helps improve your webpage’s search engine ranking.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>SEO Metadata Example</title>
    <meta name="description" content="This is an example of SEO metadata, including a page title and meta description.">
</head>
<body>
    <h1>SEO Metadata</h1>
    <p>This page is optimized for search engines.</p>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '120px'
        }
    ];

    return (
        <div id="document_metadata" className="subLesson">
            <h3 className="subTitle">Document Metadata</h3>
            <p className="subLessonText">
                Document metadata provides information about the HTML document. This information is typically found in the {`<head>`} section of the HTML file and includes details like character encoding, viewport settings, page description, and keywords. Metadata is essential for SEO, responsive design, and social media sharing.
            </p>
            {metadataExamples.map((example, index) => (
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

export default DocumentMetadata;
