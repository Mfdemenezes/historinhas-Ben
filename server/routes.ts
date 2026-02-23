import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // -- Stories --
  
  app.get(api.stories.list.path, async (req, res) => {
    try {
      const allStories = await storage.getStories();
      res.json(allStories);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to fetch stories" });
    }
  });

  app.get(api.stories.get.path, async (req, res) => {
    try {
      const story = await storage.getStory(Number(req.params.id));
      if (!story) {
        return res.status(404).json({ message: "Story not found" });
      }
      res.json(story);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to fetch story" });
    }
  });

  app.post(api.stories.create.path, async (req, res) => {
    try {
      const input = api.stories.create.input.parse(req.body);
      const story = await storage.createStory(input);
      res.status(201).json(story);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  app.put(api.stories.update.path, async (req, res) => {
    try {
      const input = api.stories.update.input.parse(req.body);
      const story = await storage.updateStory(Number(req.params.id), input);
      if (!story) {
         return res.status(404).json({ message: "Story not found" });
      }
      res.json(story);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  app.delete(api.stories.delete.path, async (req, res) => {
    try {
      await storage.deleteStory(Number(req.params.id));
      res.status(204).send();
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to delete story" });
    }
  });

  // -- Pages --

  app.post(api.pages.create.path, async (req, res) => {
    try {
      // Create schema that coerces pageNumber to number to be safe
      const schema = api.pages.create.input.extend({
        pageNumber: z.coerce.number(),
        isFinalDrawing: z.coerce.number().optional().default(0)
      });
      const input = schema.parse(req.body);
      
      const page = await storage.createPage({
        ...input,
        storyId: Number(req.params.storyId)
      });
      res.status(201).json(page);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  app.put(api.pages.update.path, async (req, res) => {
    try {
      const schema = api.pages.update.input.extend({
        pageNumber: z.coerce.number().optional(),
        isFinalDrawing: z.coerce.number().optional()
      });
      const input = schema.parse(req.body);
      
      const page = await storage.updatePage(Number(req.params.id), input);
      if (!page) {
         return res.status(404).json({ message: "Page not found" });
      }
      res.json(page);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  app.delete(api.pages.delete.path, async (req, res) => {
    try {
      await storage.deletePage(Number(req.params.id));
      res.status(204).send();
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to delete page" });
    }
  });

  // Seed some initial data if empty
  seedDatabase().catch(console.error);

  return httpServer;
}

async function seedDatabase() {
  const existing = await storage.getStories();
  if (existing.length === 0) {
    const story = await storage.createStory({
      title: "As Aventuras de Benjamin",
      description: "Uma historinha sobre um menino muito criativo chamado Benjamin.",
      coverImage: "https://images.unsplash.com/photo-1512414584143-b9a3e3484950?auto=format&fit=crop&q=80&w=800",
    });

    await storage.createPage({
      storyId: story.id,
      pageNumber: 1,
      content: "Era uma vez um menino chamado Benjamin.",
      imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800",
      isFinalDrawing: 0
    });

    await storage.createPage({
      storyId: story.id,
      pageNumber: 2,
      content: "Ele adorava desenhar e imaginar mundos novos.",
      imageUrl: "https://images.unsplash.com/photo-1537444532052-2afbf769b76c?auto=format&fit=crop&q=80&w=800",
      isFinalDrawing: 0
    });

    await storage.createPage({
      storyId: story.id,
      pageNumber: 3,
      content: "Um dia, Benjamin encontrou uma caixa mágica de lápis de cor.",
      imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
      isFinalDrawing: 0
    });
    
    await storage.createPage({
      storyId: story.id,
      pageNumber: 4,
      content: "Tudo o que ele desenhava ganhava vida!",
      imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800",
      isFinalDrawing: 0
    });

    await storage.createPage({
      storyId: story.id,
      pageNumber: 5,
      content: "", // Empty page as requested
      imageUrl: "https://images.unsplash.com/photo-1515041219749-89347f83291a?auto=format&fit=crop&q=80&w=800",
      isFinalDrawing: 0
    });

    await storage.createPage({
      storyId: story.id,
      pageNumber: 6,
      content: "Desenho final do Benjamin!",
      imageUrl: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&q=80&w=800",
      isFinalDrawing: 1
    });
  }
}
