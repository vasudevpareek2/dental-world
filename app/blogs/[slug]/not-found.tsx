import Link from "next/link";
import Navigation from "../../components/Navigation";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="blogs" />
      <div className="flex items-center justify-center min-h-[60vh] px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Blog Post Not Found</h2>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            href="/blogs"
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}

