function Footer() {
  return (
    <footer className="p-5 bg-gradient-to-r from-[#FF6F00] to-[#FF9100] text-white text-center">
      <p className="text-lg font-semibold">
        © {new Date().getFullYear()} Created by{" "}
        <span className="font-bold">Olga Minaieva</span>
      </p>
    </footer>
  );
}

export default Footer;
