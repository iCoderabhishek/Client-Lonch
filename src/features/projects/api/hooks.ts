import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/client";
import { toast } from "sonner";

export interface Project {
  id: string;
  name: string;
  slug: string;
  type: "STATIC" | "BACKEND";
  branch: string;
  framework?: string;
  disabled: boolean;
  createdAt: string;
  updatedAt: string;
  repoUrl: string;
  buildCommand?: string;
  installCommand?: string;
  startCommand?: string;
  rootDirectory?: string;
  outDirectory?: string;
  maxMemory?: number;
  maxCpu?: number;
  port?: number;
  customDomain?: string | null;
}

export interface Deployment {
  id: string;
  status: "QUEUED" | "BUILDING" | "SUCCESS" | "FAILED" | "CANCELLED" | "PUSHING" | "DEPLOYING";
  createdAt: string;
  updatedAt: string;
  url?: string;
}

export interface EnvVar {
  id: string;
  key: string;
  value: string;
}

export interface ProjectDetail extends Project {
  deployments: Deployment[];
  envVars: EnvVar[];
}

export function useProjects() {
  return useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await apiClient.get("/projects");
      return response.data.projects;
    },
    staleTime: 0,
    gcTime: 0,
  });
}

export function useProject(slug: string) {
  return useQuery<ProjectDetail>({
    queryKey: ["projects", slug],
    queryFn: async () => {
      const response = await apiClient.get(`/projects/${slug}`);
      return response.data.project;
    },
    enabled: !!slug,
    staleTime: 0,
    gcTime: 0,
    refetchInterval: (query) => {
      const project = query.state.data;
      const latestDeployment = project?.deployments?.[0];
      const isDeploying = latestDeployment?.status === "QUEUED" || 
                          latestDeployment?.status === "BUILDING" || 
                          latestDeployment?.status === "PUSHING" || 
                          latestDeployment?.status === "DEPLOYING";
      return isDeploying ? 3000 : false;
    },
  });
}

export function useCreateProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await apiClient.post("/projects", data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
}

export function useDeployProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (projectId: string) => {
      const response = await apiClient.post("/deploy", { projectId });
      return response.data;
    },
    onSuccess: (_, projectId) => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast.success("Deployment triggered successfully!");
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message || "Failed to trigger deployment");
    }
  });
}

export function useDeleteProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (slug: string) => {
      const response = await apiClient.delete(`/projects/${slug}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
}

export function useRollbackProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (deploymentId: string) => {
      const response = await apiClient.post(`/deploy/${deploymentId}/rollback`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
}

export function useRollbackEligibility(slug: string) {
  return useQuery({
    queryKey: ["projects", slug, "rollback-eligibility"],
    queryFn: async () => {
      const response = await apiClient.get(`/projects/${slug}/rollback-eligibility`);
      return response.data;
    },
    enabled: !!slug,
    staleTime: 0,
    gcTime: 0,
  });
}

export function useUpdateProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ slug, data }: { slug: string; data: any }) => {
      const response = await apiClient.put(`/projects/${slug}`, data);
      return response.data;
    },
    onSuccess: (_, { slug }) => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({ queryKey: ["projects", slug] });
    },
  });
}

export function useAddCustomDomain() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ slug, domain }: { slug: string; domain: string }) => {
      const response = await apiClient.post(`/projects/${slug}/domain`, { domain });
      return response.data;
    },
    onSuccess: (_, { slug }) => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({ queryKey: ["projects", slug] });
    },
  });
}

export function useVerifyCustomDomain(slug: string) {
  return useQuery({
    queryKey: ["projects", slug, "domain-verify"],
    queryFn: async () => {
      const response = await apiClient.get(`/projects/${slug}/domain/verify`);
      return response.data;
    },
    enabled: !!slug,
    refetchInterval: (query) => {
      // Poll every 5 seconds if not yet configured
      return query.state.data?.configured ? false : 5000;
    },
  });
}

// GitHub API Hooks
export function useRepos() {
  return useQuery({
    queryKey: ["github", "repos"],
    queryFn: async () => {
      const response = await apiClient.get("/github/repos");
      return response.data.repos;
    },
    staleTime: 5 * 60 * 1000,
  });
}

export function useBranches(owner: string, repo: string) {
  return useQuery({
    queryKey: ["github", "repos", owner, repo, "branches"],
    queryFn: async () => {
      const response = await apiClient.get(`/github/repos/${owner}/${repo}/branches`);
      return response.data.branches;
    },
    enabled: !!owner && !!repo,
    staleTime: 5 * 60 * 1000,
  });
}

export function useCommits(owner: string, repo: string, branch: string = "main") {
  return useQuery({
    queryKey: ["github", "repos", owner, repo, "commits", branch],
    queryFn: async () => {
      const response = await apiClient.get(`/github/repos/${owner}/${repo}/commits?branch=${branch}`);
      return response.data.commits;
    },
    enabled: !!owner && !!repo && !!branch,
    staleTime: 60 * 1000,
  });
}
