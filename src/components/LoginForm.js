import React from 'react'

const LoginForm = () => {
  return (
    <section className='container-fluid loginSignUp__section--form'>
        <div className='container loginSignUp__div--container'>
            <div className='loginSignUp__div--toggleBtn'>
                <button className='btn ' type='button'>Sign Up</button>
            </div>
            <h2 className='formTitle__h2'>Login</h2>
            <form action="#">
                <input type="text" placeholder='Username' required/>
                <input type="password" placeholder='Password' required/>
                <button type='submit'>Confirm</button>
            </form>
        </div>
    </section>
  )
}

export default LoginForm