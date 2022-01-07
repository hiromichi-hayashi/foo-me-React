import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Logo from '../assets/img/logo_FooMe.png'

const useStyles = makeStyles({

  img: {
    height: "10%",
    width: "10%",
  },
  chatBlock: {
    height: "100vh",
    backgroundColor: 'rgb(255, 255, 255,0.6)',
    display: "flex",
    flexDirection: "column",
  },
})

const Header = () => {
  const classes = useStyles()
  
  return (
    <>
     <AppBar >
        <Toolbar>
          <img className={classes.img} src={Logo} alt={'Logo'}/>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header