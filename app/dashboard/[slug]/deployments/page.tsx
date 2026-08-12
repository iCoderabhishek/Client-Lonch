"use client";

import React, { use } from "react";
import { useProject } from "@/features/projects/api/hooks";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { Terminal, Rocket } from "lucide-react";

export default function DeploymentsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { data: project, isLoading } = useProject(slug);

  if (isLoading) {
    return <div className="animate-pulse h-64 bg-white/5 rounded-xl border border-white/10" />;
  }

  if (!project) return null;

  const deployments = project.deployments || [];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white mb-2">Deployments</h1>
        <p className="text-sm text-gray-400">
          View the history of all deployments for this project.
        </p>
      </div>

      <Card className="bg-zinc-950 border-white/10 overflow-hidden">
        <CardHeader className="bg-black/50 border-b border-white/10 pb-4">
          <CardTitle className="text-lg text-white flex items-center gap-2">
            <Terminal className="w-5 h-5 text-gray-400" />
            Deployment History
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {deployments.length === 0 ? (
            <div className="py-24 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 border border-white/10 shadow-lg">
                <Rocket className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">No deployments yet</h3>
              <p className="text-gray-400 text-sm max-w-sm">
                This project hasn't been deployed yet. Trigger a deployment from the overview page to get started.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-white/5">
              {deployments.map((dep: any) => (
                <div key={dep.id} className="p-4 hover:bg-white/5 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className={`w-2.5 h-2.5 rounded-full ${dep.status === 'SUCCESS' ? 'bg-green-500' : dep.status === 'FAILED' ? 'bg-red-500' : 'bg-yellow-500 animate-pulse'}`} />
                    <div>
                      <p className="text-sm font-medium text-white">{dep.status}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatDistanceToNow(new Date(dep.createdAt), { addSuffix: true })}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono bg-white/5 border border-white/10 rounded px-2 py-1 text-gray-400">
                      {dep.id.split("-")[0]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
