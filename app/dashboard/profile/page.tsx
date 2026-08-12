"use client";

import React from "react";
import { useCurrentUser } from "@/features/auth/api/hooks";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  const { data: user } = useCurrentUser();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">User Profile</h1>
        <p className="text-gray-400 text-sm">Manage your personal information and preferences.</p>
      </div>

      <Card className="bg-zinc-950 border-white/10">
        <CardHeader className="border-b border-white/5 bg-white/5">
          <CardTitle className="text-white text-lg flex items-center gap-2">Personal Information</CardTitle>
          <CardDescription className="text-gray-400">Your basic profile information</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-start gap-8">
            <div className="shrink-0">
              {user?.avatar || (user as any)?.avatarUrl || (user as any)?.avatar_url ? (
                <img src={user?.avatar || (user as any)?.avatarUrl || (user as any)?.avatar_url} alt="Avatar" className="w-24 h-24 rounded-full border border-white/10 shadow-xl" />
              ) : (
                <div className="w-24 h-24 rounded-full bg-cyan-900/50 flex items-center justify-center text-3xl font-bold border border-cyan-500/30 text-cyan-200">
                  {user?.name?.[0] || user?.email?.[0] || 'U'}
                </div>
              )}
            </div>
            
            <div className="space-y-6 flex-1">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Display Name</label>
                <div className="text-white font-medium bg-white/5 border border-white/10 rounded-md px-4 py-2">
                  {user?.name || "No name set"}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                <div className="text-white font-medium bg-white/5 border border-white/10 rounded-md px-4 py-2">
                  {user?.email || "No email set"}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">GitHub Installation ID</label>
                <div className="text-white font-mono text-sm bg-white/5 border border-white/10 rounded-md px-4 py-2 truncate">
                  {user?.githubInstallationId || "Not connected"}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
