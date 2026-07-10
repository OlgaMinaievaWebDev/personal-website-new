function Footer() {
  return (
    <footer className="p-5 bg-brand-charcoal text-white text-center">
      <p className="text-lg font-light">
        © {new Date().getFullYear()} Created by{" "}
        <span className="font-semibold">Olga Minaieva</span>
      </p>
    </footer>
  );
}

export default Footer;
