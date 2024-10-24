import Blogs from "./my-components/Blogs/Blogs"
import Bookmark from "./my-components/Bookmark/Bookmark"
import { useEffect, useState } from "react";

function App() {
  const [blogs, setBlogs] = useState([])
  const [time, setTime] = useState(0)
  const [title, setTitle] = useState(null)
  useEffect(() => {
      fetch('blogs.json')
      .then((res) => res.json())
      .then((data) =>setBlogs(data))
  }, [])
  const handleMarkRead = (blog) =>{
      setTitle(blog.title);
  }
 
  const handleReadTime = (blog) => {
    const totalTime = time + parseInt(blog.reading_time)
    setTime(totalTime)
  }
  return (
    <div className='container mx-auto grid grid-cols-3'>
      <Blogs blogs={blogs} handleReadTime={handleReadTime} handleMarkRead={handleMarkRead}></Blogs>
      <Bookmark time={time} title={title}></Bookmark>
    </div>
  )
}

export default App