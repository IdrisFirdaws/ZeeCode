import React, { useState } from 'react';

const Community = () => {
    // State to handle email input
    const [email, setEmail] = useState('');

    // Function to handle button click
    const handleJoin = (event) => {
        event.preventDefault(); // Prevent form submission

        // Check if the email is valid (basic check)
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Show thank you message
        alert('Thank you for joining our community!');

        // Clear the input field
        setEmail('');
    };

    return (
        <div className="contact">
            <div className="inner section">
                <div className="title">Join Our Community</div>
                <p>
                    Embark on your journey to becoming a web development expert with us! Our vibrant community of learners and professionals is here to support and inspire you every step of the way. Whether you're just starting out or looking to advance your skills, you'll find a wealth of resources, mentorship, and collaboration opportunities. Join us today and unlock a world of knowledge and connections that will help you grow and succeed in your web development career.
                </p>
                <div className="searchBox">
                    <input
                        type="email"
                        placeholder="Type in your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="email-input"
                    />
                    <button
                        className="searchbtn btn1"
                        onClick={handleJoin}
                    >
                        Join
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Community;
