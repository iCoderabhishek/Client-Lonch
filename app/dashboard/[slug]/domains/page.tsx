"use client";

import React, { use } from "react";
import { useProject } from "@/features/projects/api/hooks";
import { DomainSettings } from "@/features/projects/components/DomainSettings";
import { Globe } from "lucide-react";

export default function DomainsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { data: project, isLoading } = useProject(slug);

  if (isLoading) {
    return <div className="animate-pulse h-64 bg-white/5 rounded-xl border border-white/10" />;
  }

  if (!project) return null;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white mb-2 flex items-center gap-2">
          <Globe className="w-6 h-6 text-cyan-400" /> Custom Domains
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
          Custom domains allow you to serve your project under your own branded URL (e.g., <strong>www.yourstartup.com</strong>) instead of the default `.{process.env.NEXT_PUBLIC_ROOT_DOMAIN}` subdomain.
          <br /><br />
          <strong>How it works:</strong>
          <br />
          1. Type your desired domain below and click "Add Domain".
          <br />
          2. We will generate specific DNS records (A and CNAME records) for you to copy.
          <br />
          3. Log into your domain registrar (like GoDaddy, Namecheap, or Cloudflare) and add those exact records to your DNS settings.
          <br />
          4. Once the DNS changes propagate globally, we will automatically provision a free SSL certificate for you!
        </p>
      </div>

      <DomainSettings project={project} />
    </div>
  );
}
