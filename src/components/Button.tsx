import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
  icon?: boolean;
}

export const Button = ({
  variant = "primary",
  children,
  onClick,
  icon = false,
}: ButtonProps) => {
  if (variant === "primary") {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="relative px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative flex items-center gap-2">
          <div>{children}</div>
          {icon && (
            <motion.div
              initial={{ x: -5 }}
              animate={{ x: 0 }}
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          )}
        </div>
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="px-8 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 transition-colors duration-300"
    >
      {children}
    </motion.button>
  );
};
