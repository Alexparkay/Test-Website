import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-lg shadow-md"
    >
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{quote}"</p>
    </motion.div>
  );
};

export default Testimonial;