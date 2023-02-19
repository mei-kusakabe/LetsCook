import BlogHero from '@/Components/blogHero';
import React, { useEffect, useState } from 'react';
import AnimatedText from 'react-animated-text-content';
import NavBar from './Components/navBar';
import { MdDateRange } from 'react-icons/md';
import { ImEye } from 'react-icons/im';

const blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='bg-white'>
            <NavBar></NavBar>
            <BlogHero></BlogHero>
            <div className=' mt-20 mb-12 px-12 bg-white'>
                <div className='flex justify-center items-center'>
                    <div className='w-full'>
                        <hr className="border-lime-700 border-1"></hr>
                    </div>
                    <div className='w-full'>
                        <h1 className='text-4xl text-center text-lime-700 '>
                            <AnimatedText
                                type="chars"
                                animationType="rifle"
                            >
                                Blogs by LetsCook Chefs
                            </AnimatedText>
                        </h1>
                    </div>
                    <div className='w-full'>
                        <hr className="border-lime-700 border-1"></hr>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16 '>
                    <div className='grid grid-cols-1 col-span-1 gap-12 lg:col-span-2'>
                        {
                            blogs?.length && blogs.map(blog =>
                                <div key={blog?.id} className="card card-compact rounded-none border-b " data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000">
                                    <figure><img src={blog?.img} alt="" className='rounded-none cursor-pointer ease-in-out duration-500 hover:rotate-2 hover:scale-150' /></figure>
                                    <div className="my-6">
                                        <h2 className="text-2xl font-semibold text-accent">
                                            <AnimatedText
                                                type="chars"
                                                animationType="rifle"
                                            >
                                                {blog?.title}
                                            </AnimatedText></h2>
                                        <p className='my-6'>{blog?.text.slice(0, 300)} . . .</p>
                                        <div className='flex justify-between items-center flex-col lg:flex-row gap-y-4'>
                                            <div className='flex justify-between items-center '>
                                                <div className="avatar">
                                                    <div className="w-12 rounded-full">
                                                        <img src={blog?.author} />
                                                    </div>
                                                </div>
                                                <p className='ml-2 text-lime-700'>{blog?.name}</p>

                                            </div>
                                            <p className='flex justify-between items-center '><MdDateRange className='text-accent font-bold text-2xl'></MdDateRange><span className='ml-2 text-lime-700
                                            '>{blog?.date}</span></p>
                                            <p className='flex justify-between items-center '><ImEye className='text-accent font-bold text-2xl'></ImEye><span className='ml-2 text-lime-700
                                            '>{blog?.views}</span></p>
                                            <button className="btn btn-accent btn-sm text-white">View More</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className=''>
                        <h2 className="text-2xl font-semibold text-accent">
                            <AnimatedText
                                type="chars"
                                animationType="rifle"
                            >
                                Read More Exclusive News
                            </AnimatedText></h2>
                        <div className='bt-12 mb-6'>
                            {blogs?.length && blogs.map(blog =>
                                <div key={blog.id}>
                                    <div className='border-b flex items-center py-6 flex-col lg:flex-row'>
                                        <img src={blog.img} alt="" className='w-full md:w-24 lg:w-24 h-full md:h-24 lg:h-24  cursor-pointer ease-in-out duration-500 hover:scale-125' />
                                        <button className="text-xl text-center md:text-left lg:text-left ml-3 font-semibold text-lime-700 cursor-pointer ease-out-in duration-500 hover:scale-75">
                                            {blog.title}</button>
                                    </div>
                                </div>

                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default blog;