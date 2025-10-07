import React from "react";
import { motion } from "framer-motion";
import { Wrench, Clock } from "lucide-react";

export default function Maintenance() {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-800 text-white text-center p-6">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-700/10 via-purple-700/10 to-pink-600/10 animate-pulse blur-3xl" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="mb-6"
        >
          <Wrench size={64} className="text-yellow-400 drop-shadow-lg" />
        </motion.div>

        <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-md">
          Site Under Maintenance
        </h1>

        <p className="text-lg text-gray-300 max-w-md mb-6">
          We’re currently enhancing your experience. Please check back soon!
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Clock size={18} className="text-gray-500" />
          <span>Estimated downtime: short while</span>
        </div>
      </motion.div>

      {/* Bottom decorative glow */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-indigo-900/60 to-transparent" />
    </div>
  );
}
