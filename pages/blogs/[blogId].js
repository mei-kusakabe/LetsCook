import { useRouter } from 'next/router';
import React from 'react';
import AnimatedText from 'react-animated-text-content';
import details from '../../public/blogsCopy.json';
import { MdDateRange } from 'react-icons/md';
import { ImEye } from 'react-icons/im';

const BlogDetails = () => {
    
    const router = useRouter();
    const { blogId } = router.query;
    const blog = [];
    const data = details;
    data.map(d => {
        if (d.id == blogId) {
            blog.push(d)
         console.log(d.author)
        }
    })

    return (
        <div className=' mt-20 mb-12 px-12'>
                {
                    blog?.length && blog.map(
                        b => <div key={b.id} b={b}><h1 className='text-5xl text-center font-bold text-lime-700 '>
                        <AnimatedText
                            type="chars"
                            animationType="rifle"
                        >
                            {b.title}
                        </AnimatedText>
                    </h1></div>
                    )
                }
                <div className='grid grid-cols-1 gap-12 mt-16 '>
                    <div className='grid grid-cols-1 gap-12 '>
                        {
                            blog?.length && blog.map(b =>
                                <div key={b?.id} b={b} className="card card-compact rounded-none border-b " data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000">
                                    <figure><img src={b.img} alt="" className='rounded-none cursor-pointer ease-in-out duration-500 hover:rotate-2 hover:scale-150' /></figure>
                                    <div className='flex justify-between items-center flex-col lg:flex-row gap-y-4'>
                                            <div className='flex justify-between items-center '>
                                                <div className="avatar">
                                                    <div className="w-12 rounded-full">
                                                        <img src={b.author} />
                                                    </div>
                                                </div>
                                                <p className='ml-2 text-lime-700'>{b?.name}</p>

                                            </div>
                                            <p className='flex justify-between items-center '><MdDateRange className='text-accent font-bold text-2xl'></MdDateRange><span className='ml-2 text-lime-700
                                            '>{b?.date}</span></p>
                                            <p className='flex justify-between items-center '><ImEye className='text-accent font-bold text-2xl'></ImEye><span className='ml-2 text-lime-700
                                            '>{b?.views}</span></p>
                                        </div>
                                    <div className="my-6">
                                       
                                        <p className='my-6'>{b?.text}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
        </div>
    );
};

export default BlogDetails;

// import { useEffect, useState } from "react";



// const BlogDetails = () => {
//     const [blog, setBlog] = useState([]);
//     useEffect(() => {
//         fetch('blog.json')
//             .then(res => res.json())
//             .then(data => setBlog(data))
//     }, [])
//     return (
//         <div>
//             <h1>{blog.title}</h1>
//         </div>
//     );
// };

// export default BlogDetails;


/* import blogsData from '../../public/blog.json';
export default function BlogDetails({ blog }) {
   

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}

export async function getStaticProps({ params }) {
    const blog = blogsData.find(blog => blog.id === params.blogId);
    return {
      props: {
        blog,
      },
    };
  }
  
 

export const getStaticPaths = async () => {
  try {
    const res = await fetch('/blog.json');
    const blogs = await res.json();
    const paths = blogs.map(blog => {
      return {
        params: {
          blogId: `${blog.id}`
        }
      };
    });
    return {
      paths,
      fallback: false
    };
  } catch (err) {
    console.log(err);
    return {
      paths: [],
      fallback: false
    };
  }
}; */



