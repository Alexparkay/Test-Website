import React from 'react';
import { motion } from 'framer-motion';
import ClientCard from '../components/ClientCard';
import Testimonial from '../components/Testimonial';

const Clients = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              Our
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                {' '}Success Stories{' '}
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've helped these amazing brands and athletes make waves in the digital space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Clients Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ClientCard
              image="https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80"
              name="Pro Surfer John Doe"
            />
            <ClientCard
              image="https://images.unsplash.com/photo-1455264745730-9d9857bcd75a?auto=format&fit=crop&q=80"
              name="Wave Riders Co."
            />
            <ClientCard
              image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80"
              name="Beach Life Apparel"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our clients have to say about working with Wave Digital.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <Testimonial
              quote="Wave Digital transformed our social media presence. Their understanding of surf culture is unmatched."
              name="Sarah Johnson"
              role="Marketing Director, Wave Riders Co."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
            />
            <Testimonial
              quote="They don't just manage our social media, they tell our story in a way that resonates with our audience."
              name="Mike Wilson"
              role="Pro Surfer"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Clients;