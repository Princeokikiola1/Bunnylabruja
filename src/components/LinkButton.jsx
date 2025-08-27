import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LinkButton({ text, url, icon }) {
  return (
    <motion.a
      href={url}
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative w-full px-6 py-4 rounded-full 
                 bg-white text-black text-sm font-medium shadow-[0_4px_0_#7e22ce]
                 flex items-center justify-start gap-3"
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{text}</span>
    </motion.a>
  );
}
