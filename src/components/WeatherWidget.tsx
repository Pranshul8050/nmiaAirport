import { Cloud } from 'lucide-react';
import { useEffect, useState } from 'react';

interface WeatherData {
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
}

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Mumbai&aqi=no`
        );
        const data = await response.json();

        if (data.current) {
          setWeather({
            temp_c: data.current.temp_c,
            condition: {
              text: data.current.condition.text,
              icon: `https:${data.current.condition.icon}`
            }
          });
        }
      } catch (error) {
        console.error('Error fetching weather:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    // Refresh weather every 30 minutes
    const interval = setInterval(fetchWeather, 1800000);
    return () => clearInterval(interval);
  }, []);

  if (loading || !weather) {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/50 backdrop-blur-sm rounded-full border border-slate-200/50">
        <Cloud className="w-4 h-4 text-slate-400 animate-pulse" />
        <span className="text-sm text-slate-600">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-sky-50/80 to-blue-50/80 backdrop-blur-sm rounded-full border border-sky-200/50 shadow-sm hover:shadow-md transition-shadow duration-300">
      <img src={weather.condition.icon} alt={weather.condition.text} className="w-6 h-6" />
      <div className="flex items-center gap-1.5">
        <span className="text-base font-bold text-[#003366]">{Math.round(weather.temp_c)}°C</span>
        <span className="text-xs text-slate-600 font-medium">Mumbai</span>
      </div>
    </div>
  );
};

export default WeatherWidget;
