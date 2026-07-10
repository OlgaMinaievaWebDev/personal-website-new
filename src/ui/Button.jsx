import PropTypes from "prop-types";

const baseStyles =
  "inline-block text-lg md:text-xl font-semibold rounded-lg px-4 py-2 md:px-6 md:py-3 cursor-pointer transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70";

const variants = {
  primary: "bg-brand-orange text-white shadow-md hover:bg-brand-orange-dark",
  secondary:
    "border-2 border-white text-white hover:bg-white hover:text-brand-orange-dark",
};

function Button({ children, href, download, variant = "primary" }) {
  const className = `${baseStyles} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} download={download} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  download: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
