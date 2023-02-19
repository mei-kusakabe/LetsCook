const BlogDetails = ({blog}) => {
    return (
        <div>
            <h1>{blog.id}</h1>
        </div>
    );
};
export const getStaticProps = async () => {
    const { params } = context;
    const res = await fetch(`blog.json/blog/${params?.postId}`);
    const data = await res.json()
    return {
        props: {
            blog: data
        }
    }
}
export const getStaticPath = async () => {
    const res = await fetch('blog.json');
    const blogs = await res.json();
    const paths = blogs.map(
        blog => {
            return {
                params: {
                    postId: `${blog.id}`
                }
            }
        }
    )
    return {
        paths,
        fallback: false
    }
}
export default BlogDetails;