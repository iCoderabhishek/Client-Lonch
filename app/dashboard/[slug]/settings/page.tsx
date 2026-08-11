"use client";

import React, { use } from "react";
import { useProject } from "@/features/projects/api/hooks";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Settings, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SettingsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { data: project, isLoading } = useProject(slug);

  if (isLoading) {
    return <div className="animate-pulse h-64 bg-white/5 rounded-xl border border-white/10" />;
  }

  if (!project) return null;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white mb-2">Project Settings</h1>
        <p className="text-sm text-gray-400">
          Manage configuration and advanced settings for {project.name}.
        </p>
      </div>

      <Card className="bg-zinc-950 border-white/10">
        <CardHeader className="border-b border-white/10 pb-4">
          <CardTitle className="text-lg text-white flex items-center gap-2">
            <Settings className="w-5 h-5 text-gray-400" />
            General Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Project Name</label>
            <input 
              type="text" 
              defaultValue={project.name}
              disabled
              className="w-full bg-black border border-white/10 rounded-md px-3 py-2 text-sm text-gray-500 opacity-70 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Framework</label>
            <input 
              type="text" 
              defaultValue={project.framework}
              disabled
              className="w-full bg-black border border-white/10 rounded-md px-3 py-2 text-sm text-gray-500 opacity-70 cursor-not-allowed"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-red-950/20 border-red-900/50">
        <CardHeader className="border-b border-red-900/30 pb-4">
          <CardTitle className="text-lg text-red-500 flex items-center gap-2">
            Danger Zone
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h4 className="text-sm font-medium text-white">Delete Project</h4>
              <p className="text-xs text-gray-400 mt-1">This action cannot be undone. This will permanently delete the project and all its deployments.</p>
            </div>
            <Button variant="destructive" className="bg-red-600 hover:bg-red-700 shrink-0">
              <Trash2 className="w-4 h-4 mr-2" /> Delete Project
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
