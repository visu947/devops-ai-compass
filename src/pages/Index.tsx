import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";
import { JenkinsPanel } from "@/components/JenkinsPanel";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
        
        {/* Main content */}
        <div className="flex-1 md:ml-64">
          {/* Topbar */}
          <Topbar onMenuToggle={toggleSidebar} />
          
          {/* Page content */}
          <main className="min-h-[calc(100vh-4rem)]">
            <JenkinsPanel />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
