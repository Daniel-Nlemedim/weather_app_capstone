import { useState } from "react";
import { Search, MapPin, Moon, Sun } from "lucide-react";

function Header({ setQuery, apiKey, isDarkMode, toggleDarkMode }) {
  const [city, setCity] = useState("");

  return (
    <header className="flex items-center justify-between bg-gray-800 dark:bg-gray-900 text-white p-5 rounded-full shadow-lg ml-40 mr-40 ">
      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition "
      >
        {isDarkMode ? (
          <Moon size={25} className="text-yellow-300" /> // Moon icon for dark mode
        ) : (
          <Sun size={25} className="text-orange-400" /> // Sun icon for light mode
        )}
      </button>

      {/* City Search Input */}
      <div className="flex items-center bg-gray-700 px-3 py-2 rounded-full w-1/2">
        <Search size={35} className="text-gray-400 mr-2" />
        <input
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setQuery(city); // Set query on Enter key press
              setCity(""); // Clear the input field
            }
          }}
          type="text"
          placeholder="Search for your preferred city..."
          className="bg-transparent outline-none w-full text-sm text-gray-200 placeholder-gray-400"
          value={city} // Controlled component for input
        />
      </div>

      {/* Current Location Button */}
      <div className="flex items-center gap-4">
        <button
          className="flex items-center gap-2 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition"
          onClick={() => {
            // Get current geolocation
            navigator.geolocation.getCurrentPosition((position) => {
              const { latitude, longitude } = position.coords;
              // Fetch weather data for current location
              fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
              )
                .then((res) => res.json())
                .then((res) => setQuery(res.name)); // Set query to the city name from current location
            });
          }}
        >
          <MapPin size={25} />
          <span className="text-sm">Current Location</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
