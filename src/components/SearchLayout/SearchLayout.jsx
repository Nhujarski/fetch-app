import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';

import './SearchLayout.css';

const SearchLayout = () => {
  return (
    <div className='search-layout-container'>
      <AppBar position='static' sx={{ minWidth: 500 }}>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Rizza's Friends
          </Typography>
          <Button color='inherit'>Log out</Button>
        </Toolbar>
      </AppBar>
      <Card>
        <CardContent>
          <TextField required label='Search' sx={{ minWidth: 100 }} />
          <Button variant='contained'>Search</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchLayout;
