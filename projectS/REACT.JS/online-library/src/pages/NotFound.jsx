import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <Link to="/" className="text-blue-600 hover:underline">Go Back Home</Link>
    </div>
  );
}
