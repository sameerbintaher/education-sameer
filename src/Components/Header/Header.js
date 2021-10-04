import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='d-flex justify-content-between align-items-center p-5 bg-dark'>
            <Link className='main' to='/home'><h1>SamPro</h1></Link>
            <div className='d-flex justify-content-center align-items-center'>
                <Link className='ms-5 nav' to='/home'>Home</Link>
                <Link className='ms-5 nav' to='/about'>About</Link>
                <Link className='ms-5 nav' to='/services'>Services</Link>
                <Link className='ms-5 nav' to='/blog'>Blog</Link>
            </div>
            <div>
                <input className='w-50 me-1 rounded-3' type="" placeholder="" />
                <button className='rounded-3 px-2 btn-primary'>Search</button>
            </div>


        </div>
    );
};

export default Header;