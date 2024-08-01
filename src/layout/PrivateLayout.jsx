import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/globalComponents/Navbar'

export default function PrivateLayout() {
    return (
        <div>
            <Navbar showButton={false} />
            <main>
                <Outlet />
            </main>

        </div>
    )
}
