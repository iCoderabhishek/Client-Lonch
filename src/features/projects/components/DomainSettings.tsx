"use client";

import React, { useState } from "react";
import { useAddCustomDomain, useVerifyCustomDomain, ProjectDetail } from "@/features/projects/api/hooks";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, CheckCircle2, Loader2, AlertCircle, RefreshCw } from "lucide-react";
import { toast } from "sonner";

export function DomainSettings({ project }: { project: ProjectDetail }) {
  const [domainInput, setDomainInput] = useState("");
  const addDomain = useAddCustomDomain();
  const { data: verification, isLoading: isVerifying, refetch } = useVerifyCustomDomain(project.slug);

  const handleAddDomain = async () => {
    if (!domainInput) return;
    try {
      await addDomain.mutateAsync({ slug: project.slug, domain: domainInput });
      toast.success("Custom domain added successfully!");
      setDomainInput("");
    } catch (e: any) {
      toast.error(e.response?.data?.error || "Failed to add domain.");
    }
  };

  const hasDomain = !!project.customDomain;

  return (
    <Card className="bg-zinc-950 border-white/10">
      <CardHeader className="border-b border-white/10 pb-4">
        <CardTitle className="text-lg text-white flex items-center gap-2">
          <Globe className="w-5 h-5 text-gray-400" />
          Custom Domain
        </CardTitle>
        <CardDescription className="text-gray-400">
          Connect a custom domain to your project.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6">
        {!hasDomain ? (
          <div className="flex gap-4">
            <input 
              type="text" 
              placeholder="example.com"
              value={domainInput}
              onChange={(e) => setDomainInput(e.target.value)}
              className="flex-1 bg-black border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <Button 
              onClick={handleAddDomain} 
              disabled={addDomain.isPending || !domainInput}
              className="bg-white text-black hover:bg-gray-200"
            >
              {addDomain.isPending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
              Add Domain
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium text-lg">{project.customDomain}</span>
              </div>
              <div className="flex items-center gap-3">
                {verification?.configured ? (
                  <span className="flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-xs font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Valid Configuration
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 px-2.5 py-1 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-full text-xs font-medium">
                    <AlertCircle className="w-3.5 h-3.5" /> Invalid Configuration
                  </span>
                )}
                
                <Button variant="ghost" size="icon" onClick={() => refetch()} className="text-gray-400 hover:text-white" disabled={isVerifying}>
                  <RefreshCw className={`w-4 h-4 ${isVerifying ? 'animate-spin' : ''}`} />
                </Button>
              </div>
            </div>

            {!verification?.configured && verification && (
              <div className="space-y-4">
                <div className="bg-black/50 border border-white/10 rounded-lg p-5">
                  <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-cyan-400" /> DNS Configuration
                  </h4>
                  <p className="text-sm text-gray-400 mb-4">
                    Set the following record on your DNS provider to continue:
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-300">
                      <thead className="text-xs text-gray-500 bg-white/5 uppercase border-b border-white/10">
                        <tr>
                          <th className="px-4 py-2 font-medium">Type</th>
                          <th className="px-4 py-2 font-medium">Name</th>
                          <th className="px-4 py-2 font-medium">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.customDomain!.split('.').length === 2 ? (
                          <tr className="border-b border-white/5">
                            <td className="px-4 py-3 font-mono">A</td>
                            <td className="px-4 py-3 font-mono">@</td>
                            <td className="px-4 py-3 font-mono">{process.env.NEXT_PUBLIC_PROXY_IP}</td>
                          </tr>
                        ) : (
                          <tr className="border-b border-white/5">
                            <td className="px-4 py-3 font-mono">CNAME</td>
                            <td className="px-4 py-3 font-mono">{project.customDomain!.split('.')[0]}</td>
                            <td className="px-4 py-3 font-mono">{process.env.NEXT_PUBLIC_PROXY_DOMAIN}</td>
                          </tr>
                        )}
                        {verification.sslStatus === "PENDING_VALIDATION" && verification.validationRecord && (
                          <tr>
                            <td className="px-4 py-3 font-mono">CNAME</td>
                            <td className="px-4 py-3 font-mono">{verification.validationRecord.name}</td>
                            <td className="px-4 py-3 font-mono">{verification.validationRecord.value}</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
