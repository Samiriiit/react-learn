import React, { useState } from 'react'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    const newUser = { email, password }
    let res = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(newUser),
    })
    res = await res.json()
    if (res.error !== '') {
      console.log(res)
      setError(res.error)
      alert('succesfully logged in')
     
    } else {
      console.log(res)
      localStorage.setItem('userInfo', JSON.stringify(res))
     
    }
  }

  return (
    <>
      <div className="login-box">
        {error && <p className="error"> Error: {error} </p>}
        <h2>Login</h2>
        <form  >
          <div className="user-box">
            <input
              type="email"
              name="email"
              required=""
              onChange={(e) =>
                setEmail( e.target.value)
              }
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              required=""
              onChange={(e) =>
                setPassword( e.target.value )
              }
            />
            <label>Password</label>
          </div>
          <button type="submit" onClick={handleLogin}> Submit</button>
        </form>
      </div>
    </>
  )
}

export default Login
