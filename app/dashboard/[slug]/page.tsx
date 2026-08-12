"use client";

import React, { use } from "react";
import { useProject, useDeployProject, useRollbackProject, useRollbackEligibility, useBranches, useUpdateProject } from "@/features/projects/api/hooks";
import { BuildLogs } from "@/features/projects/components/BuildLogs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, Rocket02Icon, ArrowLeft02Icon, Settings02Icon } from "hugeicons-react";
import { CommitCard } from "@/features/projects/components/CommitCard";
import { useCommits } from "@/features/projects/api/hooks";
import Link from "next/link";
import { toast } from "sonner";
import { Copy, Info, RefreshCw, GitBranch } from "lucide-react";

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { data: project, isLoading } = useProject(slug);
  const { data: rollbackEligible } = useRollbackEligibility(slug);

  const deployMutation = useDeployProject();
  const rollbackMutation = useRollbackProject();

  // Extract owner and repo for commit fetching safely
  const repoString = project?.repoUrl?.replace("https://github.com/", "").replace(".git", "");
  const [owner, repo] = (repoString || "").split("/");

  const { data: commits } = useCommits(owner, repo, project?.branch || "main");
  const { data: branches, isLoading: loadingBranches } = useBranches(owner, repo);
  const updateProject = useUpdateProject();
  const latestCommit = commits?.[0];

  if (isLoading) {
    return (
      <div className="space-y-8 animate-pulse">
        <div className="h-12 w-1/3 bg-white/10 rounded-md" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 h-[300px] bg-white/5 rounded-xl border border-white/10" />
          <div className="h-[300px] bg-white/5 rounded-xl border border-white/10" />
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="py-20 text-center border border-dashed border-white/10 rounded-xl bg-white/5">
        <h3 className="text-lg font-medium text-white mb-2">Project not found</h3>
        <p className="text-gray-400 text-sm">The project you are looking for does not exist or you do not have permission to view it.</p>
      </div>
    );
  }

  const latestDeployment = project.deployments?.[0];
  const isDeploying = latestDeployment?.status === "QUEUED" || latestDeployment?.status === "BUILDING" || latestDeployment?.status === "PUSHING" || latestDeployment?.status === "DEPLOYING";

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">{project.name}</h1>
          <div className="flex items-center gap-2">
            <a href={`https://${project.slug}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`} target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors hover:underline text-sm font-medium">
              {project.slug}.{process.env.NEXT_PUBLIC_ROOT_DOMAIN}
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText(`https://${project.slug}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);
                toast.success("URL copied to clipboard!");
              }}
              className="p-1 text-gray-500 hover:text-white hover:bg-white/10 rounded transition-colors"
              title="Copy URL"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {rollbackEligible?.isRollbackable && (
            <div className="relative group flex items-center">
              <Button
                variant="outline"
                onClick={() => rollbackMutation.mutate(latestDeployment?.id!)}
                disabled={rollbackMutation.isPending || isDeploying}
                className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white"
                title="Instantly revert the live site to the previous successful deployment"
              >
                <ArrowLeft02Icon className="w-4 h-4 mr-2" />
                Rollback
              </Button>
            </div>
          )}

          <div className="relative flex items-center">
            {loadingBranches ? (
               <div className="w-32 bg-black border border-white/10 rounded-md px-3 py-2 h-10 flex items-center justify-center">
                 <div className="w-4 h-4 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
               </div>
            ) : (
              <>
                <select
                  className="w-40 bg-black border border-white/10 rounded-md pl-3 pr-8 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 appearance-none h-10 transition-colors"
                  value={project.branch || "main"}
                  onChange={async (e) => {
                    const newBranch = e.target.value;
                    try {
                      await updateProject.mutateAsync({
                        slug: project.slug,
                        data: { branch: newBranch, name: project.name, type: project.type, repoUrl: project.repoUrl }
                      });
                      toast.success(`Branch updated to ${newBranch}`);
                    } catch (err) {
                      toast.error("Failed to update branch");
                    }
                  }}
                  disabled={updateProject.isPending || isDeploying}
                >
                  {branches?.map((b: any) => (
                    <option key={b.name} value={b.name}>{b.name}</option>
                  ))}
                  {/* Fallback option if branches array is empty but we have a branch */}
                  {!branches?.some((b: any) => b.name === (project.branch || "main")) && (
                     <option value={project.branch || "main"}>{project.branch || "main"}</option>
                  )}
                </select>
                <GitBranch className="w-4 h-4 text-gray-500 absolute right-3 pointer-events-none" />
              </>
            )}
          </div>

          <Button
            onClick={() => deployMutation.mutate(project.id)}
            disabled={deployMutation.isPending || isDeploying}
            className="bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all h-10"
          >
            <Rocket02Icon className="w-4 h-4 mr-2" />
            {isDeploying ? "Deploying..." : "Trigger Deploy"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content (Left Col) */}
        <div className="lg:col-span-2 space-y-8">

          {/* Production Deployment Card */}
          <Card className="bg-black/60 backdrop-blur-xl border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <CardHeader className="border-b border-white/5 pb-4">
              <CardTitle className="text-lg text-white">Production Deployment</CardTitle>
              <CardDescription className="text-gray-400">The current live version of your application.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Status</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`w-2.5 h-2.5 rounded-full ${latestDeployment?.status === 'SUCCESS' ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : latestDeployment?.status === 'FAILED' ? 'bg-red-500' : 'bg-yellow-500 animate-pulse shadow-[0_0_10px_rgba(234,179,8,0.5)]'}`} />
                    <span className="text-sm text-gray-200 font-medium">{latestDeployment?.status || "NO DEPLOYMENTS"}</span>
                    
                    {latestDeployment?.status === 'QUEUED' && (
                      <button
                        onClick={() => deployMutation.mutate(project.id)}
                        disabled={deployMutation.isPending}
                        className="ml-2 flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-cyan-900/40 text-cyan-400 hover:bg-cyan-900/60 transition-colors border border-cyan-800/50 disabled:opacity-50 whitespace-nowrap"
                        title="Re-trigger deployment if stuck"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${deployMutation.isPending ? 'animate-spin' : ''}`} />
                        Try Again
                      </button>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Environment</p>
                  <p className="text-sm text-gray-200 font-medium">Production</p>
                </div>

                <div className="space-y-1 md:col-span-2">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Source</p>
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-200 truncate">{project.repoUrl.replace("https://github.com/", "")}</span>
                    <Badge variant="outline" className="ml-auto text-xs bg-white/5 text-gray-300 border-white/10 font-mono">
                      {project.branch}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Latest Commit */}
          {latestCommit && (
            <div className="space-y-4">
              <h2 className="text-xl font-medium tracking-wide text-gray-200">Latest Commit</h2>
              <CommitCard commit={latestCommit} repoUrl={project.repoUrl} />
            </div>
          )}

          {/* Build Logs */}
          {latestDeployment && (
            <div className="space-y-4 pt-4">
              <h2 className="text-xl font-medium tracking-wide text-gray-200">Build Logs</h2>
              <BuildLogs deploymentId={latestDeployment.id} />
            </div>
          )}
        </div>

        {/* Sidebar (Right Col) */}
        <div className="space-y-8">

          {/* Environment Variables */}
          <Card className="bg-black/60 backdrop-blur-xl border-white/10">
            <CardHeader className="border-b border-white/5 pb-4">
              <CardTitle className="text-lg text-white flex items-center gap-2">
                <Settings02Icon className="w-5 h-5 text-gray-400" />
                Environment Variables
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              {project.envVars && project.envVars.length > 0 ? (
                <div className="space-y-3">
                  {project.envVars.map((env) => (
                    <div key={env.id} className="flex flex-col bg-white/5 border border-white/10 rounded-md p-3">
                      <span className="text-xs font-mono text-cyan-400 mb-1">{env.key}</span>
                      <span className="text-sm font-mono text-gray-300 truncate">••••••••••••</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500 text-center py-4">No environment variables configured.</p>
              )}
              <Link href={`/dashboard/${slug}/env`} className="block w-full">
                <Button variant="outline" className="w-full bg-white/5 border-white/10 text-white hover:bg-white/10 mt-2">
                  Manage Variables
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Details */}
          <Card className="bg-black/60 backdrop-blur-xl border-white/10">
            <CardHeader className="border-b border-white/5 pb-4">
              <CardTitle className="text-lg text-white">Project Details</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                <span className="text-gray-500">Framework</span>
                <span className="text-gray-200">{project.framework || "None"}</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                <span className="text-gray-500">Type</span>
                <span className="text-gray-200">{project.type}</span>
              </div>
              {project.buildCommand && (
                <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                  <span className="text-gray-500">Build Command</span>
                  <span className="text-gray-200 font-mono text-xs bg-white/5 px-2 py-0.5 rounded">{project.buildCommand}</span>
                </div>
              )}
              {project.outDirectory && (
                <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                  <span className="text-gray-500">Output Dir</span>
                  <span className="text-gray-200 font-mono text-xs bg-white/5 px-2 py-0.5 rounded">{project.outDirectory}</span>
                </div>
              )}
              {project.startCommand && (
                <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                  <span className="text-gray-500">Start Command</span>
                  <span className="text-gray-200 font-mono text-xs bg-white/5 px-2 py-0.5 rounded">{project.startCommand}</span>
                </div>
              )}
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                <span className="text-gray-500">Memory / CPU</span>
                <span className="text-gray-200">{project.maxMemory ? project.maxMemory / (1024 * 1024) + "MB" : "Default"} / {project.maxCpu || 1} vCPU</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Created</span>
                <span className="text-gray-200">{new Date(project.createdAt).toLocaleDateString()}</span>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
