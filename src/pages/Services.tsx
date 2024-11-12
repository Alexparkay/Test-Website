import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Megaphone, Users, Camera, BarChart, Globe } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
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
              Digital Solutions for the
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                {' '}Surf Community{' '}
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing services tailored for surf brands, athletes, and events.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Instagram />}
              title="Social Media Management"
              description="Strategic content planning and engagement strategies for surf brands and athletes."
            />
            <ServiceCard
              icon={<Megaphone />}
              title="Brand Development"
              description="Creating authentic brand identities that resonate with the surf community."
            />
            <ServiceCard
              icon={<Users />}
              title="Influencer Partnerships"
              description="Connecting brands with authentic voices in the surf world."
            />
            <ServiceCard
              icon={<Camera />}
              title="Content Creation"
              description="High-quality photo and video content for all your digital needs."
            />
            <ServiceCard
              icon={<BarChart />}
              title="Analytics & Reporting"
              description="Data-driven insights to optimize your digital performance."
            />
            <ServiceCard
              icon={<Globe />}
              title="Digital Strategy"
              description="Comprehensive digital strategies to achieve your business goals."
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven approach to delivering exceptional results for our clients.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              title="Discovery"
              description="Understanding your brand, goals, and target audience"
            />
            <ProcessStep
              number="02"
              title="Strategy"
              description="Developing a tailored digital marketing plan"
            />
            <ProcessStep
              number="03"
              title="Execution"
              description="Implementing strategies across all channels"
            />
            <ProcessStep
              number="04"
              title="Optimization"
              description="Continuous improvement based on data and feedback"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

const ProcessStep = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center p-6"
  >
    <div className="text-4xl font-bold text-blue-600 mb-4">{number}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default Services;