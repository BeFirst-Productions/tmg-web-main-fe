'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MainButton from "../button/main-button";
import { Container } from "../layout/Container";

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center py-4">
      <Container>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            w-full 
            max-w-[1080px] 
            h-auto lg:h-[481px]
            rounded-2xl 
            bg-gradient-to-br from-[#9c0032] to-black 
            p-8 lg:p-12 
            relative overflow-hidden shadow-xl
            flex flex-col
          "
        >
    <div className="absolute right-0 bottom-0 w-24 h-full md:w-32 lg:w-40">
          <img
            src="/assets/images/footer/left_element.png"
            alt="Decorative element"
            className="w-full h-full object-contain"
          />
        </div>

          {/* LEFT CONTENT */}
          <div className="relative z-20 text-white w-full lg:w-[427px] flex flex-col">

            <h1
              className="
                font-bold 
                leading-[52px] 
                text-[32px] md:text-[40px] lg:text-[52px]
              "
            >
              Oops! Page Not Found!
            </h1>

            <p className="mt-4 text-[16px] md:text-[20px] lg:text-[24px] opacity-90 leading-relaxed">
              We’re sorry but we can’t seem to find the page you requested. This
              might be because you have typed the web address incorrectly.
            </p>

            {/* IMAGE FOR SMALL SCREENS (PLACED BETWEEN TEXT & BUTTON) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="
                block lg:hidden
                mt-8 mb-6 
                mx-auto
                w-[180px] md:w-[240px]
                h-auto
              "
            >
              <Image
                src="/assets/images/errors/404-eye.png"
                alt="404"
                width={292}
                height={292}
                className="w-full h-auto object-contain"
              />
            </motion.div>

            {/* BUTTON */}
            <div className="mt-4 lg:mt-10">
              <MainButton text="Back to Home" />
            </div>
          </div>

          {/* 404 IMAGE — DESKTOP RIGHT BOTTOM ALIGN */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              hidden lg:block
              w-[292px]
              h-auto 
              absolute 
              bottom-[48px] 
              right-[48px]
              z-20
            "
          >
            <Image
              src="/assets/images/errors/404-eye.png"
              alt="404"
              width={292}
              height={292}
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Background 5 Shape */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.12 }}
            transition={{ duration: 1 }}
            className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-end pointer-events-none"
          >
            <div
              className="text-[200px] md:text-[260px] font-bold text-transparent tracking-tight select-none"
              style={{ WebkitTextStroke: "3px #ff4274" }}
            >
              5
            </div>
          </motion.div>

        </motion.div>
      </Container>
    </div>
  );
}
