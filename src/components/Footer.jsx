import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#fff3e0',
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    color: '#f5f5f5',
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  icons: {
    color:"#ef6c00"
  },
})

const Footer = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Button edge="start" color="inherit" aria-label="open drawer">
          <div className={classes.icons}>
            <i className="fas fa-bars fa-2x"></i>
          </div>
          </Button>
          <Fab color="secondary" className={classes.fabButton}>
            <i className="fas fa-plus fa-2x"></i>
          </Fab>
          <div className={classes.grow} />
          <Button color="inherit" >
            <div className={classes.icons}>
              <i className="fab fa-sistrix fa-2x"></i>
            </div>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Footer