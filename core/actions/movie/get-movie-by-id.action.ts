import { Movie } from '@/infrastructure/interfaces/movie.interface';
import { movieApi } from "@/core/api/movie-api";
import { MovieDBMovieResponse } from "@/infrastructure/interfaces/moviedb-movie.response";
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

export const getMovieByIdAction = async (id: number | string) => {
    try {
        const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}`);
        
        return MovieMapper.fromTheMovieDBToCompleteMovies(data);
    } catch (error) {
        console.log(error);
        throw 'Cannot load now playing movies'
    }
}