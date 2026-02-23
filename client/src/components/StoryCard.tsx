import { Link } from "wouter";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { type StoryWithPages } from "@shared/schema";
import { imgUrl } from "@/lib/utils";

interface StoryCardProps {
  story: StoryWithPages;
}

export function StoryCard({ story }: StoryCardProps) {
  return (
    <Link href={`/read/${story.id}`} className="block">
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer"
      >
        <div className="aspect-[3/4] relative overflow-hidden bg-muted">
          {story.coverImage ? (
            <img
              src={imgUrl(story.coverImage)}
              alt={story.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-accent/10">
              <BookOpen className="w-20 h-20 text-accent opacity-50" />
            </div>
          )}

          {/* Desktop hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-end p-6">
            <div className="w-full font-bold text-lg bg-primary text-white text-center py-3 rounded-xl shadow-lg border-2 border-white/20">
              Ler História
            </div>
          </div>
        </div>

        <div className="p-4 md:p-5">
          <h3 className="text-lg md:text-xl font-bold text-foreground line-clamp-2 mb-2 font-display leading-snug">
            {story.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
            {story.description || "Uma aventura mágica esperando para ser lida..."}
          </p>
          <div className="flex items-center justify-between">
            <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-medium">
              {story.pages.length} {story.pages.length === 1 ? "Página" : "Páginas"}
            </span>
            {/* Mobile: botão sempre visível */}
            <span className="md:hidden bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">
              Ler →
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
