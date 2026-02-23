import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Book, Sparkles } from "lucide-react";
import { useStories } from "@/hooks/use-stories";
import { StoryCard } from "@/components/StoryCard";
import { StoryForm } from "@/components/AdminForms";
import { Button } from "@/components/ui/button";
import { type StoryWithPages } from "@shared/schema";

export default function Home() {
  const { data: stories, isLoading } = useStories();
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingStory, setEditingStory] = useState<StoryWithPages | undefined>(undefined);

  // Admin Mode Toggle (Hidden feature: click "Stories" title 5 times? 
  // For now, just a visible toggle for MVP simplicity)
  const [isAdmin, setIsAdmin] = useState(true);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        >
          <Sparkles className="w-16 h-16 text-primary" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Header */}
      <header className="relative bg-white border-b-2 border-border/50 pt-12 pb-16 px-6 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl -z-10" />
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full font-bold text-sm mb-4"
            >
              <Sparkles className="w-4 h-4" />
              <span>Histórias Mágicas do Benjamin</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold text-foreground mb-4 font-display tracking-tight"
            >
              Livrinhos do<br />
              <span className="text-primary">Benjamin</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-lg"
            >
              Escolha um livro para começar sua aventura! 18 histórias para ler juntos 💛
            </motion.p>
          </div>

          <div className="flex gap-4">
            {isAdmin && (
              <Button
                onClick={() => {
                  setEditingStory(undefined);
                  setIsCreateOpen(true);
                }}
                className="h-14 px-8 rounded-2xl bg-secondary hover:bg-secondary/90 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <Plus className="mr-2 h-6 w-6" />
                Nova História
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Stories Grid */}
      <main className="max-w-6xl mx-auto px-6 -mt-10">
        {stories && stories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <StoryCard 
                  story={story} 
                  isAdmin={isAdmin}
                  onEdit={() => {
                    setEditingStory(story);
                    setIsCreateOpen(true);
                  }}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-border">
            <Book className="w-20 h-20 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Ainda não tem histórias!</h3>
            <p className="text-muted-foreground mb-8">Hora de criar a primeira aventura.</p>
            {isAdmin && (
              <Button onClick={() => setIsCreateOpen(true)} size="lg" className="rounded-xl">
                Criar Primeira História
              </Button>
            )}
          </div>
        )}
      </main>

      {/* Footer / Admin Toggle */}
      <footer className="mt-20 text-center pb-8 opacity-50 hover:opacity-100 transition-opacity">
        <button 
          onClick={() => setIsAdmin(!isAdmin)}
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          {isAdmin ? "Sair do Modo Admin" : "Entrar como Admin"}
        </button>
      </footer>

      <StoryForm 
        open={isCreateOpen} 
        onOpenChange={(open) => {
          setIsCreateOpen(open);
          if (!open) setEditingStory(undefined);
        }}
        story={editingStory}
      />
    </div>
  );
}
