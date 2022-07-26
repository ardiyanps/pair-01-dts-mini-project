import { Box, CardMedia, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MovieDetail from '../containers/MovieDetail';
import Carousel from 'carousel-react-rcdev'

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

        {/* <Box
            sx={{
              width: 250,
              display: 'flex',
              alignItems: 'center',
              margin: 1,
            }}
            >
            <Rating name="read-only" precision={0.1} value={movie.vote_average / 2} max={5} readOnly />
            <Box sx={{ ml: 2 }}>{movie.vote_average.toFixed(1)}</Box>
          </Box> */}
        {/* <CardContent>
          <Typography variant="body2" color="text.secondary">
          {new Date(movie.release_date).getFullYear()}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          {movie.title}
          </Typography>
        </CardContent> */}
      </Card>
      </Box>
      // </Link>
  );
}

export default MovieCarousel;