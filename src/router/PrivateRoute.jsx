import { React, memo} from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useLoginUser } from '../hooks/useLoginUser'

const PrivateRoute = (props) => {
  const { exact, path, children } = props
  const { loginUser } = useLoginUser()
  return loginUser ? (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  ) : (
    <Redirect to='/auth/login' />
  )
}

export default memo(PrivateRoute)