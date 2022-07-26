import { Box, CardMedia, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";


const MovieCard = ({movie}) => {
  const navigate = useNavigate();
  const onDetail = () => {
    navigate('/detail',{state:{movie}});
  }
  return (
        <Box>
        <Card sx={{ maxWidth: 250, margin: 1, backgroundColor: '#fff9b2', mt: 4 }} onClick={() => onDetail()}>
        <CardMedia
          component="img"
          height="200"
          image={`${BASE_IMAGE_URL}${movie.poster_path}`}
          alt="Movie Poster"
        />
      </Card>
      </Box>
  );
}

export default MovieCard;