import { Icons } from "../UI/Icons";

export default function DayCard({ day, index, updateDay, removeDay }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm group">
      <div className="flex items-start gap-6">

        <div className="bg-slate-900 text-white w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm shrink-0">
          {index + 1}
        </div>

        <div className="flex-1 space-y-4">

          <div className="flex justify-between items-center">
            <input
              className="w-full font-black text-lg border-none focus:ring-0"
              value={day.title}
              onChange={(e) =>
                updateDay(day.id, "title", e.target.value)
              }
            />

            <button
              onClick={() => removeDay(day.id)}
              className="text-slate-200 hover:text-red-500"
            >
              <Icons.Trash />
            </button>
          </div>

          <textarea
            className="w-full p-6 bg-slate-50 rounded-2xl border-none focus:ring-1 focus:ring-orange-100 text-sm font-medium"
            value={day.activities}
            placeholder="Write activities for the day..."
            onChange={(e) =>
              updateDay(day.id, "activities", e.target.value)
            }
          />

          <div className="flex items-center gap-2 text-slate-400">
            <Icons.Pin />
            <input
              className="bg-transparent border-none focus:ring-0 text-xs font-black uppercase tracking-widest w-full"
              value={day.hotel}
              placeholder="Hotel / Stay Information"
              onChange={(e) =>
                updateDay(day.id, "hotel", e.target.value)
              }
            />
          </div>

        </div>
      </div>
    </div>
  );
}
