import { MovieList } from "../components/List";
import { MovieTable } from "../components/Table";
import { Movie } from "@/shared/movie";

const movieData: Movie[] = [
    {id: 1, title: "Inception", description: "A mind-bending thriller by Christopher Nolan."},
    {id: 2, title: "The Matrix", description: "A sci-fi classic that questions reality."},
    {id: 3, title: "Interstellar", description: "A journey through space and time."},
]

export default function MoviePage() {
  return (
    <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold">Movies Page</h1>
        <p className="mt-4">
          This page displays a list of movies.
        </p>
        <MovieList movies={movieData} />
        <MovieTable movies={movieData} />
    </div>
  );
}