"use client"
import React from "react";
import { motion } from 'framer-motion';

function Trusted(){
    return(
        <section className="py-16 sm:py-24 ">
          <motion.div
            className="max-w-7xl mx-auto px-6 lg:px-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-stone-700">
              Empowering Businesses Across Bengal
            </h2>
            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
              {[
                'ClientLogo1',
                'ClientLogo2',
                'ClientLogo3',
                'ClientLogo4',
                'ClientLogo5',
                'ClientLogo6',
              ].map((logo) => (
                <div
                  key={logo}
                  className="flex justify-center items-center"
                >
                  <p className="text-gray-500 text-sm">{logo}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
    )
}

export default Trusted