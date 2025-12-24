"use client";

import { useState } from "react";
import AppointmentModal from "./AppointmentModal";

interface AppointmentButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AppointmentButton({ className, children }: AppointmentButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={className}
      >
        {children || "Book Appointment"}
      </button>
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}


