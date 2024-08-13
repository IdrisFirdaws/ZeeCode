// import React, { useState, useEffect } from 'react';
// import Prism from 'prismjs';
// import 'prismjs/themes/prism.min.css';

// const CodeEditor = () => {
//     const [htmlCode, setHtmlCode] = useState('<h1>Hello World!</h1>');
//     const [cssCode, setCssCode] = useState('body { background-color: #f0f0f0; font-family: Arial, sans-serif; }');
//     const [jsCode, setJsCode] = useState('document.getElementById("demo").innerHTML = "Hello from JavaScript!";');

//     const copyToClipboard = (code) => {
//         navigator.clipboard.writeText(code)
//             .then(() => alert('Code copied to clipboard!'))
//             .catch(err => console.error('Failed to copy code:', err));
//     };

//     useEffect(() => {
//         Prism.highlightAll();
//     }, [htmlCode, cssCode, jsCode]);

//     return (
//         <div className="code-editor">
//             <h1>Code Editor with Preview</h1>

//             <div className="editor-container">
//                 <button className="copy-btn" onClick={() => copyToClipboard(htmlCode)}>Copy HTML</button>
//                 <pre><code className="language-html">{htmlCode}</code></pre>
//                 <iframe
//                     title="HTML Preview"
//                     srcDoc={htmlCode}
//                     className="preview"
//                 ></iframe>
//             </div>

//             <div className="editor-container">
//                 <button className="copy-btn" onClick={() => copyToClipboard(cssCode)}>Copy CSS</button>
//                 <pre><code className="language-css">{cssCode}</code></pre>
//                 <iframe
//                     title="CSS Preview"
//                     srcDoc={`<style>${cssCode}</style><body><h1>Hello World!</h1></body>`}
//                     className="preview"
//                 ></iframe>
//             </div>

//             <div className="editor-container">
//                 <button className="copy-btn" onClick={() => copyToClipboard(jsCode)}>Copy JS</button>
//                 <pre><code className="language-javascript">{jsCode}</code></pre>
//                 <iframe
//                     title="JS Preview"
//                     srcDoc={`<body><div id="demo">Initial content</div><script>${jsCode}</script></body>`}
//                     className="preview"
//                 ></iframe>
//             </div>
//         </div>
//     );
// };

// export default CodeEditor;


import React from 'react';
import useLesson from '../hooks/UseLessons';

const LessonDetail = ({ lessonId }) => {
    const { lesson, loading, error } = useLesson(lessonId);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!lesson) return <p>Lesson not found</p>;

    return (
        <div>
            <h1>{lesson.title}</h1>
            <p>{lesson.description}</p>
            {lesson.content.map((text, index) => (
                <p key={index}>{text}</p>
            ))}
            {lesson.code_snippets && Object.entries(lesson.code_snippets).map(([key, snippet]) => (
                <pre key={key}>
                    <code>{snippet}</code>
                </pre>
            ))}
        </div>
    );
};

export default LessonDetail;
