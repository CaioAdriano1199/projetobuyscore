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
    "px-4 py-2  transition focus:outline-none focus:ring-2 focus:ring-offset-2";

const variants = {
  primary:
    "bg-[var(--azulescuro)] font-medium rounded-md text-[rgb(227,227,227)] hover:bg-[var(--azulclaro)] focus:ring-blue-500 mx-auto block",
  secondary:
    "bg-[var(--azulclaro)] text-2xl text-[var(--branco)] hover:bg-[var(--branco)] hover:text-[var(--azulclaro)] w-full",
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
