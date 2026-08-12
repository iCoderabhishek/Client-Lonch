"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AccountSettingsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Account Settings</h1>
        <p className="text-gray-400 text-sm">Manage your global account configuration and security.</p>
      </div>

      <Card className="bg-zinc-950 border-white/10">
        <CardHeader className="border-b border-white/5 bg-white/5">
          <CardTitle className="text-white text-lg flex items-center gap-2">Danger Zone</CardTitle>
          <CardDescription className="text-gray-400">Irreversible and destructive actions</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border border-red-500/20 bg-red-500/5 rounded-lg p-4">
            <div>
              <h4 className="text-white font-medium mb-1">Delete Account</h4>
              <p className="text-sm text-gray-400 max-w-xl">
                Permanently delete your account and all of your projects. This action is not reversible, so please continue with caution.
              </p>
            </div>
            <Button variant="destructive" className="bg-red-600 hover:bg-red-700 text-white whitespace-nowrap">
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
