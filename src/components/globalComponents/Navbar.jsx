import React from 'react'
import * as icon from 'react-bootstrap-icons'

const Navbar = ({ showButton }) => {
    return (
        <div className='navbar'>
            <div className="brand">
                <h2>ZeeCode Academy</h2>
            </div>
            <ul className="links">
                <li>
                    <a href="mailto:firzasi.fi@gmail.com" target='_blank' rel="noopener noreferrer">
                        <icon.Envelope />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/zeecode_academy/" target='_blank' rel="noopener noreferrer">
                        <icon.Instagram />
                    </a>
                </li>
                <li>
                    <a href="https://x.com/IdrisFirdaws" target='_blank' rel="noopener noreferrer">
                        <icon.TwitterX />
                    </a>
                </li>
                {showButton && (
                    <li className='lg'>
                        <a href="/private">
                            <button className="btn1">Start Now</button>
                        </a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Navbar
