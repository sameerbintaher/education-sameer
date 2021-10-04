import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='container error shadow-lg my-5'>
            <h1 className='text-center my-5 text text-danger'>404 Not Found</h1>

            <Link to='/home'>
                <button className='btn btn-danger text-center'>Back To Home</button>
            </Link>
        </div>

    );
};

export default Error;