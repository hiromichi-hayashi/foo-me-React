import {React, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/userAuth'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import Header from '../../components/Header'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  root: {
    marginTop: theme.spacing(6),
    fontWeight: "Bold",
    fontSize: '2.5rem',
    color: '#ef6c00'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    marginTop: theme.spacing(3),
    backgroundColor: '#ef6c00',
    color: '#fff',
  },
}))

const Login = () => {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onClickLogin = () => login(email, password)

  return (
    <>
      <Header/>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" className={classes.root}>
            Login
          </Typography>
          <div className={classes.form} >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={onChangeEmail}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={onChangePassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              onClick={onClickLogin}
              disabled={email === "" || password === ""}
            >
              Login
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/auth/signup">
                  アカウントをお持ちでない方はこちら
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Login