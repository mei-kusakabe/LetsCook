"use client";
import React from 'react';
import AnimatedText from 'react-animated-text-content';

const Banner = () => {
    
    return (
        <div className="hero min-h-screen mb-12" style={{ backgroundImage: 'url("banner.jpg")' }}>
           <div className="hero-content text-center bg-lime-200 bg-opacity-60 hover:bg-lime-200  bg-">
                <div className="max-w-md p-2 text-accent">
                    <h1 className="mb-5 text-5xl font-bold"><AnimatedText
                        type="chars"
                        animationType="bounce"
                    >
                        Let's Cook
                    </AnimatedText></h1>
                    <h1 className="mb-5 text-3xl text-lime-800 font-bold"><AnimatedText
                        type="chars"
                        animationType="diagonal"
                    >
                        Pick Your Favorite Recipe
                    </AnimatedText></h1>
                    <p className="mb-5 text-black "><AnimatedText
                        type="chars"
                        animationType="rifle"
                    >
                        We are providing the best recipes of your choice by the best chefs in town. So find your favorite recipe without delay and cook accordingly.
                    </AnimatedText></p>
                    <div className="rating" data-aos="fade-up">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-accent" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-accent" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-accent" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-accent" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-accent"  />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;