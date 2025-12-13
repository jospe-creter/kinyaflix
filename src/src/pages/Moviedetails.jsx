export default function MovieDetails() {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-3">Action Movie</h2>

      <video controls className="w-full mb-4">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>

      <a
        href="https://www.w3schools.com/html/mov_bbb.mp4"
        download
        className="bg-red-600 px-4 py-2 rounded"
      >
        Download Movie
      </a>
    </div>
  )
}
