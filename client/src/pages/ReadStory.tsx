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
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation Bar */}
      <div className="w-full px-4 py-3 flex items-center border-b bg-white z-50">
        <Link href="/">
          <Button variant="ghost" className="text-muted-foreground hover:text-primary gap-2">
            <Home className="w-5 h-5" />
            <span className="hidden sm:inline">Biblioteca</span>
          </Button>
        </Link>
        {story && (
          <span className="ml-4 text-sm font-medium text-muted-foreground truncate max-w-[200px] sm:max-w-none">
            {story.title}
          </span>
        )}
      </div>

      {/* ── MOBILE layout (< md) ── */}
      <div className="md:hidden flex flex-col flex-1">
        <AnimatePresence initial={false} custom={direction} mode="wait">

          {/* COVER */}
          {isCover && (
            <motion.div
              key="cover-mobile"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center min-h-[70vh] bg-primary text-white text-center p-8 m-4 rounded-3xl shadow-xl"
            >
              {story.coverImage && (
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white/30 shadow-xl mb-6">
                  <img src={imgUrl(story.coverImage)} alt="Cover" className="w-full h-full object-cover" />
                </div>
              )}
              <h1 className="text-2xl font-display font-bold mb-3 leading-tight">{story.title}</h1>
              <p className="text-sm opacity-90 mb-6">{story.description}</p>
              <div className="bg-white/20 px-4 py-2 rounded-full font-bold text-sm animate-pulse">
                Use as setas para ler!
              </div>
            </motion.div>
          )}

          {/* NORMAL PAGE */}
          {!isCover && !isEnd && currentPage && (
            <motion.div
              key={`page-mobile-${currentPage.id}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex flex-col m-4 rounded-3xl overflow-hidden shadow-xl border border-border bg-white"
            >
              {/* Imagem — altura fixa, sem corte */}
              <div className="w-full bg-muted relative">
                {currentPage.imageUrl ? (
                  <img
                    src={imgUrl(currentPage.imageUrl)}
                    alt="Page illustration"
                    className="w-full h-auto object-contain max-h-72"
                  />
                ) : (
                  <div className="w-full h-48 flex items-center justify-center bg-accent/5">
                    <Sparkles className="w-16 h-16 text-accent/20" />
                  </div>
                )}
                <div className="absolute bottom-2 left-3 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full text-xs font-bold text-muted-foreground shadow-sm">
                  Página {currentPage.pageNumber}
                </div>
              </div>
              {/* Texto — altura natural, tudo visível */}
              <div className="w-full p-5 bg-[#fffdf5]">
                <p className="font-story text-base leading-relaxed text-foreground">
                  {currentPage.content}
                </p>
                {currentPage.isFinalDrawing === 1 && (
                  <div className="mt-4 flex items-center gap-2 text-primary font-bold text-sm">
                    <span className="text-xl">🎨</span>
                    <span>Obra-prima do Benjamin</span>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* END PAGE */}
          {isEnd && (
            <motion.div
              key="end-mobile"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center min-h-[70vh] bg-secondary text-white text-center p-8 m-4 rounded-3xl shadow-xl"
            >
              <h2 className="text-4xl font-display font-bold mb-6">Fim</h2>
              <div className="text-5xl mb-6 animate-bounce">🎉</div>
              <Link href="/">
                <Button size="lg" className="bg-white text-secondary hover:bg-white/90 font-bold text-lg h-12 px-6 rounded-full shadow-lg">
                  Ler Outra História
                </Button>
              </Link>
            </motion.div>
          )}

        </AnimatePresence>

        {/* Botões de navegação mobile — barra fixa na parte inferior */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur border-t flex justify-between items-center px-6 py-3 z-40">
          <button
            onClick={() => currentPageIndex > -1 && turnPage(-1)}
            disabled={currentPageIndex <= -1}
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-bold disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-transform"
          >
            <ArrowLeft className="w-5 h-5" />
            Anterior
          </button>
          <span className="text-xs text-muted-foreground font-medium">
            {currentPageIndex < 0 ? "Capa" : currentPageIndex >= pages.length ? "Fim" : `${currentPageIndex + 1} / ${pages.length}`}
          </span>
          <button
            onClick={() => currentPageIndex < pages.length && turnPage(1)}
            disabled={currentPageIndex >= pages.length}
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-bold disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-transform"
          >
            Próxima
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ── DESKTOP layout (md+) ── */}
      <div className="hidden md:flex flex-1 w-full max-w-6xl mx-auto items-center justify-center relative px-16 pb-8 pt-4">

        {currentPageIndex > -1 && (
          <button
            onClick={() => turnPage(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/80 hover:bg-white p-4 rounded-full shadow-lg text-primary transition-all hover:scale-110"
          >
            <ArrowLeft className="w-8 h-8" />
          </button>
        )}

        {currentPageIndex < pages.length && (
          <button
            onClick={() => turnPage(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/80 hover:bg-white p-4 rounded-full shadow-lg text-primary transition-all hover:scale-110"
          >
            <ArrowRight className="w-8 h-8" />
          </button>
        )}

        <div className="relative w-full max-w-4xl aspect-[1.6/1] perspective-1000">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">

            {/* COVER */}
            {isCover && (
              <motion.div
                key="cover-desktop"
                custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d > 0 ? 1000 : -1000, opacity: 0, rotateY: d > 0 ? 90 : -90 }),
                  center: { zIndex: 1, x: 0, opacity: 1, rotateY: 0 },
                  exit: (d: number) => ({ zIndex: 0, x: d < 0 ? 1000 : -1000, opacity: 0, rotateY: d < 0 ? 90 : -90 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
                className="absolute inset-0 bg-primary rounded-r-3xl rounded-l-md shadow-2xl flex flex-col items-center justify-center p-12 text-white text-center border-l-[12px] border-black/20 origin-left"
              >
                {story.coverImage && (
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-xl mb-8">
                    <img src={imgUrl(story.coverImage)} alt="Cover" className="w-full h-full object-cover" />
                  </div>
                )}
                <h1 className="text-5xl font-display font-bold mb-4 drop-shadow-md">{story.title}</h1>
                <p className="text-xl font-story opacity-90 max-w-2xl">{story.description}</p>
                <div className="mt-12 bg-white/20 px-6 py-2 rounded-full font-bold animate-pulse">
                  Clique na seta para começar a ler!
                </div>
              </motion.div>
            )}

            {/* NORMAL PAGE */}
            {!isCover && !isEnd && currentPage && (
              <motion.div
                key={`page-desktop-${currentPage.id}`}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d > 0 ? 1000 : -1000, opacity: 0, rotateY: d > 0 ? 90 : -90 }),
                  center: { zIndex: 1, x: 0, opacity: 1, rotateY: 0 },
                  exit: (d: number) => ({ zIndex: 0, x: d < 0 ? 1000 : -1000, opacity: 0, rotateY: d < 0 ? 90 : -90 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
                className="absolute inset-0 bg-white rounded-3xl shadow-2xl flex flex-row overflow-hidden border border-border origin-center"
              >
                <div className="w-1/2 h-full bg-muted relative overflow-hidden">
                  {currentPage.imageUrl ? (
                    <img src={imgUrl(currentPage.imageUrl)} alt="Page illustration" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-accent/5">
                      <Sparkles className="w-20 h-20 text-accent/20" />
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-muted-foreground shadow-sm">
                    Página {currentPage.pageNumber}
                  </div>
                </div>
                <div className="w-1/2 h-full p-12 flex flex-col justify-center bg-[#fffdf5] overflow-y-auto">
                  <div className="prose prose-xl font-story leading-relaxed text-foreground">
                    {currentPage.content}
                  </div>
                  {currentPage.isFinalDrawing === 1 && (
                    <div className="mt-8 flex items-center gap-2 text-primary font-bold">
                      <span className="text-2xl">🎨</span>
                      <span>Obra-prima do Benjamin</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* END PAGE */}
            {isEnd && (
              <motion.div
                key="end-desktop"
                custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d > 0 ? 1000 : -1000, opacity: 0, rotateY: d > 0 ? 90 : -90 }),
                  center: { zIndex: 1, x: 0, opacity: 1, rotateY: 0 },
                  exit: (d: number) => ({ zIndex: 0, x: d < 0 ? 1000 : -1000, opacity: 0, rotateY: d < 0 ? 90 : -90 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
                className="absolute inset-0 bg-secondary rounded-3xl shadow-2xl flex flex-col items-center justify-center p-12 text-white text-center"
              >
                <h2 className="text-6xl font-display font-bold mb-8">Fim</h2>
                <div className="text-6xl mb-8 animate-bounce">🎉</div>
                <Link href="/">
                  <Button size="lg" className="bg-white text-secondary hover:bg-white/90 font-bold text-xl h-14 px-8 rounded-full shadow-lg">
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
