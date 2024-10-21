
import './App.css'
import Blogs from './my-components/Blogs/Blogs'
import Header from './my-components/header/Header'

function App() {
  return (
    <div className='container mx-auto'>
      <Header></Header>
      <Blogs></Blogs>
    </div>
  )
}

export default App