import React, { useState } from 'react'
import { useParams } from 'react-router'
import useFectch from '../Hooks/useFectch'

const EditUser = () => {
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [email, setEmail] = useState('')
  const [avatar, setAvatar] = useState('')
  const { id } = useParams()

  const { customer, loading, errors } = useFectch(
    'https://reqres.in/api/users/' + id,
  )

  const handleEdit = (e) => {
    e.preventDault()

    const info = { first_name, last_name, email }

    fetch('https://reqres.in/api/users/' + customer.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(info),
    })
      .then(() => {
        alert('New user added successfully')
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  return (
    <div className="edit-page">
      <h4>Edit Page</h4>
      {errors && <div>Errror: {errors}</div>}
      {loading && <div>Loading...</div>}
      <form onSubmit={handleEdit}>
      <div className="user-box">
      <label>First Name</label>
        <input
          type="text"
          name="first_name"
          value={customer.first_name}
          onChange={(e) => setFirst_name({ [e.target.name]: e.target.value })}
          /></div>
        <div className="user-box">
        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          value={customer.last_name}
          onChange={(e) => setLast_name({ [e.target.name]: e.target.value })}
          /></div>
        <div className="user-box">
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={customer.email}
          onChange={(e) => setEmail({ [e.target.name]: e.target.value })}
          /></div>
        <div className="user-box">
        <label>Image</label>
        <input
          type="text"
          name="avatar"
          onChange={(e) =>
            setAvatar({ ...avatar, [e.target.name]: e.target.value })
          }
        /></div>
        <button type="submit">Edit</button>
      </form>
    </div>
  )
}

export default EditUser
