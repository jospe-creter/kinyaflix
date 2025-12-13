import MovieCard from "../components/MovieCard"

const movies = [
  {
    id: 1,
    title: "Action Movie",
    image: "https://via.placeholder.com/300x450"
  },
  {
    id: 2,
    title: "Romantic Movie",
    image: "https://via.placeholder.com/300x450"
  }
]

export default function Home() {
  return (
    <div className="p-5 grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
