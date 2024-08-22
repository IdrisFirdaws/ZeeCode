import React, { useState, useEffect } from 'react';

const ImagesAndMultimedia = ({ id }) => {
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

    const multimediaExamples = [
        {
            title: 'Embedding an Image',
            description: 'The <img> tag is used to embed images in an HTML page. The src attribute specifies the path to the image file.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <img src="https://via.placeholder.com/150" alt="Placeholder Image">
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '150px'
        },
        {
            title: 'Image with Caption',
            description: 'To add a caption to an image, you can use the <figure> and <figcaption> elements.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <figure>
        <img src="https://via.placeholder.com/150" alt="Placeholder Image">
        <figcaption>Placeholder Image Caption</figcaption>
    </figure>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '200px'
        },
        {
            title: 'Embedding a Video',
            description: 'The <video> tag is used to embed videos in an HTML page. You can use the controls attribute to add video controls.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <video width="320" height="240" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '280px'
        },
        {
            title: 'Embedding Audio',
            description: 'The <audio> tag is used to embed audio files in an HTML page. You can use the controls attribute to add audio controls.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <audio controls>
        <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '80px'
        },
        {
            title: 'Responsive Image',
            description: 'Responsive images scale automatically to fit the size of the screen. You can achieve this with CSS by setting the max-width property to 100%.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        img {
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
    <img src="https://via.placeholder.com/600x400" alt="Responsive Image">
</body>
</html>
            `,
            fileType: 'HTML',
            previewHeight: '250px'
        }
    ];

    return (
        <div id="images_and_multimedia" className="subLesson">
            <h3 className="subTitle">Images and Multimedia</h3>
            <p className="subLessonText">
                Multimedia elements such as images, audio, and video play a crucial role in enhancing the user experience on a website. In this lesson, we'll cover the basics of embedding images and multimedia in HTML.
            </p>
            {multimediaExamples.map((example, index) => (
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

export default ImagesAndMultimedia;
