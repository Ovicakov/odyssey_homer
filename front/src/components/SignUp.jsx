import React, { useState } from 'react';
import { TextField, Button, Icon, Grid, Box, Typography, Snackbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

function SignUp() {

  const [email, setEmail] = useState("mon@email.com")
  const [password, setPassword] = useState("monPassw0rd")
  const [name, setName] = useState("James")
  const [lastname, setLastName] = useState("Bond")
  const [flash, setFlash] = useState('')
  const [open, setOpen] = useState(false)

  const obj = { email, password, name, lastname }

  const updateEmailField = e => {
    setEmail(e)
  }

  const updatePassword = e => {
    setPassword(e)
  }

  const updateName = e => {
    setName(e)
  }

  const updateLastName = e => {
    setLastName(e)
  }

  const handleSubmit = (e) => {
    console.log('yoyo');
    setOpen(true)
    e.preventDefault();

    fetch("/auth/signup",
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(obj),
      })
      .then(res => res.json())
      .then(
        res => setFlash(res.flash),
        err => setFlash(err.flash)
      )
  }

  //----------------------- SNACKBAR ---------------------

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const useStyles = makeStyles(theme => ({
    close: {
      padding: theme.spacing(0.5),
    },
  }));

  const classes = useStyles();

  //----------------------- RETURN ---------------------


  return (
    <div>
      <Grid item direction='column'>
        <Typography variant="h3" color="primary">Sign up !</Typography>
        <Box spacing={10}>
          <TextField type="email" label="email" onChange={(e) => updateEmailField(e.target.value)} />
        </Box>
        <Box>
          <TextField type="password" label="password" onChange={(e) => updatePassword(e.target.value)} />
        </Box>
        <Box>
          <TextField type="text" label="firstname" onChange={(e) => updateName(e.target.value)} />
        </Box>
        <Box>
          <TextField type="text" label="firstname" onChange={(e) => updateLastName(e.target.value)} />
        </Box>
        <Box spacing={12}>
          <Button variant="contained" color="primary" endIcon={<Icon>send</Icon>} onClick={e => handleSubmit(e)}>
            S'inscrire</Button>
        </Box>

        {/* ------------- SNACKBAR -------------- */}

        <Snackbar 
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={open}
          onClose={handleClose}
          autoHideDuration={3000}
          message={<span id='message-id'>{flash}</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Grid>
    </div>
  );
}

export default SignUp;