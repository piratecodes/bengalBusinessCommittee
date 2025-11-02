"use client"
import React from "react";
import { motion } from 'framer-motion';


function Plans(){
    return(
        <section id="process" className="py-12 sm:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-700 tracking-tighter">
                Your Business, Excelled in 99 Days
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                We don't believe in endless retainers. We believe in
                results. Our 4-phase sprint is designed to make you a
                market leader, fast.
              </p>
            </motion.div>

            {/* Visual Timeline */}
            <div className="mt-20 max-w-3xl mx-auto">
              <div className="relative">
                {/* Dotted line - can be animated with SVG */}
                <div className="absolute left-1/2 -ml-0.5 w-1 h-full bg-indigo-800" />

                {[
                  {
                    phase: 'PHASE 1 (Day 1-15)',
                    title: 'Build: The Blueprint',
                    desc: 'We set the stage with data-backed research, platform setup, and full-funnel architecture.',
                  },
                  {
                    phase: 'PHASE 2 (Day 16-30)',
                    title: 'Launch: Deployment',
                    desc: 'We deploy full-funnel campaigns and rapidly test for conversion optimization.',
                  },
                  {
                    phase: 'PHASE 3 (Day 31-60)',
                    title: 'Scale: Optimization',
                    desc: 'High-performing channels get fuel. Underperformers get overhauled. Your systems get smarter.',
                  },
                  {
                    phase: 'PHASE 4 (Day 61-99)',
                    title: 'Dominate: Market Leadership',
                    desc: 'We move from simple growth to category leadership, backed by retention and real-world impact.',
                  },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    className="relative mb-12"
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute left-1/2 -ml-3 w-6 h-6 bg-purple-600 rounded-full border-4 border-indigo-950" />
                    <div
                      className={`ml-12 md:ml-0 md:w-5/12 ${
                        i % 2 === 0
                          ? 'md:text-right md:mr-auto'
                          : 'md:text-left md:ml-auto'
                      }`}
                    >
                      <span className="text-sm font-semibold text-purple-400">
                        {step.phase}
                      </span>
                      <h3 className="mt-1 text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-gray-400">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
    )
}

export default Plans