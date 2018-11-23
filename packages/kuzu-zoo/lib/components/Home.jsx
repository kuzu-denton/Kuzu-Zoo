import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import { Typography } from '@material-ui/core';

const Home = props => { 
  <Typography variant="h1">You are home now!</Typography>
};

registerComponent({ name: 'Home', component: Home });
