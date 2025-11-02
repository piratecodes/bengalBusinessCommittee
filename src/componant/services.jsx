"use client"
import React from "react";
import { motion } from 'framer-motion';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

function Services(){

    const serviceData = {
        it: [
          'Website & App Development',
          'E-commerce & Shopify Solutions',
          'Digital Property & Funnel Setup',
          'Data Analytics & Reporting',
          'PWA & Mobile App Development',
          'UI/UX & Prototyping',
        ],
        marketing: [
          'Strategic Business Consulting',
          'SEO (Search Engine Optimization)',
          'Performance Marketing (Google/Meta)',
          'Content Creation & Copywriting',
          'Influencer Marketing',
          'Brand Identity & Design',
        ],
      };
      const categories = {
        'IT & Technical': serviceData.it,
        'Marketing & Growth': serviceData.marketing,
      };
      
      function ServiceTabs() {
        const categories = {
          'IT & Technical': serviceData.it,
          'Marketing & Growth': serviceData.marketing,
        };
      
        return (
          <div className="w-full max-w-3xl mx-auto mt-16 px-2 sm:px-0">
            <TabGroup>
              <TabList className="flex justify-center space-x-4 border-b border-gray-700">
                {Object.keys(categories).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      `px-6 py-3 text-lg font-semibold transition-all outline-none ${
                        selected
                          ? 'text-black border-b-2 border-purple-500'
                          : 'text-gray-500 hover:text-gray-300'
                      }`
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </TabList>
              <TabPanels className="mt-12">
                {Object.values(categories).map((services, idx) => (
                  <TabPanel
                    key={idx}
                    as={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6"
                  >
                    {services.map((service) => (
                      <div key={service} className="flex items-center gap-3">
                        <span className="text-purple-500">&#10003;</span>
                        <span className="text-base font-medium">{service}</span>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </div>
        );
      }
      

    return(
        <section id="services" className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-700 tracking-tighter">
                A 360° Solution, Tailored for You
              </h2>
              <p className="mt-4 text-lg text-stone-400">
                From backend code to your brand's voice, we handle it
                all. No gaps, no excuses. Just a single, unified team
                driving your growth.
              </p>
            </motion.div>

            {/* Interactive Tab Component */}
            <div className="w-full max-w-3xl mx-auto mt-16 px-2 sm:px-0">
                <TabGroup>
                    <TabList className="flex justify-center space-x-4 border-b border-gray-700">
                        {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                            `px-6 py-3 text-lg font-semibold transition-all outline-none ${
                                selected
                                ? 'text-black border-b-2 border-purple-500'
                                : 'text-gray-500 hover:text-gray-300'
                            }`
                            }
                        >
                            {category}
                        </Tab>
                        ))}
                    </TabList>
                    <TabPanels className="mt-12">
                        {Object.values(categories).map((services, idx) => (
                        <TabPanel
                            key={idx}
                            as={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6"
                        >
                            {services.map((service) => (
                            <div key={service} className="flex items-center gap-3">
                                <span className="text-purple-500">&#10003;</span>
                                <span className="text-base font-medium">{service}</span>
                            </div>
                            ))}
                        </TabPanel>
                        ))}
                    </TabPanels>
                </TabGroup>
            </div>
          </div>
        </section>

    )
}

export default Services