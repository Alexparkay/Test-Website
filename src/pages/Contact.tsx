import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const submissionTime = new Date().toISOString();

    try {
      const response = await fetch('https://hook.eu2.make.com/lrfs3mlb6kdtyem8ol7rdiw1aixj6c7r', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, submissionTime })
      });

      if (response.ok) {
        // Clear form after successful submission
        setFormData({ name: '', email: '', message: '' });
        alert('Thank you for submitting your message!');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

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
              Let's Make
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                {' '}Waves Together{' '}
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to elevate your digital presence? Get in touch with our team today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <ContactInfo
                  icon={<Mail />}
                  title="Email"
                  info="hello@wavedigital.com"
                />
                <ContactInfo
                  icon={<Phone />}
                  title="Phone"
                  info="+1 (555) 123-4567"
                />
                <ContactInfo
                  icon={<MapPin />}
                  title="Location"
                  info="123 Surf Street, Beach City, CA 90210"
                />
              </div>
            </div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-4 rounded-full hover:shadow-lg transition"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </main>
  );
};

const ContactInfo = ({ icon, title, info }: { icon: React.ReactNode; title: string; info: string }) => (
  <div className="flex items-start space-x-4">
    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
      {icon}
    </div>
    <div>
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="text-gray-600">{info}</p>
    </div>
  </div>
);

export default Contact;