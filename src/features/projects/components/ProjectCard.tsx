"use client";

import React from "react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { GithubIcon, TimeQuarterIcon, AlertCircleIcon, Tick02Icon, Loading02Icon } from "hugeicons-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectDetail, useCommits } from "../api/hooks";
import { GitCommit } from "lucide-react";

interface ProjectCardProps {
  project: ProjectDetail;
}

const statusConfig = {
  QUEUED: { color: "bg-gray-500", icon: TimeQuarterIcon },
  BUILDING: { color: "bg-yellow-500", icon: Loading02Icon },
  SUCCESS: { color: "bg-green-500", icon: Tick02Icon },
  FAILED: { color: "bg-red-500", icon: AlertCircleIcon },
  CANCELLED: { color: "bg-gray-500", icon: AlertCircleIcon },
  PUSHING: { color: "bg-blue-500", icon: Loading02Icon },
  DEPLOYING: { color: "bg-blue-500", icon: Loading02Icon },
};

export function ProjectCard({ project }: ProjectCardProps) {
  // Extract owner and repo for commit fetching
  const repoString = project.repoUrl.replace("https://github.com/", "").replace(".git", "");
  const [owner, repo] = repoString.split("/");

  const { data: commits } = useCommits(owner, repo, project.branch);
  const latestCommit = commits?.[0];

  // Try to find the latest deployment for status
  const latestDeployment = project.deployments?.[0];
  const status = latestDeployment?.status || "QUEUED";
  const StatusIcon = statusConfig[status]?.icon || TimeQuarterIcon;
  const statusColor = statusConfig[status]?.color || "bg-gray-500";

  return (
    <Link href={`/dashboard/${project.slug}`}>
      <Card className="hover:border-cyan-400 hover:ring-1 hover:ring-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300 bg-black/60 backdrop-blur-xl border-white/10 group h-full">
        <CardHeader className="pb-4 pt-6 px-6">
          <CardTitle className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
            {project.name}
            <Badge variant="outline" className={`ml-2 text-xs ${statusColor} text-white border-none bg-opacity-20 flex gap-1 items-center px-2 py-1`}>
              <StatusIcon className="w-3 h-3" />
              {status}
            </Badge>
          </CardTitle>
          <div className="text-sm text-gray-400 font-mono mt-1">
            {project.slug}.{process.env.NEXT_PUBLIC_ROOT_DOMAIN}
          </div>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <div className="flex flex-col gap-3 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <GithubIcon className="w-4 h-4" />
              <span className="truncate max-w-[200px]">{repoString}</span>
              <span className="bg-white/10 px-1.5 py-0.5 rounded text-xs ml-auto font-mono">
                {project.branch}
              </span>
            </div>
            
            {latestCommit && (
              <div className="flex items-center gap-2 pt-3 mt-1 border-t border-white/5">
                <GitCommit className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                <span className="truncate text-xs text-gray-400 font-medium">
                  {latestCommit?.commit?.message?.split("\n")[0] || latestCommit?.message?.split("\n")[0] || "No commit message"}
                </span>
              </div>
            )}
            
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[10px]">
                Updated {formatDistanceToNow(new Date(project.updatedAt), { addSuffix: true })}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
