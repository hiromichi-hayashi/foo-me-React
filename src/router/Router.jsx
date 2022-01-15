import { React, memo} from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import { AuthRoutes } from './AuthRouter'
import PrivateRoute from './PrivateRoute'
import { LoginUserProvider } from '../providers/LoginUserProvider'

const Router = () => {
  return (
    <Switch>
      <LoginUserProvider>
        <PrivateRoute exact={true} path='/'>
          <Home />
        </PrivateRoute>
        <Route
          path='/auth'
          render={({ match: { url } }) => (
            <Switch>
              {AuthRoutes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.children}
                </Route>
              ))}
            </Switch>
          )}
        />
      </LoginUserProvider>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  )
}

export default memo(Router)