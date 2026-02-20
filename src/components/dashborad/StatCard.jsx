export default function StatCard({ label, count, icon: Icon, colorClass }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
      
      <div className="flex items-center justify-between">

        <div>
          <p className="text-slate-400 text-[11px] font-black uppercase tracking-widest">
            {label}
          </p>

          <h3 className="text-3xl font-black mt-2 text-slate-800 tracking-tight">
            {count}
          </h3>
        </div>

        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colorClass} transition-transform group-hover:scale-110`}
        >
          <Icon />
        </div>

      </div>
    </div>
  );
}
