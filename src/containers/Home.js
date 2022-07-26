import { Box, ListItem } from '@mui/material';
import React from 'react';
import Carosel from 'carousel-react-rcdev';
import Carousel from 'react-elastic-carousel';

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