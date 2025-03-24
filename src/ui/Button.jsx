function Button({ children }) {
  return (
    <button
      className={`text-lg md:text-xl font-semibold rounded-md px-4 py-2 md:px-6 md:py-3 mt-8 cursor-pointer transition-all duration-300 ease-in-out shadow-md focus:outline-none focus:ring-4 focus:ring-[#FF6F00] focus:ring-opacity-50 bg-[#FF6F00] text-white hover:bg-[#FF9100]`}
    >
      {children}
    </button>
  );
}
export default Button