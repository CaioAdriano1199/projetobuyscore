"use client";

export default function Button({
  children,
  type = "button",
  onClick,
  variant = "primary",
  disabled = false,
  loading = false,
  className = "",
}) {
  const baseStyles =
    "px-4 py-2 rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

const variants = {
  primary:
    "bg-[rgb(0,65,100)] text-[rgb(227,227,227)] hover:bg-[rgb(0,55,85)] focus:ring-blue-500",
  secondary:
    "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
  outline:
    "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
};


  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${
        disabled || loading ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {loading ? "Carregando..." : children}
    </button>
  );
}
