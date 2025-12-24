import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Treatment Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          The treatment you're looking for doesn't exist.
        </p>
        <Link
          href="/treatments"
          className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-blue-700 transition duration-300"
        >
          View All Treatments
        </Link>
      </div>
    </div>
  );
}

