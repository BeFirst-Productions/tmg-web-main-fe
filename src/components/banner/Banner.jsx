import React from "react";
import Link from "next/link";
import { Container } from "../layout/Container";

const BannerSection = ({
  title = "Page Title",
  breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
  ],
  backgroundImage = "/assets/images/banner/tmg-global-banner.png",
}) => {
  return (
    <section
      className="relative h-80 md:h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 text-center text-white">
        <Container>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">{title}</h1>

          <nav className="flex flex-wrap items-center justify-center space-x-2 text-xs md:text-lg font-semibold">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && <span className="mx-2">/</span>}

                {/* Last item */}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-gray-300 cursor-default">
                    {crumb.name}
                  </span>
                ) : (
                  /* Clickable breadcrumb links */
                  <Link
                    href={crumb.path}
                    className="hover:text-gray-300 transition-colors duration-200"
                  >
                    {crumb.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </Container>
      </div>
    </section>
  );
};

export default BannerSection;
