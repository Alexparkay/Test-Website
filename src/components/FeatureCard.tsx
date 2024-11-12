import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  image: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, color, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity duration-300"
        />
      </div>

      {/* Content */}
      <div className="relative p-6 h-full flex flex-col">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{description}</p>
        <div className="flex items-center text-white group-hover:text-blue-400 transition-colors">
          <span className="text-sm font-medium">Learn More</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;