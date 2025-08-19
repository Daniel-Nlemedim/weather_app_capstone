import Header from "../components/header";
import CurrentWeather from "../components/CurrentWeather";
import Forecast5Days from "../components/Forecast5Days";
import ForecastHourly from "../components/ForecastHourly";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6">
      <Header />
      <CurrentWeather />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 mr-7">
        <div className="sm:col-span-1">
          <Forecast5Days />
        </div>
        <div className="sm:col-span-2">
          <ForecastHourly />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
