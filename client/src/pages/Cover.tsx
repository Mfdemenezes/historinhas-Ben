import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { imgUrl } from "@/lib/utils";

export default function Cover() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#fdf6ee] relative overflow-hidden">
      <div className="w-full max-w-sm mx-auto flex flex-col items-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src={imgUrl("/images/capa_kit1.jpg")}
            alt="Histórias do Coração - Kit 1"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          onClick={() => navigate("/intro")}
          className="mt-8 bg-primary text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-transform"
        >
          👉 Começar a leitura
        </motion.button>
      </div>
    </div>
  );
}
