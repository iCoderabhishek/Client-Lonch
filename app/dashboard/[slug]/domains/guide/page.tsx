"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Globe } from "lucide-react";

export default function DomainGuidePage() {
  const { slug } = useParams() as { slug: string };

  return (
    <div className="space-y-8 max-w-3xl mx-auto animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-white">
        <Globe className="w-6 h-6 text-cyan-400" /> How to add a Custom Domain
      </h1>

      <ol className="list-decimal list-inside space-y-4 text-gray-300">
        <li>
          <strong>Pick a domain</strong> you own (e.g., <code className="bg-black/50 px-1 py-0.5 rounded">mybrand.com</code>).
        </li>
        <li>
          <strong>Open your DNS provider</strong> (Cloudflare, Route53, GoDaddy, etc.) and create the records shown on the <Link href={`/dashboard/${slug}/domains`} className="underline text-cyan-400 hover:text-cyan-300">Custom Domains page</Link>.
          <ul className="ml-6 list-disc">
            <li>If your domain is a root (apex) domain, add an <code className="bg-black/50 px-1 py-0.5 rounded">A</code> record pointing to <code className="bg-black/50 px-1 py-0.5 rounded">{process.env.NEXT_PUBLIC_PROXY_IP}</code>.</li>
            <li>If it’s a subdomain, add a <code className="bg-black/50 px-1 py-0.5 rounded">CNAME</code> record pointing to <code className="bg-black/50 px-1 py-0.5 rounded">{process.env.NEXT_PUBLIC_PROXY_DOMAIN}</code>.</li>
          </ul>
        </li>
        <li>
          <strong>Wait for DNS propagation</strong> (usually a few minutes). The dashboard will automatically poll the backend and update the status.
        </li>
        <li>
          <strong>SSL certificate</strong> will be requested from AWS ACM. When the status changes to <em>Issued</em>, your site will be served over HTTPS automatically.
        </li>
        <li>
          <strong>Enjoy!</strong> Your project will now be reachable at <code className="bg-black/50 px-1 py-0.5 rounded">{slug}.{process.env.NEXT_PUBLIC_ROOT_DOMAIN}</code>.
        </li>
      </ol>

      <p className="text-gray-400">
        Need to change the domain later? Just return to the <Link href={`/dashboard/${slug}/domains`} className="underline text-cyan-400 hover:text-cyan-300">Custom Domains</Link> page and update the settings.
      </p>
    </div>
  );
}
