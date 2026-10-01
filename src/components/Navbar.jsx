import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white text-black white px-16 py-4 flex justify-between items-center border-b-2 sticky top-0 z-50 backdrop-blur-md bg-opacity-70">

      <h1 className="font-bold text-2xl">
        JOKIIN
      </h1>

      <div className="flex gap-12 text-lg font-semibold">
        <Link
          to="/"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="hover:text-gray-500 transition"
        >
          Home
        </Link>

           <Link
          to="/dashboard"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="hover:text-gray-500 transition"
        >
          Jasa Joki
        </Link>

          <Link
          to="/Pesanan"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="hover:text-gray-500 transition"
        >
          Pesanan
        </Link>

          <Link
          to="/aboutme"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="hover:text-gray-500 transition"
        >
          Tentang Kami
        </Link>

      </div>
    </nav>
  );
}