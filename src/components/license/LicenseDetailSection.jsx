"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function LicenseDetailSection({ license }) {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-start mb-6 lg:mb-16"
        >
          <motion.h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#49051E] mb-6">
            {license.header1} <br className="hidden lg:block " />
            {license.header2}
          </motion.h2>
        </motion.div>

        {/* First Section: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="rounded-lg overflow-hidden ">
              <Image
                src={license.imageUrl}
                alt={license.title}
                width={412}
                height={271}
                className="object-cover "
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 lg:order-2"
          >
            <p className="text-black text-base sm:text-lg xl:text-2xl  leading-relaxed">
              {license.description}
            </p>
          </motion.div>
        </div>

        {/* Full Width Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          //   className="bg-gray-50 rounded-2xl p-8 md:p-12 lg:p-16 shadow-sm"
        >
          <div className="w-full">
            <div className="prose prose-lg max-w-none">
              <p className="text-black text-base sm:text-lg xl:text-2xl leading-relaxed mb-6">
                {license.bottomDescription}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
