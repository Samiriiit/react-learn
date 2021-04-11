import React, { useState } from 'react'

const CreateUser = (props) => {
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [email, setEmail] = useState('')
  const [avatar, setAvatar] = useState('')

  const [error, setError] = useState('')

  const handleCreate = (e) => {
    e.preventDault()

    const newUser = { first_name, last_name, email }

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    })
      .then(() => {
        alert('New user added successfully')
        props.history.push('/')
      })
      .catch((err) => {
        setError(err.message)
      })
  }
  return (
    <div className="edit-page">
      <h4>Create Page</h4>
      {error && <div>Errror: {error}</div>}
      <form onSubmit={handleCreate}>
      <div className="user-box">
      <label>First Name</label>
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value=""
          onChange={(e) =>
            setFirst_name({ ...first_name, [e.target.name]: e.target.value })
          }
          /></div>
        <div className="user-box">
        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value=""
          onChange={(e) =>
            setLast_name({ ...last_name, [e.target.name]: e.target.value })
          }
          /></div>
        <div className="user-box">
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value=""
          onChange={(e) =>
            setEmail({ ...email, [e.target.name]: e.target.value })
          }
          /></div>
         <div className="user-box">
        <label>Image</label>
        <input
          type="text"
          name="avatar"
          placeholder="Avatar"
          onChange={(e) =>
            setAvatar({ ...avatar, [e.target.name]: e.target.value })
          }
          />
          </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default CreateUser
