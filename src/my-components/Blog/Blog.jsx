
const Blog = ({blog}) => {
    const {author_id} = blog 
    return (
        <div className="">
            <h2>Blog:{author_id} </h2>
        </div>
    );
};

export default Blog;