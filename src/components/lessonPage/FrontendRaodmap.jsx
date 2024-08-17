import React from 'react';

const lessons = [
    {
        id: "fundamentals_of_web_development",
        title: "Fundamentals of Web Development",
        description: "Learn the core building blocks of web development.",
        content: [
            "HTML: Learn the structure of web pages, semantic HTML, forms, tables, and accessibility.",
            "CSS: Master styling, layouts (Flexbox, Grid), animations, responsive design, and preprocessors like SASS or LESS.",
            "JavaScript: Understand the basics of programming, ES6+ features, DOM manipulation, event handling, and AJAX."
        ]
    },
    {
        id: "version_control",
        title: "Version Control",
        description: "Learn to manage code changes and collaborate with others.",
        content: [
            "Git: Learn version control basics, branching, merging, pull requests, and workflows (e.g., GitFlow).",
            "GitHub/GitLab/Bitbucket: Familiarize yourself with using these platforms for code hosting and collaboration."
        ]
    },
    {
        id: "frontend_frameworks_and_libraries",
        title: "Frontend Frameworks and Libraries",
        description: "Understand the frameworks and libraries that enhance frontend development.",
        content: [
            "CSS Frameworks: Bootstrap, Tailwind CSS, Material-UI.",
            "JavaScript Frameworks/Libraries: React, Vue.js, Angular.",
            "Learn component-based architecture, state management (e.g., Redux for React, Vuex for Vue.js), routing, and form handling."
        ]
    },
    {
        id: "package_managers_and_build_tools",
        title: "Package Managers and Build Tools",
        description: "Manage project dependencies and optimize your build process.",
        content: [
            "Package Managers: npm, Yarn.",
            "Build Tools: Webpack, Parcel, Vite.",
            "Task Runners: Gulp, Grunt."
        ]
    },
    {
        id: "advanced_javascript",
        title: "Advanced JavaScript",
        description: "Deepen your understanding of JavaScript and its ecosystem.",
        content: [
            "Asynchronous Programming: Promises, async/await, fetch API.",
            "JavaScript Design Patterns: Module, Singleton, Observer, Factory.",
            "TypeScript: Learn the basics and advantages of using TypeScript over plain JavaScript."
        ]
    },
    {
        id: "api_interaction",
        title: "API Interaction",
        description: "Learn to communicate with servers and fetch data.",
        content: [
            "REST APIs: Understanding CRUD operations, status codes, headers, and JSON.",
            "GraphQL: Basics of GraphQL, queries, mutations, and using GraphQL clients like Apollo."
        ]
    },
    {
        id: "testing",
        title: "Testing",
        description: "Ensure the quality and reliability of your code.",
        content: [
            "Unit Testing: Frameworks like Jest, Mocha.",
            "Integration and End-to-End Testing: Cypress, Selenium, Puppeteer."
        ]
    },
    {
        id: "performance_optimization",
        title: "Performance Optimization",
        description: "Improve the speed and responsiveness of your web applications.",
        content: [
            "Web Performance: Lazy loading, code splitting, image optimization, and minimizing render-blocking resources.",
            "Web Vitals: Core Web Vitals, Lighthouse, PageSpeed Insights."
        ]
    },
    {
        id: "accessibility_a11y",
        title: "Accessibility (a11y)",
        description: "Ensure your web applications are usable by everyone.",
        content: [
            "Basics: ARIA roles, keyboard navigation, screen reader compatibility.",
            "Tools: Axe, WAVE, Lighthouse accessibility audit."
        ]
    },
    {
        id: "security",
        title: "Security",
        description: "Protect your applications from common vulnerabilities.",
        content: [
            "Common Vulnerabilities: XSS, CSRF, CORS.",
            "Best Practices: Content Security Policy, secure cookies, HTTPS."
        ]
    },
    {
        id: "devops_and_deployment",
        title: "DevOps and Deployment",
        description: "Learn to deploy and maintain your applications.",
        content: [
            "Hosting and CI/CD: Platforms like Netlify, Vercel, GitHub Actions.",
            "Containerization: Basics of Docker.",
            "Monitoring: Tools like Sentry for error tracking and performance monitoring."
        ]
    },
    {
        id: "soft_skills_and_best_practices",
        title: "Soft Skills and Best Practices",
        description: "Develop essential non-technical skills for effective collaboration.",
        content: [
            "Communication: Working in teams, participating in code reviews.",
            "Project Management: Agile methodologies, using tools like Jira, Trello.",
            "Continuous Learning: Staying updated with the latest trends and best practices in the frontend ecosystem."
        ]
    },
    {
        id: "portfolio_and_personal_projects",
        title: "Portfolio and Personal Projects",
        description: "Build a portfolio and engage in projects to showcase your skills.",
        content: [
            "Portfolio: Create a personal website showcasing your skills and projects.",
            "Open Source: Contribute to open source projects to gain experience and visibility.",
            "Blogging or Content Creation: Share your knowledge through blog posts, tutorials, or videos."
        ]
    }
];

const FrontendRoadmap = () => {
    return (
        <div className="lessonContent">
            <div className="subLesson">
                <h1 className="title">Frontend Roadmap</h1>
                <p className="subLessonText">
                    A comprehensive guide to becoming a proficient frontend developer.
                </p>
                {lessons.map((lesson) => (
                    <div key={lesson.id} className="lesson-container" id={lesson.id}>
                        <h2 className="subTextTitle">{lesson.title}</h2>
                        <p className="subText">{lesson.description}</p>
                        <ul className="lesson-content">
                            {lesson.content.map((item, index) => (
                                <li key={index} className="content-item">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FrontendRoadmap;
