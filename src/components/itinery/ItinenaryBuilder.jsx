"use client";

import { useMemo } from "react";
import DayCard from "./DayCard";
import CostPanel from "./CostPanel";
import { Icons } from "../UI/Icons";

export default function ItineraryBuilder({ itinerary, setItinerary }) {

  const totalPrice = useMemo(() => {
    const { flights, hotels, activities, markup } = itinerary.pricing;
    return (flights || 0) + (hotels || 0) + (activities || 0) + (markup || 0);
  }, [itinerary.pricing]);

  const addDay = () => {
    setItinerary(prev => ({
      ...prev,
      days: [
        ...prev.days,
        {
          id: Date.now().toString(),
          title: "New Day Plan",
          activities: "",
          hotel: ""
        }
      ]
    }));
  };

  const updateDay = (id, field, value) => {
    setItinerary(prev => ({
      ...prev,
      days: prev.days.map(day =>
        day.id === id ? { ...day, [field]: value } : day
      )
    }));
  };

  const removeDay = (id) => {
    setItinerary(prev => ({
      ...prev,
      days: prev.days.filter(day => day.id !== id)
    }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

      <div className="lg:col-span-8 space-y-8">

        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center gap-2">
            <input
              className="w-full text-xl font-black border-none focus:ring-0 px-2"
              value={itinerary.title}
              onChange={(e) =>
                setItinerary({ ...itinerary, title: e.target.value })
              }
            />
            <input
              className="text-xl max-w-40 text-orange-600 font-bold border-none focus:ring-0"
              value={itinerary.customerName}
              onChange={(e) =>
                setItinerary({ ...itinerary, customerName: e.target.value })
              }
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-black text-xs uppercase tracking-widest text-slate-500 flex items-center gap-2">
              <Icons.Calendar /> Plan Details
            </h3>

            <button
              onClick={addDay}
              className="text-xs font-black text-orange-600 uppercase tracking-widest flex items-center gap-1 hover:underline"
            >
              <Icons.Plus /> Add Day
            </button>
          </div>

          {itinerary.days.map((day, index) => (
            <DayCard
              key={day.id}
              day={day}
              index={index}
              updateDay={updateDay}
              removeDay={removeDay}
            />
          ))}
        </div>
      </div>

      <div className="lg:col-span-4">
        <CostPanel
          itinerary={itinerary}
          setItinerary={setItinerary}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
}
