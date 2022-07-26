import { useLocation } from 'react-router-dom';
import { Box, CardMedia, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

const MovieDetail = () => {

    const {state} = useLocation();
    const { movie } = state; 
    console.log({movie});
    return (
        <Box sx={{display: "flex" ,justifyContent: 'center', marginTop: 10}}>
        <Card id={movie.id} sx={{ display: 'flex', width: '70%'}}>
          <CardMedia
            component="img"
            sx={{ width: 500, height: 700 }}
            image={`${BASE_IMAGE_URL}${movie.poster_path}`}
            alt="Movie poster"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h6">
                {movie.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {new Date(movie.release_date).getFullYear()}
              </Typography>
              <Box
                sx={{
                  width: 200,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Rating name="read-only" precision={0.1} value={movie.vote_average / 2} max={5} readOnly />
                <Box sx={{ ml: 2 }}>{movie.vote_average.toFixed(1)}</Box>
              </Box>
              <Typography>
                <p>{movie.overview}</p>
              </Typography>
              <Typography>
                Movie Release : {movie.release_date} 
              </Typography>
            </CardContent>
          </Box>
        </Card>
        </Box>
      );
}

export default MovieDetail