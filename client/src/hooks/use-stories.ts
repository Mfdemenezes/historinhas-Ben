import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import type { 
  InsertStory, 
  InsertPage, 
  StoryWithPages, 
  Page 
} from "@shared/schema";

// ==========================================
// STORIES
// ==========================================

export function useStories() {
  return useQuery({
    queryKey: [api.stories.list.path],
    queryFn: async () => {
      const res = await fetch(api.stories.list.path);
      if (!res.ok) throw new Error("Failed to fetch stories");
      return await res.json() as StoryWithPages[];
    },
  });
}

export function useStory(id: number) {
  return useQuery({
    queryKey: [api.stories.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.stories.get.path, { id });
      const res = await fetch(url);
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch story");
      return await res.json() as StoryWithPages;
    },
    enabled: !!id,
  });
}

export function useCreateStory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: InsertStory) => {
      const res = await fetch(api.stories.create.path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to create story");
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.stories.list.path] });
    },
  });
}

export function useUpdateStory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...data }: { id: number } & Partial<InsertStory>) => {
      const url = buildUrl(api.stories.update.path, { id });
      const res = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to update story");
      return await res.json();
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [api.stories.list.path] });
      queryClient.invalidateQueries({ queryKey: [api.stories.get.path, variables.id] });
    },
  });
}

export function useDeleteStory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      const url = buildUrl(api.stories.delete.path, { id });
      const res = await fetch(url, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete story");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.stories.list.path] });
    },
  });
}

// ==========================================
// PAGES
// ==========================================

export function useCreatePage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ storyId, ...data }: InsertPage) => {
      // Note: The API route uses :storyId in the path
      const url = `/api/stories/${storyId}/pages`; 
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to add page");
      return await res.json();
    },
    onSuccess: (_, variables) => {
      // Invalidate the specific story to refresh its pages list
      queryClient.invalidateQueries({ queryKey: [api.stories.get.path, variables.storyId] });
      queryClient.invalidateQueries({ queryKey: [api.stories.list.path] });
    },
  });
}

export function useUpdatePage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, storyId, ...data }: { id: number, storyId: number } & Partial<InsertPage>) => {
      // Note: The API route for update is /api/pages/:id
      const url = `/api/pages/${id}`;
      const res = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to update page");
      return await res.json();
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [api.stories.get.path, variables.storyId] });
      queryClient.invalidateQueries({ queryKey: [api.stories.list.path] });
    },
  });
}

export function useDeletePage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, storyId }: { id: number, storyId: number }) => {
      const url = `/api/pages/${id}`;
      const res = await fetch(url, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete page");
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [api.stories.get.path, variables.storyId] });
      queryClient.invalidateQueries({ queryKey: [api.stories.list.path] });
    },
  });
}
