import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../index'
import Card from 'react-bootstrap/Card';

function Home() {

  let [blogs, setBlogs] = useState([])

  let getData = async ()=>{
    // let res = await fetch(`${API_URL}`)
    // let data = await res.json()
    // setBlogs(data)

    //Axious:
    try {
      let res = await axios.get(`${API_URL}`)
      if (res.status === 200) {
        let newBlogs = []
        newBlogs = res?.data?.filter((e)=>e.active_flag)
        // let latestBlogs = newBlogs.reverse()   //for last in first show
        setBlogs(newBlogs)
        // toast.success('fetched')
      }
    } catch (error) {
       alert(error)
    }
  }
  useEffect(()=>{
      getData()
  },[])
  return <>
  <div className='home-wrapper'>
  <h1 className='home-title'>Latest Books</h1>
    {
      blogs.map((e,i)=>{
         return <BlogItem blog={e} key={i}/>
      })
    }
  </div>
  
  </>
}

function BlogItem ({blog}) {
   return <div className='blog-wrapper'>
    <div className='blog-title'>
      {blog.title}
    </div>
       <img src={blog.imageUrl} className='blog-image'/>
       <div className='blog-discription'>{blog.description}</div>
   </div>
}

export default Home