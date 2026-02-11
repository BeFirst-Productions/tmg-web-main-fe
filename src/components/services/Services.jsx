"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Container } from "../layout/Container";
import ScheduleMeeting from "../common/ScheduleMeeting";
import { ScheduleModal } from "../meetingSchedule/ScheduleModal"; 
import { allServices } from "@/data/ServiceDetails";

const Services = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); 

  const servicesPerPage = 8;

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = allServices.slice(
    indexOfFirstService,
    indexOfLastService
  );
  const totalPages = Math.ceil(allServices.length / servicesPerPage);
  const sidebarServices = allServices.filter(
    (service) =>
      !currentServices.some(
        (currentService) => currentService.id === service.id
      )
  );
  const containerRef = useRef(null);
  const scrollSpeed = 0.5; 

  const handleServiceClick = (slug) => {
    router.push(`/service/${slug}`);
  };

  // Handle "View Details" click in sidebar
  const handleViewDetails = (slug, e) => {
    e.stopPropagation(); 
    router.push(`/service/${slug}`);
  };

  // Handle schedule modal open
  const handleScheduleModalOpen = (date) => {
    setSelectedDate(date);
    setShowScheduleModal(true);
  };

  // Handle schedule modal close
  const handleScheduleModalClose = () => {
    setShowScheduleModal(false);
    setSelectedDate(null);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollPos = 0;
    let requestId;

    const step = () => {
      // Only auto-scroll if user isn't interacting
      if (!container.matches(":hover") && !container.matches(":active")) {
        scrollPos += scrollSpeed;
        if (scrollPos >= container.scrollHeight - container.clientHeight) {
          scrollPos = 0;
        }
        container.scrollTop = scrollPos;
      }
      requestId = requestAnimationFrame(step);
    };

    requestId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <>
      <div className="lg:py-16 py-8">
        <Container>
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-[3rem] text-[#49051E] mb-6 lg:mb-8 leading-tight font-bold">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl">
                We offer a comprehensive range of digital services to help your
                business grow and succeed in the modern landscape. From
                development to marketing, we've got you covered.
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8">
              <motion.div
                className="lg:w-3/4"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {currentServices.map((service, i) => (
                    <motion.div
                      key={service.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 border-animated relative cursor-pointer hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.2 + i * 0.05,
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                      onClick={() => handleServiceClick(service.slug)}
                    >
                      <div className="h-48 bg-gradient-to-br from-[#8E1A3D] to-[#B23A5E] flex items-center justify-center">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-black mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center space-x-2 pt-8">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded-lg border-2 font-semibold ${
                      currentPage === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                        : "bg-white text-[#8E1A3D] hover:bg-[#8E1A3D] hover:text-white border-[#8E1A3D]"
                    } transition-colors duration-200`}
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-1 rounded-full border-2 font-semibold ${
                          currentPage === page
                            ? "bg-[#8E1A3D] text-white border-[#8E1A3D]"
                            : "bg-white text-[#8E1A3D] hover:bg-[#8E1A3D] hover:text-white border-[#8E1A3D]"
                        } transition-colors duration-200`}
                      >
                        {page}
                      </button>
                    )
                  )}

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded-lg border-2 font-semibold ${
                      currentPage === totalPages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                        : "bg-white text-[#8E1A3D] hover:bg-[#8E1A3D] hover:text-white border-[#8E1A3D]"
                    } transition-colors duration-200`}
                  >
                    Next
                  </button>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                className="lg:w-1/4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
              >
                <div className="space-y-6 sticky top-6">
                  {/* Other Services */}
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                      Other Services
                    </h2>

                    <div
                      ref={containerRef}
                      className="max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-stone-50 scrollbar-track-white hover:scrollbar-thumb-stone-100"
                    >
                      <div className="space-y-4">
                        {sidebarServices.map((service) => (
                          <div
                            key={service.id}
                            className="bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition-colors duration-200 border border-gray-200 hover:border-[#b9436e] cursor-pointer group"
                            onClick={() => handleServiceClick(service.slug)}
                          >
                            <div className="h-32 bg-white rounded-lg flex items-center justify-center mb-3">
                              <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                              {service.title}
                            </h3>
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {service.description}
                            </p>
                            <button
                              className="mt-3 text-sm text-[#49051E] hover:text-[#280110] font-medium transition-colors duration-200"
                              onClick={(e) =>
                                handleViewDetails(service.slug, e)
                              }
                            >
                              View Details →
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Schedule Meeting */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
                    className=""
                  >
                    <ScheduleMeeting
                      onScheduleModalOpen={handleScheduleModalOpen}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>

      {/* Schedule Modal - Render at top level */}
      <AnimatePresence>
        {showScheduleModal && selectedDate && (
          <ScheduleModal
            selectedDate={selectedDate}
            onClose={handleScheduleModalClose}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Services;
