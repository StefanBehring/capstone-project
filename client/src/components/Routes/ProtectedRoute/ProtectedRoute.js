import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({
  isLoggedIn,
  component: Component,
  onLogout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isLoggedIn && onLogout) {
          return <Component onLogout={onLogout} {...props} />
        } else if (isLoggedIn) {
          return <Component {...props} />
        } else {
          return (
            <Redirect
              to={{
                pathname: '/not-logged-in',
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      }}
    />
  )
}

export default ProtectedRoute
