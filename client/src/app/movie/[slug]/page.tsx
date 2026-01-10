export default function MovieDetailPage({ params }: { params: { slug: string } }) {
    return (
        <div className="block max-w-sm p-6 m-5 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h5 className="mb-4 text-2xl font-semibold tracking-tight leading-8 text-gray-900">
            Movie Detail Information {params.slug}
          </h5>
            <p className="mb-6 text-gray-600">
            This page contains detailed information about the selected movie.
            </p>
        </div>
    )
}