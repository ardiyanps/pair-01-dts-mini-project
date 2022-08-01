import Carousel from 'react-elastic-carousel';
import { useEffect, useState } from 'react';

import tmdb from '../apis/tmdb';
import MovieCard from '../components/MovieCard';

const MovieList = () => {
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
            <Carousel itemsToShow={10}>
            {
                    movies.map(movie => (
                        <MovieCard key={movie.title} movie={movie}></MovieCard>
                    ))
                }
            </Carousel>
    );
}

export default MovieList;
