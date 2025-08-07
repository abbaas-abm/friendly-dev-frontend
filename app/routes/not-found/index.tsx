import { Link } from "react-router";
import { FiAlertTriangle } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen  px-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center rounded-full bg-green-100 p-4">
          <FiAlertTriangle className="text-green-500 text-4xl" />
        </div>
        <h1 className="mt-6 text-5xl font-extrabold text-green-500">404</h1>
        <p className="mt-4 text-xl text-gray-700 font-medium">Page Not Found</p>
        <p className="mt-2 text-gray-500">
          Sorry, we couldn't find the page you were looking for.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow transition duration-300"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
