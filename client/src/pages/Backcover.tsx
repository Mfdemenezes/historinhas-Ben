import { motion } from "framer-motion";
import { useLocation } from "wouter";

export default function Backcover() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-[#fffdf5] flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full bg-white rounded-3xl shadow-2xl border border-amber-100 p-8 md:p-12 text-center"
      >
        <div className="flex items-center gap-3 justify-center mb-6">
          <div className="h-px flex-1 bg-amber-200" />
          <span className="text-amber-400 text-xl">💛</span>
          <div className="h-px flex-1 bg-amber-200" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl mb-6"
        >
          💛
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-extrabold text-foreground mb-6 leading-snug"
        >
          Obrigada por fazer parte<br />desta aventura
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8"
        >
          As histórias que contamos hoje ajudam a construir os adultos que nossos
          filhos serão amanhã.
          <br /><br />
          Esperamos que o Benjamin tenha levado diversão, aprendizado e momentos
          especiais para sua família.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4 mb-8"
        >
          <p className="text-primary font-bold text-base">
            ✨ Novas histórias serão adicionadas à Biblioteca Histórias do Coração.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-foreground text-base mb-2"
        >
          Com carinho,
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="text-xl font-bold text-primary mb-8"
        >
          Ananda Vianna
        </motion.p>

        <div className="flex items-center gap-3 justify-center mb-8">
          <div className="h-px flex-1 bg-amber-200" />
          <span className="text-amber-400 text-xl">💛</span>
          <div className="h-px flex-1 bg-amber-200" />
        </div>

        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          onClick={() => navigate("/biblioteca")}
          className="bg-primary text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform"
        >
          📚 Voltar à Biblioteca
        </motion.button>
      </motion.div>
    </div>
  );
}
