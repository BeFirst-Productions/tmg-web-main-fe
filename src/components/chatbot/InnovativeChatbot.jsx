"use client";
import { useState, useEffect, useRef } from "react";
import {
  MessageSquare,
  Phone,
  Zap,
  Sparkles,
  Send,
  X,
  Check,
  ArrowRight,
  RotateCcw,
  AlertCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { SERVICE_FOLLOW_UPS, SERVICES } from "@/data/ChatBoatData";





// ============ VALIDATION FUNCTIONS ============
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone) => {
  const phoneRegex = /^\+?[0-9\s\-()]{7,15}$/;
  return phoneRegex.test(phone.trim());
};

const validateName = (name) => {
  return name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(name);
};

const validateFormData = (formData) => {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "Full name is required";
  } else if (!validateName(formData.name)) {
    errors.name = "Name must contain only letters and spaces";
  }

  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!validatePhone(formData.phone)) {
    errors.phone = "Invalid UAE phone format (e.g., +971501234567)";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(formData.email)) {
    errors.email = "Invalid email format";
  }

  return errors;
};

// ============ WHATSAPP MESSAGE GENERATOR ============
const generateWhatsAppMessage = (
  formData,
  selectedService,
  selectedFollowUp
) => {
  const timestamp = new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const message = `
*TMG Global Services - Lead Inquiry*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📅 *Submission Time:* ${timestamp}

*CLIENT INFORMATION*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
${formData.company ? `🏢 *Company:* ${formData.company}` : ""}

*SERVICE REQUIREMENTS*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 *Service:* ${selectedService}
❓ *Requirement:* ${selectedFollowUp}
💰 *Budget Range:* ${formData.budgetRange || "To be discussed"}

*MESSAGE*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hi TMG Team,

I am interested in exploring your *${selectedService}* service. Based on my requirements regarding *${selectedFollowUp}*, I believe your team can provide the best solutions for my business needs.

Please review my information above and connect me with a specialist who can provide a detailed proposal and comprehensive guidance.

I look forward to discussing this opportunity with you.

Best regards,
${formData.name}
  `.trim();

  return message;
};

const FloatingElements = () => {
  const floats = Array.from({ length: 5 }, (_, i) => i);
  return (
    <>
      {floats.map((i) => (
        <div
          key={i}
          className="absolute w-24 h-24 bg-[#D4A574]/5 rounded-full blur-2xl pointer-events-none"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            animation: `float${i} ${8 + i * 2}s ease-in-out infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes float0 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(40px, 30px); opacity: 0.6; }
        }
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(35px, 25px); opacity: 0.6; }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(30px, 35px); opacity: 0.6; }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(25px, 40px); opacity: 0.6; }
        }
        @keyframes float4 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(45px, 20px); opacity: 0.6; }
        }
      `}</style>
    </>
  );
};

const TypingIndicator = () => (
  <div className="flex gap-1.5 items-center">
    <div
      className="w-2 h-2 bg-[#8B2E3B] rounded-full animate-bounce"
      style={{ animationDelay: "0s" }}
    />
    <div
      className="w-2 h-2 bg-[#8B2E3B] rounded-full animate-bounce"
      style={{ animationDelay: "0.2s" }}
    />
    <div
      className="w-2 h-2 bg-[#8B2E3B] rounded-full animate-bounce"
      style={{ animationDelay: "0.4s" }}
    />
  </div>
);

const ValidationError = ({ message }) => (
  <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg text-xs">
    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
    <span>{message}</span>
  </div>
);

export default function HeroCardWidget({ onChatOpen = () => {} }) {
  const [isHovered, setIsHovered] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [chatStep, setChatStep] = useState("greeting");
  const [selectedService, setSelectedService] = useState(null);
  const [selectedFollowUp, setSelectedFollowUp] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    budgetRange: "",
  });
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const addMessage = (type, content) => {
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        type,
        content,
        timestamp: new Date(),
      },
    ]);
  };

  const handleChatOpen = () => {
    setChatOpen(true);
    setIsMinimized(false);
    setMessages([
      {
        id: 1,
        type: "bot",
        content:
          "Welcome to TMG! 👋 We're premium business consultants in Dubai. Which service interests you today?",
        timestamp: new Date(),
      },
    ]);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    addMessage("user", service);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage(
        "bot",
        `Perfect! ${service} is an excellent choice. 🎯\n\nLet me understand your requirements better.`
      );
    }, 800);
    setTimeout(() => {
      setChatStep("followUp");
    }, 900);
  };

  const handleFollowUpSelect = (question) => {
    setSelectedFollowUp(question);
    addMessage("user", question);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage(
        "bot",
        `Great! Thanks for sharing. 💡 Based on your interest in ${selectedService}, I can provide customized solutions. Let me gather a bit more information.`
      );
    }, 800);
    setTimeout(() => {
      setChatStep("budget");
    }, 900);
  };

  const handleBudgetSelect = (budget) => {
    setFormData((prev) => ({ ...prev, budgetRange: budget }));
    addMessage("user", budget);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage(
        "bot",
        `Excellent! 💰 I have a clear picture now. To provide you with the best proposal and match you with our expert consultant, I'll need your contact details.`
      );
    }, 800);
    setTimeout(() => {
      setChatStep("contact");
    }, 900);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFormSubmit = () => {
    const errors = validateFormData(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      addMessage(
        "bot",
        "⚠️ Please check the Form Details above and try again."
      );
      return;
    }

    setFormErrors({});
    addMessage(
      "user",
      `${formData.name} | ${formData.phone} | ${formData.email}${
        formData.company ? ` | ${formData.company}` : ""
      }`
    );
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      addMessage(
        "bot",
        `Perfect! 🎉 Thanks ${formData.name}! I've captured your information. Let me connect you with our senior consultant who specializes in ${selectedService}.`
      );
    }, 800);

    setTimeout(() => {
      setChatStep("submitted");
    }, 1500);
  };

  const handleWhatsAppRedirect = () => {
    const message = generateWhatsAppMessage(
      formData,
      selectedService,
      selectedFollowUp
    );

    const whatsappNumber = "971545267777";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleStartOver = () => {
    setChatStep("greeting");
    setSelectedService(null);
    setSelectedFollowUp(null);
    setIsTyping(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      company: "",
      budgetRange: "",
    });
    setFormErrors({});
    setMessages([
      {
        id: 1,
        type: "bot",
        content:
          "Welcome to TMG! 👋 We're premium business consultants in Dubai. Which service interests you today?",
        timestamp: new Date(),
      },
    ]);
  };

  const handleReset = () => {
    handleStartOver();
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      <style>{`
        @keyframes slideIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes slideInUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes float-button {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 5px rgba(212, 165, 116, 0.5); }
          50% { text-shadow: 0 0 15px rgba(212, 165, 116, 0.9); }
        }
        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(139, 46, 59, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(139, 46, 59, 0); }
          100% { box-shadow: 0 0 0 0 rgba(139, 46, 59, 0); }
        }
        @keyframes floating-motion {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(100%); opacity: 0; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .scrollbar-custom::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 10px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #D4A574 0%, #C49555 100%);
          border-radius: 10px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #E6B87F 0%, #D4A574 100%);
        }
        .pulse-ring {
          animation: pulse-ring 2s infinite;
        }
      `}</style>

      {/* Floating Card Widget */}
      {!chatOpen && !isMinimized && (
        <div
          className="fixed hidden lg:block bottom-6 right-2 z-40 cursor-pointer w-[220px] h-fit"
          style={{
            animation:
              "slideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), floating-motion 4s ease-in-out infinite 0.6s",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="relative w-full bg-gradient-to-b from-[rgba(152,32,68,1)] to-[rgba(100,14,41,1)] bg-center rounded-2xl shadow-2xl p-4 flex flex-col justify-between overflow-hidden border border-[#D4A574]/30"
            style={{
              transform: isHovered
                ? "scale(1.05) translateY(-5px)"
                : "scale(1)",
              transition: "all 0.3s ease",
            }}
          >
            <FloatingElements />

            <div
              className="absolute top-0 right-0 w-40 h-40 bg-[#D4A574]/5 rounded-full blur-3xl"
              style={{
                animation: "float0 10s ease-in-out infinite",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-40 h-40 bg-[#D4A574]/10 rounded-full blur-3xl"
              style={{
                animation: "float4 10s ease-in-out infinite",
                animationDelay: "1s",
              }}
            />

            <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
              <div className="space-y-2">
                <div
                  className="inline-flex items-center gap-2 bg-[#D4A574]/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#D4A574]/40"
                  style={{
                    animation: "bounce-subtle 2s ease-in-out infinite",
                  }}
                >
                  <div
                    className="w-2 h-3 bg-[#D4A574] rounded-full flex items-center justify-center"
                    style={{
                      animation: "spin 2s linear infinite",
                    }}
                  >
                    <Zap className="w-2.5 h-2.5 text-[#8B2E3B]" />
                  </div>
                  <span className="text-[8px] font-bold text-[#D4A574] uppercase tracking-widest">
                    Expert Consultation
                  </span>
                </div>
                <button
                  onClick={toggleMinimize}
                  className="inline-flex items-center gap-2 ml-2 bg-white/20 hover:bg-white/30 text-white p-1 rounded-lg transition-all"
                  title="Minimize"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>

                <div>
                  <h3 className="text-xl font-bold leading-tight text-white mb-1">
                    Let's Grow Your Business
                  </h3>
                  <p className="text-sm text-[#D4A574]/90 font-medium">
                    Chat with our experts
                  </p>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleChatOpen}
                  className="flex-1 bg-[#D4A574] hover:bg-[#E6B87F] text-[#8B2E3B] text-xs font-bold px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  style={{
                    transform: isHovered ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat Now</span>
                </button>

                <a
                  href="tel:0545267777"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="border-2 border-[#D4A574] hover:bg-[#D4A574]/10 text-[#D4A574] p-3 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl pulse-ring"
                    style={{
                      animation: "float-button 3s ease-in-out infinite",
                    }}
                  >
                    <Phone className="w-4 h-4" />
                  </button>
                </a>
              </div>

              {/* Minimize Button */}
            </div>

            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              style={{
                animation: isHovered ? "shimmer 0.8s ease-in-out" : "none",
              }}
            />
          </div>
        </div>
      )}

      {/* Minimized Card Widget - Mini Version */}
      {!chatOpen && isMinimized && (
        <div
          className="fixed hidden lg:flex bottom-6 right-2 z-40 cursor-pointer"
          style={{
            animation: "slideInRight 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <div className="flex items-center gap-3 bg-gradient-to-r from-[rgba(152,32,68,1)] to-[rgba(100,14,41,1)] px-4 py-3 rounded-2xl shadow-2xl border border-[#D4A574]/30 backdrop-blur-sm">
            {/* Message Text */}
            <div className="flex items-center gap-2">
              <div className="text-white">
                <p className="text-xs font-bold">Let's Talk</p>
                <p className="text-[10px] text-[#D4A574]/90">
                  Chat with experts
                </p>
              </div>
            </div>

            {/* Icon Button with Pulsing Animation */}
            <button
              onClick={handleChatOpen}
              className="relative"
              title="Expand"
            >
              <div
                className="w-10 h-10 bg-[#D4A574] hover:bg-[#E6B87F] rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
                style={{
                  animation: "pulse-dot 2s ease-in-out infinite",
                }}
              >
                <MessageSquare className="w-5 h-5 text-[#8B2E3B]" />
              </div>
            </button>

            {/* Expand Button */}
            <button
              onClick={toggleMinimize}
              className="bg-white/20 hover:bg-white/30 text-white p-1.5 rounded-lg transition-all"
              title="Expand"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {chatOpen && (
        <div
          className="fixed bottom-6 right-6 w-full max-w-md h-[520px] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl flex flex-col z-50 border border-white/20 overflow-hidden"
          style={{
            animation: "slideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-[#8B2E3B] to-[#A63D4A] p-5 overflow-hidden flex-shrink-0">
            <FloatingElements />
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 bg-[#D4A574]/30 rounded-full flex items-center justify-center"
                  style={{
                    animation: "spin 3s linear infinite",
                  }}
                >
                  <Sparkles
                    className="w-5 h-5 text-[#D4A574]"
                    style={{ animation: "glow 2s ease-in-out infinite" }}
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">
                    TMG Assistant
                  </h2>
                  <p className="text-xs text-[#D4A574]">Lead Specialist</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleReset}
                  className="text-white/80 hover:text-white p-2 rounded-xl transition-all hover:bg-white/10"
                  title="Reset Chat"
                  onMouseEnter={(e) => {
                    e.target.style.transform = "rotate(180deg) scale(1.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "rotate(0deg) scale(1)";
                  }}
                >
                  <RotateCcw size={20} />
                </button>
                <button
                  onClick={() => {
                    setChatOpen(false);
                    setIsMinimized(false);
                  }}
                  className="text-white/80 hover:text-white p-2 rounded-xl transition-all hover:bg-white/10"
                  title="Close Chat"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-gray-50/50 p-4 space-y-4 scrollbar-custom">
            {messages.map((msg, idx) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
                style={{
                  animation: `slideInUp 0.3s ease forwards`,
                  animationDelay: `${idx * 0.1}s`,
                }}
              >
                {msg.type === "bot" && (
                  <div className="w-8 h-8 rounded-full bg-[#8B2E3B] flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0 shadow-md">
                    T
                  </div>
                )}
                <div
                  className={`max-w-xs px-4 py-3 rounded-2xl ${
                    msg.type === "user"
                      ? "bg-[#8B2E3B] text-white rounded-br-none shadow-md hover:shadow-lg"
                      : "bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-md hover:shadow-lg"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {msg.content}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div
                className="flex justify-start"
                style={{
                  animation: `slideInUp 0.3s ease`,
                }}
              >
                <div className="w-8 h-8 rounded-full bg-[#8B2E3B] flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0 shadow-md">
                  T
                </div>
                <div className="bg-white text-gray-800 border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-md">
                  <TypingIndicator />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Content - Steps or Messages */}
          <div className="border-t border-gray-200 bg-white p-4 max-h-[180px] overflow-y-auto flex-shrink-0 scrollbar-custom">
            {chatStep === "greeting" && (
              <div
                className="space-y-3"
                style={{ animation: "slideInUp 0.3s ease" }}
              >
                <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                  📋 Select Service:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {SERVICES.map((service, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleServiceSelect(service)}
                      className="bg-gradient-to-br from-[#F5E6D3] to-[#F0DCC4] hover:from-[#D4A574] hover:to-[#C49555] text-[#8B2E3B] hover:text-white text-xs font-semibold px-3 py-2.5 rounded-lg border border-[#D4A574]/40 transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
                      style={{
                        transform: "translateY(0)",
                        transition:
                          "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform =
                          "scale(1.08) translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "translateY(0)";
                      }}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {chatStep === "followUp" && (
              <div
                className="space-y-2"
                style={{ animation: "slideInUp 0.3s ease" }}
              >
                <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">
                  ❓ Tell Us More:
                </p>
                <div className="space-y-2">
                  {SERVICE_FOLLOW_UPS[selectedService]?.map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleFollowUpSelect(question)}
                      className="w-full text-left bg-gradient-to-r from-[#F5E6D3] to-[#F0DCC4] hover:from-[#D4A574] hover:to-[#C49555] text-[#8B2E3B] hover:text-white text-xs font-semibold px-3 py-2.5 rounded-lg border border-[#D4A574]/40 transition-all duration-300 flex items-center justify-between group shadow-sm hover:shadow-md active:scale-95"
                      onMouseEnter={(e) => {
                        e.target.style.transform =
                          "scale(1.02) translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                      }}
                    >
                      <span>{question}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {chatStep === "budget" && (
              <div
                className="space-y-2"
                style={{ animation: "slideInUp 0.3s ease" }}
              >
                <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">
                  💰 Budget Range:
                </p>
                <div className="space-y-2">
                  {[
                    "Below AED 5,000",
                    "AED 5,000 - 20,000",
                    "AED 20,000 - 50,000",
                    "Above AED 50,000",
                  ].map((budget, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleBudgetSelect(budget)}
                      className="w-full text-left bg-gradient-to-r from-[#F5E6D3] to-[#F0DCC4] hover:from-[#D4A574] hover:to-[#C49555] text-[#8B2E3B] hover:text-white text-xs font-semibold px-3 py-2.5 rounded-lg border border-[#D4A574]/40 transition-all duration-300 flex items-center justify-between group shadow-sm hover:shadow-md active:scale-95"
                      onMouseEnter={(e) => {
                        e.target.style.transform =
                          "scale(1.02) translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                      }}
                    >
                      <span>{budget}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {chatStep === "contact" && (
              <div
                className="space-y-2"
                style={{ animation: "slideInUp 0.3s ease" }}
              >
                <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">
                  👤 Your Details:
                </p>

                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg text-xs focus:outline-none focus:ring-2 transition-all ${
                      formErrors.name
                        ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-200"
                        : "border-[#D4A574]/30 focus:border-[#D4A574] focus:bg-[#FFF9F0] focus:ring-[#D4A574]/20"
                    }`}
                  />
                  {formErrors.name && (
                    <ValidationError message={formErrors.name} />
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone (+971501234567) *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg text-xs focus:outline-none focus:ring-2 transition-all ${
                      formErrors.phone
                        ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-200"
                        : "border-[#D4A574]/30 focus:border-[#D4A574] focus:bg-[#FFF9F0] focus:ring-[#D4A574]/20"
                    }`}
                  />
                  {formErrors.phone && (
                    <ValidationError message={formErrors.phone} />
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg text-xs focus:outline-none focus:ring-2 transition-all ${
                      formErrors.email
                        ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-200"
                        : "border-[#D4A574]/30 focus:border-[#D4A574] focus:bg-[#FFF9F0] focus:ring-[#D4A574]/20"
                    }`}
                  />
                  {formErrors.email && (
                    <ValidationError message={formErrors.email} />
                  )}
                </div>

                {/* Company Field (Optional) */}
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company (Optional)"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-[#D4A574]/30 rounded-lg text-xs focus:outline-none focus:border-[#D4A574] focus:bg-[#FFF9F0] transition-all focus:ring-2 focus:ring-[#D4A574]/20"
                  />
                </div>

                <button
                  onClick={handleFormSubmit}
                  className="w-full bg-gradient-to-r from-[#D4A574] to-[#C49555] hover:from-[#E6B87F] hover:to-[#D4A574] text-[#8B2E3B] font-bold py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-xs active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  Continue
                </button>
              </div>
            )}

            {chatStep === "submitted" && (
              <div
                className="flex flex-col items-center justify-center py-6 space-y-3"
                style={{ animation: "slideInUp 0.3s ease" }}
              >
                <div
                  className="w-14 h-14 bg-[#4ADE80] rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    animation: "pulse-ring 2s ease-in-out infinite",
                  }}
                >
                  <Check className="w-7 h-7 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-600 mb-3">
                    Your consultation continues on WhatsApp — tap below to
                    start.
                  </p>
                </div>
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full px-4 py-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 text-xs shadow-md hover:shadow-lg active:scale-95"
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Continue on WhatsApp
                </button>
                <button
                  onClick={handleStartOver}
                  className="px-4 py-2 border-2 border-[#D4A574] text-[#D4A574] font-semibold rounded-lg hover:bg-[#D4A574]/10 transition-all text-xs active:scale-95"
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  Explore Other Services
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
