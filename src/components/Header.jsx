import React from 'react'
import { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Logo from '../assets/img/logo_FooMe.png'
import { useAuth } from "../hooks/userAuth"

const useStyles = makeStyles((theme) => ({

  img: {
    height: "65px",
    width: "65px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  grow: {
    flexGrow: 1,
  },
  root: {
    backgroundColor: '#fff3e0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    padding: '2%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#ef6c00',
    fontSize: '2.4rem',
  },
  font: {
    fontWeight: "Bold",
    fontSize: '0.7rem',
  },
  paper: {
   margin: "0 auto"
  },
}))

const Header = () => {
  const [auth, setAuth] = useState(true)
  const [anchorEl, setAnchorEl] = useState(null)
  const classes = useStyles()
  const { logout } = useAuth()
  const open = Boolean(anchorEl)

  const onClickLogout = () => logout()

  const handleChange = (event) => {
    setAuth(event.target.checked)
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
     <AppBar className={classes.root} >
        <Grid container spacing={3}>
            <Grid item xs>
            </Grid>
            <Grid item xs={6} className={classes.paper}>
              <img className={classes.img} src={Logo} alt={'Logo'}/>
            </Grid>
            <Grid item xs>
            <Button>
            <div className={classes.icon} onClick={onClickLogout}>
              <i className='fas fa-sign-out-alt'></i>
            </div>
            </Button>
            </Grid>
          </Grid>
      </AppBar>
    </>
  )
}

export default Header