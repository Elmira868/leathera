
const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`rounded-md bg-primary px-5 py-2.5 font-roboto-Medium text-sm text-white transition hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

