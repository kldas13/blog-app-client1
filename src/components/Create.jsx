import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Create() {
    const nav = useNavigate();
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const token = window.localStorage.getItem('jwt')


    const handleSubmit = async (e) => {
        e.preventDefault();
        await Axios('https://blog-das.onrender.com/blog/upload', {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                authorization: token
            },
            data: {
                author,
                title,
                image,
                description
            }
        })
            .then((res) => {
                console.log(res.data);
                nav("/blog")
            }
            )
            .catch(e => {
                console.log(e.message);
                window.alert(e.message);
                nav("/")
            })
    }

    return (
        <div className="input_fields">
            <input type="text" name="Author" id="Author" placeholder='Author' onChange={e => setAuthor(e.target.value)} />
            <input type="text" name="Title" id="Title" placeholder='Title' onChange={e => setTitle(e.target.value)} />
            <input type="text" name="Image" id="Image" placeholder='Paste Image Url' onChange={e => setImage(e.target.value)} />
            <input type="text" name="Description" id="Description" placeholder='Description' onChange={e => setDescription(e.target.value)} />
            <button className="submit" onClick={handleSubmit}>Submit</button>

        </div>
    )
}

export default Create
