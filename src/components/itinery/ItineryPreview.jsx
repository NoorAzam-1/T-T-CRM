export default function ItineraryPreview({ itinerary }) {
  return (
    <div className="bg-white p-10 rounded-3xl shadow-xl">
      <h1 className="text-4xl font-bold">{itinerary.title}</h1>
      <p className="mt-2 text-gray-500">Guest: {itinerary.customerName}</p>

      <div className="mt-10 space-y-6">
        {itinerary.days.map((day, index) => (
          <div key={day.id}>
            <h3 className="font-bold text-xl">Day {index + 1}: {day.title}</h3>
            <p className="text-gray-600">{day.activities}</p>
            <p className="text-sm text-gray-400">{day.hotel}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
