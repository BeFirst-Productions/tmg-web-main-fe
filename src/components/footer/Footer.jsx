import { MapPin, Mail, Phone } from "lucide-react";
import { Container } from "../layout/Container";

export default function Footer() {
  const footerLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Blogs", href: "/blogs" },
    { name: "FAQs", href: "/faqs" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: "facebook", href: "https://www.facebook.com/profile.php?id=100089579001278" },
    { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/company/90876622/admin/dashboard/" },
    { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/tmg_global_/" },
    { name: "X (Twitter)", icon: "x", href: "https://x.com/tmggloball" },
    { name: "TikTok", icon: "tiktok", href: "https://www.tiktok.com/@tmg.global" },
  ];

  return (
    <div  className="relative">
      <div className="absolute left-1/2 -translate-x-1/2 -top-16 sm:-top-18 md:-top-20 lg:-top-24 xl:-top-26 z-30 pointer-events-none">
      <div className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-52 lg:h-52 bg-white rounded-full  flex items-center justify-center">
        <img
          src="/assets/logo/business-setup-in-dubai.png"
          alt="TMG Global Services LLC"
          className="w-40 h-40 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[219.62px] lg:h-[218.62px] object-cover  "
        />
      </div>
      </div>

      <footer className="relative bg-[linear-gradient(180deg,rgba(142,26,61,1)_0%,rgba(40,7,17,1)_100%)] bg-center text-white overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        {/* Left Decorative pattern */}
        <div className="absolute left-0 bottom-0 w-24 h-full md:w-32 lg:w-40">
          <img
            src="/assets/images/footer/left_element.png"
            alt="Decorative element"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Decorative pattern */}
        <div className="absolute right-0 top-0 w-48 h-full md:w-64 lg:w-80 hidden md:block">
          <img
            src="/assets/images/footer/right_element.png"
            alt="Decorative element"
            className="w-full h-full object-contain"
          />
        </div>

        <Container>
          <div className="relative z-10 container mx-auto px-4 py-8 md:py-10">
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center items-center gap-3 lg:gap-4 mb-6 md:mb-5">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm  lg:text-xl text-white hover:text-[#C79A59] transition-colors duration-300 font-semibold whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 text-center justify-center mb-3 text-base md:text-xl font-normal">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              <span>
                Al Twar Centre, Al Barsha Mall, Madina Mall, Al Garhoud
              </span>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 text-xs md:text-sm lg:text-xl px-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <a
                  href="mailto:info@tmgdubai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A961] transition-colors duration-300 text-base md:text-xl font-normal"
                >
                  info@tmgdubai.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <a
                  href="tel:+97145267777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A961] transition-colors duration-300 text-base md:text-xl font-normal"
                >
                  054 526 7777
                </a>
              </div>
            </div>

            <div className="flex justify-center items-center gap-3 md:gap-4 mb-6 md:mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C9A961] w-9 h-9 md:w-10 md:h-10 rounded-md flex items-center justify-center hover:bg-[#b89850] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                  aria-label={social.name}
                >
                  {social.icon === "facebook" && (
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  )}
                  {social.icon === "linkedin" && (
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                  {social.icon === "instagram" && (
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  )}
                  {social.icon === "x" && (
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )}
                  {social.icon === "tiktok" && (
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>

            <div className="border-t border-white/20 pt-4 md:pt-6">
              <p className="text-center text-xs md:text-sm text-white/90">
                © 2025 TMG Global. Published by{" "}
                <span
                  // href="https://nextmedia.ae/"
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className="hover:text-[#C9A961] transition-colors duration-300 cursor-pointer"
                >
                  Befirst Media Production.
                </span>
                {" "}
                All Rights Reserved.
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}