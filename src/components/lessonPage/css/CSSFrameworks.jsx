import React, { useState, useEffect } from 'react';

const CSSFrameworks = ({ id }) => {
    useEffect(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, [id]);

    const [copied, setCopied] = useState('');

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code);
        setCopied('Copied!');
        setTimeout(() => setCopied(''), 2000);
    };

    const frameworksExamples = [
        {
            title: 'Bootstrap',
            description: 'Bootstrap is a widely-used CSS framework that provides a comprehensive set of tools for building responsive, mobile-first websites. It includes a grid system, responsive utilities, and a range of pre-designed components like buttons, forms, and navigation bars.',
            uses: 'Ideal for quickly prototyping and developing responsive layouts and components. Bootstrap’s extensive documentation and built-in styles make it easy to create visually appealing designs without needing to write a lot of custom CSS.',
            advantages: 'Offers a well-established grid system and pre-styled components that speed up development. Its large community and extensive documentation make it easy to find solutions and resources.',
            htmlCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Example</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h1 class="text-center">Welcome to Bootstrap</h1>
        <button class="btn btn-primary">Click Me!</button>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>`,
        },
        {
            title: 'Tailwind CSS',
            description: 'Tailwind CSS is a utility-first CSS framework that enables you to create custom designs directly in your HTML by applying utility classes. It provides a highly customizable set of low-level utility classes to build complex designs without writing custom CSS.',
            uses: 'Best for developers who prefer a utility-first approach and want to create custom designs without the constraints of predefined components. Tailwind allows for granular control over styling by combining multiple utility classes.',
            advantages: 'Offers high flexibility and control over styling with utility classes. It avoids the need for custom CSS by using pre-defined classes for various styles, which can result in a more consistent design and easier maintenance.',
            htmlCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Example</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100">
    <div class="container mx-auto p-4">
        <h1 class="text-4xl text-center font-bold text-blue-600">Welcome to Tailwind CSS</h1>
        <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Click Me!</button>
    </div>
</body>
</html>`,
        },
        {
            title: 'Bulma',
            description: 'Bulma is a modern CSS framework based on Flexbox. It provides a clean and flexible grid system along with a set of responsive and reusable components. Bulma focuses on simplicity and ease of use, making it straightforward to create attractive, responsive layouts.',
            uses: 'Great for developers who prefer a more straightforward approach to responsive design with a focus on Flexbox. Bulma’s modular structure allows for easy customization and extension of its core features.',
            advantages: 'Uses Flexbox for layout, which simplifies building complex layouts. The framework is lightweight and modular, allowing you to include only the parts you need. Its clean syntax and easy-to-understand documentation make it accessible for beginners.',
            htmlCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bulma Example</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css">
</head>
<body>
    <div class="container">
        <h1 class="title has-text-centered">Welcome to Bulma</h1>
        <button class="button is-primary">Click Me!</button>
    </div>
</body>
</html>`,
        }
    ];

    return (
        <div id="css_frameworks" className="subLesson">
            <h3 className="subTitle">CSS Frameworks</h3>
            <p className="subLessonText">
                CSS frameworks are pre-prepared libraries that streamline the process of creating websites. They provide a set of standardized CSS and JavaScript components to help you build responsive, aesthetically pleasing web pages quickly. Some popular CSS frameworks include Bootstrap, Tailwind CSS, and Bulma. Each framework has its own approach and advantages:
            </p>

            {frameworksExamples.map((example, index) => (
                <div key={index}>
                    <h4 className="subTextTitle">{example.title}</h4>
                    <p className="subText">{example.description}</p>
                    <p className="subText"><strong>Uses:</strong> {example.uses}</p>
                    <p className="subText"><strong>Advantages:</strong> {example.advantages}</p>

                    <h5 className="subTextTitle">HTML Code</h5>
                    <div className="code-snippet-container">
                        <div className="code-snippet-header">
                            <span className="file-type">HTML</span>
                            <button className="copy-code-btn" onClick={() => handleCopy(example.htmlCode)}>
                                Copy Code
                            </button>
                        </div>
                        <pre className="code-snippet">
                            <code>{example.htmlCode}</code>
                        </pre>
                        {copied && <p className="copy-status">{copied}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CSSFrameworks;
