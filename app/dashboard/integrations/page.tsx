"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Blocks, Cloud } from "lucide-react";
import { GithubIcon, SlackIcon } from "hugeicons-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function IntegrationsPage() {
  const router = useRouter();
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white mb-2">Integrations</h1>
        <p className="text-sm text-gray-400">
          Connect your Lonch workspace with third-party tools and services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* GitHub Integration */}
        <Card className="bg-zinc-950 border-white/10 flex flex-col h-full">
          <CardHeader className="border-b border-white/10 pb-4 flex flex-row items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
              <GithubIcon className="w-6 h-6 text-black" />
            </div>
            <div>
              <CardTitle className="text-lg text-white">GitHub</CardTitle>
              <CardDescription className="text-xs mt-1">Source Code Control</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-6 flex-1 flex flex-col justify-between space-y-6">
            <p className="text-sm text-gray-400">
              Automatically trigger deployments on push, manage branch previews, and sync repository access.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded border border-green-500/20">Connected</span>
              <Button onClick={() => toast.info("GitHub settings are managed on a per-project basis.")} variant="outline" className="text-xs h-8 border-white/10 text-white hover:bg-white/5">Manage</Button>
            </div>
          </CardContent>
        </Card>

        {/* Slack Integration */}
        <Card className="bg-zinc-950 border-white/10 flex flex-col h-full">
          <CardHeader className="border-b border-white/10 pb-4 flex flex-row items-center gap-4">
            <div className="w-12 h-12 bg-[#4A154B] rounded-xl flex items-center justify-center shrink-0">
              <SlackIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg text-white">Slack</CardTitle>
              <CardDescription className="text-xs mt-1">Notifications & Alerts</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-6 flex-1 flex flex-col justify-between space-y-6">
            <p className="text-sm text-gray-400">
              Receive real-time notifications for deployment successes, failures, and infrastructure alerts directly in your channels.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs text-gray-500">Not connected</span>
              <Button onClick={() => toast("Slack integration is coming soon!")} className="text-xs h-8 bg-white text-black hover:bg-gray-200">Connect</Button>
            </div>
          </CardContent>
        </Card>

        {/* AWS Integration */}
        <Card className="bg-zinc-950 border-white/10 flex flex-col h-full">
          <CardHeader className="border-b border-white/10 pb-4 flex flex-row items-center gap-4">
            <div className="w-12 h-12 bg-[#FF9900] rounded-xl flex items-center justify-center shrink-0">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg text-white">AWS Custom VPC</CardTitle>
              <CardDescription className="text-xs mt-1">Infrastructure</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-6 flex-1 flex flex-col justify-between space-y-6">
            <p className="text-sm text-gray-400">
              Deploy containers directly into your own AWS Virtual Private Cloud for strict compliance and security requirements.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs text-amber-500 flex items-center gap-1">Enterprise Only</span>
              <Button onClick={() => router.push("/pricing")} variant="outline" className="text-xs h-8 border-white/10 text-white hover:bg-white/5">Upgrade</Button>
            </div>
          </CardContent>
        </Card>

        {/* Database Integration */}
        <Card className="bg-zinc-950 border-white/10 flex flex-col h-full">
          <CardHeader className="border-b border-white/10 pb-4 flex flex-row items-center gap-4">
            <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center shrink-0">
              <Database className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-lg text-white">Neon Postgres</CardTitle>
              <CardDescription className="text-xs mt-1">Managed Database</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-6 flex-1 flex flex-col justify-between space-y-6">
            <p className="text-sm text-gray-400">
              Provision Serverless Postgres databases instantly and inject connection strings as environment variables automatically.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs text-gray-500">Coming soon</span>
              <Button onClick={() => toast.success("You've been added to the Neon Postgres waitlist!")} variant="outline" className="text-xs h-8 border-white/20 text-white bg-transparent hover:bg-white/10">Join Waitlist</Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Redis Integration */}
        <Card className="bg-zinc-950 border-white/10 flex flex-col h-full">
          <CardHeader className="border-b border-white/10 pb-4 flex flex-row items-center gap-4">
            <div className="w-12 h-12 bg-red-900 rounded-xl flex items-center justify-center shrink-0">
              <Blocks className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <CardTitle className="text-lg text-white">Upstash Redis</CardTitle>
              <CardDescription className="text-xs mt-1">Caching & Events</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-6 flex-1 flex flex-col justify-between space-y-6">
            <p className="text-sm text-gray-400">
              Connect serverless Redis clusters to your backend deployments for lightning-fast caching and rate limiting.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs text-gray-500">Coming soon</span>
              <Button onClick={() => toast.success("You've been added to the Upstash Redis waitlist!")} variant="outline" className="text-xs h-8 border-white/20 text-white bg-transparent hover:bg-white/10">Join Waitlist</Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
