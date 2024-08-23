import React, { useState, useEffect } from 'react';

const AdvancedLayoutTechniques = ({ id }) => {
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

    const gridTemplateAreasCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grid Template Areas</title>
    <style>
        .grid-container {
            display: grid;
            grid-template-areas: 
                'header header header'
                'sidebar content content'
                'footer footer footer';
            grid-gap: 10px;
            padding: 10px;
        }
        
        .header { grid-area: header; background-color: #007BFF; color: white; }
        .sidebar { grid-area: sidebar; background-color: #6C757D; color: white; }
        .content { grid-area: content; background-color: #28A745; color: white; }
        .footer { grid-area: footer; background-color: #DC3545; color: white; }
        
        .box {
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="grid-container">
        <div class="header box">Header</div>
        <div class="sidebar box">Sidebar</div>
        <div class="content box">Content</div>
        <div class="footer box">Footer</div>
    </div>
</body>
</html>
    `;

    const gridAutoPlacementCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grid Auto Placement</title>
    <style>
        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: minmax(100px, auto);
            grid-gap: 10px;
            padding: 10px;
        }
        
        .item1 { grid-column: span 2; background-color: #007BFF; color: white; }
        .item2 { background-color: #6C757D; color: white; }
        .item3 { background-color: #28A745; color: white; }
        .item4 { grid-row: span 2; background-color: #DC3545; color: white; }
        .item5 { background-color: #FFC107; color: white; }
        .item6 { background-color: #17A2B8; color: white; }
        
        .box {
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="grid-container">
        <div class="item1 box">Item 1</div>
        <div class="item2 box">Item 2</div>
        <div class="item3 box">Item 3</div>
        <div class="item4 box">Item 4</div>
        <div class="item5 box">Item 5</div>
        <div class="item6 box">Item 6</div>
    </div>
</body>
</html>
    `;

    const flexboxAdvancedAlignmentCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Flexbox Alignment</title>
    <style>
        .flex-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 300px;
            background-color: #F8F9FA;
        }
        
        .box {
            background-color: #007BFF;
            color: white;
            padding: 20px;
            text-align: center;
        }
        
        .box1 { order: 3; }
        .box2 { order: 2; }
        .box3 { order: 1; }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="box box1">Box 1</div>
        <div class="box box2">Box 2</div>
        <div class="box box3">Box 3</div>
    </div>
</body>
</html>
    `;

    const nestedLayoutsCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nested Grid and Flexbox Layouts</title>
    <style>
        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 10px;
            padding: 10px;
        }
        
        .flex-container {
            display: flex;
            justify-content: space-around;
            background-color: #007BFF;
            color: white;
            padding: 10px;
            text-align: center;
        }
        
        .item { padding: 20px; background-color: #6C757D; }
        .grid-item { padding: 20px; background-color: #FFC107; }
    </style>
</head>
<body>
    <div class="grid-container">
        <div class="grid-item">
            <div class="flex-container">
                <div class="item">Flex 1</div>
                <div class="item">Flex 2</div>
            </div>
        </div>
        <div class="grid-item">
            <div class="flex-container">
                <div class="item">Flex 3</div>
                <div class="item">Flex 4</div>
            </div>
        </div>
        <div class="grid-item">
            <div class="flex-container">
                <div class="item">Flex 5</div>
                <div class="item">Flex 6</div>
            </div>
        </div>
    </div>
</body>
</html>
    `;

    return (
        <div id="advanced_layout_techniques" className="subLesson">
            <h3 className="subTitle">CSS Grid and Flexbox Advanced Techniques</h3>
            <p className="subLessonText">
                In this lesson, we will explore advanced techniques for working with CSS Grid and Flexbox, two of the most powerful layout systems in CSS. These techniques include using grid template areas, auto-placement in grids, advanced Flexbox alignment, and creating nested layouts using both Grid and Flexbox.
            </p>

            <h4 className="subTextTitle">Grid Template Areas</h4>
            <p className="subText">
                Grid template areas allow you to define areas of the grid layout by naming them. This makes it easy to rearrange grid items by simply changing the grid-template-areas property. Here's an example:
            </p>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(gridTemplateAreasCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{gridTemplateAreasCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className="subTextTitle">Preview</h4>
            <iframe
                srcDoc={gridTemplateAreasCode}
                className="code-preview"
                title="Grid Template Areas Preview"
            ></iframe>

            <h4 className="subTextTitle">Grid Auto Placement</h4>
            <p className="subText">
                Grid auto-placement allows the browser to automatically place grid items in the grid based on the defined grid-template-columns and grid-auto-rows properties. Here's how it works:
            </p>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(gridAutoPlacementCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{gridAutoPlacementCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className="subTextTitle">Preview</h4>
            <iframe
                srcDoc={gridAutoPlacementCode}
                className="code-preview"
                title="Grid Auto Placement Preview"
            ></iframe>

            <h4 className="subTextTitle">Advanced Flexbox Alignment</h4>
            <p className="subText">
                Flexbox allows for powerful alignment and distribution of elements. In this example, we demonstrate how to use Flexbox properties to change the order of elements and align them within the container:
            </p>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(flexboxAdvancedAlignmentCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{flexboxAdvancedAlignmentCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className="subTextTitle">Preview</h4>
            <iframe
                srcDoc={flexboxAdvancedAlignmentCode}
                className="code-preview"
                title="Advanced Flexbox Alignment Preview"
            ></iframe>

            <h4 className="subTextTitle">Nested Grid and Flexbox Layouts</h4>
            <p className="subText">
                You can combine CSS Grid and Flexbox to create complex, nested layouts. This example shows how to use a grid layout as the outer container and flexbox within the grid items:
            </p>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(nestedLayoutsCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{nestedLayoutsCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className="subTextTitle">Preview</h4>
            <iframe
                srcDoc={nestedLayoutsCode}
                className="code-preview"
                title="Nested Grid and Flexbox Layouts Preview"
            ></iframe>
        </div>
    );
};

export default AdvancedLayoutTechniques;
