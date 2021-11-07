import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const headerStyle = {
  background:
  'linear-gradient(90deg, rgba(0,140,186,1) 0%, rgba(50,192,238,1) 50%, rgba(215,244,249,1) 100%)',
  color: 'white',
};

const HeaderBar = ({ title }) => (
  <div className="header">
    <AppBar position="static" color="default" style={headerStyle}>
      <Toolbar>
        <Typography variant="title" color="inherit">
          {console.log(title)}
          {/* {title.pageTitle} */}
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default HeaderBar;
