"use client";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-blue-700 rounded-md shadow-lg p-6 text-white ${className}`}
    >
      {children}
    </div>
  );
}
