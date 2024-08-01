import React from 'react'
import Navbar from '../components/globalComponents/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/globalComponents/Footer'

export default function RootLayout() {
    return (
        <div>
            <Outlet />
            <Footer />
        </div>
    )
}
