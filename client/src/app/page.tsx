"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-150 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero_image.webp"
            alt="Hero Banner"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Welcome to <span className="text-green-400">Our Platform</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl"
          >
            Discover amazing movies, articles, and portfolio projects all in one place
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/movie">
              <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">
                Explore Movies
              </button>
            </Link>
            <Link href="/article">
              <button className="px-8 py-3 bg-transparent text-white rounded-lg font-semibold border-2 border-green-600 hover:bg-green-600 transition-colors shadow-lg">
                Read Articles
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="px-8 py-3 bg-transparent text-white rounded-lg font-semibold border-2 border-green-600 hover:bg-green-600 transition-colors shadow-lg">
                View Portfolio
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/80"></div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gray-900 p-6 rounded-lg border-l-4 border-green-400"
          >
            <h3 className="text-2xl font-bold text-white mb-3">Movies</h3>
            <p className="text-gray-300">
              Browse through our collection of amazing movies with detailed information
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gray-900 p-6 rounded-lg border-l-4 border-green-400"
          >
            <h3 className="text-2xl font-bold text-white mb-3">Articles</h3>
            <p className="text-gray-300">
              Read insightful articles and stay updated with the latest news
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gray-900 p-6 rounded-lg border-l-4 border-green-400"
          >
            <h3 className="text-2xl font-bold text-white mb-3">Portfolio</h3>
            <p className="text-gray-300">
              Explore our portfolio of projects showcasing various skills and technologies
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
