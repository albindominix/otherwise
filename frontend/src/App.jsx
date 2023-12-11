import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Profile from "./pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserQuery, 
  // userUpdated 
} from "./redux/slice/authSlice";
import MyBlogs from "./pages/MyBlogs";

function App() {

  const { data ,isLoading,isError} = useGetUserQuery();

  console.log("🚀 ~ file: App.jsx:22 ~ App ~ isLoading:", isLoading?'afhnauagag':'nothing')

  // const { user } = useSelector((state) => state.authUser); //for getting the data we use useSelector

  const dispatch = useDispatch();

const navigate = useNavigate()
  if(data){
    localStorage.setItem('user',JSON.stringify(data))

  }
  // useEffect(() => {
  //   if (data && data !== null) {
  //     dispatch(userUpdated(data)) 
  //   }
  // }, [data]);

  // useEffect(() => {
  //     // dispatch(userUpdated(data))
  //     if(!isError){
  //       navigate('/login')
  //     }
  // }, []);
console.log(isError)

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/posts/post/:id" element={<PostDetails />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/write" element={<CreatePost />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/myblogs/:id" element={<MyBlogs />} />
      </Routes>
    </>
  );
}

export default App;
