"use client"
import React from "react";
import { motion } from 'framer-motion';


function BBCVines(){
    return(
        <section id="blog" className="py-12 sm:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-700 tracking-tighter">
                Insights from BBCVines
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Actionable insights on tech, marketing, and local
                business trends.
              </p>
            </motion.div>

            {/* Horizontal Scroll Carousel */}
            <motion.div
              className="mt-16 flex overflow-x-auto space-x-8 py-4 snap-x snap-mandatory"
              style={{
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
              }} // Hide scrollbar
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {[
                {
                  title: 'Local SEO vs. Global SEO for Kolkata Shops',
                  desc: 'Why your local strategy needs a global mindset from day one.',
                },
                {
                  title: 'PWAs: The Future of Mobile for Bengal?',
                  desc: 'Why a Progressive Web App might be smarter than a native app.',
                },
                {
                  title: 'AI in Marketing: Beyond the Hype',
                  desc: 'Practical AI tools you can use to save time and money today.',
                },
                {
                  title: 'The "Dhakuria" Funnel Model',
                  desc: 'A case study on hyper-local marketing.',
                },
              ].map((post, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-[300px] bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700"
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    <h3 className="text-xl font-bold text-white">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-gray-400">{post.desc}</p>
                    <a
                      href="#"
                      className="mt-5 inline-flex items-center text-purple-400 font-semibold hover:text-purple-300"
                    >
                      Read More &rarr;
                    </a>
                  </div>
                ))}
            </motion.div>
          </div>
        </section>

    )
}

export default BBCVines