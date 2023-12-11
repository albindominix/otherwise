import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import { useSelector } from 'react-redux'
import { useGetBlogsQuery } from '../redux/slice/postsSlice';
import HomePosts from '../components/HomePosts'
import { Link } from 'react-router-dom'

function MyBlogs() {
    // const { user1 } = useSelector((state) => state.authUser); 
    // const[user,setUser]=useState('')
    const user = JSON.parse(localStorage.getItem("user"));

    const{data,isLoading,isError,refetch}=  useGetBlogsQuery(user._id,{ skip: !user._id })

// useEffect(()=>{
//   setUser( JSON.parse(localStorage.getItem('user')))

// },[])




console.log(user._id)
console.log(isLoading)
console.log(data)
  return (
    <div>
    <Navbar/>
    <div className="px-8 md:px-[200px] min-h-[80vh]">
    {isLoading?(<div className="h-[40vh] flex justify-center items-center"><Loader/></div>):
    (data && data?.map((post,index)=>(
      <div key={index}>
      <Link to={user?`/posts/post/${post._id}`:"/login"}>
      <HomePosts key={post._id} post={post}/>
      </Link>
      </div>
      )
    ))}
    </div>
    <Footer/>
</div>
  )
}

export default MyBlogs
