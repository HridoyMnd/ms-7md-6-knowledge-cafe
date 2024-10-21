
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import Bookmark from '../Bookmark/Bookmark'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then((res) => res.json())
            .then((data) => setBlogs(data))
    }, [])
    return (
        <div className="mt-7 grid grid-cols-3 gap-8">
                <div className ="col-span-2 border-red-400 border">
                {
                    blogs.map(blog => <Blog key={blog.author_id} blog={blog}></Blog>)
                }
                </div>
                <Bookmark></Bookmark>
        </div>
    );
};

export default Blogs;