"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, Settings, Terminal, Variable, LogOut, PanelLeftClose, PanelLeftOpen, Globe } from "lucide-react";
import { LogoutConfirmModal } from "@/components/LogoutConfirmModal";
import { apiClient } from "@/lib/client";

export default function ProjectLayout({ children, params }: { children: React.ReactNode, params: Promise<{ slug: string }> }) {
  const pathname = usePathname();
  const { slug } = React.use(params);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = async () => {
    try {
      await apiClient.post("/auth/logout");
      window.location.href = "/";
    } catch (e) {
      window.location.href = "/";
    }
  };

  const tabs = [
    { name: "Overview", href: `/dashboard/${slug}`, icon: Activity },
    { name: "Deployments", href: `/dashboard/${slug}/deployments`, icon: Terminal },
    { name: "Environment", href: `/dashboard/${slug}/env`, icon: Variable },
    { name: "Domains", href: `/dashboard/${slug}/domains`, icon: Globe },
    { name: "Settings", href: `/dashboard/${slug}/settings`, icon: Settings },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar Sub-Nav */}
      <aside className={`w-full ${isCollapsed ? 'md:w-16' : 'md:w-64'} shrink-0 flex flex-col md:sticky md:top-24 md:h-[calc(100vh-8rem)] transition-all duration-300`}>
        
        {/* Desktop Collapse Toggle */}
        <div className="hidden md:flex justify-end mb-4">
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 text-gray-500 hover:text-white bg-white/5 hover:bg-white/10 rounded-md transition-colors"
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {isCollapsed ? <PanelLeftOpen className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
          </button>
        </div>

        <nav className="flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-4 md:pb-0 hide-scrollbar flex-1">
          <div className="flex flex-row md:flex-col gap-1 mb-8">
            {tabs.map((tab) => {
              const isActive = pathname === tab.href;
              const Icon = tab.icon;
              
              return (
                <Link
                  key={tab.name}
                  href={tab.href}
                  title={isCollapsed ? tab.name : undefined}
                  className={`flex items-center ${isCollapsed ? 'justify-center px-0' : 'gap-3 px-3'} py-2.5 rounded-lg transition-all duration-200 whitespace-nowrap ${
                    isActive 
                      ? "bg-white/10 text-white font-medium" 
                      : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-500"} shrink-0`} />
                  {!isCollapsed && <span className="hidden md:inline">{tab.name}</span>}
                  <span className="md:hidden ml-2">{tab.name}</span>
                </Link>
              );
            })}
          </div>
          
          <div className="mt-auto hidden md:block pt-4 border-t border-white/10">
            <button 
              onClick={() => setIsLogoutModalOpen(true)}
              title={isCollapsed ? "Sign Out" : undefined}
              className={`w-full flex items-center ${isCollapsed ? 'justify-center px-0' : 'gap-3 px-3'} py-2.5 rounded-lg transition-all duration-200 text-gray-400 hover:text-red-400 hover:bg-red-500/10 group`}
            >
              <LogOut className="w-4 h-4 text-gray-500 group-hover:text-red-400 shrink-0" />
              {!isCollapsed && <span>Sign Out</span>}
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {children}
      </div>

      <LogoutConfirmModal 
        isOpen={isLogoutModalOpen} 
        onConfirm={handleLogout} 
        onCancel={() => setIsLogoutModalOpen(false)} 
      />
    </div>
  );
}
