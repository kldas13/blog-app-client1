import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    const nav = useNavigate();
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async (e) => {
        e.preventDefault();
        await Axios('http://localhost:8000/login', {
            method : 'post',
            headers : {
                "Content-Type" : "application/json"
            },
            data : {
                Email,
                password
            }
        })
        .then((res)=>{
            console.log(res.data.token);
            window.localStorage.setItem('jwt', res.data.token);
            nav("/blog")
        }
        )
        .catch(e=>{
            console.log(e.message);
            window.alert(e.message);
            setEmail('');
            setPassword('');
            nav("/")
        })
    }
    return (
        <div>
            <div className="login_cotainer">
                <div className="input_fields">
                    <input type="text" name="Email" id="Email" placeholder='Email' onChange={e => setEmail(e.target.value)} />
                    <input type="password" name="password" id="password" placeholder='password' onChange={e => setPassword(e.target.value)} />
                    <button className="login" onClick={handleLogin}>Login</button>
                    <Link to='/signup'>
                        <button className="signup">Signup</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Login