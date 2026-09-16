import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
function App() {
    const [selected, setSelected] = useState(new Date()); // defaults to today

  return (
    <>
      <div className="h-screen w-full bg-cover bg-center bg-no-repeat bg-[url(/hero-bg.png)]">
        {/* <div className="bg-black/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl shadow-xl p-6 w-100">
          Your content here
        </div> */}
        <div className="w-72 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl p-5 text-white">
          <div className="mb-2">
            <span className="text-sm font-medium text-white/90">Calendar</span>
          </div>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            showOutsideDays
            classNames={{
              months: "flex flex-col",
              month: "space-y-3",
              month_caption: "flex justify-center relative items-center mb-2 h-7",
              caption_label: "text-sm font-medium",
              nav: "flex items-center justify-between absolute inset-x-0 top-0 h-7",
              month_grid: "w-full border-collapse",
              weekdays: "flex",
              weekday: "text-white/40 text-xs w-8 h-8 flex items-center justify-center font-normal",
              week: "flex w-full",
              day: "w-8 h-8 flex items-center justify-center p-0",
              day_button:
                "w-8 h-8 rounded-full text-sm text-white/80 hover:bg-white/10 transition-colors flex items-center justify-center",
            }}
            modifiersClassNames={{
              selected: "!bg-violet-500 !text-white !rounded-3xl",
              today: "font-semibold",
              outside: "!text-white/50",
              disabled: "!text-white/20",
            }}
          />
        </div>
      </div>
    </>
  )
}

export default App
