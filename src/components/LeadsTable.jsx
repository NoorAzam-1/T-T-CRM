import { INDIAN_LEADS } from "./data/MockData";
import Badge from "./Badge";
import { Icons } from "./UI/Icons";

export default function LeadsTable({ setItinerary, setActiveTab }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden overflow-x-auto">
      
      <table className="w-full text-left min-w-200">
        
        <thead className="bg-slate-500 text-white border-b border-slate-100 font-bold text-[10px] uppercase tracking-widest">
          <tr>
            <th className="px-8 py-5">Customer</th>
            <th className="px-8 py-5">Tour Interest</th>
            <th className="px-8 py-5">Status</th>
            <th className="px-8 py-5">Enquiry Date</th>
            <th className="px-8 py-5 text-right">Action</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-50">
          {INDIAN_LEADS.map((lead) => (
            <tr
              key={lead.id}
              className="hover:bg-slate-50/50 transition-colors"
            >
              <td className="px-8 py-6">
                <div className="font-black text-slate-800">
                  {lead.name}
                </div>

                <div className="text-[10px] text-slate-400 flex items-center mt-1 font-bold">
                  <Icons.Phone />
                  <span className="ml-2">{lead.mobile}</span>
                </div>
              </td>

              <td className="px-8 py-6">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-[10px] font-black uppercase tracking-wider">
                  {lead.destination}
                </span>
              </td>

              <td className="px-8 py-6">
                <Badge status={lead.status} />
              </td>

              <td className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase">
                {lead.date}
              </td>

              <td className="px-8 py-6 text-right">
                <button
                  onClick={() => {
                    setItinerary((prev) => ({
                      ...prev,
                      customerName: lead.name,
                    }));
                    setActiveTab("itinerary");
                  }}
                  className="inline-flex items-center px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-orange-600 transition-all"
                >
                  Design <Icons.Arrow />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
