import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchDogs = () => {
  return (
    <Card>
      <CardContent>
        <TextField required label='Search' sx={{ minWidth: 100 }} />
        <Button variant='contained'>Search</Button>
      </CardContent>
    </Card>
  );
};

export default SearchDogs;
