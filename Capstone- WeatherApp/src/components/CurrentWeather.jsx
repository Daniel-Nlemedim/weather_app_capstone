import React from "react";
import {
  Sun,
  Gauge,
  Wind,
  Droplets,
  Sunrise,
  Sunset,
  SunDim,
} from "lucide-react";

function CurrentWeather() {
  const centralStyle = " text-gray-400 font-bold text-sm";
  const textStyle1 = "text-gray-400";
  const CurrentDate = new Date();
  const displayDate = CurrentDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <section className="flex items-center justify-between text-white p-6 mt-7 ">
      <div className="shadow-lg p-30 rounded-4xl bg-gray-800 flex flex-col items-center w-2/6 ml-40 ">
        <h2 className="text-lg font-semibold">Your City</h2>
        <p className="text-6xl font-extrabold p-10 text-gray-200">
          {CurrentDate.getHours().toLocaleString("en-US", {
            minimumIntegerDigits: 2,
          })}
          :
          {CurrentDate.getMinutes().toLocaleString("en-US", {
            minimumIntegerDigits: 2,
          })}
        </p>
        <p className={`text-bold ${textStyle1}`}>{displayDate}</p>
      </div>

      <div className="bg-gray-800 text-white p-30 rounded-4xl shadow-lg flex-col items-center w-1/2 mr-20  mx-auto ">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-9 ">
            <div>
              <h1 className="text-5xl font-bold text-gray-200 ">24°C</h1>
              <p className={` ${centralStyle}`}>Feels like: 22°C</p>
            </div>

            {/* Sunrise and sunset */}
            <div className={`flex flex-col gap-3 ${centralStyle}`}>
              <div className="flex items-center gap-2">
                <Sunrise className={`w-5 h-5 ${textStyle1}`} />

                <span className={`${textStyle1} ml-1`}>
                  Sunrise <br />
                  06:27 AM
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Sunset className={`w-5 h-5 ${textStyle1}`} />
                <span className={`${textStyle1} ml-1`}>
                  Sunset <br /> 07:27 PM
                </span>
              </div>
            </div>
          </div>

          {/* Sun Icon */}
          <div className="flex flex-col items-center">
            <Sun className="text-yellow-400 w-24 h-24" />
            <p className="mt-3 text-lg font-semibold">Sunny</p>
          </div>

          <div className={`grid grid-cols-2 gap-4 ${centralStyle}`}>
            <div className="flex flex-col items-center">
              <Droplets className={`w-6 h-6 ${textStyle1}`} />
              <p>47%</p>
              <span>Humidity</span>
            </div>
            <div className="flex flex-col items-center">
              <Wind className={`w-6 h-6 ${textStyle1}`} />
              <p>23 km/h</p>
              <span>Wind</span>
            </div>
            <div className="flex flex-col items-center">
              <Gauge className={`w-6 h-6 ${textStyle1}`} />
              <p>1019 hPa</p>
              <span>Pressure</span>
            </div>
            <div className="flex flex-col items-center">
              <SunDim className={`w-6 h-6 ${textStyle1}`} />
              <p>8</p>
              <span>UV</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentWeather;
