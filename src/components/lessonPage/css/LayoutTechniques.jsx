import React, { useState, useEffect } from 'react';

const LayoutTechniques = ({ id }) => {
    useEffect(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, [id]);

    const [copied, setCopied] = useState('');

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code);
        setCopied('Copied!');
        setTimeout(() => setCopied(''), 2000);
    };

    // Flexbox Code
    const flexboxCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Example</title>
    <style>
        .flex-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 200px;
            border: 2px solid #000;
        }
        .flex-item {
            width: 100px;
            height: 100px;
            background-color: lightcoral;
            text-align: center;
            line-height: 100px;
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
    </div>
</body>
</html>
    `;

    // Grid Code
    const gridCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grid Layout Example</title>
    <style>
        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            border: 2px solid #000;
        }
        .grid-item {
            background-color: lightseagreen;
            text-align: center;
            padding: 20px;
            font-size: 20px;
            color: white;
        }
    </style>
</head>
<body>
    <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
    </div>
</body>
</html>
    `;

    // Positioning Code
    const positioningCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Positioning Example</title>
    <style>
        .relative-box {
            position: relative;
            width: 300px;
            height: 200px;
            background-color: lightblue;
        }
        .absolute-box {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 100px;
            height: 100px;
            background-color: lightgreen;
            text-align: center;
            line-height: 100px;
        }
    </style>
</head>
<body>
    <div class="relative-box">
        Relative Box
        <div class="absolute-box">Absolute Box</div>
    </div>
</body>
</html>
    `;

    // Multi-Column Layout Code
    const multiColumnCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multi-Column Layout Example</title>
    <style>
        .multi-column {
            column-count: 3;
            column-gap: 20px;
            border: 2px solid #000;
            padding: 10px;
        }
        .multi-column p {
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="multi-column">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna sapien. Phasellus ut fermentum quam.</p>
        <p>Curabitur sit amet libero vitae justo gravida suscipit. Nam condimentum erat at metus auctor, et bibendum velit auctor.</p>
        <p>Vestibulum dapibus augue a neque fermentum, nec luctus dolor lacinia. Duis quis nulla eget erat malesuada convallis.</p>
    </div>
</body>
</html>
    `;

    // Z-Index Code
    const zIndexCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Z-Index Example</title>
    <style>
        .container {
            position: relative;
            width: 300px;
            height: 200px;
            border: 2px solid #000;
        }
        .box {
            position: absolute;
            width: 100px;
            height: 100px;
            text-align: center;
            line-height: 100px;
        }
        .box1 {
            background-color: lightcoral;
            top: 20px;
            left: 20px;
            z-index: 1;
        }
        .box2 {
            background-color: lightblue;
            top: 50px;
            left: 50px;
            z-index: 2;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box box1">Box 1</div>
        <div class="box box2">Box 2</div>
    </div>
</body>
</html>
    `;

    return (
        <div id="layout_techniques" className="subLesson">
            <h3 className='subTitle'>CSS Layout Techniques</h3>
            <p className='subLessonText'>
                CSS layout techniques allow you to control how elements are arranged and displayed on a webpage.
                From traditional methods using floats to modern techniques like Flexbox and Grid, mastering these
                approaches is essential for creating responsive and dynamic layouts.
            </p>

            {/* Flexbox Layout */}
            <h4 className='subTextTitle'>Flexbox Layout</h4>
            <p className='subText'>
                Flexbox (Flexible Box Layout) is a one-dimensional layout method that allows you to distribute
                space among items in a container, even when their size is unknown or dynamic. It's perfect for
                aligning items, distributing space, and controlling their order in a flexible manner.
            </p>
            <ul>
                <li><strong>display: flex;</strong> Enables flexbox on the container.</li>
                <li><strong>justify-content:</strong> Aligns items horizontally.</li>
                <li><strong>align-items:</strong> Aligns items vertically.</li>
                <li><strong>flex-direction:</strong> Defines the direction of the flex items (row, column, etc.).</li>
            </ul>
            <h4 className='subTextTitle'>Example</h4>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(flexboxCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{flexboxCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={flexboxCode}
                className="code-preview"
                title="Flexbox Layout Preview"
            ></iframe>

            {/* Grid Layout */}
            <h4 className='subTextTitle'>Grid Layout</h4>
            <p className='subText'>
                CSS Grid Layout is a powerful two-dimensional layout system that allows you to create grid-based designs
                with rows and columns. It gives you control over both horizontal and vertical alignment of items, making
                it easier to create complex layouts.
            </p>
            <ul>
                <li><strong>display: grid;</strong> Enables grid layout on the container.</li>
                <li><strong>grid-template-columns:</strong> Defines the number and size of the columns.</li>
                <li><strong>grid-template-rows:</strong> Defines the number and size of the rows.</li>
                <li><strong>gap:</strong> Specifies the space between grid items.</li>
            </ul>
            <h4 className='subTextTitle'>Example</h4>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(gridCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{gridCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={gridCode}
                className="code-preview"
                title="Grid Layout Preview"
            ></iframe>

            {/* Positioning Techniques */}
            <h4 className='subTextTitle'>Positioning Techniques</h4>
            <p className='subText'>
                CSS positioning properties allow you to control the position of elements in relation to their
                containing elements or the viewport. Understanding these techniques helps you create layouts with
                precise placement of elements.
            </p>
            <ul>
                <li><strong>position: static;</strong> Default positioning; elements are positioned according to the normal flow.</li>
                <li><strong>position: relative;</strong> Positioned relative to its normal position.</li>
                <li><strong>position: absolute;</strong> Positioned relative to the nearest positioned ancestor.</li>
                <li><strong>position: fixed;</strong> Positioned relative to the viewport; stays fixed on the screen.</li>
                <li><strong>position: sticky;</strong> Based on the user's scroll position.</li>
            </ul>
            <h4 className='subTextTitle'>Example</h4>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(positioningCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{positioningCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={positioningCode}
                className="code-preview"
                title="Positioning Preview"
            ></iframe>

            {/* Multi-Column Layout */}
            <h4 className='subTextTitle'>Multi-Column Layout</h4>
            <p className='subText'>
                The multi-column layout allows you to create a newspaper-like column layout. This technique is useful
                for displaying content in multiple columns, making it easier to read and visually appealing.
            </p>
            <ul>
                <li><strong>column-count:</strong> Specifies the number of columns.</li>
                <li><strong>column-gap:</strong> Defines the gap between columns.</li>
            </ul>
            <h4 className='subTextTitle'>Example</h4>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(multiColumnCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{multiColumnCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={multiColumnCode}
                className="code-preview"
                title="Multi-Column Layout Preview"
            ></iframe>

            {/* Z-Index and Stacking Context */}
            <h4 className='subTextTitle'>Z-Index and Stacking Context</h4>
            <p className='subText'>
                The z-index property controls the stacking order of positioned elements. It determines which element
                appears on top of others when they overlap. Understanding stacking contexts is essential for managing
                complex overlapping content.
            </p>
            <ul>
                <li><strong>z-index:</strong> Specifies the stack order of positioned elements.</li>
                <li><strong>Stacking Context:</strong> A three-dimensional conceptualization of HTML elements with z-index.</li>
            </ul>
            <h4 className='subTextTitle'>Example</h4>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(zIndexCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{zIndexCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={zIndexCode}
                className="code-preview"
                title="Z-Index Preview"
            ></iframe>
        </div>
    );
};

export default LayoutTechniques;
