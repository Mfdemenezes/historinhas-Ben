import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Home, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { useStory } from "@/hooks/use-stories";
import { Button } from "@/components/ui/button";
import { imgUrl } from "@/lib/utils";

function playPageTurnSound() {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const sr = ctx.sampleRate;
    const dur = 0.14;
    const buf = ctx.createBuffer(1, Math.floor(sr * dur), sr);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 2.5);
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const flt = ctx.createBiquadFilter();
    flt.type = "bandpass";
    flt.frequency.value = 3000;
    flt.Q.value = 0.8;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.28, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    src.connect(flt);
    flt.connect(gain);
    gain.connect(ctx.destination);
    src.start();
    setTimeout(() => ctx.close(), 500);
  } catch (_) {}
}

export default function ReadStory() {
  const [, params] = useRoute("/read/:id");
  const storyId = parseInt(params?.id || "0");

  const { data: story, isLoading } = useStory(storyId);

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const pages = story?.pages.sort((a, b) => a.pageNumber - b.pageNumber) || [];
  const currentPage = pages[currentPageIndex];
  const isCover = currentPageIndex === -1;
  const isEnd = currentPageIndex === pages.length;

  useEffect(() => {
    if (isEnd && pages.length > 0) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#F43F5E", "#F59E0B", "#3B82F6"],
      });
    }
  }, [isEnd, pages.length]);

  if (isLoading) return (
    <div className="min-h-screen flex items-center justify-center">
      <Sparkles className="animate-spin text-primary w-12 h-12" />
    </div>
  );
  if (!story) return (
    <div className="min-h-screen flex items-center justify-center">História não encontrada</div>
  );

  const turnPage = (newDirection: number) => {
    playPageTurnSound();
    setDirection(newDirection);
    setCurrentPageIndex(prev => prev + newDirection);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 90 : -90,
    }),
    center: { zIndex: 1, x: 0, opacity: 1, rotateY: 0 },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 90 : -90,
    }),
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center overflow-hidden relative">
      {/* Navigation Bar */}
      <div className="w-full max-w-7xl px-4 py-3 flex items-center z-50">
        <Link href="/">
          <Button variant="ghost" className="text-muted-foreground hover:text-primary gap-2">
            <Home className="w-5 h-5" />
            <span className="hidden sm:inline">Biblioteca</span>
          </Button>
        </Link>
      </div>

      {/* Main Book Area */}
      <div className="flex-1 w-full max-w-6xl flex items-center justify-center relative px-10 md:px-16 pb-8">

        {currentPageIndex > -1 && (
          <button
            onClick={() => turnPage(-1)}
            className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white p-3 md:p-4 rounded-full shadow-lg text-primary transition-all hover:scale-110 active:scale-95"
          >
            <ArrowLeft className="w-5 h-5 md:w-8 md:h-8" />
          </button>
        )}

        {currentPageIndex < pages.length && (
          <button
            onClick={() => turnPage(1)}
            className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white p-3 md:p-4 rounded-full shadow-lg text-primary transition-all hover:scale-110 active:scale-95"
          >
            <ArrowRight className="w-5 h-5 md:w-8 md:h-8" />
          </button>
        )}

        {/* aspect-[3/4] no mobile (retrato), landscape no desktop */}
        <div className="relative w-full max-w-4xl aspect-[3/4] md:aspect-[1.6/1] perspective-1000">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">

            {/* COVER PAGE */}
            {isCover && (
              <motion.div
                key="cover"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
                className="absolute inset-0 bg-primary rounded-r-3xl rounded-l-md shadow-2xl flex flex-col items-center justify-center p-6 md:p-12 text-white text-center border-l-[12px] border-black/20 origin-left overflow-y-auto"
              >
                {story.coverImage && (
                  <div className="w-32 h-32 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-xl mb-4 md:mb-8 flex-shrink-0">
                    <img src={imgUrl(story.coverImage)} alt="Cover" className="w-full h-full object-cover" />
                  </div>
                )}
                <h1 className="text-2xl md:text-6xl font-display font-bold mb-3 md:mb-4 drop-shadow-md leading-tight">
                  {story.title}
                </h1>
                <p className="text-sm md:text-2xl font-story opacity-90 max-w-2xl">
                  {story.description}
                </p>
                <div className="mt-6 md:mt-12 bg-white/20 px-4 py-2 rounded-full font-bold text-sm md:text-base animate-pulse">
                  Clique na seta para começar a ler!
                </div>
              </motion.div>
            )}

            {/* NORMAL PAGES */}
            {!isCover && !isEnd && currentPage && (
              <motion.div
                key={currentPage.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
                className="absolute inset-0 bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-border origin-center"
              >
                {/* Imagem: 40% da altura no mobile, metade da largura no desktop */}
                <div className="w-full md:w-1/2 h-[40%] md:h-full bg-muted relative overflow-hidden flex-shrink-0">
                  {currentPage.imageUrl ? (
                    <img src={imgUrl(currentPage.imageUrl)} alt="Page illustration" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-accent/5">
                      <Sparkles className="w-16 h-16 text-accent/20" />
                    </div>
                  )}
                  <div className="absolute bottom-2 left-3 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full text-xs font-bold text-muted-foreground shadow-sm">
                    Página {currentPage.pageNumber}
                  </div>
                </div>

                {/* Texto: 60% da altura no mobile, metade da largura no desktop */}
                <div className="w-full md:w-1/2 h-[60%] md:h-full p-4 md:p-12 flex flex-col justify-center bg-[#fffdf5] overflow-y-auto">
                  <div className="prose prose-sm md:prose-xl font-story leading-relaxed text-foreground">
                    {currentPage.content}
                  </div>
                  {currentPage.isFinalDrawing === 1 && (
                    <div className="mt-4 md:mt-8 flex items-center gap-2 text-primary font-bold text-sm md:text-base">
                      <span className="text-xl md:text-2xl">🎨</span>
                      <span>Obra-prima do Benjamin</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* END PAGE */}
            {isEnd && (
              <motion.div
                key="end"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
                className="absolute inset-0 bg-secondary rounded-3xl shadow-2xl flex flex-col items-center justify-center p-6 md:p-12 text-white text-center border-l-[12px] border-black/20"
              >
                <h2 className="text-3xl md:text-6xl font-display font-bold mb-6 md:mb-8">Fim</h2>
                <div className="text-5xl md:text-6xl mb-6 md:mb-8 animate-bounce">🎉</div>
                <Link href="/">
                  <Button size="lg" className="bg-white text-secondary hover:bg-white/90 font-bold text-lg md:text-xl h-12 md:h-14 px-6 md:px-8 rounded-full shadow-lg">
                    Ler Outra História
                  </Button>
                </Link>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
