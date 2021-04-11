import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('userInfo')
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!token) {
          return <Redirect to="/login" />
        } else {
          return <Component {...props} />
        }
      }}
    />
  )
}

export default PrivateRoute
