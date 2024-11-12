import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Instagram, Camera, Users, BarChart } from 'lucide-react';
import Stats from '../components/Stats';
import ServiceCard from '../components/ServiceCard';
import Testimonial from '../components/Testimonial';
import WaveBackground from '../components/WaveBackground';
import FeatureCard from '../components/FeatureCard';

const Home = () => {
  return (
    <main className="relative">
      <WaveBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                Ride the
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  {' '}Digital Wave{' '}
                </span>
                of Success
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Wave Digital is your premier social media marketing agency specializing in the surf industry. We help surf brands and athletes create authentic digital experiences that resonate with their audience and drive real results.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-4 rounded-full hover:shadow-lg transition-shadow flex items-center justify-center group"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition"
                >
                  View Our Work
                </motion.button>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80"
                alt="Surfer at sunset"
                className="rounded-2xl shadow-2xl"
              />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-lg"
              >
                <Stats />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Elevate Your Digital Presence
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="Social Management"
              description="Strategic content planning and community engagement"
              icon={<Instagram className="w-8 h-8" />}
              color="from-blue-500 to-blue-600"
              image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80"
            />
            <FeatureCard
              title="Content Creation"
              description="High-quality photo and video production"
              icon={<Camera className="w-8 h-8" />}
              color="from-teal-500 to-teal-600"
              image="https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80"
            />
            <FeatureCard
              title="Influencer Marketing"
              description="Connect with authentic surf ambassadors"
              icon={<Users className="w-8 h-8" />}
              color="from-purple-500 to-purple-600"
              image="https://images.unsplash.com/photo-1513737567531-bc431c8e5cf2?auto=format&fit=crop&q=80"
            />
            <FeatureCard
              title="Analytics & Growth"
              description="Data-driven strategies for measurable results"
              icon={<BarChart className="w-8 h-8" />}
              color="from-green-500 to-green-600"
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-medium text-lg">Trusted by World-Class Surf Brands</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ClientLogo name="Wave Co" />
            <ClientLogo name="Surf Elite" />
            <ClientLogo name="Ocean Gear" />
            <ClientLogo name="Beach Life" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513737567531-bc431c8e5cf2?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Make Waves?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the leading surf athletes and brands who trust Wave Digital with their digital presence.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:shadow-lg transition flex items-center mx-auto group"
            >
              Schedule a Strategy Call
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

const ClientLogo = ({ name }: { name: string }) => (
  <div className="h-20 bg-white rounded-lg shadow-sm flex items-center justify-center p-6">
    <span className="text-gray-400 font-medium">{name}</span>
  </div>
);

export default Home;