"use client";

import React, { useState } from "react";
import SmallBanner from "./SmallBanner";
import ConsultationModal from "./ConsultationModal";


export default function ServiceClientModalManager({  }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* SmallBanner calls onOpenModal when button clicked */}
      <SmallBanner onOpenModal={() => setIsOpen(true)} />

      {/* ConsultationModal receives state & setter */}
      <ConsultationModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
