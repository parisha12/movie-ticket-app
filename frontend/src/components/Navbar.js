import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4" style={{ background: "rgba(10, 10, 15, 0.9)", backdropFilter: "blur(10px)" }}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold" style={{ color: "#f59e0b" }}>🎬 CineBook</Link>
        <ul className="flex gap-8 text-sm font-medium text-gray-400">
          <li><Link to="/" className="hover:text-white transition">Movies</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;