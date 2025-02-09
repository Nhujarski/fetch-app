import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { Login } from '../../utils/api-helpers';

const LoginSignin = () => {
  return (
    <Card variant='outlined' sx={{ maxWidth: 500 }}>
      <CardHeader
        title="Rizza's Friends"
        subheader='Please Log in'
        avatar={
          <Avatar
            alt='picture of a cartoon shiba inu'
            src='src/assets/cute-shiba-inu-dog-avatar-vector-20670869.jpg'
          />
        }
      />

      <CardContent>
        <TextField required label='Name' />
        <TextField required label='Email' />
      </CardContent>
      <CardActions>
        <Button variant='contained' onClick={Login}>
          Log In
        </Button>
      </CardActions>
    </Card>
  );
};

export default LoginSignin;
