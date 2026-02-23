import { Link } from "wouter";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { type StoryWithPages } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { imgUrl } from "@/lib/utils";

interface StoryCardProps {
  story: StoryWithPages;
}

export function StoryCard({ story }: StoryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300"
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

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <Link href={`/read/${story.id}`} className="w-full">
            <Button className="w-full font-bold text-lg bg-primary hover:bg-primary/90 text-white shadow-lg border-2 border-white/20">
              Ler História
            </Button>
          </Link>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-foreground line-clamp-1 mb-2 font-display">
          {story.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 h-10">
          {story.description || "Uma aventura mágica esperando para ser lida..."}
        </p>
        <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-medium">
          {story.pages.length} {story.pages.length === 1 ? "Página" : "Páginas"}
        </span>
      </div>
    </motion.div>
  );
}
