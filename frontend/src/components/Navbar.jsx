import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between shadow-md">
      {/* Left: Logo / Name */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-300 hover:text-white focus:outline-none">
          {/* Hamburger icon for mobile */}
          <svg
            className="w-6 h-6 md:hidden"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Link to="/" className="text-xl font-semibold">
          Skill Swap Platform
        </Link>
      </div>

      {/* Middle: Search + Nav Links */}
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/" className="hover:text-indigo-400">
          Home
        </Link>
        <Link to="/swap-requests" className="hover:text-indigo-400">
          Swap Requests
        </Link>
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Right: Login / Profile */}
      <div className="flex items-center space-x-4">
        {/* If logged in, show profile photo */}
        {/* <img src="/path/to/profile.jpg" alt="Profile" className="w-8 h-8 rounded-full border-2 border-indigo-500" /> */}

        {/* If not logged in, show Login button */}
        <Link
          to="/login"
          className="bg-indigo-500 hover:bg-indigo-600 px-4 py-1 rounded-md text-sm font-medium"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
