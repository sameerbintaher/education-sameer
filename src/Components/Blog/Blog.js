import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./fakeblog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='container'>
            <div className='row my-5'>
                <div className='col-md-8'>
                    {blogs.map((blog) => (
                        <div className='border m-3 cart w-100' key={blog.id}>
                            <img className='img-fluid w-100' src={blog.img} alt="" />
                            <h5 className='blog-date'>{blog.date}</h5>
                            <h1 className='my-2 p-3'>{blog.title}</h1>
                            <p className='p-3'>{blog.description}</p>
                            <p className='d-flex justify-content-between p-3'><small>{blog.about}</small><small>{blog.comments} Comments</small></p>
                        </div>
                    ))}
                </div>
                <div className='col-md-3 my-5 border mx-3 p-2 bg-light'>
                    <div className='mb-5'>
                        <input className='w-100 my-1 rounded-3' type="" placeholder="" />
                        <button className='rounded-3 px-2 btn-primary'>Search</button>
                    </div>
                    <div>
                        <h2 className='mb-4'>Category</h2>

                        <h5>Resaurant food
                        (37)</h5><hr />
                        <h5>Travel news
                        (10)</h5><hr />
                        <h5>Modern technology
                        (03)</h5><hr />
                        <h5>Product
                        (11)</h5><hr />
                        <h5>Inspiration
                        21</h5><hr />
                        <h5>Health Care (21)
                        09</h5><hr />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;