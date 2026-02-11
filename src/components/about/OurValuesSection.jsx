"use client";

import { Container } from "../layout/Container";

const OurValuesSection = () => {
  const values = [
    {
      title: "Integrity",
      description:
        "We believe honesty and transparency are the foundation of long-term success. Every client interaction is guided by fairness, accountability, and trust.",
    },
    {
      title: "Excellence",
      description:
        "We strive for the highest quality in all our services  from document clearing to corporate consulting ensuring we exceed expectations.",
    },
    {
      title: "Innovation",
      description:
        "We adopt the latest technologies and strategies to provide efficient, future-ready business solutions in a dynamic UAE environment. ",
    },
    {
      title: "Responsibility",
      description:
        "We take full ownership of our commitments, ensuring accuracy, reliability, and excellence in every project we handle.",
    },
  ];

  return (
    <section className=" pt-16 lg:pt-24 pb-20 md:pb-36 bg-gray-50 relative overflow-visible">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-[3rem] text-[#49051E] mb-6 lg:mb-8 leading-tight font-bold">
            Our Values
          </h2>
          <div className="w-20 h-1 bg-[#C79A59] mx-auto mb-6"></div>
          <p className="text-gray-600 text-[0.938rem] md:text-lg font-normal leading-relaxed">
            These guiding principles define our culture and drive our actions —
            shaping how we work, serve, and grow together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-visible"
            >
              {/* Animated Corner Lines */}
              <div className="corner-anim absolute -top-6 -left-6 w-40 h-40 pointer-events-none">
                <div className="horizontal-line"></div>
                <div className="vertical-line"></div>
                <div className="horizontal-circle"></div>
                <div className="vertical-circle"></div>
              </div>

              <h3 className="text-xl font-bold text-[#49051E] mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurValuesSection;
