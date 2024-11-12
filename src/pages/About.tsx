import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Globe2 } from 'lucide-react';

const About = () => {
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
              Shaping the Future of
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                {' '}Surf Culture{' '}
              </span>
              Online
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wave Digital is more than an agency – we're a team of passionate surfers and digital experts dedicated to elevating surf culture through innovative digital strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <ValueCard
              icon={<Users className="w-8 h-8" />}
              title="Community First"
              description="We're deeply rooted in the surf community, understanding its unique culture and values."
            />
            <ValueCard
              icon={<Award className="w-8 h-8" />}
              title="Excellence in Digital"
              description="Our expertise in digital marketing is matched only by our passion for surfing."
            />
            <ValueCard
              icon={<Globe2 className="w-8 h-8" />}
              title="Global Impact"
              description="We connect surf brands and athletes with audiences worldwide."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collective of surfers, creators, and digital strategists passionate about elevating surf culture.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember
              image="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80"
              name="Alex Thompson"
              role="Founder & CEO"
              bio="Former pro surfer turned digital entrepreneur"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
              name="Sarah Chen"
              role="Head of Strategy"
              bio="Digital marketing veteran with 10+ years experience"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
              name="Mike Rodriguez"
              role="Creative Director"
              bio="Award-winning designer and surf photographer"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

const ValueCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center p-8"
  >
    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const TeamMember = ({ image, name, role, bio }: { image: string; name: string; role: string; bio: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center"
  >
    <img src={image} alt={name} className="w-48 h-48 rounded-full mx-auto mb-6 object-cover" />
    <h3 className="text-xl font-bold">{name}</h3>
    <p className="text-blue-600 mb-2">{role}</p>
    <p className="text-gray-600">{bio}</p>
  </motion.div>
);

export default About;