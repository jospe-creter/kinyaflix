export default function MovieCard({ movie }) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <img src={movie.image} alt={movie.title} />
      <div className="p-3">
        <h2 className="font-bold">{movie.title}</h2>
      </div>
    </div>
  )
}
