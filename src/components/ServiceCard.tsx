import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  size?: "small" | "medium" | "large";
}

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  size = "medium",
}: ServiceCardProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "p-6";
      case "large":
        return "p-8 pb-12";
      default:
        return "p-8";
    }
  };

  const getIconSize = () => {
    switch (size) {
      case "small":
        return "w-12 h-12";
      case "large":
        return "w-20 h-20";
      default:
        return "w-16 h-16";
    }
  };

  const getIconWrapper = () => {
    switch (size) {
      case "small":
        return "w-6 h-6";
      case "large":
        return "w-10 h-10";
      default:
        return "w-8 h-8";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div
        className={`relative ${getSizeClasses()} rounded-3xl bg-slate-800/50 backdrop-blur-xl border border-slate-700 hover:border-slate-600 transition-colors duration-300`}
      >
        <div
          className={`text-blue-500 mb-6 bg-blue-500/10 ${getIconSize()} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className={getIconWrapper()} />
        </div>
        <h3
          className={`${
            size === "large" ? "text-2xl" : "text-xl"
          } font-semibold mb-4 text-white font-space-grotesk`}
        >
          {title}
        </h3>
        <p className="text-slate-300 leading-relaxed font-inter">
          {description}
        </p>
        {/* {size === "large" && (
          <motion.div
            className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Learn more
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.div>
        )} */}
      </div>
    </motion.div>
  );
};
