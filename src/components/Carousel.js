import Carousel from 'react-elastic-carousel';
import { useEffect, useState } from 'react';

import tmdb from '../apis/tmdb';
import MovieCarousel from './MovieCarousel';

const CarouselMovie = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await tmdb.get("trending/movie/week");
                setMovies(fetchedMovies.data.results);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovies();
    }, []);

    return (
            <Carousel itemsToShow={1}>
            {
                    movies.map(movie => (
                        <MovieCarousel key={movie.title} movie={movie}></MovieCarousel>
                    ))
                }
            </Carousel>
    );
}

export default CarouselMovie;
