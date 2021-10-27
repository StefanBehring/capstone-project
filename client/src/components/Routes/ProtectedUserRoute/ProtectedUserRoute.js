import { Route, Redirect } from 'react-router-dom'

const ProtectedUserRoute = ({
  isLoggedIn,
  component: Component,
  onLogin,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!isLoggedIn && onLogin) {
          return <Component onLogin={onLogin} {...props} />
        } else if (!isLoggedIn) {
          return <Component {...props} />
        }

        return (
          <Redirect
            to={{
              pathname: '/',
              state: {
                from: props.location,
              },
            }}
          />
        )
      }}
    />
  )
}

export default ProtectedUserRoute
