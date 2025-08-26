import React from "react";
import {
  Sun,
  Gauge,
  Wind,
  Droplets,
  Sunrise,
  Sunset,
  SunDim,
  Thermometer,
} from "lucide-react";

function CurrentWeather({ weatherData }) {
  if (!weatherData || !weatherData.sys) {
    return (
      <p className="text-center text-gray-400">
        Unable to get data. Please check all spellings...
      </p>
    );
  }
  const centralStyle = " text-gray-400 font-bold text-sm";
  const textStyle1 = "text-gray-400";

  // Calculating current time and date
  const timezoneOffset = weatherData.timezone * 1000; // in milliseconds
  const cityTime = new Date(Date.now() + timezoneOffset);
  const displayHour = cityTime.getUTCHours().toString().padStart(2, "0");
  const displayMinute = cityTime.getUTCMinutes().toString().padStart(2, "0");
  const displayDate = cityTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  const sunriseTime = new Date(
    (weatherData.sys.sunrise + timezoneOffset) * 1000
  ).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const sunsetTime = new Date(
    (weatherData.sys.sunset + timezoneOffset) * 1000
  ).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <section className="flex items-center justify-between text-white p-6 mt-7 ">
      {/* left WeatherCard Details */}
      <div className="shadow-slate-500 p-30 rounded-4xl bg-gray-800 flex flex-col items-center w-2/6 ml-40 hover:shadow-2xs transition ">
        <h2 className="text-3xl font-semibold">{weatherData.name}</h2>
        <p className="text-6xl font-extrabold p-10 text-gray-200">
          {displayHour}:{displayMinute}
        </p>
        <p className={`text-bold ${textStyle1}`}>{displayDate}</p>
      </div>

      {/* right WeatherCard Details */}
      <div className="bg-gray-800 text-white p-30 rounded-4xl shadow-slate-500 flex-col items-center w-1/2 mr-20  mx-auto hover:shadow-2xs transition">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-9 ">
            <div>
              <h1 className="text-5xl font-bold text-gray-200 ">
                {Math.round(weatherData.main.temp)}°C
              </h1>
              <p className={` ${centralStyle} flex items-center`}>
                Feels like: {Math.round(weatherData.main.feels_like)}°C
                <Thermometer className="w-5 h-5 mr-1" />
              </p>
            </div>

            {/* Sunrise and sunset */}
            <div className={`flex flex-col gap-3 ${centralStyle}`}>
              <div className="flex items-center gap-2">
                <Sunrise className={`w-5 h-5 ${textStyle1}`} />

                <span className={`${textStyle1} ml-1`}>
                  Sunrise <br />
                  {sunriseTime}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Sunset className={`w-5 h-5 ${textStyle1}`} />
                <span className={`${textStyle1} ml-1`}>
                  Sunset <br />
                  {sunsetTime}
                </span>
              </div>
            </div>
          </div>

          {/* Condition */}
          <div className="flex flex-col items-center">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
              className="w-55 h-55"
            />
            <p className="mt-3 text-lg font-semibold">
              {weatherData.weather[0].description}
            </p>
          </div>

          <div className={`grid grid-cols-2 gap-4 ${centralStyle}`}>
            <div className="flex flex-col items-center">
              <Droplets className={`w-6 h-6 ${textStyle1}`} />
              <p>{weatherData.main.humidity}%</p>
              <span>Humidity</span>
            </div>
            <div className="flex flex-col items-center">
              <Wind className={`w-6 h-6 ${textStyle1}`} />
              <p>{(weatherData.wind.speed * 3.6).toFixed(1)} km/h</p>
              <span>Wind</span>
            </div>

            <div className="flex flex-col items-center">
              <Gauge className={`w-6 h-6 ${textStyle1}`} />
              <p>{weatherData.main.pressure} hPa</p>
              <span>Pressure</span>
            </div>

            <div className="flex flex-col items-center">
              <SunDim className={`w-6 h-6 ${textStyle1}`} />
              <p>
                {weatherData.main.uvi === 0
                  ? "Low"
                  : weatherData.main.uvi === 1
                  ? "Moderate"
                  : weatherData.main.uvi === 2
                  ? "High"
                  : "Very High"}
              </p>
              <span>UV</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentWeather;
