import { z } from 'zod';
import { insertStorySchema, insertPageSchema, stories, pages } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
};

export const api = {
  stories: {
    list: {
      method: 'GET' as const,
      path: '/api/stories' as const,
      responses: {
        200: z.array(z.custom<typeof stories.$inferSelect & { pages: typeof pages.$inferSelect[] }>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/stories/:id' as const,
      responses: {
        200: z.custom<typeof stories.$inferSelect & { pages: typeof pages.$inferSelect[] }>(),
        404: errorSchemas.notFound,
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/stories' as const,
      input: insertStorySchema,
      responses: {
        201: z.custom<typeof stories.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
    update: {
      method: 'PUT' as const,
      path: '/api/stories/:id' as const,
      input: insertStorySchema.partial(),
      responses: {
        200: z.custom<typeof stories.$inferSelect>(),
        400: errorSchemas.validation,
        404: errorSchemas.notFound,
      },
    },
    delete: {
      method: 'DELETE' as const,
      path: '/api/stories/:id' as const,
      responses: {
        204: z.void(),
        404: errorSchemas.notFound,
      },
    }
  },
  pages: {
    create: {
      method: 'POST' as const,
      path: '/api/stories/:storyId/pages' as const,
      input: insertPageSchema.omit({ storyId: true }),
      responses: {
        201: z.custom<typeof pages.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
    update: {
      method: 'PUT' as const,
      path: '/api/pages/:id' as const,
      input: insertPageSchema.partial(),
      responses: {
        200: z.custom<typeof pages.$inferSelect>(),
        400: errorSchemas.validation,
        404: errorSchemas.notFound,
      },
    },
    delete: {
      method: 'DELETE' as const,
      path: '/api/pages/:id' as const,
      responses: {
        204: z.void(),
        404: errorSchemas.notFound,
      },
    }
  }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type StoryResponse = z.infer<typeof api.stories.get.responses[200]>;
export type StoriesListResponse = z.infer<typeof api.stories.list.responses[200]>;
