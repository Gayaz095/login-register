import React, { useState } from 'react';
import HomePage from './HomePage';
import {useNavigate} from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [homepage, setHomePage] = useState(true);

    function handleLogin(e) {
        e.preventDefault();
        let EmailOfUser = localStorage.getItem('EmailOfUser').replace(/"/g, "");
        let PasswordOfUser = localStorage.getItem('PasswordOfUser').replace(/"/g, "");
        
        if((email !== EmailOfUser)||(password !== PasswordOfUser)) {
            setHomePage(homepage);
        } else {
            setHomePage(!homepage);
        };
    };

    const navigate = useNavigate();
    const handleClick =()=> {
        navigate('/exitPage')
    };

    return (
        <div>
            {homepage ?
        <div>
            <button onClick={() => handleClick()}>
                Go back
            </button>                                   
            <form onSubmit={handleLogin}>
                <h3>LogIn</h3>
                    <label>Email
                    <input type="email" placeholder="Enter Email" onChange={(event) => setEmail(event.target.value)} required/>
                    </label>
                    <label>
                    <input type="password" placeholder="Enter Password" onChange={(event) => setPassword(event.target.value)} required/>
                    </label>
                    <br />
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
                : <HomePage />
            }
        </div>
    )
};
