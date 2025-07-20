'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

interface AnimationTemplateProps {
  className?: string;
  children: React.ReactNode;
  once?: boolean;
  amount?: number;
}

// Scroll-triggered Motion Wrapper
export function AnimationTemplate({
  className = '',
  children,
  once = true,
  amount = 0.2,
}: AnimationTemplateProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={containerVariants}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
}