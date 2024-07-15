import React from 'react'
import '../css/LoginSingup.css'

export default function LoginSingup() {
  return (
    <div className='loginsingup'>
      <div className='loginsingup-container'>
        <h1>Sign Up</h1>
        <div className='loginsingup-fields'>
          <input type="text" placeholder='Username' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
          <button>Continue</button>
          <p className='loginsingup-login'>Already have an account?<span> Login </span></p>
          <div className='loginsingup-agree'>
            <input type="checkbox" name='' id='' />
            <p>I agree to the <span>Terms & Conditions</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
