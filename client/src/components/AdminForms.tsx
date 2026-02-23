import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertStorySchema, insertPageSchema, type StoryWithPages, type Page } from "@shared/schema";
import { useCreateStory, useUpdateStory, useCreatePage, useUpdatePage, useDeletePage } from "@/hooks/use-stories";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Loader2, Plus, Trash2, Image as ImageIcon } from "lucide-react";
import { z } from "zod";

// ==========================================
// STORY FORM
// ==========================================

interface StoryFormProps {
  story?: StoryWithPages;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function StoryForm({ story, open, onOpenChange }: StoryFormProps) {
  const createStory = useCreateStory();
  const updateStory = useUpdateStory();
  
  const isEditing = !!story;
  const isPending = createStory.isPending || updateStory.isPending;

  const form = useForm({
    resolver: zodResolver(insertStorySchema),
    defaultValues: {
      title: "",
      description: "",
      coverImage: "",
    },
  });

  // Reset form when opening/closing or changing story
  useEffect(() => {
    if (open) {
      form.reset({
        title: story?.title || "",
        description: story?.description || "",
        coverImage: story?.coverImage || "",
      });
    }
  }, [open, story, form]);

  const onSubmit = async (data: z.infer<typeof insertStorySchema>) => {
    try {
      if (isEditing && story) {
        await updateStory.mutateAsync({ id: story.id, ...data });
      } else {
        await createStory.mutateAsync(data);
      }
      onOpenChange(false);
      form.reset();
    } catch (error) {
      console.error("Failed to save story:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white/95 backdrop-blur-sm border-2 border-primary/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary font-display">
            {isEditing ? "Editar História" : "Criar Nova História"}
          </DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-foreground">Título da História</FormLabel>
                  <FormControl>
                    <Input placeholder="A Aventura Mágica..." {...field} className="rounded-xl border-2 focus-visible:ring-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-foreground">Descrição</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Sobre o que é essa história?" 
                      className="resize-none rounded-xl border-2 focus-visible:ring-primary min-h-[100px]" 
                      {...field} 
                      value={field.value || ""} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="coverImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-foreground">URL da Imagem de Capa</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <ImageIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="/images/capa_01.png ou URL externa..." 
                        {...field} 
                        value={field.value || ""} 
                        className="pl-9 rounded-xl border-2 focus-visible:ring-primary" 
                      />
                    </div>
                  </FormControl>
                  <p className="text-xs text-muted-foreground">Use o caminho local /images/capa_XX.png ou uma URL externa</p>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full h-12 text-lg rounded-xl font-bold"
              disabled={isPending}
            >
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isEditing ? "Salvar Alterações" : "Criar História"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

// ==========================================
// PAGE FORM
// ==========================================

interface PageFormProps {
  storyId: number;
  page?: Page;
  pageNumber: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PageForm({ storyId, page, pageNumber, open, onOpenChange }: PageFormProps) {
  const createPage = useCreatePage();
  const updatePage = useUpdatePage();
  
  const isEditing = !!page;
  const isPending = createPage.isPending || updatePage.isPending;

  const form = useForm({
    resolver: zodResolver(insertPageSchema.omit({ storyId: true })),
    defaultValues: {
      pageNumber,
      content: "",
      imageUrl: "",
      isFinalDrawing: 0,
    },
  });

  useEffect(() => {
    if (open) {
      form.reset({
        pageNumber: page?.pageNumber ?? pageNumber,
        content: page?.content || "",
        imageUrl: page?.imageUrl || "",
        isFinalDrawing: page?.isFinalDrawing || 0,
      });
    }
  }, [open, page, pageNumber, form]);

  const onSubmit = async (data: any) => {
    try {
      if (isEditing && page) {
        await updatePage.mutateAsync({ id: page.id, storyId, ...data });
      } else {
        await createPage.mutateAsync({ storyId, ...data });
      }
      onOpenChange(false);
      form.reset();
    } catch (error) {
      console.error("Failed to save page:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-white/95 backdrop-blur-sm border-2 border-secondary/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-secondary font-display">
            {isEditing ? `Editar Página ${page?.pageNumber}` : `Adicionar Página ${pageNumber}`}
          </DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="pageNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Número da Página</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        {...field} 
                        onChange={e => field.onChange(parseInt(e.target.value))}
                        className="rounded-xl border-2 focus-visible:ring-secondary" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="isFinalDrawing"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">É Desenho Final?</FormLabel>
                    <FormControl>
                      <select 
                        className="flex h-10 w-full rounded-xl border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                        value={field.value}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      >
                        <option value={0}>Não (Página Normal)</option>
                        <option value={1}>Sim (Desenho do Benjamin)</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Texto da História</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Era uma vez..." 
                      className="resize-none rounded-xl border-2 focus-visible:ring-secondary min-h-[150px] font-story text-lg" 
                      {...field} 
                      value={field.value || ""} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">URL da Imagem</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <ImageIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="/images/capa_01.png ou URL externa..." 
                        {...field} 
                        value={field.value || ""} 
                        className="pl-9 rounded-xl border-2 focus-visible:ring-secondary" 
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full h-12 text-lg rounded-xl font-bold bg-secondary hover:bg-secondary/90"
              disabled={isPending}
            >
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isEditing ? "Salvar Página" : "Adicionar Página"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
