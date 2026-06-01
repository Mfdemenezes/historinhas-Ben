import { motion } from "framer-motion";
import { useLocation } from "wouter";

const skills = [
  { icon: "⭐", label: "Coragem" },
  { icon: "⏳", label: "Paciência" },
  { icon: "🎒", label: "Autonomia" },
  { icon: "🏔️", label: "Persistência" },
  { icon: "🌱", label: "Confiança" },
];

export default function Intro() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-[#fffdf5] flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full bg-white rounded-3xl shadow-2xl border border-amber-100 p-8 md:p-12 text-center"
      >
        {/* Decorative top line */}
        <div className="flex items-center gap-3 justify-center mb-6">
          <div className="h-px flex-1 bg-amber-200" />
          <span className="text-amber-400 text-xl">💛</span>
          <div className="h-px flex-1 bg-amber-200" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-extrabold text-foreground mb-2 leading-tight"
        >
          Pequenas Histórias,
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-extrabold text-primary mb-6"
        >
          Grandes Aprendizados
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8"
        >
          Bem-vindos ao universo do Benjamin. 🌟
          <br /><br />
          Nesta coleção, cada história foi criada para ajudar as crianças a
          desenvolver habilidades importantes para a vida — através de aventuras
          cheias de imaginação, aprendizado e afeto.
          <br /><br />
          Aqui seu filho aprenderá sobre:
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-3 mb-10 text-left max-w-xs mx-auto"
        >
          {skills.map((s, i) => (
            <motion.li
              key={s.label}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 + i * 0.07 }}
              className="flex items-center gap-3 text-foreground font-semibold text-base"
            >
              <span className="text-2xl">{s.icon}</span>
              {s.label}
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="text-lg font-bold text-foreground mb-8"
        >
          Boa leitura! 💛
        </motion.p>

        {/* Decorative bottom line */}
        <div className="flex items-center gap-3 justify-center mb-8">
          <div className="h-px flex-1 bg-amber-200" />
          <span className="text-amber-400 text-xl">💛</span>
          <div className="h-px flex-1 bg-amber-200" />
        </div>

        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
          onClick={() => navigate("/biblioteca")}
          className="bg-primary text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform"
        >
          📚 Ver as histórias
        </motion.button>
      </motion.div>
    </div>
  );
}
