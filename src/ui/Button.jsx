function Button({ children, color = "primary" }) {
  const colorClasses =
    color === "primary"
      ? "bg-[#FF6F00] text-white hover:bg-[#FF9100]"
      : "bg-white text-[#FF6F00] hover:bg-[#FF6F00] hover:text-white";

  return (
    <button
      className={`text-xl font-semibold rounded-md px-6 py-3 mt-8 cursor-pointer transition-all duration-300 ease-in-out shadow-md focus:outline-none focus:ring-4 focus:ring-[#FF6F00] focus:ring-opacity-50 ${colorClasses}`}
    >
      {children}
    </button>
  );
}

export default Button;
