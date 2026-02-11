"use client";
import React, { useState } from "react";
import { Container } from "../layout/Container";
import { contactInfo } from "@/data/ContactData";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\+?\d{7,15}$/.test(formData.phone))
      newErrors.phone = "Enter a valid phone number.";

    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address.";

    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const whatsappNumber = "971545267777";

    const text = [
      "New Inquiry from Website",
      "",
      `Name: ${formData.name || "N/A"}`,
      `Phone: ${formData.phone || "N/A"}`,
      `Email: ${formData.email || "N/A"}`,
      `Message: ${formData.message || "N/A"}`,
    ].join("\n");

    const encodedText = encodeURIComponent(text);

    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedText}`;

    window.open(whatsappURL, "_blank");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative  h-auto  px-4 sm:px-6 lg:px-0 py-8 lg:py-16">
      <div className="absolute  left-0 bottom-0 w-80 h-80 opacity-100 z-0">
        <img
          src="/assets/images/about/left_element.png"
          alt="Professional woman with tablet"
          className="w-full h-full object-contain opacity-80"
        />
      </div>
      <Container>
        <div className="relative z-10  grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-11">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-[3rem] text-[#49051E] mb-6 font-bold">
                We’re Here to Help Your Business Grow
              </h2>
              <p className="text-lg text-gray-600">
                We’d love to hear from you. Contact us today and see how the{" "}
                <a href="https://tmgdubai.ae" className="text-decoration-none">
                  <b>best business setup consultants in Dubai</b>
                </a>{" "}
                can assist. Our team is always ready to support you with any
                questions or business setup needs.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.id}
                  href={item.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition transform hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-8 h-8 object-contain"
                    />
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Form */}
          <div
            id="contact-form"
            className="rounded-lg shadow-lg p-6 text-white"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(142,26,61,1) 0%, rgba(40,7,17,1) 100%)",
            }}
          >
            <h2 className="text-4xl text-center mb-6 font-bold">
              Get In Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border-b border-white text-white placeholder-white/60 focus:outline-none focus:border-pink-500"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border-b border-white text-white placeholder-white/60 focus:outline-none focus:border-pink-500"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border-b border-white text-white placeholder-white/60 focus:outline-none focus:border-pink-500"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border-b border-white text-white placeholder-white/60 focus:outline-none focus:border-pink-500"
                  placeholder="Enter your message..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-white text-[#8E1A3D] py-3 px-6 rounded-lg hover:bg-gray-100 transition font-medium"
              >
                Send on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
