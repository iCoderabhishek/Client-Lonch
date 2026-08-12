"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useCurrentUser } from "@/features/auth/api/hooks";
import { LogOut, User, Settings, ChevronDown } from "lucide-react";
import { API_BASE_URL, apiClient } from "@/lib/client";
import { toast } from "sonner";
import { LogoutConfirmModal } from "@/components/LogoutConfirmModal";

const LonchLogo = ({ className }: { className?: string }) => (
  <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2L26 14H6L16 2Z" fill="currentColor"/>
    <path d="M6 20L16 26L26 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 26L16 30L22 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data: user } = useCurrentUser();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await apiClient.post("/auth/logout");
      window.location.href = "/";
    } catch (e) {
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500/30">
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="flex items-center gap-3 group z-50">
              <LonchLogo className="w-8 h-8 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
              <span className="font-heading font-bold text-xl tracking-wider text-white">LONCH</span>
            </Link>
            <nav className="hidden md:flex gap-6 ml-4">
              <Link href="/dashboard" className="text-sm font-medium text-white transition-colors">Overview</Link>
              <Link href="/dashboard/integrations" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Integrations</Link>
              <Link href="/dashboard/settings" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Settings</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4 relative" ref={dropdownRef}>
            {user && (
              <div 
                className="flex items-center gap-2 bg-transparent hover:bg-white/5 py-1 px-2 rounded-md transition-colors cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {user.avatar || (user as any).avatarUrl || (user as any).avatar_url ? (
                  <img src={user.avatar || (user as any).avatarUrl || (user as any).avatar_url} alt="Avatar" className="w-8 h-8 rounded-full border border-white/20" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center text-sm font-bold border border-cyan-500/30 text-cyan-200">
                    {user.name?.[0] || user.email?.[0] || 'U'}
                  </div>
                )}
              </div>
            )}

            {dropdownOpen && (
              <div className="absolute top-12 right-0 w-56 bg-zinc-950 border border-white/10 rounded-lg shadow-xl shadow-black/50 overflow-hidden z-50 animate-in slide-in-from-top-2 fade-in duration-200">
                <div className="px-4 py-3 border-b border-white/10">
                  <p className="text-sm font-medium text-white">{user?.name || 'User'}</p>
                  <p className="text-xs text-gray-500 truncate mt-0.5">{user?.email}</p>
                </div>
                <div className="p-1">
                  <Link href="/dashboard/profile" onClick={() => setDropdownOpen(false)} className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md flex items-center gap-2 transition-colors">
                    <User className="w-4 h-4" /> Profile
                  </Link>
                  <Link href="/dashboard/settings" onClick={() => setDropdownOpen(false)} className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md flex items-center gap-2 transition-colors">
                    <Settings className="w-4 h-4" /> Account Settings
                  </Link>
                </div>
                <div className="p-1 border-t border-white/10">
                  <button 
                    onClick={() => {
                      setDropdownOpen(false);
                      setIsLogoutModalOpen(true);
                    }}
                    className="w-full text-left px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-md flex items-center gap-2 transition-colors"
                  >
                    <LogOut className="w-4 h-4" /> Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>

      <LogoutConfirmModal 
        isOpen={isLogoutModalOpen} 
        onConfirm={handleLogout} 
        onCancel={() => setIsLogoutModalOpen(false)} 
      />
    </div>
  );
}
