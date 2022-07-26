import { Box, ListItem } from '@mui/material';
import React from 'react';

import MovieList from './MovieList';

const Home = () => {
  
  return (
    <Box sx={{ margin: 10, display: 'flex', flexDirection: 'row' }}>
      <ListItem>
      <MovieList />
      </ListItem>
    </Box>
  )
}

export default Home