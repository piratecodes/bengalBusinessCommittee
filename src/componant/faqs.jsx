"use client"
import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { motion } from 'framer-motion';


function FAQ(){

    const faqs = [
        {
          question: "What makes BBC different from a typical agency?",
          answer:
            "We're not just marketers; we're business developers and tech partners. We don't just run campaigns; we build your digital infrastructure (apps, funnels, websites) and deploy proven growth strategies. Plus, our remote-first model saves you 50% in costs, guaranteed.",
        },
        {
          question: "Who do you primarily work with?",
          answer:
            "Our mission is to empower West Bengal's business owners. We work with everyone from ambitious startups to established local brands looking to scale, implement new tech, and dominate their market.",
        },
        {
          question: "What does the '99-Day Growth Plan' actually involve?",
          answer:
            "It's our 4-phase framework to take you from 'undiscovered' to 'unstoppable.' We cover everything: **Build** (strategy & setup), **Launch** (campaign deployment), **Scale** (optimizing what works), and **Dominate** (achieving market leadership). It's a complete, end-to-end growth sprint.",
        },
        {
          question: "I already have a team. Can you still help?",
          answer:
            "Absolutely. We're built to complement in-house teams. We can provide the specialized tech (R&D, app development) or marketing (advanced funnels, SEO) that your team needs to excel, reducing their workload and improving efficiency.",
        },
    ];
    

    return(
        <section id="faq" className="py-24 sm:py-32">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 0.5 }}
                >
                <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-700 tracking-tighter">
                    Frequently Asked Questions
                </h2>
                <p className="mt-4 text-lg text-gray-400">
                    Have questions? We've got answers.
                </p>
                </motion.div>

                <div className="mt-16 space-y-6">
                {faqs.map((faq, i) => (
                    <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                    <Disclosure
                        as="div"
                        className="bg-purple-300 border border-indigo-700 rounded-2xl"
                    >
                        {({ open }) => (
                        <>
                            <DisclosureButton className="flex justify-between items-center w-full px-6 py-5 text-left">
                            <span className="text-lg font-semibold text-slate-700">
                                {faq.question}
                            </span>
                            <motion.svg
                                className="w-6 h-6 text-purple-400"
                                animate={{ rotate: open ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                                />
                            </motion.svg>
                            </DisclosureButton>
                            <DisclosurePanel
                            as={motion.div}
                            initial={false}
                            animate={{
                                height: open ? 'auto' : 0,
                                opacity: open ? 1 : 0,
                            }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="overflow-hidden"
                            >
                            <div className="px-6 pb-5 text-base text-stone-900">
                                {faq.answer}
                            </div>
                            </DisclosurePanel>
                        </>
                        )}
                    </Disclosure>
                    </motion.div>
                ))}
                </div>
            </div>
        </section>

    )
}

export default FAQ