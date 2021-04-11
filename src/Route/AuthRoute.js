import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function AuthRoute({ component: Component, ...rest }) {
  const token = localStorage.getItem('userInfo')
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          return <Redirect to="/create" />
        } else {
          return <Component {...props} />
        }
      }}
    />
  )
}

export default AuthRoute
