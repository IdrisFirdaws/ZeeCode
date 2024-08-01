import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component mounts or updates
    }, []); // Empty dependency array ensures it only runs once on mount


    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '95vh' }}>
            <h1>Oops! We can't seem to find the page you're looking for.</h1>
            <p style={{ padding: '20px' }}>It looks like the page you were trying to visit doesn't exist or has been moved. This could be due to a mistyped URL, an outdated link, or the page being removed.</p>
            <br /><br />
            <p>Go to the
                <Link to="/" style={{ textDecoration: 'underline', fontWeight: 'bold' }}> Homepage.</Link>
            </p>
        </div>
    )
}

export default NotFound
