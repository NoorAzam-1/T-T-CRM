"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Dashboard from "@/components/dashborad/Dashboard";
import LeadsTable from "@/components/LeadsTable";
import ItineraryBuilder from "@/components/itinery/ItinenaryBuilder";
import ItineraryPreview from "@/components/itinery/ItineryPreview";
import { INITIAL_ITINERARY } from "../components/data/MockData";

export default function Page() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [itinerary, setItinerary] = useState(INITIAL_ITINERARY);

  return (
    <div className="flex min-h-screen bg-[#fcfdfe] text-slate-900">
      
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <main className="flex-1 flex flex-col min-w-0">
        
        <Header
          activeTab={activeTab}
          isPreview={isPreview}
          setIsPreview={setIsPreview}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div className="p-6 md:p-10 max-w-7xl mx-auto w-full">

          {activeTab === "dashboard" && (
            <Dashboard />
          )}

          {activeTab === "leads" && (
            <LeadsTable
              setItinerary={setItinerary}
              setActiveTab={setActiveTab}
            />
          )}

          {activeTab === "itinerary" && !isPreview && (
            <ItineraryBuilder
              itinerary={itinerary}
              setItinerary={setItinerary}
            />
          )}

          {activeTab === "itinerary" && isPreview && (
            <ItineraryPreview itinerary={itinerary} />
          )}

        </div>
      </main>
    </div>
  );
}
