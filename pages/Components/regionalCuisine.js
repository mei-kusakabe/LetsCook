import React, { useEffect, useState } from 'react';
import AnimatedText from 'react-animated-text-content';
import { ImEye } from 'react-icons/im';
import { AiFillLike } from 'react-icons/ai';

const RegionalCuisine = () => {
    const [cuisines, setCuisines] = useState([]);
    useEffect(() => {
        fetch('cuisine.json')
            .then(res => res.json())
            .then(data => setCuisines(data))
    }, [])
    return (
        <div className='mb-12 px-12'>
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
                            Regional Cuisine Worldwide
                        </AnimatedText>
                    </h1>
                </div>
                <div className='w-full'>
                    <hr className="border-lime-700 border-1"></hr>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 'data-aos="zoom-in-up">
                {
                    cuisines?.length && cuisines.map(cuisine =>
                        <div tabIndex={0} className="collapse collapse-arrow border-t" key={cuisine.id}>
                            <div className="collapse-title text-xl font-medium flex-col lg:flex-row">
                                <div className="card card-side rounded-none flex-col lg:flex-row" data-aos="fade-up"
     data-aos-duration="3000">
                                    <figure><img src={cuisine.img} alt="Movie" className='w-60 h-40 cursor-pointer ease-in-out duration-500 hover:rotate-2 hover:scale-150'/></figure>
                                    <div className="lg:card-body md:card-body">
                                        <h2 className="text-2xl font-semibold text-accent">{cuisine.name}</h2>
                                        <div className="rating rating-sm">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" />
                                        </div>
                                        <div className='flex justify-self items-center'>
                                            <p className='flex items-center '><ImEye></ImEye><span className='ml-2 text-lime-700
                                            '>Views</span></p>
                                            <p className='flex justify-center items-center '><AiFillLike></AiFillLike><span className='ml-2 text-lime-700
                                            '>Likes</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse-content">
                                <p>{cuisine.text}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default RegionalCuisine;