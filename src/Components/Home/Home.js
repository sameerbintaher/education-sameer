import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='font'>
            <Link to='/home' />
            <div className='bg-dark text-white text-center p-5 bg'>
                <h1 className='my-4'>The New Way To <br />
                Learn Prosperly in <br />
                With Us!</h1>
                <Link to='/services'>
                    <button className='btn btn-primary my-2'>Get Started</button>
                </Link>
            </div>

            <div className='container w-sm-100 text-center my-5 shadow p-lg-5 rounded-3'>

                <p className='text-primary'>Popular Services</p>
                <h1>Lets Browse Our Services</h1>

                <div className='carts'>
                    {services.map((service) => (
                        <div className='border m-3 m-sm-1 cart' key={service.id}>
                            <img className='img-fluid' src={service.img} alt="" />
                            <h1 className='my-2 p-3'>{service.title}</h1>
                            <p className='p-3'>{service.description}</p>
                        </div>
                    ))}
                </div>

                <Link to='/services'>
                    <button className='btn btn-primary my-5'>Find All Services</button>
                </Link>

            </div>

            <div className='container d-lg-flex d-sm-block my-5'>
                <div className='p-3'>
                    <p className='my-4'>More about our company</p>
                    <h1 className='my-4'>Want to know more</h1>
                    <p className='my-4'>There arge many variations ohf passages of sorem gpsum ilable, but the majority have suffered alteration in some form, by ected humour, or randomised words whi.</p>
                    <ul>
                        <li>Creative ideas base</li>
                        <li>Assages of sorem gpsum ilable</li>
                        <li>Have suffered alteration in so</li>
                        <li>Randomised words whi</li>
                    </ul>
                    <Link to='/about'>
                        <button className='btn btn-primary my-2'>More About Us</button>
                    </Link>
                </div>
                <div>
                    <div className='d-lg-flex d-sm-block'>
                        <img className='mx-lg-4 mb-4' src="https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/xabout2.png.pagespeed.ic.869_mUW4z9.jpg" alt="" />

                        <img className='mt-4' src="https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/xabout1.png.pagespeed.ic.LtbVvWuvv5.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;