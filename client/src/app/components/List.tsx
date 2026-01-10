import { MovieCard } from "./Card";
import { Movie } from "@/shared/movie";

type Props = {
    movies: Movie[];
}

export function MovieList({movies}: Props){
    return (
        <div className="max-w-6xl mx-auto">
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {movies.map((movie) => (
                    <MovieCard 
                        key={movie.id} 
                        title={movie.title} 
                        description={movie.description} 
                    />
                ))}
            </div>
        </div>
    )
}