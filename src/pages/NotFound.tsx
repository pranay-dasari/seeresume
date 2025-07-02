
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    console.log("Full location object:", location);
    console.log("Current URL:", window.location.href);
    console.log("Basename should be:", import.meta.env.PROD ? "/seeresume" : "");
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <p className="text-sm text-gray-500 mb-4">
          Attempted to access: {location.pathname}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Current URL: {window.location.href}
        </p>
        <a href={import.meta.env.PROD ? "/seeresume/" : "/"} className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
