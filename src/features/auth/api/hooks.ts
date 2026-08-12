import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/client";

export interface User {
  id: string;
  email: string;
  name?: string | null;
  username?: string | null;
  avatar?: string | null;
  githubInstallationId?: string | null;
}

export function useCurrentUser() {
  return useQuery<User>({
    queryKey: ["currentUser"],
    queryFn: async () => {
      const response = await apiClient.get("/auth/me");
      return response.data;
    },
    staleTime: 0,
    gcTime: 0,
  });
}
