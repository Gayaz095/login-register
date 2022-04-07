import React, {useState} from 'react'
import Login from './Login';

export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(true);

    function handleSubmit(e){
        e.preventDefault();
        if(!name || !email || !password){
            setLogin(login)
        }
        else{
            localStorage.setItem("EmailOfUser", JSON.stringify(email));
            localStorage.setItem("PasswordOfUser", JSON.stringify(password));                
            setLogin(!login)
        }
    }
    function handleLogin() {
        setLogin(!login)
    }

  return (
    <div>
        {login ? <form onSubmit={handleSubmit}>
            <b>Register:</b>
                <br />
                <label>
                    <input type="text" name="name" placeholder='Name' onChange={(e)=>{setName(e.target.value)}} required></input>
                </label>
                <br />
                <label>
                    <input type="text" name="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} required></input>
                </label>
                <br />
                <label>
                    <input type="text" name="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} required></input>
                </label>
                <br />
                <button type="submit">Register</button>
                <br />                
                <p>Already registered <a href="#" onClick={handleLogin}>log in?</a></p>
        </form> : <Login />}
    </div>
  )
};
