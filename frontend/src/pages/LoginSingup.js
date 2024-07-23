import React, { useState } from 'react'
import '../css/LoginSingup.css'

export default function LoginSingup() {

  const [state,setState] = useState("Login")

  return (
    <div className='loginsingup'>
      <div className='loginsingup-container'>
        <h1>{state}</h1>
        <div className='loginsingup-fields'>
          {state === "Signup" ? <input type="text" placeholder='Username' />:<></>} 
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
          <button>Continue</button>
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
