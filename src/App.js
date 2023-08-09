import React from 'react'
import NavBar from './component/NavBar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateBlog from './component/CreateBlog'
import ManageBlogs from './component/ManageBlogs'
import Home from './component/Home'
import EditBlog from './component/EditBlog'

function App() {
  return <>
    <BrowserRouter>
    <div>
    <NavBar/>
    </div>
    <div className='container-fluid'>
      <Routes>
        <Route path='/create' element={<CreateBlog/>}/>
        <Route path='/manage' element={<ManageBlogs/>}/>
        <Route path='/edit/:id' element={<EditBlog/>}/>
        <Route path='/*' element={<Home/>}/>
        
      </Routes>
    </div>
    </BrowserRouter>
  </>
}

export default App