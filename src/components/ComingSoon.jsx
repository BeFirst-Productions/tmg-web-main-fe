'use client'
import React from 'react';
import { Sparkles, Star, Zap } from 'lucide-react';

export default function ComingSoon() {
  return (
    <div className="w-full py-16 sm:py-20 md:py-28 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-5 sm:left-10 md:left-20 opacity-20 animate-float">
          <Star className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
        </div>
        <div className="absolute top-1/4 right-5 sm:right-10 md:right-20 opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>
          <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
        </div>
        <div className="absolute bottom-1/4 left-10 sm:left-20 md:left-32 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
        </div>
      </div>

      <div className="text-center relative z-10 px-4">
        {/* Animated icon above text */}
        {/* <div className="mb-6 sm:mb-8 inline-flex animate-bounce-slow">
          <div className="p-3 sm:p-4 bg-gray-100 rounded-full">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700" />
          </div>
        </div> */}

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8">
          <span className="inline-block animate-fade-in-up">Coming</span>
          <span className="inline-block ml-3 sm:ml-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Soon</span>
        </h1>

        {/* Animated dots */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full animate-pulse-scale" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full animate-pulse-scale" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full animate-pulse-scale" style={{ animationDelay: '0.6s' }}></div>
        </div>

        {/* Decorative line */}
        <div className="h-1 w-20 mx-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full animate-slide"></div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-scale {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.6;
          }
        }

        @keyframes slide {
          0% {
            transform: scaleX(0);
          }
          50% {
            transform: scaleX(1);
          }
          100% {
            transform: scaleX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
          opacity: 0;
        }

        .animate-pulse-scale {
          animation: pulse-scale 1.5s ease-in-out infinite;
        }

        .animate-slide {
          animation: slide 2.5s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}