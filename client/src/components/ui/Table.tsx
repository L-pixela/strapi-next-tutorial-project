import { Movie } from "@/types/movie";

type Props = {
    movies: Movie[];
}

export function MovieTable({movies}: Props){
    return (
        <table className="min-w-full border-collapse border border-gray-300">
            <thead>
                <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                </tr>
            </thead>
            <tbody>
                {movies.map((movie) => (
                    <tr key={movie.id}>
                        <td className="border border-gray-300 px-4 py-2">{movie.title}</td>
                        <td className="border border-gray-300 px-4 py-2">{movie.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}