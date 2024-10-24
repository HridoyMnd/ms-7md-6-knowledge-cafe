import Blogs from "./my-components/Blogs/Blogs"
import Bookmark from "./my-components/Bookmark/Bookmark"
import { useEffect, useState } from "react";

function App() {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
      fetch('blogs.json')
      .then((res) => res.json())
      .then((data) =>setBlogs(data))
  }, [])
  return (
    <div className='container mx-auto grid grid-cols-3'>
      <Blogs blogs ={blogs}></Blogs>
      <Bookmark></Bookmark>
    </div>
  )
}

export default App