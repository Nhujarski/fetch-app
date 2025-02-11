import React, { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router';
import { Login } from '../../utils/api-helpers';

const LoginSignin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const logInHelper = async () => {
    let status = await Login(name, email);
    if (status === 200) {
      console.log('user logged in: ', name);
      setName('');
      setEmail('');
      navigate('/test');
    } else {
      console.log('Oops, something went wrong. Please try to log in again');
    }
  };
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
        <TextField
          required
          label='Name'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <TextField
          required
          label='Email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </CardContent>
      <CardActions>
        <Button variant='contained' onClick={logInHelper}>
          Log In
        </Button>
      </CardActions>
    </Card>
  );
};

export default LoginSignin;
