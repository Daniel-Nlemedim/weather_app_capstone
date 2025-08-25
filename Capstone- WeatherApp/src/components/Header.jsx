import { useState } from "react";
import { Search, MapPin, Moon, Sun } from "lucide-react"; // icons from react-lib
import AppThemeLayout from "../layout/AppThemeLayout";

function Header({ setQuery, apiKey, isDarkMode, toggleDarkMode }) {
  const [city, setCity] = useState("");

  return (
    <header className="flex items-center justify-between  text-white p-5 rounded-full shadow-lg  ml-40 mr-40 ">
      {/* Toggle Dark Mode */}
      <button
        onClick={toggleDarkMode}
        className="bg-gray-700 p-2 rounded-full transition"
      >
        {isDarkMode ? (
          <Moon size={25} className="text-yellow-400" />
        ) : (
          <Sun size={25} className="text-gray-400" />
        )}
      </button>
      {/* Search */}
      <div className="flex items-center bg-gray-700 px-3 py-2 rounded-full w-1/2">
        <Search size={35} className="text-gray-400 mr-2" />
        <input
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setQuery(city);
              setCity("");
            }
          }}
          type="text"
          placeholder="Search for your preferred city..."
          className="bg-transparent outline-none w-full text-sm text-gray-200 placeholder-gray-400"
        />
      </div>
      {/* Current Location Button */}
      <button
        className="flex items-center gap-2 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition"
        onClick={() => {
          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
            )
              .then((res) => res.json())
              .then((res) => setQuery(res.name)); // updates to city name
          });
        }}
      >
        <MapPin size={25} />
        <span className="text-sm">Current Location</span>
      </button>
    </header>
  );
}

export default Header;
