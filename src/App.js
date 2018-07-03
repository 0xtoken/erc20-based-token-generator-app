import React, { Component } from 'react';

// RebootからCssBaselineにリネームされた
// @link https://github.com/mui-org/material-ui/issues/10663
import { CssBaseline, AppBar, Toolbar, Typography, Button } from '@material-ui/core';


import TopTitle from './components/TopTitle';

class App extends Component {
  render() {
    return (
      <div className="App">
          <CssBaseline/>
          <AppBar>
              <Toolbar>
                  <Typography type="title" color="inherit" align="center">
                      ERC20 Based Token Generator
                  </Typography>
              </Toolbar>
          </AppBar>

          <Button variant="contained" color="primary">
              Send
          </Button>


      </div>
    );
  }
}

export default App;
