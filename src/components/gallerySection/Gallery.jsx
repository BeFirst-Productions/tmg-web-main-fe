import React from 'react'
import CircularGallery from './CircularGallery'
import { Container } from '../layout/Container'

const Gallery = () => {
  return (
    <section className="w-full py-8 px-4 md:px-8">
        {/* Heading and Description */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl text-[#49051E] lg:text-[3rem] text-maroon-900 mb-6 lg:mb-8 leading-tight font-bold">Gallery</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Explore our curated collection of visuals that capture creativity, color, and emotion in every frame.
          </p>
        </div>

        {/* Circular Gallery Section */}
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery
            bend={0}
            textColor="#49051E"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
    </section>
  )
}

export default Gallery
