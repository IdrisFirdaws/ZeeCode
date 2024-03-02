import React, { useState, useEffect } from 'react';

const QuoteBox = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        fetch("http://api.quotable.io/random")
            .then(res => res.json())
            .then(data => {
                setQuote(data.content);
                setAuthor(data.author);
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
            });
    }, []);

    return (
        <div className='quote btn1'>
            <div className="quoteContent">
                <h1>{quote}</h1>
            </div>
            <p>{author}</p>
        </div>
    );
};

export default QuoteBox;
