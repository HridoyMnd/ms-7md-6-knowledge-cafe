

const Blogs = ({ blogs }) => {
    console.log(blogs);
    return (
       <div className="col-span-2">
            {
                blogs.map((blog) => <div className="p-5 border rounded-lg border-red-400">
                    <img src={blog.cover_img} alt="" className="rounded-lg" />
                    <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center gap-4">
                        <img src={blog.author_img} className="w-16" alt="" />
                        <div className="info">
                            <h2>{blog.author_name}</h2>
                            <h3>{blog.posted_date}</h3>
                        </div>
                        </div>
                        <div className="time">{blog.reading_time}</div>
                    </div>
                </div>)
            }
       </div>
    );
};

export default Blogs;