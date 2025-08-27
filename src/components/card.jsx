// src/components/ui/card.jsx
import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`rounded-2xl shadow-lg overflow-hidden border border-gray-700 ${className}`}
      {...props}   // ✅ Now style and other props work
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
