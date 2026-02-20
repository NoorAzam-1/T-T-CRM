import { Icons } from "./UI/Icons";

export default function Header({
  activeTab,
  isPreview,
  setIsPreview,
  setIsSidebarOpen,
}) {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 sticky top-0 z-30 flex justify-between items-center">
      
      <div className="flex items-center space-x-4">
        <button
          className="md:hidden p-2 text-slate-600 bg-slate-100 rounded-lg"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Icons.Bars />
        </button>

        <h1 className="text-lg font-black text-slate-800 uppercase tracking-widest">
          {activeTab}
        </h1>
      </div>

      <div className="flex items-center space-x-3">
        {activeTab === "itinerary" && (
          <>
            <button
              onClick={() => setIsPreview(!isPreview)}
              className="hidden sm:flex items-center space-x-2 px-5 py-2.5 text-xs font-black text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all uppercase tracking-widest"
            >
              <Icons.Eye />
              <span>{isPreview ? "Edit" : "Preview"}</span>
            </button>

            <button className="flex items-center space-x-2 px-5 py-2.5 text-xs font-black text-white bg-slate-900 rounded-xl hover:bg-black transition-all shadow-lg uppercase tracking-widest">
              <Icons.Download />
              <span>Send Proposal</span>
            </button>
          </>
        )}
      </div>
    </header>
  );
}
