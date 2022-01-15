import React from 'react'
import Login from "../pages/auth/Login"
import SignUp from "../pages/auth/SignUp"
import NotFound from "../pages/NotFound"

export const AuthRoutes = [
  {
    path: "/login",
    exact: false,
    children: <Login />,
  },
  {
    path: "/signup",
    exact: false,
    children: <SignUp />,
  },
  {
    path: "*",
    exact: false,
    children: <NotFound />,
  },
]