import { Icons } from "../UI/Icons";

export default function CostPanel({ itinerary, setItinerary, totalPrice }) {

  const fields = [
    { label: "Flight / Transport", key: "flights" },
    { label: "Hotel Stay", key: "hotels" },
    { label: "Sightseeing", key: "activities" },
    { label: "Agency Margin", key: "markup" }
  ];

  return (
    <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-2xl sticky top-24">

      <h3 className="text-xs font-black mb-8 text-orange-500 uppercase tracking-widest flex items-center gap-2">
        <Icons.Rupee /> Cost Breakdown
      </h3>

      <div className="space-y-6">
        {fields.map(item => (
          <div key={item.key} className="flex justify-between items-center border-b border-slate-800 pb-2">
            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">
              {item.label}
            </span>

            <input
              type="number"
              value={itinerary.pricing[item.key]}
              onChange={(e) =>
                setItinerary({
                  ...itinerary,
                  pricing: {
                    ...itinerary.pricing,
                    [item.key]: parseInt(e.target.value) || 0
                  }
                })
              }
              className="w-20 bg-transparent border-none text-right font-black text-white"
            />
          </div>
        ))}

        <div className="pt-6">
          <div className="flex justify-between items-end">
            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">
              Total Quote
            </span>

            <span className="text-2xl font-black text-orange-500">
              ₹{totalPrice.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
