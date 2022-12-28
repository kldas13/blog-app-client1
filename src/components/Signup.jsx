import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const nav = useNavigate();

    const [Email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        await Axios('https://blog-das.onrender.com/signup', {
            method : 'post',
            headers : {
                "Content-Type" : "application/json"
            },
            data : {
                Email,
                password,
                confirmpassword
            }
        })
        .then((res)=>{
            console.log(res.data.token);
            window.alert('Signup Succesful');
            nav("/")
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
            <div>Signup</div>
            <div className="login_cotainer">
                <div className="input_fields">
                    <input type="text" name="Email" id="Email" placeholder='Email' onChange={e => setEmail(e.target.value)} />
                    <input type="password" name="password" id="password" placeholder='password' onChange={e => setPassword(e.target.value)} />
                    <input type="password" name="confirmpassword" id="confirmpassword" placeholder='confirmpassword' onChange={e => setConfirmpassword(e.target.value)} />
                    <button className="signup" onClick={handleSignup}>signup</button>

                </div>
            </div>
        </div>

    )
}

export default Signup
