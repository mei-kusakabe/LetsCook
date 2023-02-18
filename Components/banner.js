import React from 'react';
import AnimatedText from 'react-animated-text-content';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("banner.jpg")` }}>
            {/* <div className="hero-overlay bg-opacity bg-white"></div> */}
            <div className="hero-content text-center bg-white bg-opacity-70">
                <div className="max-w-md p-2 text-accent">
                    <h1 className="mb-5 text-5xl font-bold"><AnimatedText
                        type="chars"
                        animationType="bounce"
                    >
                        Let's Cook
                    </AnimatedText></h1>
                    {/* <h1 className="mb-5 text-5xl font-bold"></h1> */}
                    <h1 className="mb-5 text-3xl text-lime-700 font-semibold"><AnimatedText
                        type="chars"
                        animationType="rifle"
                    >
                        According to Our Favourite Recipe
                    </AnimatedText></h1>
                    <p className="mb-5 text-black"><AnimatedText
                        type="chars"
                        animationType="rifle"
                    >
                        We are providing the best recipes of your choice by the best chefs in town. So find your favorite recipe without delay and cook accordingly.
                    </AnimatedText></p>
                    <button className="btn btn-accent text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;