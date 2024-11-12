import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
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
              Insights from the
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                {' '}Digital Wave{' '}
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends in surf culture and digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogPost
              title="The Rise of Digital Surf Culture"
              excerpt="How social media is transforming the way we experience and share surf culture."
              date="March 15, 2024"
              author="John Doe"
              image="https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80"
            />
            <BlogPost
              title="Effective Social Media Strategies for Surf Brands"
              excerpt="Key insights into building an authentic presence on social platforms."
              date="March 10, 2024"
              author="Jane Smith"
              image="https://images.unsplash.com/photo-1505459668311-8dfac7952c00?auto=format&fit=crop&q=80"
            />
            <BlogPost
              title="Creating Authentic Surf Content"
              excerpt="Tips for capturing and sharing genuine surf moments that resonate."
              date="March 5, 2024"
              author="Mike Wilson"
              image="https://images.unsplash.com/photo-1455264745730-9d9857bcd75a?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

const BlogPost = ({ title, excerpt, date, author, image }: {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <Calendar className="w-4 h-4 mr-2" />
        <span>{date}</span>
        <User className="w-4 h-4 ml-4 mr-2" />
        <span>{author}</span>
      </div>
      <Link
        to="#"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
      >
        Read More
        <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </div>
  </motion.article>
);

export default Blog; 