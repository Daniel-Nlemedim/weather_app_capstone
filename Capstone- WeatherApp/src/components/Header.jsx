import { useState } from "react";
import { Sun, Moon, Search, MapPin } from "lucide-react"; // icons from react-lib

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="flex items-center justify-between bg-gray-800 text-white p-5 rounded-full shadow-lg  ml-40 mr-40 ">
      {/* Toggle Dark Mode */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center gap-2 px-3 py-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
      >
        {darkMode ? <Moon size={25} /> : <Sun size={25} />}
        <span className="text-sm">{darkMode ? "Dark" : "Light"} Mode</span>
      </button>

      {/* Search */}
      <div className="flex items-center bg-gray-700 px-3 py-2 rounded-full w-1/2">
        <Search size={35} className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search for your preferred city..."
          className="bg-transparent outline-none w-full text-sm text-gray-200 placeholder-gray-400"
        />
      </div>

      {/* Current Location Button */}
      <button className="flex items-center gap-2 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition">
        <MapPin size={25} />
        <span className="text-sm">Current Location</span>
      </button>
    </header>
  );
}

export default Header;
