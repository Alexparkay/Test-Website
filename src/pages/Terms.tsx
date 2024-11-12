import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
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
            <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using Wave Digital's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>

            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily access the materials on Wave Digital's website for personal, non-commercial use only.
            </p>

            <h2>Service Description</h2>
            <p>
              Wave Digital provides digital marketing and social media management services for surf industry clients. Our services include:
            </p>
            <ul>
              <li>Social media management</li>
              <li>Content creation</li>
              <li>Brand development</li>
              <li>Digital strategy</li>
            </ul>

            <h2>Payment Terms</h2>
            <p>
              Payment terms are specified in individual service agreements. All fees are non-refundable unless otherwise stated in writing.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services are owned by Wave Digital and are protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              Wave Digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website.
            </p>

            <h2>Contact Information</h2>
            <p>
              Questions about the Terms of Service should be sent to us at legal@wavedigital.com.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Terms; 