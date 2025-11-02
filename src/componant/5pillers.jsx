"use client"
import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';


function Header(){

    const pillarData = [
        {
          title: 'Halve Your Costs. Double Your Output.',
          description:
            'Our remote-first model eliminates agency bloat. We pass 50% flat savings on to you, letting you reinvest in what matters: growth.',
        },
        {
          title: 'The Global Tech Vanguard.',
          description:
            "Your team isn't just 'young'; they're the global experts and architects of modern tech. We bring world-class talent to your West Bengal business.",
        },
        {
          title: 'Zero Guesswork. Guaranteed Growth.',
          description:
            "We don't test with your money. We deploy battle-hardened strategies that have scaled 100+ businesses. This is execution, not experimentation.",
        },
        {
          title: 'Your On-Demand R&D Wing.',
          description:
            "Get full access to our RnD department. We're constantly building, breaking, and discovering new tech and marketing vectors, so you're always two steps ahead.",
        },
        {
          title: 'One Team. Total Accountability.',
          description:
            "From your app's code to your ad's copy, it's all us. No third-parties. No excuses. Just seamless 360-degree support and one team accountable for your success.",
        },
    ];

    return(
        <section id="pillars" className="py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 0.5 }}
                >
                <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-700 tracking-tighter">
                    The BBC Advantage
                </h2>
                <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                    Our 5 Pillars are not just promises; they are our core business
                    model.
                </p>
                </motion.div>

                {/* --- NEW AWESOME LAYOUT: Interactive Card Grid --- */}
                <div className="mt-20">
                {/* Top row: 3 items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pillarData.slice(0, 3).map((pillar, index) => (
                    <motion.div
                        key={index}
                        className="p-8 rounded-2xl shadow-xl border border-violet-700 bg-purple-300"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.03, y: -5 }}
                    >
                        <h3 className="text-2xl font-bold text-white">
                        {pillar.title}
                        </h3>
                        <p className="mt-4 text-lg text-slate-800">
                        {pillar.description}
                        </p>
                    </motion.div>
                    ))}
                </div>

                {/* Bottom row: 2 items, centered */}
                <div className="mt-8 flex flex-col md:flex-row justify-center gap-8">
                    {pillarData.slice(3, 5).map((pillar, index) => (
                    <motion.div
                        key={index + 3}
                        className="p-8 rounded-2xl shadow-xl border border-violet-700 bg-purple-300 w-full md:w-1/2 lg:w-1/3" // Each card takes 1/3 width on large screens
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                        whileHover={{ scale: 1.03, y: -5 }}
                    >
                        <h3 className="text-2xl font-bold text-white">
                        {pillar.title}
                        </h3>
                        <p className="mt-4 text-lg text-slate-800">
                        {pillar.description}
                        </p>
                    </motion.div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    )
}

export default Header