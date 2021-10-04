import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='bg-dark text-white text-center p-5'>
                <h2>Stay Updated</h2>
                <input className='w-50 me-1' type="" placeholder="Enter you Email" />
                <button className='btn btn-primary'>Subscribe</button>
            </div>
            <p className='text-center bg-dark text-white m-0 p-3'>SamPro © 2021. All Rights Reserved. Terms of Use and Privacy Policy</p>
        </div>
    );
};

export default Footer;