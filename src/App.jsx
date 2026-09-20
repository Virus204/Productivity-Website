import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { FadeArc } from "@/components/ui/fade-arc";
function getWeatherCondition(code) {
  if (code === 0) return "Clear Sky";
  if (code <= 3) return "Partly Cloudy";
  if (code <= 67) return "Rain";
  if (code <= 77) return "Snow";
  return "Stormy";
}
function App() {
  const [selected, setSelected] = useState(new Date);
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=30.0626&longitude=31.2497&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Africa/Cairo";
    fetch(url).then(response => response.json()).then(data => {setWeatherData(data);})
    .catch(error => console.error("Error fetching weather:", error));
  }, [])
  return (
    <>
      <div className="h-screen w-full bg-cover bg-center bg-no-repeat bg-[url(/hero-bg2.png)]">
        <div className="p-9 flex">
          <div className="text-white/80 backdrop-blur-sm bg-black/10 border border-white/20 shadow-xl w-90 rounded-xl p-6">
            <div className="mb-2">
              <span className="text-lg font-medium text-white/90">Calender</span>
            </div>
            <div className="flex justify-center">
              <DayPicker 
                animate
                fixedWeeks
                captionLayout="label"
                showOutsideDays
                mode="single"
                selected={selected}
                onSelect={setSelected}
                navLayout="around"
                timeZone="Africa/Cairo"
                classNames={{
                  day_button:"w-9 h-9 mx-auto rounded-full text-md text-white/80 hover:bg-white/10",
                }} 
                modifiersClassNames={{
                  selected: " [&>button]:!bg-[#34117E] [&>button]:!text-white",
                  today: "font-semibold",
                  outside: "[&>button]:!text-white/20",
                  disabled: "[&>button]:!text-white/20",
                }}
              />
            </div>
          </div>
          <div className="backdrop-blur-sm border border-white/20 bg-black/10 text-white/80 shadow-xl w-90 rounded-xl p-6 ml-10">
            <div className="flex items-center justify-center w-full min-h-[200px]">
              {weatherData ?(
                <div>
                  <img src="weather-icon.svg" className="mb-10"></img>
                  <h2 className="text-white"><span className="text-5xl">{weatherData.current.temperature_2m}</span>{weatherData.current_units.temperature_2m}</h2>
                </div>
              ):(
                <FadeArc className="size-20 text-[#34117E]"/>
              )}
            </div>
          </div>
          <div className="backdrop-blur-sm border border-white/20 bg-black/10 text-white/80 shadow-xl w-200 rounded-xl p-6 ml-10">
            <div>
              <span className="text-lg font-medium text-white/90">My Tasks</span>
            </div>
          </div>
        </div>
      </div>
      {console.log(weatherData)}
    </>
  )
}

export default App