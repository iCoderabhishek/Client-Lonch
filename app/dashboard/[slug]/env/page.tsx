"use client";

import React, { useState, useEffect, use } from "react";
import { useProject, useUpdateProject } from "@/features/projects/api/hooks";
import { toast } from "sonner";
import { Terminal, Copy, Info, Variable, CheckCircle2, X, KeyRound, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EnvVarsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { data: project, isLoading } = useProject(slug);
  const updateMutation = useUpdateProject();

  const [envVars, setEnvVars] = useState<{ key: string; value: string; id?: string }[]>([]);
  const [pastedContent, setPastedContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Initialize from project data
  useEffect(() => {
    if (project?.envVars) {
      // Create a local copy, masking the value string since the backend didn't send it anyway
      setEnvVars(
        project.envVars.map((e: any) => ({
          key: e.key,
          value: "••••••••", // Display masked value by default
          id: e.id,
        }))
      );
    }
  }, [project]);

  const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = 'clipboardData' in e ? e.clipboardData.getData("text") : e.target.value;
    setPastedContent(text);
    
    // Simple .env parser
    const lines = text.split("\n");
    const parsed: { key: string; value: string }[] = [];
    
    lines.forEach((line) => {
      line = line.trim();
      if (!line || line.startsWith("#")) return; // skip empty or comments
      
      const delimiterIndex = line.indexOf("=");
      if (delimiterIndex > -1) {
        let key = line.substring(0, delimiterIndex).trim();
        let value = line.substring(delimiterIndex + 1).trim();
        
        // Remove quotes if present
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.substring(1, value.length - 1);
        }
        
        if (key) {
          parsed.push({ key, value });
        }
      }
    });

    if (parsed.length > 0) {
      setEnvVars([...envVars, ...parsed]);
      setPastedContent("");
      setIsEditing(true);
      toast.success(`Parsed ${parsed.length} environment variables from text.`);
    }
  };

  const handleEnvPaste = (e: React.ClipboardEvent<HTMLInputElement>, index: number, isKeyField: boolean) => {
    const text = e.clipboardData.getData("text");
    
    if (!text.includes("\n") && !isKeyField) return;
    if (!text.includes("\n") && !text.includes("=")) return;

    const lines = text.split("\n");
    const parsed: { key: string; value: string; id?: string }[] = [];
    
    lines.forEach((line) => {
      line = line.trim();
      if (!line || line.startsWith("#") || line.startsWith("//")) return;
      
      const delimiterIndex = line.indexOf("=");
      if (delimiterIndex > -1) {
        let key = line.substring(0, delimiterIndex).trim();
        let value = line.substring(delimiterIndex + 1).trim();
        
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.substring(1, value.length - 1);
        }
        
        if (key) {
          parsed.push({ key, value });
        }
      }
    });

    if (parsed.length > 0) {
      e.preventDefault();
      
      const newEnvVars = [...envVars];
      const current = newEnvVars[index];
      
      if (!current.key && (!current.value || current.value === "••••••••" || current.value === "")) {
        newEnvVars.splice(index, 1, ...parsed);
      } else {
        newEnvVars.splice(index + 1, 0, ...parsed);
      }
      
      setEnvVars(newEnvVars);
      setIsEditing(true);
      toast.success(`Parsed ${parsed.length} environment variables from paste.`);
    }
  };

  const handleUpdate = (index: number, field: "key" | "value", val: string) => {
    const newVars = [...envVars];
    newVars[index][field] = val;
    setEnvVars(newVars);
    setIsEditing(true);
  };

  const handleRemove = (index: number) => {
    const newVars = [...envVars];
    newVars.splice(index, 1);
    setEnvVars(newVars);
    setIsEditing(true);
  };

  const handleAddEmpty = () => {
    setEnvVars([...envVars, { key: "", value: "" }]);
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!project) return;
    
    // Filter out empties
    const validVars = envVars.filter(e => e.key.trim() !== "");
    
    const payload = {
      name: project.name,
      repoUrl: project.repoUrl,
      type: project.type,
      framework: project.framework,
      buildCommand: project.buildCommand,
      installCommand: project.installCommand,
      startCommand: project.startCommand,
      outputDirectory: project.outDirectory,
      rootDirectory: project.rootDirectory,
      branch: project.branch,
      envVars: validVars,
    };

    const toastId = toast.loading("Saving environment variables...");
    
    try {
      await updateMutation.mutateAsync({ slug, data: payload });
      toast.success("Environment variables saved successfully. They will be applied on the next deployment.", { id: toastId });
      setIsEditing(false);
      
      // Mask values again after save for security
      setEnvVars(validVars.map(v => ({ key: v.key, value: "••••••••" })));
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Failed to save variables", { id: toastId });
    }
  };

  if (isLoading) {
    return <div className="animate-pulse h-64 bg-white/5 rounded-xl border border-white/10" />;
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white mb-2">Environment Variables</h1>
          <p className="text-sm text-gray-400">
            Manage your project's environment variables. Secrets are encrypted and securely injected at runtime.
          </p>
        </div>
        <Button 
          onClick={handleSave}
          disabled={!isEditing || updateMutation.isPending}
          className="bg-white text-black hover:bg-gray-200"
        >
          {updateMutation.isPending ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4 flex gap-4">
        <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
        <div className="text-sm text-cyan-100">
          <p className="font-medium text-cyan-50 mb-1">Secure Variable Storage</p>
          <p className="opacity-90 leading-relaxed">
            Variables are permanently masked once saved. If you need to change a value, you must provide the new value entirely. The platform will never expose the raw secrets back to the browser.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-zinc-950 border border-white/10 rounded-xl overflow-hidden shadow-xl shadow-black/50">
          <div className="p-4 border-b border-white/10 bg-black/50 flex justify-between items-center">
            <div>
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <Variable className="w-4 h-4 text-cyan-400" /> Key Value Pairs
              </h3>
              <p className="text-xs text-gray-500 mt-1 ml-6">Add variables one by one or paste your entire .env contents into any input.</p>
            </div>
            <Button variant="ghost" size="sm" onClick={handleAddEmpty} className="h-8 text-xs bg-white/5 hover:bg-white/10">
              Add Row
            </Button>
          </div>
          
          <div className="p-4 space-y-4 bg-black/20">
            {envVars.length === 0 ? (
              <div className="py-16 flex flex-col items-center justify-center text-center border border-dashed border-white/10 rounded-xl bg-black/40 backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 border border-white/10 shadow-lg">
                  <KeyRound className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">No variables configured</h3>
                <p className="text-gray-400 mb-6 text-sm max-w-sm">
                  Add environment variables to safely inject secrets or configuration into your deployments.
                </p>
                <Button onClick={handleAddEmpty} variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10">
                  <Plus className="w-4 h-4 mr-2" /> Add First Variable
                </Button>
              </div>
            ) : (
              envVars.map((env, i) => (
                <div key={i} className="flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                  <div className="flex-1">
                    <input 
                      type="text" 
                      placeholder="KEY (e.g. DATABASE_URL)"
                      value={env.key}
                      onChange={(e) => handleUpdate(i, "key", e.target.value)}
                      onPaste={(e) => handleEnvPaste(e, i, true)}
                      className="w-full bg-black border border-white/10 rounded-md px-3 py-2 text-sm font-mono text-cyan-300 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div className="flex-1">
                    <input 
                      type="text" 
                      placeholder="VALUE"
                      value={env.value}
                      onChange={(e) => handleUpdate(i, "value", e.target.value)}
                      onFocus={(e) => {
                        // If it's the masked value, clear it when they click to edit
                        if (e.target.value === "••••••••") {
                          handleUpdate(i, "value", "");
                        }
                      }}
                      onPaste={(e) => handleEnvPaste(e, i, false)}
                      className="w-full bg-black border border-white/10 rounded-md px-3 py-2 text-sm font-mono text-gray-300 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <button 
                    onClick={() => handleRemove(i)}
                    className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-md transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-xl overflow-hidden shadow-xl shadow-black/50">
          <div className="p-4 border-b border-white/10 bg-black/50">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <Terminal className="w-4 h-4 text-gray-400" /> Paste .env File
            </h3>
            <p className="text-xs text-gray-500 mt-1">Paste your entire .env contents here to auto-fill the rows above.</p>
          </div>
          <div className="p-4">
            <textarea
              value={pastedContent}
              onChange={handlePaste}
              placeholder="DATABASE_URL=postgres://...\nNEXT_PUBLIC_API_KEY=123..."
              className="w-full h-32 bg-black border border-white/10 rounded-md p-3 text-sm font-mono text-gray-300 focus:outline-none focus:border-cyan-500 transition-colors resize-none placeholder:text-gray-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
