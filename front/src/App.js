import React from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './index.css'
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <MuiThemeProvider  >
        <Grid spacing={5} container alignItems='center' style={{ height: '100%' }}>
          <Grid item xs={12}>
            <Paper elevation={4} style={{ margin: 32 }} spacing={5}>
              <Grid container alignItems='center' justify='center' spacing={5}>
                <Grid item xs={12} sm={6} style={{ 'text-align': 'center' }} spacing={5}>
                  <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" />
                </Grid>
                <Grid container item xs={12} sm={6} spacing={5}>
                  <BrowserRouter>
                    <Switch>
                      <Route exact path='/'><SignIn /></Route>
                      <Route path='/signin'><SignIn /></Route>
                      <Route path='/signup'><SignUp /></Route>
                      <Route path='/profile'><Profile /></Route>
                    </Switch>
                  </BrowserRouter>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </MuiThemeProvider>

    </div>
  );
}

export default App;
