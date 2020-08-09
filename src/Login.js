import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import { useStateValue } from './StateProvider';
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [{user}] = useStateValue();

    const login = event => {
        event.preventDefault() // this is to stop the refresh
        // do the login logic
        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=>{
            //logged in.....redirect to homepage
            history.push("/")
            // this is not sufficient and we need to have somekind listener than listens to login and logout event and update our datalayer
        })   
        .catch(e => {
            alert(e.message) // this message is by firebase
        })
    }

    const register = event => {
        event.preventDefault() // this is to stop the refresh
        // do the register logic
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            // create a user and log in
            history.push("/")
        })
        .catch((e)=>alert(e.message))
    }

    console.log("User is ", user)

    return (
        <div className="login">
            <Link to="/">
                <img
                 className="login_logo"
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                 alt=""
                />
            </Link>
            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event=> setEmail(event.target.value)} type="text" placeholder="Email" /> 
                    {/* onChnage allows you to update the value using text field */}
                    <h5>Password</h5>
                    <input value={password} onChange={event=> setPassword(event.target.value)} type="password" placeholder="Password" />
                    <button type="submit" onClick={login} className="login_signInButton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use and Sale. Please see our Privacy Notice, 
                    or Coookies Notice and our Interest-Based Ads Notice
                </p>
                <button onClick={register} className="login_registerButton">
                    Create Your Account
                </button>
            </div>
        </div>
    )
}

export default Login
