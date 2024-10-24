

const Blogs = ({ blogs, handleReadTime, handleMarkRead }) => {
    // console.log(handleMarkRead);
    return (
       <div className="col-span-2" key={blogs.author_id}>
            {
                blogs.map((blog, id) =><div className="p-5 border rounded-lg border-red-400">
                    <img src={blog.cover_img} alt="" className="rounded-lg w-52" />
                    <div className="my-5 flex justify-between items-center">
                        <div className="flex items-center gap-4">
                        <img src={blog.author_img} className="w-16" alt="" />
                        <div className="info">
                            <h2>{blog.author_name}</h2>
                            <h3>{blog.posted_date}</h3>
                        </div>
                        </div>
                        <div className="time">{blog.reading_time} min read
                            <button onClick={ () =>handleReadTime(blog)} className="border border-blue-400 px-3 rounded-sm ml-2">click</button>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="text-2xl font-bold">{blog.title}</h1>
                        <div className="flex gap-3 my-2" key={id}>
                         
                        { 
                            blog.hashtag.map((tag, idx) =><p key={idx}>{tag}</p>)
                        }
                        </div>
                        
                        <a onClick={()=> handleMarkRead(blog)} href="#" className="text-violet-800">mark as read</a>
                       
                    </div>
                </div>)
            }
       </div>
    );
};

export default Blogs;