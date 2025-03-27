import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchBar from '../SearchBar/SearchBar.jsx';

import { logout } from '../../utils/api-helpers.js';
import { useNavigate } from 'react-router';

import './SearchLayout.css';

const SearchLayout = () => {
  const navigate = useNavigate();

  const logoutHelper = async () => {
    let status = await logout();
    if (status === 200) {
      navigate('/');
    }
  };
  return (
    <div className='search-layout-container'>
      <AppBar position='static' sx={{ minWidth: 500 }}>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Rizza's Friends
          </Typography>
          <Button color='inherit' onClick={logoutHelper}>
            Log out
          </Button>
        </Toolbar>
      </AppBar>
      <SearchBar />
    </div>
  );
};

export default SearchLayout;
