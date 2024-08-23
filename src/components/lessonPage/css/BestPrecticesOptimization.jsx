import React, { useState, useEffect } from 'react';

const BestPracticesAndPerformanceOptimization = ({ id }) => {
    useEffect(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, [id]);

    const [copied, setCopied] = useState('');

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code);
        setCopied('Copied!');
        setTimeout(() => setCopied(''), 2000);
    };

    const practicesExamples = [
        {
            title: 'Organize Your Stylesheets',
            description: 'Organizing stylesheets into logical sections helps maintain a clean and manageable codebase. Consider using a consistent structure for your styles, such as separating layout, typography, and components into different files or sections.'
        },
        {
            title: 'Use CSS Variables',
            description: 'CSS Variables (Custom Properties) allow you to store values in one place and reuse them throughout your stylesheets. This approach can simplify updates and improve maintainability by centralizing control over values like colors and font sizes.'
        },
        {
            title: 'Minimize CSS File Size',
            description: 'Minimizing the size of your CSS files improves load times and performance. Use tools like CSS minifiers to remove whitespace, comments, and unnecessary code. Additionally, consider using CSS pre-processors like SASS or LESS, which allow you to write more concise and manageable code.'
        },
        {
            title: 'Avoid Inline Styles',
            description: 'Inline styles should be avoided as they can lead to code duplication and make your stylesheets harder to manage. Instead, use external stylesheets or style blocks to apply CSS rules. This approach promotes better separation of concerns and makes your styles easier to maintain.',
            cssCode: `
/* Avoid this */
<div style="background-color: #3498db; color: white; padding: 10px;">Click Me!</div>

/* Prefer this */
<button class="button">Click Me!</button>

/* CSS */
.button {
    background-color: #3498db;
    color: white;
    padding: 10px;
}
`
        },
        {
            title: 'Use Mobile-First Approach',
            description: 'Design your styles with mobile devices in mind first. Use media queries to progressively enhance the design for larger screens. This approach often results in more optimized and responsive layouts, as mobile devices typically have more constraints.'
        },
        {
            title: 'Optimize CSS Selectors',
            description: 'Write efficient CSS selectors to improve performance. Avoid using overly specific or complex selectors. For example, use class selectors over element selectors and limit the number of descendant selectors to reduce rendering times.'
        },
        {
            title: 'Leverage CSS Flexbox and Grid for Layouts',
            description: 'Utilize modern layout techniques such as Flexbox and Grid to create responsive and flexible designs. These techniques offer powerful ways to align and distribute space among items in a container, making layouts easier to manage and adapt.'
        },
        {
            title: 'Use Logical Properties for Internationalization',
            description: 'When designing for internationalization, use logical properties (e.g., `margin-inline-start`, `padding-block-end`) instead of physical properties (`margin-left`, `padding-bottom`). Logical properties adapt to different writing modes and directions, making your design more adaptable to various languages.'
        },
        {
            title: 'Test Across Different Browsers and Devices',
            description: 'Ensure your CSS works consistently across different browsers and devices. Use tools like BrowserStack or built-in browser developer tools to test and debug your styles. This practice helps maintain a uniform experience for users regardless of their platform.'
        }
    ];

    return (
        <div id="best_practices_and_optimization" className="subLesson">
            <h3 className="subTitle">Best Practices and Performance Optimization</h3>
            <p className="subLessonText">
                Adopting best practices and optimizing CSS performance are crucial for building maintainable and efficient stylesheets. Here are some key practices and techniques to enhance your CSS:
            </p>

            {practicesExamples.map((example, index) => (
                <div key={index}>
                    <h4 className="subTextTitle">{example.title}</h4>
                    <p className="subText">{example.description}</p>

                    {example.cssCode && (
                        <>
                            <h5 className="subTextTitle">CSS Code</h5>
                            <div className="code-snippet-container">
                                <div className="code-snippet-header">
                                    <span className="file-type">CSS</span>
                                    <button className="copy-code-btn" onClick={() => handleCopy(example.cssCode)}>
                                        Copy Code
                                    </button>
                                </div>
                                <pre className="code-snippet">
                                    <code>{example.cssCode}</code>
                                </pre>
                                {copied && <p className="copy-status">{copied}</p>}
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default BestPracticesAndPerformanceOptimization;
