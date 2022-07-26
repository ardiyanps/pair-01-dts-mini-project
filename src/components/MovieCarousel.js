import { Box, CardMedia, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";


const MovieCarousel = ({movie}) => {
  const navigate = useNavigate();
  const onDetail = () => {
    navigate('/detail',{state:{movie}});
  }
  return (
        <Box sx={{marginTop: 5}}>
        <Card sx={{display: "flex", width: 1600, height: 500, margin: 1, backgroundColor: '#fff9b2', mt: 4 }} onClick={() => onDetail()}>
        <CardMedia
          sx={{width:400}}
          component="img"
          image={`${BASE_IMAGE_URL}${movie.poster_path}`}
          alt="Movie Poster"
        />
        <Typography sx={{margin: 5}}>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
              </Typography>

      </Card>
      </Box>
  );
}

export default MovieCarousel;