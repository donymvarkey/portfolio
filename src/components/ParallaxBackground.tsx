import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface ParallaxBackgroundProps {
  imageUrl?: string;
  opacity?: number;
  scrollYProgress: MotionValue<number>;
}

export const ParallaxBackground = ({ imageUrl, opacity = 0.05, scrollYProgress }: ParallaxBackgroundProps) => {
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <motion.div 
      className={`absolute inset-0 ${imageUrl ? `bg-[url('${imageUrl}')] bg-cover bg-center` : ''}`}
      style={{ 
        y: backgroundY,
        opacity
      }}
    />
  );
};