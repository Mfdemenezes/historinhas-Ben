import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Resolve caminhos de imagem compatível com GitHub Pages e dev local
export function imgUrl(path: string | null | undefined): string {
  if (!path) return "";
  const base = import.meta.env.BASE_URL ?? "/";
  return base + path.replace(/^\//, "");
}
