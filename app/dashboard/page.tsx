"use client";

import React, { useState } from "react";
import { useProjects } from "@/features/projects/api/hooks";
import { ProjectCard } from "@/features/projects/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search01Icon, PlusSignIcon, Folder01Icon } from "hugeicons-react";
import Link from "next/link";

export default function DashboardPage() {
  const { data: projects, isLoading } = useProjects();
  const [search, setSearch] = useState("");

  const filteredProjects = projects?.filter(p => p.name.toLowerCase().includes(search.toLowerCase())) || [];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full max-w-md">
          <Search01Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <Input 
            placeholder="Search Projects..." 
            className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-cyan-500/50 focus-visible:border-cyan-500/50 h-10 transition-all rounded-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Link href="/dashboard/new">
          <Button className="bg-white text-black hover:bg-gray-200 h-10 px-6 font-medium tracking-wide rounded-md shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all">
            <PlusSignIcon className="w-4 h-4 mr-2" />
            Add New
          </Button>
        </Link>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold tracking-wide text-white flex items-center gap-2">
          Projects
          <span className="text-xs font-normal bg-white/10 text-gray-400 px-2 py-0.5 rounded-full">
            {projects?.length || 0}
          </span>
        </h2>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-[180px] rounded-xl bg-white/5 animate-pulse border border-white/10" />
            ))}
          </div>
        ) : filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project as any} />
            ))}
          </div>
        ) : (
          <div className="py-24 flex flex-col items-center justify-center text-center border border-dashed border-white/10 rounded-xl bg-black/40 backdrop-blur-sm">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 border border-white/10 shadow-lg">
              <Folder01Icon className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">No projects found</h3>
            <p className="text-gray-400 mb-6 text-sm max-w-sm">
              Get started by importing a repository from GitHub or using one of our templates.
            </p>
            <Link href="/dashboard/new">
              <Button className="bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.3)] border border-cyan-400/50 transition-all">
                Create a new Project
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
