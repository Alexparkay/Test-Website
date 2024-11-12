import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart, Users, Instagram } from 'lucide-react';

const CaseStudies = () => {
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
              Our Success
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                {' '}Stories{' '}
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped surf brands and athletes achieve remarkable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <CaseStudyCard
              title="Wave Riders Co. Social Growth"
              description="How we increased social media engagement by 300% in 6 months."
              stats={[
                { label: 'Follower Growth', value: '300%' },
                { label: 'Engagement Rate', value: '12%' },
                { label: 'ROI', value: '250%' },
              ]}
              image="https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80"
            />
            <CaseStudyCard
              title="Pro Surfer Brand Building"
              description="Building a professional surfer's personal brand from scratch."
              stats={[
                { label: 'Sponsorships', value: '10+' },
                { label: 'Media Features', value: '25+' },
                { label: 'Audience Growth', value: '500%' },
              ]}
              image="https://images.unsplash.com/photo-1455264745730-9d9857bcd75a?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results that speak for themselves.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <ResultCard
              icon={<Instagram />}
              title="Social Growth"
              value="500%+"
              description="Average social media growth"
            />
            <ResultCard
              icon={<Users />}
              title="Community"
              value="1M+"
              description="Total audience reached"
            />
            <ResultCard
              icon={<BarChart />}
              title="ROI"
              value="300%"
              description="Average return on investment"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

const CaseStudyCard = ({ title, description, stats, image }: {
  title: string;
  description: string;
  stats: { label: string; value: string; }[];
  image: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-xl font-bold text-blue-600">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
      >
        View Case Study
        <ArrowRight className="ml-2 w-4 h-4" />
      </motion.button>
    </div>
  </motion.div>
);

const ResultCard = ({ icon, title, value, description }: {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-md text-center">
    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <div className="text-3xl font-bold text-blue-600 mb-2">{value}</div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default CaseStudies; 