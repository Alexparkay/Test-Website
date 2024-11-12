import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ChevronRight } from 'lucide-react';

const Careers = () => {
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
              Join the
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                {' '}Wave Digital{' '}
              </span>
              Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of a team that's passionate about surf culture and digital innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Open Positions</h2>
          <div className="space-y-6">
            <JobListing
              title="Social Media Manager"
              location="Beach City, CA"
              type="Full-time"
              description="Lead social media strategies for surf industry clients."
            />
            <JobListing
              title="Content Creator"
              location="Remote"
              type="Full-time"
              description="Create engaging content for surf brands and athletes."
            />
            <JobListing
              title="Digital Marketing Specialist"
              location="Beach City, CA"
              type="Full-time"
              description="Develop and execute digital marketing campaigns."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Why Join Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job - we offer a lifestyle.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard
              title="Flexible Work"
              description="Work remotely or from our beachside office."
            />
            <BenefitCard
              title="Surf Time"
              description="Regular team surf sessions and beach days."
            />
            <BenefitCard
              title="Growth"
              description="Continuous learning and development opportunities."
            />
          </div>
        </div>
      </section>
    </main>
  );
};

const JobListing = ({ title, location, type, description }: {
  title: string;
  location: string;
  type: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
  >
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="mr-4">{location}</span>
          <Clock className="w-4 h-4 mr-2" />
          <span>{type}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 rounded-full hover:shadow-lg transition flex items-center"
      >
        Apply Now
        <ChevronRight className="ml-2 w-4 h-4" />
      </motion.button>
    </div>
  </motion.div>
);

const BenefitCard = ({ title, description }: { title: string; description: string }) => (
  <div className="p-6 bg-white rounded-xl shadow-md">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Careers; 