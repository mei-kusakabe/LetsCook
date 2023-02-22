import React from 'react';
import AnimatedText from 'react-animated-text-content';

const BlogHero = () => {
    return (
        <div className="hero mb-12" style={{ backgroundImage: 'url("blogHero.jpg")' }}>
           <div className="hero-content text-center bg-opacity-80 bg-lime-200 cursor-pointer ease-in-out duration-500  hover:scale-125 my-24">
                <div className="max-w-md p-2 text-accent ">
                    <h1 className="mb-5 text-5xl font-bold"><AnimatedText
                        type="chars"
                        animationType="bounce"
                    >
                        Blogs
                    </AnimatedText></h1>
                </div>
            </div>
        </div>
    );
};

export default BlogHero;