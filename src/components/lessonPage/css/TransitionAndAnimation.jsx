import React, { useState, useEffect } from 'react';

const TransitionsAndAnimations = ({ id }) => {
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

    const transitionCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Transitions</title>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background-color: #007BFF;
            transition: background-color 0.5s ease, transform 0.5s ease;
        }
        .box:hover {
            background-color: #FF5722;
            transform: scale(1.2);
        }
    </style>
</head>
<body>
    <div class="box"></div>
</body>
</html>
    `;

    const animationCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animations</title>
    <style>
        @keyframes slide {
            0% {
                transform: translateX(0);
            }
            50% {
                transform: translateX(100px);
            }
            100% {
                transform: translateX(0);
            }
        }

        .box {
            width: 100px;
            height: 100px;
            background-color: #007BFF;
            animation: slide 2s infinite;
        }
    </style>
</head>
<body>
    <div class="box"></div>
</body>
</html>
    `;

    const advancedAnimationCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced CSS Animations</title>
    <style>
        @keyframes bounce {
            0%, 100% {
                transform: translateY(0);
                animation-timing-function: ease-in;
            }
            50% {
                transform: translateY(-50px);
                animation-timing-function: ease-out;
            }
        }

        .box {
            width: 100px;
            height: 100px;
            background-color: #4CAF50;
            animation: bounce 1s infinite;
        }
    </style>
</head>
<body>
    <div class="box"></div>
</body>
</html>
    `;

    return (
        <div id="transitions_and_animations" className="subLesson">
            <h3 className='subTitle'>Transitions and Animations</h3>
            <p className='subLessonText'>
                CSS transitions and animations allow you to create smooth, visually appealing changes to elements on your webpage. Transitions define how an element changes from one state to another, while animations offer more control over intermediate steps.
            </p>

            <h4 className='subTextTitle'>CSS Transitions</h4>
            <p className='subText'>
                CSS transitions allow you to change property values smoothly (over a given duration). You can define transitions on properties like color, background-color, height, width, and many others.
            </p>

            <div className="subText">
                Here the transition takes place when you hover on the box.
            </div>

            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(transitionCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{transitionCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={transitionCode}
                className="code-preview"
                title="CSS Transitions Preview"
            ></iframe>

            <h4 className='subTextTitle'>CSS Animations</h4>
            <p className='subText'>
                CSS animations allow you to animate transitions from one CSS style configuration to another. Animations consist of keyframes that define the styles for various points during the animation sequence.
            </p>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(animationCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{animationCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={animationCode}
                className="code-preview"
                title="CSS Animations Preview"
            ></iframe>

            <h4 className='subTextTitle'>Advanced CSS Animations</h4>
            <p className='subText'>
                Advanced animations often combine multiple properties, easing functions, and keyframe steps to create more complex effects. Here’s an example of a bouncing animation.
            </p>
            <div className="code-snippet-container">
                <div className="code-snippet-header">
                    <span className="file-type">HTML</span>
                    <button className="copy-code-btn" onClick={() => handleCopy(advancedAnimationCode)}>
                        Copy Code
                    </button>
                </div>
                <pre className="code-snippet">
                    <code>{advancedAnimationCode}</code>
                </pre>
                {copied && <p className="copy-status">{copied}</p>}
            </div>
            <h4 className='subTextTitle'>Preview</h4>
            <iframe
                srcDoc={advancedAnimationCode}
                className="code-preview"
                title="Advanced CSS Animations Preview"
            ></iframe>
        </div>
    );
};

export default TransitionsAndAnimations;
