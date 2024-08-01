import React from 'react'
import * as icon from 'react-bootstrap-icons'

const Footer = () => {
    return (
        <div className='footer section'>
            <div className="footerTop">

                <a href="mailto:firzasi.fi@gmail.com" target='_blank' rel="noopener noreferrer">
                    <icon.Envelope />
                </a>


                <a href="https://www.instagram.com/zeecode_academy/" target='_blank' rel="noopener noreferrer">
                    <icon.Instagram />
                </a>


                <a href="https://x.com/IdrisFirdaws" target='_blank' rel="noopener noreferrer">
                    <icon.TwitterX />
                </a>


            </div>

            <hr />

            <div className="footerBottom">
                <p>
                    &copy; ZeeCode, 2024. All rights reserved.
                </p>

                <p>
                    Designed by <a href="https://firdaws.vercel.com">Firdaws.io</a>
                </p>

            </div>
        </div>
    )
}

export default Footer
