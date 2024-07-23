import React, { useState } from 'react'
import '../css/LoginSingup.css'

export default function LoginSingup() {

  const [state,setState] = useState("Login");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Signup function
  const signup = async () => {
    console.log("signup executed", formData);
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json())
    .then((data) => {
      responseData = data;
    })

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    }
  };

  // Login function
  const login = async () => {
    console.log("login executed", formData);
    let responseData;
  };

  return (
    <div className='loginsingup'>
      <div className='loginsingup-container'>
        <h1>{state}</h1>
        <div className='loginsingup-fields'>
          {state === "Signup" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Username' />:<></>} 
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler} className='loginsingup-password' type="password" placeholder='Password' />
          <button onClick={()=>{state === "Signup" ? signup() : login()}} >Continue</button>
          {state === "Signup" ? <p className='loginsingup-login'>Already have an account?<span onClick={()=>setState("Login")} > Login </span></p>
          :<p className='loginsingup-login'>Create an account?<span onClick={()=>setState("Signup")} > Click here </span></p>}
          <div className='loginsingup-agree'>
            <input type="checkbox" name='' id='' />
            <p>I agree to the <span>Terms & Conditions</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
