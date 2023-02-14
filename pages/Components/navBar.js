import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href='/homePage'className='text-primary font-semibold'>Home</Link></li>
                    <li><Link href='/about'className='text-primary font-semibold'>About Us</Link></li>
                    <li><Link href='/category'className='text-primary font-semibold'>Category</Link></li>
                    <li><Link href='/newsletter'className='text-primary font-semibold'>Newsletter</Link></li>
                    <li><Link href='/blog'className='text-primary font-semibold'>Blog</Link></li>
                    <li><Link href='/contact'className='text-primary font-semibold'>Contact Us</Link></li>
                        
                    </ul>
                </div>
                <img src="logo.png" alt="" />
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><Link href='/homePage'className='text-primary font-semibold'>Home</Link></li>
                    <li><Link href='/about'className='text-primary font-semibold'>About Us</Link></li>
                    <li><Link href='/category'className='text-primary font-semibold'>Category</Link></li>
                    <li><Link href='/newsletter'className='text-primary font-semibold'>Newsletter</Link></li>
                    <li><Link href='/blog'className='text-primary font-semibold'>Blog</Link></li>
                    <li><Link href='/contact'className='text-primary font-semibold'>Contact Us</Link></li>
                    
                </ul>
            </div>
        </div>
    );
};

export default NavBar;