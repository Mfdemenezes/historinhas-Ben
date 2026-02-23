import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const stories = pgTable("stories", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  coverImage: text("cover_image"),
  description: text("description"),
});

export const pages = pgTable("pages", {
  id: serial("id").primaryKey(),
  storyId: integer("story_id").notNull(),
  pageNumber: integer("page_number").notNull(),
  content: text("content"),
  imageUrl: text("image_url"),
  isFinalDrawing: integer("is_final_drawing").default(0), // 0 for normal, 1 for Benjamin's final drawing
});

export const storiesRelations = relations(stories, ({ many }) => ({
  pages: many(pages),
}));

export const pagesRelations = relations(pages, ({ one }) => ({
  story: one(stories, {
    fields: [pages.storyId],
    references: [stories.id],
  }),
}));

export const insertStorySchema = createInsertSchema(stories).omit({ id: true });
export const insertPageSchema = createInsertSchema(pages).omit({ id: true });

export type Story = typeof stories.$inferSelect;
export type InsertStory = z.infer<typeof insertStorySchema>;

export type Page = typeof pages.$inferSelect;
export type InsertPage = z.infer<typeof insertPageSchema>;

export type StoryWithPages = Story & { pages: Page[] };
