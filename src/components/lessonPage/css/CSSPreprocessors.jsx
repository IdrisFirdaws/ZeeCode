import React, { useState, useEffect } from 'react';

const CSSPreprocessors = ({ id }) => {
    useEffect(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, [id]);

    const [copied, setCopied] = useState('');

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code);
        setCopied('Copied!');
        setTimeout(() => setCopied(''), 2000);
    };

    const preprocessorsExamples = [
        {
            title: 'Variables',
            description: 'CSS Preprocessors allow the use of variables to store values like colors, fonts, or any CSS value, making it easier to maintain and reuse them across your stylesheets.',
            scssCode: `
$primary-color: #3498db;
$padding: 20px;

.button {
  background-color: $primary-color;
  padding: $padding;
  color: white;
  border-radius: 5px;
}`,
            cssCode: `
.button {
  background-color: #3498db;
  padding: 20px;
  color: white;
  border-radius: 5px;
}`,
        },
        {
            title: 'Nesting',
            description: 'Nesting in CSS preprocessors allows you to write nested selectors in a way that mirrors the HTML structure, making the CSS more readable and organized.',
            scssCode: `
.navbar {
  background-color: #333;

  .nav-item {
    color: white;
    
    &:hover {
      color: #3498db;
    }
  }
}`,
            cssCode: `
.navbar {
  background-color: #333;
}
.navbar .nav-item {
  color: white;
}
.navbar .nav-item:hover {
  color: #3498db;
}`,
        },
        {
            title: 'Mixins',
            description: 'Mixins allow you to create reusable blocks of styles that can be included in other selectors.',
            scssCode: `
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box {
  @include border-radius(10px);
  background-color: #f4f4f4;
  padding: 20px;
}`,
            cssCode: `
.box {
  -webkit-border-radius: 10px;
     -moz-border-radius: 10px;
      -ms-border-radius: 10px;
          border-radius: 10px;
  background-color: #f4f4f4;
  padding: 20px;
}`,
        },
        {
            title: 'Inheritance',
            description: 'CSS preprocessors allow you to create a base style and extend it to other selectors using @extend, allowing for better code reuse.',
            scssCode: `
%message-shared {
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
}

.success {
  @extend %message-shared;
  background-color: #2ecc71;
  color: white;
}

.error {
  @extend %message-shared;
  background-color: #e74c3c;
  color: white;
}`,
            cssCode: `
.success, .error {
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
}
.success {
  background-color: #2ecc71;
  color: white;
}
.error {
  background-color: #e74c3c;
  color: white;
}`,
        }
    ];

    return (
        <div id="css_preprocessors" className="subLesson">
            <h3 className="subTitle">CSS Preprocessors</h3>
            <p className="subLessonText">
                CSS preprocessors like SASS (Syntactically Awesome Style Sheets), SCSS (Sassy CSS), and LESS (Leaner Style Sheets) are tools that extend the functionality of CSS.
                SASS and SCSS allow you to use features like variables, nesting, and mixins to write more maintainable and reusable CSS. SCSS is a syntax of SASS that is fully compatible with CSS,
                while LESS provides similar functionality with a slightly different syntax. These preprocessors compile into standard CSS, making it easier to manage and scale your stylesheets as your projects grow.
            </p>

            {preprocessorsExamples.map((example, index) => (
                <div key={index}>
                    <h4 className="subTextTitle">{example.title}</h4>
                    <p className="subText">{example.description}</p>

                    <h5 className="subTextTitle">SCSS Code</h5>
                    <div className="code-snippet-container">
                        <div className="code-snippet-header">
                            <span className="file-type">SCSS</span>
                            <button className="copy-code-btn" onClick={() => handleCopy(example.scssCode)}>
                                Copy Code
                            </button>
                        </div>
                        <pre className="code-snippet">
                            <code>{example.scssCode}</code>
                        </pre>
                        {copied && <p className="copy-status">{copied}</p>}
                    </div>

                    <h5 className="subTextTitle">Compiled CSS Code</h5>
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
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CSSPreprocessors;
