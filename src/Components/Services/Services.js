import React, { useEffect, useState } from 'react';

const Services = () => {
    const [allservices, setAllservice] = useState([]);

    useEffect(() => {
        fetch('./fakeservices.JSON')
            .then(res => res.json())
            .then(data => setAllservice(data))
    }, [])
    return (
        <div className='container'>
            <div className='my-5 text-center'>
                <h1>We have a bunch of services</h1>
                <h3>Let's Explore it</h3>
            </div>

            <div className='carts shadow-sm rounded-3 p-2'>
                {allservices.map((allservice) => (
                    <div className='border m-3 cart shadow-sm' key={allservice.id}>
                        <img className='img-fluid' style={{ width: "100%" }} src={allservice.img} alt="" />
                        <h1 className='my-2 p-3'>{allservice.title}</h1>
                        <p className='p-3'>{allservice.description}</p>
                        <div className='d-flex justify-content-between p-3'>
                            <h4>Starts At: <span className='text-primary'>${allservice.value}</span></h4>
                            <button className='btn btn-primary'>Let's Discuss</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;