import React, { useState, useEffect } from 'react';

const FetchTopics = () => {
    const [lessons, setLessons] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Hardcoded lesson data with sublesson IDs
        const lessonData = {
            frontend_roadmap: {
                title: "Frontend Roadmap",
                sublessons: [
                    { id: "fundamentals_of_web_development", title: "Fundamentals of Web Development" },
                    { id: "version_control", title: "Version Control" },
                    { id: "frontend_frameworks_and_libraries", title: "Frontend Frameworks and Libraries" },
                    { id: "package_managers_and_build_tools", title: "Package Managers and Build Tools" },
                    { id: "advanced_javascript", title: "Advanced JavaScript" },
                    { id: "api_interaction", title: "API Interaction" },
                    { id: "testing", title: "Testing" },
                    { id: "performance_optimization", title: "Performance Optimization" },
                    { id: "accessibility_a11y", title: "Accessibility (a11y)" },
                    { id: "security", title: "Security" },
                    { id: "devops_and_deployment", title: "DevOps and Deployment" },
                    { id: "soft_skills_and_best_practices", title: "Soft Skills and Best Practices" },
                    { id: "portfolio_and_personal_projects", title: "Portfolio and Personal Projects" },
                ]
            },
            html: {
                title: "HTML",
                sublessons: [
                    { id: "introduction_to_html", title: "Introduction to HTML" },
                    { id: "elements_and_tags", title: "Elements and Tags" },
                    { id: "attributes", title: "Attributes" },
                    { id: "text_formatting", title: "Text Formatting" },
                    { id: "links_and_navigation", title: "Links and Navigation" },
                    { id: "images_and_multimedia", title: "Images and Multimedia" },
                    { id: "forms_and_input_elements", title: "Forms and Input Elements" },
                    { id: "tables", title: "Tables" },
                    { id: "html5_features", title: "HTML5 Features" },
                    { id: "document_metadata", title: "Document Metadata" },
                    { id: "html_entities", title: "HTML Entities" },
                    { id: "best_practices", title: "Best Practices" },
                    { id: "accessibility_a11y", title: "Accessibility (a11y)" }
                ]
            },

            css: {
                title: "CSS",
                sublessons: [
                    { id: "introduction_to_css", title: "Introduction to CSS" },
                    { id: "css_syntax_and_selectors", title: "CSS Syntax and Selectors" },
                    { id: "css_colors_and_units", title: "CSS Colors and Units" },
                    { id: "typography", title: "Typography" },
                    { id: "box_model", title: "Box Model" },
                    { id: "layout_techniques", title: "Layout Techniques" },
                    { id: "responsive_design", title: "Responsive Design" },
                    { id: "styling_forms", title: "Styling Forms" },
                    { id: "transitions_and_animations", title: "Transitions and Animations" },
                    { id: "css_variables", title: "CSS Variables (Custom Properties)" },
                    { id: "css_grid_and_flexbox_advanced_techniques", title: "CSS Grid and Flexbox Advanced Techniques" },
                    { id: "pseudo_classes_and_pseudo_elements", title: "Pseudo-Classes and Pseudo-Elements" },
                    { id: "css_preprocessors", title: "CSS Preprocessors" },
                    { id: "css_frameworks", title: "CSS Frameworks" },
                    { id: "best_practices_and_optimization", title: "Best Practices and Performance Optimization" },
                    { id: "css_for_accessibility", title: "CSS for Accessibility" }
                ]
            },

            javascript: {
                title: "JavaScript",
                sublessons: [
                    { id: "introduction_to_javascript", title: "Introduction to JavaScript" },
                    { id: "dom_manipulation", title: "DOM Manipulation" },
                    { id: "es6_features", title: "ES6+ Features" },
                    { id: "ajax", title: "AJAX" },
                ]
            },
            version_control: {
                title: "Version Control",
                sublessons: [
                    { id: "git_basics", title: "Git Basics" },
                    { id: "branching_and_merging", title: "Branching and Merging" },
                    { id: "git_workflows", title: "Git Workflows" },
                    { id: "git_platforms", title: "Git Platforms" },
                ]
            },
            frameworks_libraries: {
                title: "Frontend Frameworks and Libraries",
                sublessons: [
                    { id: "css_frameworks", title: "CSS Frameworks" },
                    { id: "javascript_frameworks_and_libraries", title: "JavaScript Frameworks and Libraries" },
                    { id: "component_based_architecture", title: "Component-Based Architecture" },
                    { id: "state_management", title: "State Management" },
                ]
            },
            package_build_tools: {
                title: "Package Managers and Build Tools",
                sublessons: [
                    { id: "package_managers", title: "Package Managers" },
                    { id: "build_tools", title: "Build Tools" },
                    { id: "task_runners", title: "Task Runners" },
                ]
            },
            advanced_js: {
                title: "Advanced JavaScript",
                sublessons: [
                    { id: "asynchronous_programming", title: "Asynchronous Programming" },
                    { id: "javascript_design_patterns", title: "JavaScript Design Patterns" },
                    { id: "typescript", title: "TypeScript" },
                ]
            },
            api_interaction: {
                title: "API Interaction",
                sublessons: [
                    { id: "rest_apis", title: "REST APIs" },
                    { id: "graphql", title: "GraphQL" },
                ]
            },
            testing: {
                title: "Testing",
                sublessons: [
                    { id: "unit_testing", title: "Unit Testing" },
                    { id: "integration_and_end_to_end_testing", title: "Integration and End-to-End Testing" },
                ]
            },
            performance_optimization: {
                title: "Performance Optimization",
                sublessons: [
                    { id: "web_performance", title: "Web Performance" },
                    { id: "web_vitals", title: "Web Vitals" },
                ]
            },
            accessibility: {
                title: "Accessibility (a11y)",
                sublessons: [
                    { id: "basics", title: "Basics" },
                    { id: "accessibility_tools", title: "Accessibility Tools" },
                ]
            },
            security: {
                title: "Security",
                sublessons: [
                    { id: "common_vulnerabilities", title: "Common Vulnerabilities" },
                    { id: "best_practices", title: "Best Practices" },
                ]
            },
            devops_deployment: {
                title: "DevOps and Deployment",
                sublessons: [
                    { id: "hosting_and_ci_cd", title: "Hosting and CI/CD" },
                    { id: "containerization", title: "Containerization" },
                    { id: "monitoring", title: "Monitoring" },
                ]
            },
            soft_skills: {
                title: "Soft Skills and Best Practices",
                sublessons: [
                    { id: "communication", title: "Communication" },
                    { id: "project_management", title: "Project Management" },
                    { id: "continuous_learning", title: "Continuous Learning" },
                ]
            },
            portfolio_projects: {
                title: "Portfolio and Personal Projects",
                sublessons: [
                    { id: "portfolio", title: "Portfolio" },
                    { id: "open_source", title: "Open Source" },
                    { id: "blogging_or_content_creation", title: "Blogging or Content Creation" },
                ]
            },
        };

        try {
            setLessons(lessonData);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch lessons');
            setLoading(false);
        }
    }, []);

    return { lessons, loading, error };
};

export default FetchTopics;
