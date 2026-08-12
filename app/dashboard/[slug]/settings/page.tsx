"use client";

import React, { use, useState, useEffect } from "react";
import { useProject, useDeleteProject, useUpdateProject, useDeployProject } from "@/features/projects/api/hooks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Trash2, Rocket, Save, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SettingsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { data: project, isLoading } = useProject(slug);
  const deleteProject = useDeleteProject();
  const updateProject = useUpdateProject();
  const deployProject = useDeployProject();
  const router = useRouter();

  const [deleteConfirmation, setDeleteConfirmation] = useState("");
  const isDeleteEnabled = deleteConfirmation === "delete my project";

  // Form State
  const [formData, setFormData] = useState({
    repoUrl: "",
    type: "STATIC",
    branch: "main",
    framework: "",
    baseImage: "",
    rootDirectory: "",
    outDirectory: "",
    installCommand: "",
    buildCommand: "",
    startCommand: "",
  });

  useEffect(() => {
    if (project) {
      setFormData({
        repoUrl: project.repoUrl || "",
        type: project.type || "STATIC",
        branch: project.branch || "main",
        framework: project.framework || "",
        baseImage: project.baseImage || "",
        rootDirectory: project.rootDirectory || "",
        outDirectory: project.outDirectory || "",
        installCommand: project.installCommand || "",
        buildCommand: project.buildCommand || "",
        startCommand: project.startCommand || "",
      });
    }
  }, [project]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (!project) return;
    const toastId = toast.loading("Saving changes...");
    try {
      const payload = {
        name: project.name,
        repoUrl: formData.repoUrl,
        type: formData.type,
        branch: formData.branch,
        framework: formData.framework,
        baseImage: formData.baseImage,
        rootDirectory: formData.rootDirectory,
        outputDirectory: formData.outDirectory,
        installCommand: formData.installCommand,
        buildCommand: formData.buildCommand,
        startCommand: formData.startCommand,
      };

      await updateProject.mutateAsync({ slug, data: payload });
      toast.success("Settings updated successfully", { id: toastId });
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to update project", { id: toastId });
    }
  };

  const handleDeploy = async () => {
    if (!project) return;
    try {
      await deployProject.mutateAsync(project.id);
      router.push(`/dashboard/${slug}/deployments`);
    } catch (error) {
      // toast is handled in the hook
    }
  };

  const handleDelete = async () => {
    if (!isDeleteEnabled) return;
    try {
      await deleteProject.mutateAsync(slug);
      toast.success("Project deleted successfully");
      router.push("/dashboard");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to delete project");
    }
  };

  if (isLoading) {
    return <div className="animate-pulse h-64 bg-white/5 rounded-xl border border-white/10" />;
  }

  if (!project) return null;

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white mb-2">Project Settings</h1>
          <p className="text-sm text-gray-400">
            Manage configuration and advanced settings for {project.name}.
          </p>
        </div>
        <div className="flex gap-3">
          <Button 
            onClick={handleSave} 
            disabled={updateProject.isPending}
            className="bg-white text-black hover:bg-gray-200"
          >
            <Save className="w-4 h-4 mr-2" />
            {updateProject.isPending ? "Saving..." : "Save Changes"}
          </Button>
          <Button 
            onClick={handleDeploy}
            disabled={deployProject.isPending}
            className="bg-cyan-600 hover:bg-cyan-700 text-white"
          >
            <Rocket className="w-4 h-4 mr-2" />
            {deployProject.isPending ? "Triggering..." : "Deploy Now"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* General Settings Card */}
        <Card className="bg-zinc-950 border-white/10 h-max">
          <CardHeader className="border-b border-white/10 pb-4">
            <CardTitle className="text-lg text-white flex items-center gap-2">
              <Settings className="w-5 h-5 text-gray-400" />
              General Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Project Name</label>
              <input 
                type="text" 
                defaultValue={project.name}
                disabled
                className="w-full bg-black border border-white/10 rounded-md px-3 py-2 text-sm text-gray-500 opacity-70 cursor-not-allowed"
              />
              <p className="text-xs text-gray-500 mt-1">Project name dictates the URL slug and cannot be changed.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Repository URL</label>
              <input 
                type="text" 
                name="repoUrl"
                value={formData.repoUrl}
                onChange={handleChange}
                className="w-full bg-black border border-white/10 rounded-md px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Branch</label>
              <input 
                type="text" 
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="w-full bg-black border border-white/10 rounded-md px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Project Type</label>
              <select 
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full bg-black border border-white/10 rounded-md px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-cyan-500 transition-colors"
              >
                <option value="STATIC">Static Site (Frontend)</option>
                <option value="BACKEND">Backend / API (Docker)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Framework (Optional)</label>
              <input 
                type="text" 
                name="framework"
                value={formData.framework}
                onChange={handleChange}
                placeholder="e.g. Next.js, React, Node.js"
                className="w-full bg-black border border-white/10 rounded-md px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Base Image (Optional)</label>
              <input 
                type="text" 
                name="baseImage"
                value={formData.baseImage}
                onChange={handleChange}
                placeholder="e.g. node:22-alpine"
                className="w-full bg-black border border-white/10 rounded-md px-3 py-2 text-sm font-mono text-gray-200 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <p className="text-xs text-gray-500 mt-1">Docker image used to build (and run) your project.</p>
            </div>
          </CardContent>
        </Card>

        {/* Build Settings Card */}
        <Card className="bg-zinc-950 border-white/10 h-max">
          <CardHeader className="border-b border-white/10 pb-4">
            <CardTitle className="text-lg text-white flex items-center gap-2">
              <Wrench className="w-5 h-5 text-gray-400" />
              Build & Output Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Root Directory</label>
              <input 
                type="text" 
                name="rootDirectory"
                value={formData.rootDirectory}
                onChange={handleChange}
                placeholder="e.g. / or /apps/web"
                className="w-full bg-black border border-white/10 rounded-md px-3 py-2 text-sm font-mono text-gray-200 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Output Directory (Static only)</label>
              <input 
                type="text" 
                name="outDirectory"
                value={formData.outDirectory}
                onChange={handleChange}
                placeholder="e.g. dist, out, build"
                className="w-full bg-black border border-white/10 rounded-md px-3 py-2 text-sm font-mono text-gray-200 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Install Command</label>
              <input 
                type="text" 
                name="installCommand"
                value={formData.installCommand}
                onChange={handleChange}
                placeholder="e.g. npm install"
                className="w-full bg-black border border-white/10 rounded-md px-3 py-2 text-sm font-mono text-gray-200 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Build Command</label>
              <input 
                type="text" 
                name="buildCommand"
                value={formData.buildCommand}
                onChange={handleChange}
                placeholder="e.g. npm run build"
                className="w-full bg-black border border-white/10 rounded-md px-3 py-2 text-sm font-mono text-gray-200 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Start Command (Backend only)</label>
              <input 
                type="text" 
                name="startCommand"
                value={formData.startCommand}
                onChange={handleChange}
                placeholder="e.g. npm start"
                className="w-full bg-black border border-white/10 rounded-md px-3 py-2 text-sm font-mono text-gray-200 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-red-950/20 border-red-900/50">
        <CardHeader className="border-b border-red-900/30 pb-4">
          <CardTitle className="text-lg text-red-500 flex items-center gap-2">
            Danger Zone
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex-1 w-full">
              <h4 className="text-sm font-medium text-white">Delete Project</h4>
              <p className="text-xs text-gray-400 mt-1 mb-3">This action cannot be undone. This will permanently delete the project and all its deployments.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder='Type "delete my project" to confirm'
                  value={deleteConfirmation}
                  onChange={(e) => setDeleteConfirmation(e.target.value)}
                  className="bg-black border border-white/10 rounded-md px-3 py-1.5 text-sm text-white focus:outline-none focus:border-red-500 w-full sm:max-w-xs"
                />
                <Button 
                  variant="destructive" 
                  className="bg-red-600 hover:bg-red-700 shrink-0"
                  disabled={!isDeleteEnabled || deleteProject.isPending}
                  onClick={handleDelete}
                >
                  <Trash2 className="w-4 h-4 mr-2" /> 
                  {deleteProject.isPending ? "Deleting..." : "Delete Project"}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
