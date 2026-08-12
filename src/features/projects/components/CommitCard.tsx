import React from "react";
import { formatDistanceToNow } from "date-fns";
import { GitCommit, ExternalLink } from "lucide-react";
import Link from "next/link";

interface CommitCardProps {
  commit: any;
  repoUrl: string;
}

export function CommitCard({ commit, repoUrl }: CommitCardProps) {
  if (!commit) return null;

  const githubUrl = repoUrl.replace(".git", "");
  const commitUrl = `${githubUrl}/commit/${commit.sha}`;

  return (
    <div className="bg-zinc-950 border border-white/10 rounded-lg p-4 transition-all hover:bg-zinc-900/50">
      <div className="flex items-start gap-4">
        {commit.authorAvatar || commit.author?.avatar_url ? (
          <img src={commit.authorAvatar || commit.author.avatar_url} alt="Author" className="w-8 h-8 rounded-full border border-white/10" />
        ) : (
          <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center border border-cyan-500/30">
            <GitCommit className="w-4 h-4 text-cyan-400" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <Link href={commitUrl} target="_blank" className="text-sm font-medium text-white hover:text-cyan-400 truncate block transition-colors">
            {commit?.commit?.message?.split("\n")[0] || commit?.message?.split("\n")[0] || "No commit message"}
          </Link>
          <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
            <span className="font-medium text-gray-400">
              {commit?.authorName || commit?.commit?.author?.name || commit?.author?.login || "Unknown Author"}
            </span>
            <span>•</span>
            <span>
              {commit?.date || commit?.commit?.author?.date || commit?.created_at ? 
                formatDistanceToNow(new Date(commit?.date || commit?.commit?.author?.date || commit?.created_at), { addSuffix: true }) : ''}
            </span>
            <span>•</span>
            <span className="font-mono text-[10px] bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
              {commit?.sha?.substring(0, 7) || "unknown"}
            </span>
          </div>
        </div>
        <Link href={commitUrl} target="_blank" className="p-1.5 text-gray-500 hover:text-white bg-white/5 rounded-md hover:bg-white/10 transition-colors shrink-0">
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
