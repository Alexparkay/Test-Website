import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
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
            <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we handle and protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg">
            <h2>Introduction</h2>
            <p>
              Wave Digital ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul>
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Process your transactions</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our services</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
            </p>

            <h2>Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our practices, please contact us at privacy@wavedigital.com.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Privacy; 