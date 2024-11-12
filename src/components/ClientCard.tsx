import React from 'react';
import { motion } from 'framer-motion';

interface ClientCardProps {
  image: string;
  name: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ image, name }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
        <h3 className="text-white font-bold text-xl p-6">{name}</h3>
      </div>
    </motion.div>
  );
};

export default ClientCard;