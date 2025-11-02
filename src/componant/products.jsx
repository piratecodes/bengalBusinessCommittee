"use client"
import React from "react";
import { motion } from 'framer-motion';


function Products(){
    return(
        <section id="products" className="py-16 sm:py-24" >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-700 tracking-tighter">
                Our Digital Toolkits to Excel Your Skills
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Gain access to the frameworks we use. These are the
                blueprints for scalable growth.
              </p>
            </motion.div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'The 99-Day Growth Blueprint',
                  desc: 'The complete step-by-step playbook to scale without guesswork.',
                },
                {
                  title: 'Funnels That Replace Teams',
                  desc: 'Automate your lead generation and conversion without hiring a full team.',
                },
                {
                  title: 'Bootstrapped Scaling (E-Book)',
                  desc: 'Our guide to spending less and excelling more with lean strategies.',
                },
              ].map((product, i) => (
                <motion.div
                  key={product.title}
                  className="bg-purple-300 p-8 rounded-2xl shadow-lg border border-gray-700"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <h3 className="text-2xl font-bold text-stone-800">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-lg text-slate-800">
                    {product.desc}
                  </p>
                  <a
                    href="#"
                    className="mt-6 inline-flex items-center text-purple-400 font-semibold hover:text-purple-300"
                  >
                    Learn More &rarr;
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
    )
}

export default Products