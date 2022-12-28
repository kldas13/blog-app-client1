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
        await Axios('https://blog-das.onrender.com/login', {
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
            <div className="login_cotainer" style={{backgroundColor: "lightblue", height:'150px', width: '200px', marginLeft: '43%', marginTop:'5%', borderRadius:'5px'}}>
                <div className="input_fields"  style={{paddingTop:'10px'}}>
                    <input type="text" name="Email" id="Email" placeholder='Email' onChange={e => setEmail(e.target.value)} style={{margin:'10px'}}/>
                    <input type="password" name="password" id="password" placeholder='password' onChange={e => setPassword(e.target.value)} style={{margin:'10px'}} />
                    <button className="login" onClick={handleLogin} style={{margin:'10px'}}>Login</button>
                    <Link to='/signup'>
                        <button className="signup">Signup</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Login
