"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRepos, useBranches, useCreateProject, useDeployProject } from "@/features/projects/api/hooks";
import { toast } from "sonner";
import { Search, ChevronRight, CheckCircle2, GitBranch, Terminal, Globe, Server, ArrowLeft, Loader2 } from "lucide-react";
import { GithubIcon } from "hugeicons-react";

export default function ImportProjectPage() {
  const router = useRouter();
  const { data: repos, isLoading: loadingRepos } = useRepos();
  
  const createProject = useCreateProject();
  const deployProject = useDeployProject();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRepo, setSelectedRepo] = useState<any>(null);
  const [selectedBranch, setSelectedBranch] = useState("main");
  const [step, setStep] = useState<1 | 2>(1);

  // Configuration State
  const [name, setName] = useState("");
  const [type, setType] = useState<"STATIC" | "BACKEND">("STATIC");
  const [framework, setFramework] = useState("react");
  const [installCmd, setInstallCmd] = useState("npm install");
  const [buildCmd, setBuildCmd] = useState("npm run build");
  const [startCmd, setStartCmd] = useState("npm start");
  const [outDir, setOutDir] = useState("dist");

  // Fetch branches when a repo is selected
  const { data: branches, isLoading: loadingBranches } = useBranches(
    selectedRepo?.owner?.login || "",
    selectedRepo?.name || ""
  );

  useEffect(() => {
    if (selectedRepo) {
      setName(selectedRepo.name);
    }
  }, [selectedRepo]);

  // Handle auto-presets when type changes
  useEffect(() => {
    if (type === "STATIC") {
      setFramework("react");
      setBuildCmd("npm run build");
      setOutDir("dist");
    } else {
      setFramework("nodejs");
      setBuildCmd("");
      setStartCmd("npm start");
      setOutDir("");
    }
  }, [type]);

  const filteredRepos = repos?.filter((r: any) => 
    r.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const handleImport = async () => {
    if (!selectedRepo) return;
    
    const payload = {
      name,
      repoUrl: `https://github.com/${selectedRepo.fullName}.git`,
      type,
      branch: selectedBranch,
      framework,
      installCommand: installCmd,
      buildCommand: buildCmd || undefined,
      startCommand: type === "BACKEND" ? startCmd : undefined,
      outputDirectory: type === "STATIC" ? outDir : undefined,
      rootDirectory: "/",
      baseImage: "node:22-alpine",
    };

    const loadingToast = toast.loading("Importing repository...");

    try {
      const res = await createProject.mutateAsync(payload);
      const projectId = res.project?.id || res.id;
      
      toast.loading("Queuing initial deployment...", { id: loadingToast });
      
      await deployProject.mutateAsync(projectId);
      toast.success("Project imported & deployment started!", { id: loadingToast });
      
      router.push(`/dashboard/${res.project?.slug || res.slug}`);
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Failed to import project", { id: loadingToast });
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white tracking-tight">Let's build something new.</h1>
        <p className="text-gray-400 mt-2">Import an existing Git Repository to deploy automatically.</p>
      </div>

      {step === 1 && (
        <div className="bg-zinc-950/50 border border-white/10 rounded-xl overflow-hidden backdrop-blur-xl">
          <div className="p-4 border-b border-white/10 flex items-center gap-4 bg-zinc-950/80">
            <GithubIcon className="w-6 h-6 text-white" />
            <div className="flex-1 relative">
              <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search your repositories..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black border border-white/10 rounded-md pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>
          </div>

          <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
            {loadingRepos ? (
              // Skeleton Loaders
              Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="p-4 border-b border-white/5 flex items-center justify-between animate-pulse">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-white/10 rounded w-32"></div>
                      <div className="h-3 bg-white/5 rounded w-24"></div>
                    </div>
                  </div>
                  <div className="w-20 h-8 bg-white/10 rounded-md"></div>
                </div>
              ))
            ) : filteredRepos.length > 0 ? (
              filteredRepos.map((repo: any) => (
                <div key={repo.id} className="p-4 border-b border-white/5 flex items-center justify-between hover:bg-white/5 transition-colors group">
                  <div className="flex items-center gap-4">
                    <img src={repo.owner.avatar} alt="Owner" className="w-8 h-8 rounded-full border border-white/10" />
                    <div>
                      <h3 className="text-white font-medium group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                        {repo.fullName}
                        {repo.private && <span className="text-[10px] px-1.5 py-0.5 rounded border border-white/20 text-gray-400 bg-white/5">Private</span>}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">Updated recently</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => { setSelectedRepo(repo); setStep(2); }}
                    className="px-4 py-1.5 bg-white text-black text-sm font-medium rounded-md hover:bg-gray-200 transition-colors flex items-center gap-2"
                  >
                    Import
                  </button>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">
                No repositories found matching your search.
              </div>
            )}
          </div>
        </div>
      )}

      {step === 2 && selectedRepo && (
        <div className="animate-in fade-in slide-in-from-right-4 duration-300">
          <button 
            onClick={() => setStep(1)}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Repositories
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              
              <div className="bg-zinc-950/50 border border-white/10 rounded-xl p-6 backdrop-blur-xl">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-cyan-400" /> Configure Project
                </h2>
                
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Project Name</label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-black border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div 
                      onClick={() => setType("STATIC")}
                      className={`cursor-pointer border rounded-lg p-4 transition-all duration-200 ${type === "STATIC" ? "border-cyan-500 bg-cyan-500/10" : "border-white/10 bg-black/50 hover:bg-white/5"}`}
                    >
                      <Globe className={`w-6 h-6 mb-2 ${type === "STATIC" ? "text-cyan-400" : "text-gray-500"}`} />
                      <h4 className="font-semibold text-white">Static Site</h4>
                      <p className="text-xs text-gray-400 mt-1">React, Next.js, Vue, etc.</p>
                    </div>
                    <div 
                      onClick={() => setType("BACKEND")}
                      className={`cursor-pointer border rounded-lg p-4 transition-all duration-200 ${type === "BACKEND" ? "border-cyan-500 bg-cyan-500/10" : "border-white/10 bg-black/50 hover:bg-white/5"}`}
                    >
                      <Server className={`w-6 h-6 mb-2 ${type === "BACKEND" ? "text-cyan-400" : "text-gray-500"}`} />
                      <h4 className="font-semibold text-white">Web Service</h4>
                      <p className="text-xs text-gray-400 mt-1">Node.js APIs & Backends</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Production Branch</label>
                    <div className="relative">
                      {loadingBranches ? (
                        <div className="w-full bg-black border border-white/10 rounded-md px-3 py-2 h-[38px] flex items-center">
                          <div className="w-4 h-4 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
                        </div>
                      ) : (
                        <select 
                          value={selectedBranch}
                          onChange={(e) => setSelectedBranch(e.target.value)}
                          className="w-full bg-black border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none"
                        >
                          {branches?.map((b: any) => (
                            <option key={b.name} value={b.name}>{b.name}</option>
                          ))}
                        </select>
                      )}
                      {!loadingBranches && <GitBranch className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h3 className="text-sm font-semibold text-white mb-4">Build Settings</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Install Command</label>
                        <input 
                          type="text" 
                          value={installCmd}
                          onChange={(e) => setInstallCmd(e.target.value)}
                          className="w-full bg-black border border-white/10 rounded-md px-3 py-1.5 text-sm font-mono text-gray-300 focus:outline-none focus:border-cyan-500"
                        />
                      </div>
                      
                      {type === "STATIC" ? (
                        <>
                          <div>
                            <label className="block text-xs text-gray-400 mb-1">Build Command</label>
                            <input 
                              type="text" 
                              value={buildCmd}
                              onChange={(e) => setBuildCmd(e.target.value)}
                              className="w-full bg-black border border-white/10 rounded-md px-3 py-1.5 text-sm font-mono text-gray-300 focus:outline-none focus:border-cyan-500"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-gray-400 mb-1">Output Directory</label>
                            <input 
                              type="text" 
                              value={outDir}
                              onChange={(e) => setOutDir(e.target.value)}
                              className="w-full bg-black border border-white/10 rounded-md px-3 py-1.5 text-sm font-mono text-gray-300 focus:outline-none focus:border-cyan-500"
                            />
                          </div>
                        </>
                      ) : (
                        <div>
                          <label className="block text-xs text-gray-400 mb-1">Start Command</label>
                          <input 
                            type="text" 
                            value={startCmd}
                            onChange={(e) => setStartCmd(e.target.value)}
                            className="w-full bg-black border border-white/10 rounded-md px-3 py-1.5 text-sm font-mono text-gray-300 focus:outline-none focus:border-cyan-500"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-zinc-950/80 border border-white/10 rounded-xl p-5 sticky top-24">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
                  <img src={selectedRepo.owner.avatar} alt="Owner" className="w-10 h-10 rounded-md border border-white/20" />
                  <div>
                    <p className="text-xs text-gray-400">{selectedRepo.owner.login}</p>
                    <p className="text-sm font-semibold text-white truncate max-w-[150px]">{selectedRepo.name}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 text-sm text-gray-400 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Automatic CI/CD pipeline</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Free SSL Certificates</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Global Edge Network</li>
                </ul>
                
                <button 
                  onClick={handleImport}
                  disabled={createProject.isPending || deployProject.isPending}
                  className="w-full bg-white text-black font-semibold py-2.5 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {(createProject.isPending || deployProject.isPending) ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                  Deploy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
