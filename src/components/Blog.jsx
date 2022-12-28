import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Card from './Card'
import './Blog.css'

function Blog() {
    const nav = useNavigate();
    const [posts, setPosts] = useState([]);

    const token = window.localStorage.getItem('jwt')

    const handleLogout = () => {
        window.localStorage.setItem('jwt', '')
        window.localStorage.removeItem('jwt')
        nav('/')
    }
    useEffect(() => {
        
        async function fetchData(e) {
            await Axios('https://blog-das.onrender.com/blog', {
            method : 'get',
            headers : {
                authorization : token
            },
        })
        .then((res)=>{
            console.log(res.data);
            setPosts(res.data);
            console.log('posts', posts);
        }
        )
        .catch(e=>{
            console.log(e.message);
            window.alert(e.message);
            nav("/")
        })
        }

        fetchData();
    }, [])

    return (
        <div className="blog_container">
            <div>Blog</div>
            <div className="navbar">
                <Link to='/blog'>
                    <div className="home nav">Home</div>
                </Link>
                <Link to='/create'>
                    <div className="create nav">Create</div>
                </Link>

                <div className="logout nav" onClick={handleLogout}>Logout</div>

            </div>

            <div className="posts">
                {posts.map((item,id)=>{
                    return <Card key={id} post={item}/>
                })}
            </div>
        </div>
    )
}

export default Blog
