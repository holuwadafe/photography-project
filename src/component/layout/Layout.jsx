import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';


function Layout({ children }) {
    return (
        <div className="">
            <Navbar />
            <main className=''>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;