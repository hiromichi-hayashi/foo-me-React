import {React, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/userAuth'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
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
  form: {
    width: '100%',
    marginTop: theme.spacing(4),
  },
  submit: {
    marginTop: theme.spacing(5),
    backgroundColor: '#ef6c00',
    color: '#fff',
  },
}))

export default function SignUp() {
  const classes = useStyles()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")

  const { signup } = useAuth()

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const onChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value)
  }

  const onClickRegister = () => signup(email, password)

  return (
    <>
    <Header/>
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.root}>
          SignUp
        </Typography>
        <div className={classes.form} >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
                onChange={onChangeEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onChangePassword}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password(確認)"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onChangePasswordConfirm}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={onClickRegister}
            disabled={
              email === ""
              || password === ""
              || passwordConfirm === ""
              || password !== passwordConfirm
            }
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/auth/login" variant="body2">
                アカウントをお持ちの方はこちら
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
    </>
  )
}