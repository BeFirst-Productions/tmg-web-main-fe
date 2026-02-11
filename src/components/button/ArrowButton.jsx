import React from "react";

const ArrowButton = ({
  children,
  variant = "primary",
  icon: Icon,
  ...props
}) => {

  const variants = {
    primary:
      "bg-[#5c1a2e] hover:bg-[#7a2240] text-white shadow-lg hover:shadow-xl",
    secondary:
      "bg-[#9d3b5b] hover:bg-[#b4476a] text-white shadow-lg hover:shadow-xl",

  };

  const baseClasses =
    "px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300";

  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
};

export default ArrowButton;
