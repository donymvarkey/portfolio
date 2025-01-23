import { motion } from "framer-motion";
import { Code } from "lucide-react";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={`flex items-center gap-2 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg opacity-75 blur group-hover:opacity-100 transition duration-1000"
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="relative bg-white dark:bg-gray-800 rounded-lg p-2">
          <Code className="w-6 h-6 text-primary-600" />
        </div>
      </div>
      <div className="flex flex-col">
        {/* <motion.svg
          width="120"
          height="30"
          viewBox="0 0 120 30"
          className="overflow-visible"
        >
          <motion.path
            d="M5 20L15 10L25 20M35 10V20M45 10V20L55 10V20M65 10H75V15H65V20H75M85 10V20H95M105 10V20"
            fill="transparent"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </motion.svg> */}
        <motion.h3 className="text-lg text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text font-bold font-space-grotesk">
          {"Dony M Varkey"}
        </motion.h3>
        <span className="text-xs text-gray-600 font-medium font-space-grotesk">
          Software Developer
        </span>
      </div>
    </motion.div>
  );
};
