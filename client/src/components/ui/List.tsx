import { CardTile, MovieCard } from "./Card";
import { Movie } from "@/types/movie";

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

export function MovieListTile({movies}: Props){
    return (
        <div className="max-w-6xl mx-auto mt-10">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {movies.map((movie) => (
                    <CardTile
                        key={movie.id}
                        title={movie.title}
                        description={movie.description}
                    />
                ))}
            </div>
        </div>
    )
}