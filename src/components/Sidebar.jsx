import { Icons } from "./UI/Icons";

export default function Sidebar({
  activeTab,
  setActiveTab,
  isOpen,
  setIsOpen,
}) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Icons.Dashboard },
    { id: "leads", label: "Enquiries", icon: Icons.Users },
    { id: "itinerary", label: "Itinerary Builder", icon: Icons.File },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed md:sticky top-0 left-0 h-screen bg-slate-900 w-68 px-6 py-4 flex flex-col z-50 transition-all duration-300 shadow-2xl ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between text-white mb-12">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-600 p-2.5 rounded-xl shadow-lg shadow-orange-600/20">
              <Icons.Map />
            </div>
            <span className="text-2xl font-black tracking-tighter">
              TRAVEL_CRM
            </span>
          </div>

          <button
            className="md:hidden text-slate-400"
            onClick={() => setIsOpen(false)}
          >
            <Icons.Close />
          </button>
        </div>

        <nav className="space-y-2 flex-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-4 px-4 py-3 rounded-2xl transition-all cursor-pointer ${
                activeTab === item.id
                  ? "bg-orange-600 text-white shadow-xl shadow-orange-600/30"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <item.icon />
              <span className="font-bold tracking-wide">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="pt-8 border-t border-slate-800">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black">
              JS
            </div>
            <div>
              <p className="text-xs font-black text-white uppercase tracking-widest">
                Jay Sharma
              </p>
              <p className="text-[10px] text-slate-500 font-bold uppercase">
                Travel Consultant
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
